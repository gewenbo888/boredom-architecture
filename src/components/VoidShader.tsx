"use client";

/**
 * Dopamine-void shader. A dark fluid field with cold-blue + sickly-green
 * filaments that pulse slowly — evoking attention collapse / neural fatigue.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VoidShader({
  className = "",
  intensity = 1.0,
}: { className?: string; intensity?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = ref.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: false, alpha: true, powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const setSize = () => renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    setSize();
    mount.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      position: "absolute", inset: "0", width: "100%", height: "100%",
      pointerEvents: "none",
    });

    const uniforms = {
      u_time:    { value: 0 },
      u_res:     { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      u_mouse:   { value: new THREE.Vector2(0.5, 0.5) },
      u_scroll:  { value: 0 },
      u_intensity: { value: intensity },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */`
        precision highp float;
        varying vec2 vUv;
        uniform float u_time;
        uniform vec2  u_res;
        uniform vec2  u_mouse;
        uniform float u_scroll;
        uniform float u_intensity;

        float hash(vec2 p){
          p = fract(p*vec2(123.34,456.21));
          p += dot(p,p+45.32);
          return fract(p.x*p.y);
        }
        float noise(vec2 p){
          vec2 i=floor(p), f=fract(p);
          float a=hash(i), b=hash(i+vec2(1,0));
          float c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
          vec2 u=f*f*(3.-2.*f);
          return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
        }
        float fbm(vec2 p){
          float v=0., a=0.5;
          for(int i=0;i<6;i++){ v+=a*noise(p); p*=2.06; a*=0.5; }
          return v;
        }

        vec3 palette(float t){
          // dark void → cold blue → sickly green wisp → magenta hyperreal flare
          vec3 base   = vec3(0.008, 0.014, 0.025);
          vec3 blue   = vec3(0.42, 0.78, 0.95);   // signal
          vec3 green  = vec3(0.40, 0.95, 0.55);   // dopamine
          vec3 mag    = vec3(0.95, 0.40, 0.78);   // synthetic
          vec3 col = mix(base, blue, smoothstep(0.0, 0.7, t));
          col      = mix(col,  green, smoothstep(0.55, 0.78, t)*0.35);
          col     += mag * 0.06 * smoothstep(0.85, 0.95, t);
          return col;
        }

        void main(){
          vec2 uv = vUv;
          vec2 p = (uv - 0.5);
          p.x *= u_res.x / u_res.y;
          float t = u_time * 0.06;

          vec2 m = (u_mouse - 0.5);
          m.x *= u_res.x / u_res.y;
          float dM = length(p - m);
          p += (m - p) * 0.05 * smoothstep(0.7, 0.0, dM);

          p *= 1.55;
          p += vec2(0.0, u_scroll * 0.4);

          // domain warp
          vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2,1.3) - t));
          vec2 r = vec2(fbm(p + 4.0*q + t*0.7), fbm(p + 4.0*q + vec2(8.3,2.8) - t*0.5));
          float f = fbm(p + 4.0*r);

          vec3 col = palette(f);

          // soft vignette
          float v = smoothstep(1.05, 0.25, length((uv-0.5)*vec2(1.6,1.0)));
          col *= mix(0.45, 1.0, v);

          // halo glow near center
          float halo = smoothstep(0.55, 0.0, length(uv - vec2(0.5, 0.42)));
          col += vec3(0.10, 0.20, 0.32) * halo * 0.6 * u_intensity;

          // subtle scanline
          float sl = sin(uv.y * u_res.y * 1.5) * 0.5 + 0.5;
          col *= mix(0.96, 1.0, sl);

          // grain
          float g = hash(uv*u_res + t*60.0);
          col += (g - 0.5) * 0.02;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
    scene.add(mesh);

    let raf = 0;
    const start = performance.now();
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      uniforms.u_time.value = t;
      uniforms.u_scroll.value =
        typeof window !== "undefined"
          ? window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
          : 0;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onMove = (e: MouseEvent) =>
      uniforms.u_mouse.value.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
    const onResize = () => {
      setSize();
      uniforms.u_res.value.set(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      mat.dispose();
      mesh.geometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [intensity]);

  return <div ref={ref} className={`absolute inset-0 ${className}`} aria-hidden />;
}

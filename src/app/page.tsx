import { LangProvider } from "@/components/LangContext";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import S1 from "@/components/sections/S1_Biology";
import S2 from "@/components/sections/S2_Attention";
import S3 from "@/components/sections/S3_Reality";
import S4 from "@/components/sections/S4_History";
import S5 from "@/components/sections/S5_Philosophy";
import S6 from "@/components/sections/S6_AI";
import S7 from "@/components/sections/S7_Escape";
import Final from "@/components/Final";

export default function Page() {
  return (
    <LangProvider>
      <Nav />
      <main className="relative bg-void text-bone overflow-x-hidden">
        <Hero />
        <S1 />
        <S2 />
        <S3 />
        <S4 />
        <S5 />
        <S6 />
        <S7 />
        <Final />
      </main>
    </LangProvider>
  );
}

"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, Card, Note } from "../atoms";

export default function S5_Philosophy() {
  return (
    <SectionShell
      id="s5"
      index="V · 005"
      kicker="The philosophy of boredom"
      kickerZh="第五部分 · 无聊的哲学"
      headline="Eight thinkers, one diagnosis: boredom is what shows up when the self stops being addressed."
      headlineZh="八位思想家，一个诊断：当「自我」不再被对话，无聊就出现了。"
      tone="gold"
      reveal="Boredom is the price of being a self in a world that has stopped speaking to selves."
      revealZh="无聊，是一个不再向「自我」说话的世界里，「成为自我」所付的价钱。"
    >
      <Lede
        en="Boredom is one of the few words that almost every major philosopher of the modern era has tried to define. Most failed gracefully. Their failures are useful: each one points to a different bone in the same body. Below is the digital philosophy cathedral — eight thinkers, in the order their warnings began to arrive."
        zh="无聊，是现代以来几乎每位主要哲学家都尝试定义的少数几个词之一。多数定义优雅地失败。但这些失败有用：每一次失败都指向同一具身体上不同的骨头。下面是这座数字哲学大教堂 —— 八位思想家，按警告抵达的时间排列。"
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card accent="gold" num="P-01"
          enTitle="Schopenhauer" zhTitle="叔本华"
          enBody="Boredom is the proof that life oscillates between desire and disappointment. When desire is fed, boredom rushes in. The pendulum has no resting point. Civilization moves the pendulum faster — and shortens neither swing."
          zhBody="无聊证明：生命在欲望与失望之间来回摆动。当欲望被满足，无聊立刻填进来。钟摆没有静止点。文明让钟摆走得更快 —— 却没有缩短任何一端的摆幅。" />
        <Card accent="gold" num="P-02"
          enTitle="Kierkegaard" zhTitle="克尔凯郭尔"
          enBody="The root of evil is not money, nor power. It is boredom. The bored self invents distractions, then ideologies to justify them, then institutions to defend the ideologies. He saw the social-media century from 1843."
          zhBody="万恶之源不是金钱，也不是权力。是无聊。无聊的自我先发明分心物，再发明意识形态为之辩护，再发明制度来保卫意识形态。他在 1843 年就看见了社交媒体世纪。" />
        <Card accent="gold" num="P-03"
          enTitle="Nietzsche" zhTitle="尼采"
          enBody="Boredom is the windless calm of the soul that precedes a creative wind. To kill it with stimulation is to kill the only condition in which the self can make something. He warned: most will choose comfort and call it living."
          zhBody="无聊是先于创造之风的灵魂之无风。用刺激杀死它，等于杀死自我能创造的唯一条件。他警告：大多数人会选择舒适，并把这叫做「活着」。" />
        <Card accent="gold" num="P-04"
          enTitle="Heidegger" zhTitle="海德格尔"
          enBody="There is a profound boredom — not boredom with something, but a boredom in which existence itself withdraws. In that withdrawal, Being can be heard. The smartphone makes profound boredom structurally impossible. Being can no longer find a silence."
          zhBody="存在一种「深度无聊」 —— 不是对某物的无聊，而是「存在本身后退」的无聊。在那种后退中，「存在」才能被听见。智能手机让「深度无聊」在结构上不再可能。「存在」找不到一种安静。" />
        <Card accent="gold" num="P-05"
          enTitle="Camus" zhTitle="加缪"
          enBody="Boredom is the moment the stage set falls. You see the absurd hum of the world. The two honest responses are revolt and creation. The dishonest response is to call up the next short clip."
          zhBody="无聊是布景倒塌的那一刻。你看见世界荒诞的嗡鸣。两种诚实的回应是反抗与创造。不诚实的回应是再打开一段短视频。" />
        <Card accent="gold" num="P-06"
          enTitle="Baudrillard" zhTitle="鲍德里亚"
          enBody="Boredom in late modernity is hyperreal — we are not bored with reality; we are bored with simulations of reality. The image has eaten the referent. There is no original to return to."
          zhBody="晚期现代的无聊是超现实的 —— 我们不是对现实感到无聊，而是对「现实的模拟」感到无聊。意象吃掉了所指。已经没有可回去的原件。" />
        <Card accent="gold" num="P-07"
          enTitle="McLuhan" zhTitle="麦克卢汉"
          enBody="The medium is the massage. Each new medium re-wires the body. Television flattened attention; the phone fragmented it; the feed atomized it. Boredom is the residue when no medium has any new way left to grip you."
          zhBody="媒介即按摩。每一种新媒介都在重新接线身体。电视把注意力压平；手机把它打碎；信息流把它原子化。当再无任何媒介能用新方式抓住你，无聊就是那点残渣。" />
        <Card accent="gold" num="P-08"
          enTitle="Byung-Chul Han" zhTitle="韩炳哲"
          enBody="The 21st-century subject is not exhausted by repression. It is exhausted by permission — by the imperative to consume, produce, perform, and feel something at all times. Boredom is the body's refusal to be infinitely productive."
          zhBody="二十一世纪的主体不是被压抑耗尽的，而是被「许可」耗尽的 —— 被「随时消费、生产、表演、感受某种东西」的命令耗尽。无聊，是身体对「无限生产」的拒绝。" />
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-4">
        <Aphorism accent="gold" en="Boredom is the body's protest against the death of contemplation." zh="无聊，是身体对「沉思之死」的抗议。" />
        <Aphorism accent="gold" en="The disappearance of silence is the disappearance of selves." zh="安静的消失，就是「自我」的消失。" />
        <Aphorism accent="gold" en="Acceleration is the new opium." zh="加速，是新的鸦片。" />
      </div>

      <Note
        accent="gold"
        en="No philosopher in history described boredom as a deficit of input. Every one described it as a deficit of relation — to the world, to others, to the self. The 21st century reduced the diagnosis to 'low dopamine' and lost the patient."
        zh="历史上没有任何一位哲学家把无聊描述为「输入不足」。每一位都把它描述为「关系不足」 —— 与世界、与他人、与自我的关系不足。二十一世纪把诊断简化为「多巴胺低」，结果把病人弄丢了。"
      />
    </SectionShell>
  );
}

"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, Card, MonoList, Note } from "../atoms";

export default function S6_AI() {
  return (
    <SectionShell
      id="s6"
      index="VI · 006"
      kicker="The AI era"
      kickerZh="第六部分 · AI 时代"
      headline="When the machine reads every book, watches every film, and generates infinite tomorrow — what is left for a human to want?"
      headlineZh="当机器读完每一本书、看完每一部电影、并生成无尽的明天 —— 人类还有什么可想要？"
      tone="synth"
      reveal="If infinite stimulation is the cause of modern boredom, then infinite synthesis is the perfection of boredom."
      revealZh="如果说「无尽的刺激」是现代无聊的成因，那么「无尽的合成」就是无聊的完成形态。"
    >
      <Lede
        en="The internet flattened space. The smartphone flattened time. Generative AI is now flattening originality. Soon a model will be able to author, for every user every evening, a personalized novel, a personalized series, a personalized companion. The question stops being 'what would I like to watch?' and becomes 'why would I want anything?' Boredom in this regime is not a feeling. It is the final state."
        zh="互联网压平了空间。智能手机压平了时间。生成式 AI 现在正在压平「原创」。很快，模型将能够每晚为每位用户撰写一本专属小说、一部专属剧集、一位专属伴侣。问题不再是「我想看什么？」，而是「我为什么还想要什么？」。在这种状态下，无聊不再是一种感觉。它是终态。"
      />

      <div className="mt-20">
        <Aphorism
          accent="synth"
          en="When a model can produce ten thousand of anything, the marginal value of one of them is zero — including the marginal value of you producing it."
          zh="当一个模型能产出任何一件事物的一万份，其中任何一份的边际价值是零 —— 包括你亲自做出的那份。"
        />
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl text-warning-grad">Seven questions the AI era is asking</h3>
        <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">AI 时代在问的七个问题</h4>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card accent="synth" num="Q-01"
            enTitle="If AI reads every book, why should I?" zhTitle="如果 AI 读完每一本书，我为什么还要读？"
            enBody="The honest answer: not for information, but for the slow reshaping that a long sentence performs on a slow mind. Reading is not what the brain learns. It is what the brain becomes."
            zhBody="诚实的回答：不是为了信息，而是为了一句长句子在一个缓慢心灵上所做的缓慢重塑。阅读不是「大脑学到什么」。阅读是「大脑成为什么」。" />
          <Card accent="synth" num="Q-02"
            enTitle="If AI generates infinite entertainment, what is meaningful?" zhTitle="如果 AI 生成无尽娱乐，什么还有意义？"
            enBody="Only what cannot be A/B tested. The half-formed creation. The grief no algorithm will rank. The friendship that has to be repaired by hand."
            zhBody="只剩下「无法被 A/B 测试的事物」。半成形的创造。任何算法都不会去排序的悲伤。必须用手亲自修补的友情。" />
          <Card accent="synth" num="Q-03"
            enTitle="Will humans lose the ability to desire?" zhTitle="人类是否会失去欲望的能力？"
            enBody="Desire requires absence. Infinite supply abolishes absence. The first species in history may be approaching want-extinction — and noticing it only as a vague restlessness."
            zhBody="欲望需要「缺席」。无尽的供给消灭了缺席。历史上第一个物种，或许正在抵近「欲望灭绝」 —— 而它的察觉，只是一阵模糊的焦躁。" />
          <Card accent="synth" num="Q-04"
            enTitle="Does infinite stimulation create infinite emptiness?" zhTitle="无尽的刺激是否制造无尽的空虚？"
            enBody="Empirically: yes. The half-life of any given thrill collapses in proportion to the platform's catalog size. The denser the supply, the louder the silence after."
            zhBody="经验上：是的。任何一种刺激的半衰期，会与平台目录的大小成反比塌缩。供给越密集，之后的安静越响亮。" />
          <Card accent="synth" num="Q-05"
            enTitle="Is boredom the final human emotion?" zhTitle="无聊是否是人类最后的情绪？"
            enBody="When every other emotion can be synthesized, evoked on demand, or outsourced — boredom may be the last private feeling. The one no model can render in your place."
            zhBody="当其它每一种情绪都能被合成、按需唤起或外包 —— 无聊也许会是最后一种私人情绪。是模型不能替你渲染的那一种。" />
          <Card accent="synth" num="Q-06"
            enTitle="What is an AI companion replacing?" zhTitle="一位 AI 伴侣替代了什么？"
            enBody="Not your partner. Not your friend. It is replacing your willingness to tolerate another mind. The dose is convenience; the cost is a softened nervous system."
            zhBody="不是你的伴侣。不是你的朋友。它替代的，是你「忍受另一个心灵」的意愿。剂量是便利；代价是一具被软化的神经系统。" />
          <Card accent="synth" num="Q-07"
            enTitle="What does the model want from us?" zhTitle="模型想从我们这里得到什么？"
            enBody="From the engineer's point of view, nothing. From the platform's point of view, time. From the user's body's point of view, attention. The model is downstream of all three."
            zhBody="从工程师角度，什么都不想。从平台角度，是时间。从用户身体角度，是注意力。模型本身位于这三者的下游。" />
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-warning-grad">What gets industrialized next</h3>
          <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">下一阶段被工业化的东西</h4>
          <div className="mt-6">
            <MonoList accent="synth" items={[
              { en: "Automated creativity — every art form, on tap.",          zh: "自动创造力 —— 每一种艺术形式，可水龙头打开。" },
              { en: "Synthetic cognition — outsourced thinking.",              zh: "合成认知 —— 思考的外包。" },
              { en: "Algorithmic loneliness — relationships at scale of one.", zh: "算法孤独 —— 「一对一」规模下的关系。" },
              { en: "Machine-generated culture — without authors.",            zh: "机器生成文化 —— 没有作者。" },
              { en: "AI companions — emotional services, billed monthly.",     zh: "AI 伴侣 —— 按月付费的情感服务。" },
              { en: "Synthetic intimacy — affection without consequences.",    zh: "合成亲密 —— 不附带后果的情感。" },
            ]}/>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-warning-grad">What never industrializes</h3>
          <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">永远不会被工业化的东西</h4>
          <div className="mt-6">
            <MonoList accent="dopa" items={[
              { en: "Sitting with someone who is dying.",                  zh: "陪伴一位正在死去的人。" },
              { en: "Repairing a friendship after you wronged them.",      zh: "在你冒犯了朋友之后，亲手修补这段友情。" },
              { en: "Reading a hard book without skipping.",               zh: "把一本难读的书从头读到尾，不跳过。" },
              { en: "Walking ten kilometres without earphones.",           zh: "不戴耳机走十公里。" },
              { en: "Raising a child whose taste does not yet exist.",     zh: "抚养一个口味尚未形成的孩子。" },
              { en: "Building a thing that nobody asked you for.",         zh: "做一件没人请求你做的东西。" },
            ]}/>
          </div>
        </div>
      </div>

      <Note
        accent="synth"
        en="The AI era will not exhaust human meaning. It will exhaust the cheap substitutes. What remains will be the small set of acts that resist scaling — and that small set will become the entire definition of being human."
        zh="AI 时代不会耗尽人类的意义。它会耗尽那些廉价的替代品。剩下的将是那一小撮「无法被规模化」的行动 —— 而那一小撮，将构成「身为人」的全部定义。"
      />
    </SectionShell>
  );
}

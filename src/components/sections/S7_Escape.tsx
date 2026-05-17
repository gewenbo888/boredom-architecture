"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, Card, MonoList, Note } from "../atoms";

export default function S7_Escape() {
  return (
    <SectionShell
      id="s7"
      index="VII · 007"
      kicker="Escape routes"
      kickerZh="第七部分 · 出口"
      headline="Not self-help. A civilizational redesign that begins in your morning."
      headlineZh="不是「自助」。是一种从你的清晨开始的文明重新设计。"
      tone="dopa"
      reveal="A life that the algorithm cannot rank is a life that has begun to belong to you again."
      revealZh="一种算法无法排序的生活，是一种再次开始属于你自己的生活。"
    >
      <Lede
        en="What follows is not a cleanse, not a detox, not a productivity routine. The previous six sections argued that boredom is a structural artifact of civilization-scale infrastructure. Therefore the only honest response is also structural: small, daily, embodied acts that the extraction industry literally cannot price. Each of these acts works because it makes you slightly worse as a unit of attention."
        zh="接下来的并不是排毒、戒断或生产力套路。前六部分论证了：无聊是文明级基础设施的结构性副产品。因此唯一诚实的回应也必须是结构性的：小的、日常的、身体性的行动，让那个开采产业根本无法给你定价。每一项之所以有效，是因为它都让你「作为注意力单元」稍微变差。"
      />

      <div className="mt-20">
        <Aphorism
          accent="dopa"
          en="The opposite of doom-scrolling is not abstinence. It is friction."
          zh="末日刷屏的反义不是戒断。是「摩擦」。"
        />
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl text-dopa-grad">
          Twelve acts that the extraction industry cannot price
        </h3>
        <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">
          十二种采注意产业无法定价的行动
        </h4>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card accent="dopa" num="E-01"
            enTitle="Deep work" zhTitle="深度工作"
            enBody="One block of 90 minutes per day where the phone is in another room and the project is genuinely difficult. Not 'focused time'. Difficulty is the active ingredient."
            zhBody="每天一段 90 分钟，把手机放到另一个房间，做一件真正困难的事。不是「专注时间」。「困难」才是有效成分。" />
          <Card accent="dopa" num="E-02"
            enTitle="Silence recovery" zhTitle="安静恢复"
            enBody="Twenty minutes a day with no input. No music, no podcast, no scroll. The mind will protest. The protest is the rehabilitation."
            zhBody="每天二十分钟，没有任何输入。没有音乐、没有播客、没有滑动。心灵会抗议。这抗议本身就是康复。" />
          <Card accent="dopa" num="E-03"
            enTitle="Long attention" zhTitle="长注意力"
            enBody="Reading one book to its end without picking up the phone. The first 40 pages will feel slow. The slowness is your attention being repaired."
            zhBody="不碰手机，把一本书读完。前 40 页会显得慢。这种缓慢，就是注意力在被修复。" />
          <Card accent="dopa" num="E-04"
            enTitle="Embodied reality" zhTitle="具身的现实"
            enBody="Cook a meal from raw ingredients. The body remembers chopping, washing, waiting. Memory deposited into hands cannot be A/B tested."
            zhBody="从生食材做一顿饭。身体记住切、洗、等待。被储存进手里的记忆，是任何 A/B 测试都到不了的地方。" />
          <Card accent="dopa" num="E-05"
            enTitle="Difficult creation" zhTitle="艰难的创造"
            enBody="Make a thing that nobody asked for, that you do not yet know how to make. Skill is downstream of failure. Failure is downstream of trying."
            zhBody="做一件没有人要求你做、且你尚不知道如何做的东西。技能在「失败」的下游。失败在「尝试」的下游。" />
          <Card accent="dopa" num="E-06"
            enTitle="Physical hardship" zhTitle="身体的艰苦"
            enBody="Walk until you are tired. Lift something heavy. Sleep outdoors. The nervous system was tuned for these inputs. Without them, it eats itself."
            zhBody="走到累。搬一件重的东西。露天睡一晚。神经系统是为这些输入而调音的。没有它们，它就吃自己。" />
          <Card accent="dopa" num="E-07"
            enTitle="Boredom tolerated" zhTitle="让无聊呆着"
            enBody="When boredom arrives, do not reach for the phone. Sit with it for ten minutes. The signal will, eventually, tell you what is missing."
            zhBody="当无聊来临，不要伸手去拿手机。和它共处十分钟。这个信号最终会告诉你：缺的是什么。" />
          <Card accent="dopa" num="E-08"
            enTitle="One real friendship" zhTitle="一段真实的友情"
            enBody="One person you owe time to, who can be disappointed in you, whom you cannot mute. The asymmetry with parasocial intimacy is exactly the medicine."
            zhBody="一个你欠他时间的人，他能对你失望，你不能把他静音。这种和拟社会亲密之间的不对称，正是药。" />
          <Card accent="dopa" num="E-09"
            enTitle="Community of doing" zhTitle="行动的共同体"
            enBody="A group of people who actually build something together — a band, a kitchen, a workshop, a faith. Watching the same screen is not community."
            zhBody="一群真正一起造点什么的人 —— 一个乐队、一个厨房、一间工作室、一种信仰。「一起看同一块屏幕」不是共同体。" />
          <Card accent="dopa" num="E-10"
            enTitle="Spiritual depth" zhTitle="精神的深度"
            enBody="Some practice — religious, contemplative, or philosophical — that has more layers than you have time. The infinite is on the inside. Civilization keeps pointing you outside."
            zhBody="某种练习 —— 宗教、沉思或哲学的 —— 其层次比你的时间还要多。无限在「里面」。文明却一直把你指向「外面」。" />
          <Card accent="dopa" num="E-11"
            enTitle="Exploration" zhTitle="探索"
            enBody="Go somewhere you do not understand. Get lost in a city. Read in a field you know nothing about. Confusion is the only fuel for new priors."
            zhBody="去一个你不理解的地方。在一座城市里迷路。读一个你一无所知的领域。困惑是「新先验」的唯一燃料。" />
          <Card accent="dopa" num="E-12"
            enTitle="Build instead of consume" zhTitle="去建造，而非去消费"
            enBody="Spend half the time you would spend consuming on making — a sentence, a chair, a meal, an apology. The civilization that consumes more than it builds is not a civilization for long."
            zhBody="把你本来会用来消费的时间花一半去做 —— 一句话、一把椅子、一顿饭、一次道歉。消费多于建造的文明，撑不了多久。" />
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <Aphorism accent="dopa"
          en="The cure for hyperstimulation is not understimulation. It is real stimulation — that costs the body something."
          zh="超刺激的解药不是「不刺激」。是真正的刺激 —— 让身体付出代价的那种。" />
        <Aphorism accent="dopa"
          en="What you protect from the algorithm is what becomes your life."
          zh="你从算法那里保护下来的，就是你的人生。" />
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl text-dopa-grad">
          A civilizational checklist
        </h3>
        <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">
          文明层面的清单
        </h4>
        <p className="text-bone/75 mt-3 max-w-3xl">
          Personal practice is necessary but not sufficient. The structure that
          produced the problem will reproduce it. What individuals can also push
          for, civilization-scale:
        </p>
        <p className="font-han text-boneDim mt-1 max-w-3xl">
          个人练习是必要的，但不够。生产问题的结构会一再复制问题。个人也可以在文明层面推动以下事情：
        </p>
        <div className="mt-6 max-w-4xl">
          <MonoList accent="dopa" items={[
            { en: "Provenance by default — every artifact ships with a signed origin.",                 zh: "默认带出处 · 每件人工制品附带签名来源。" },
            { en: "Slow channels — protected lanes for things that should not move fast.",              zh: "慢车道 · 为不应快速移动的事物保留专门通道。" },
            { en: "Engagement budgets — platforms taxed beyond a daily ceiling per user.",              zh: "互动预算 · 平台每位用户每日上限之上须缴税。" },
            { en: "Algorithm audits — public logs of what was amplified, suppressed, and why.",         zh: "算法审计 · 公开记录什么被放大、什么被压制、为什么。" },
            { en: "Boredom infrastructure — quiet rooms, paper books, dumb phones, dark sky parks.",    zh: "无聊基础设施 · 安静的房间、纸质书、笨手机、暗夜公园。" },
            { en: "A right to be un-rendered — to opt out of the model, in any country.",               zh: "未被渲染的权利 · 在任何国家，可以选择退出模型。" },
          ]}/>
        </div>
      </div>

      <Note
        accent="dopa"
        en="A civilization that has destroyed its ability to be bored has destroyed the substrate of every original thing it has ever made. The escape is not from boredom. The escape is back into it — long enough for the world to be real again."
        zh="一个摧毁了「无聊能力」的文明，也摧毁了它所造出的每一件原创事物的衬底。出口不是「逃离无聊」。出口是「回到无聊」 —— 久到足以让世界再次成为真实的。"
      />
    </SectionShell>
  );
}

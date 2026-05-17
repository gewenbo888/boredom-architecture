"use client";

import { SectionShell } from "../SectionShell";
import { Lede, TimelineRow, Aphorism, Note } from "../atoms";

export default function S4_History() {
  return (
    <SectionShell
      id="s4"
      index="IV · 004"
      kicker="The history of boredom"
      kickerZh="第四部分 · 无聊简史"
      headline="Ancient boredom asked: what should I do? Modern boredom asks: why does nothing feel like anything?"
      headlineZh="古代的无聊问：「我该做什么？」现代的无聊问：「为什么什么都不再像什么？」"
      reveal="The history of boredom is the history of how much stimulation a body is allowed to refuse."
      revealZh="无聊的历史，就是「一具身体被允许拒绝多少刺激」的历史。"
    >
      <Lede
        en="The word 'boredom' is barely two hundred years old. The feeling is older — but its scale, its shape, and its meaning have mutated every time civilization changed its information density. Below: a chronology of how much reality the average human had to negotiate per day, and how the gap between expectation and stimulus changed shape."
        zh="「无聊」（boredom）这个词不过两百年。这种感觉更古老 —— 但它的规模、形状与意义，每次文明改变信息密度时都会变异。下面是这样一条编年史：一个普通人每天必须谈判的现实量，与「预期与刺激之间的落差」如何反复变形。"
      />

      <div className="mt-16">
        <TimelineRow era="50,000 BCE"
          enTitle="Tribal time" zhTitle="部落时间"
          enBody="Boredom barely exists. The body is hungry, cold, or watching for predators. The reward system encounters genuine surprises daily — a kill, a storm, an unfamiliar berry. The gap between expectation and stimulus is always closing."
          zhBody="无聊几乎不存在。身体在饿、在冷、在盯着掠食者。奖励系统每天都遭遇真正的惊喜 —— 一次猎获、一场风暴、一颗未识的浆果。预期与刺激的落差总是在闭合。" />
        <TimelineRow era="10,000 BCE"
          enTitle="Agricultural repetition" zhTitle="农业的重复"
          enBody="A new emotion enters human history: tedium. Seasons repeat. Furrows repeat. Songs repeat. Ritual is invented partly to give shape to repetition. Boredom is physical now: a body that has done the same motion four thousand times."
          zhBody="一种新情绪进入人类历史：单调。季节重复，犁沟重复，歌谣重复。仪式被发明出来，部分是为了给重复一种形状。无聊开始物理化：一具做了四千次同一动作的身体。" />
        <TimelineRow era="500 BCE → 1500"
          enTitle="Imperial monasteries" zhTitle="帝国与修道院"
          enBody="Boredom becomes a spiritual category. Acedia — the noonday demon of the desert monks — is the inability to be present in one's vocation. It is the first religious sin of attention failure."
          zhBody="无聊被划入精神范畴。「acedia」 —— 沙漠修士所说的正午之魔 —— 是无法在自己的志业中安住。它是注意力失败的第一种宗教罪。" />
        <TimelineRow era="1800"
          enTitle="Industrial boredom" zhTitle="工业无聊"
          enBody="The factory shift invents a new tempo: 12 hours of one motion, paid by the hour. 'Boredom' enters English in 1852. By 1900 it has its own literature, its own diseases, and its own urban architecture (the café, the music hall) to absorb it."
          zhBody="工厂班次发明了一种新节奏：12 小时只做一个动作，按小时付酬。「Boredom」一词于 1852 年进入英语。到 1900 年它已有自己的文学、自己的疾病，以及自己用来吸收它的城市建筑（咖啡馆、音乐厅）。" />
        <TimelineRow era="1950s"
          enTitle="The television age" zhTitle="电视时代"
          enBody="For the first time, boredom can be reliably outsourced to a wall. A central voice, a fixed schedule, a couch. The reward system begins to learn: another life can be watched in lieu of one's own."
          zhBody="无聊第一次可以被稳定地外包给一面墙。一个中心的声音、一份固定的时刻表、一张沙发。奖励系统开始学会：另一段人生可以被「观看」，以代替自己的人生。" />
        <TimelineRow era="1995 → 2007"
          enTitle="The web · the smartphone" zhTitle="网络 · 智能手机"
          enBody="Distance collapses. The archive becomes searchable. Reality detaches from any single editorial board. In 2007 the wellhead enters the pocket. Boredom now has zero idle time."
          zhBody="距离崩塌。档案变得可搜索。现实脱离了任一编辑部。2007 年，井口进入口袋。无聊的空闲时间归零。" />
        <TimelineRow era="2010s"
          enTitle="Algorithmic feeds" zhTitle="算法信息流"
          enBody="Each person now sees a personalized version. Civilization fragments into billions of bespoke worlds. Boredom mutates into a new shape: not 'nothing is happening' but 'everything is happening to everyone except me.'"
          zhBody="每个人看到的版本被个性化。文明分裂为数十亿定制宇宙。无聊变形：不再是「什么都没发生」，而是「所有事都在发生，除了我」。" />
        <TimelineRow era="2022 →"
          enTitle="Generative saturation" zhTitle="生成式饱和"
          enBody="Models trained on the entire archive output more content per minute than humanity has watched in a century. Boredom under conditions of infinite supply: not under-stimulation, but the impossibility of any stimulus mattering."
          zhBody="在整套档案上训练出的模型，每分钟输出的内容比人类一个世纪的观看总和还多。无限供给条件下的无聊：不是「刺激不足」，而是「没有任何刺激能成为重要的刺激」。" />
        <TimelineRow era="2030 →"
          enTitle="Synthetic everything" zhTitle="合成一切"
          enBody="If a model can generate a custom drama, a custom companion, a custom city flythrough for every user every evening, boredom becomes a property of the user, not of the input. Future boredom is existential by default."
          zhBody="如果模型每晚都能为每个用户生成一部专属戏剧、一位专属伴侣、一段专属城市飞行，那么无聊将成为「用户的属性」，而非「输入的属性」。未来的无聊默认是存在论的。" />
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        <Aphorism en="Ancient boredom was physical repetition."        zh="古代的无聊：身体的重复。" />
        <Aphorism en="Modern boredom is existential overload."         zh="现代的无聊：存在的过载。" accent="burn" />
        <Aphorism en="Future boredom is infinite synthetic stimulus."  zh="未来的无聊：无尽的合成刺激。" accent="synth" />
      </div>

      <Note
        en="The single graph that explains the last 200 years: information density rose by six orders of magnitude; the human nervous system did not change. Everything follows from that gap."
        zh="解释过去两百年的唯一一张图：信息密度上升了六个数量级；人类神经系统没有改变。其余一切都从这条落差里推导出来。"
      />
    </SectionShell>
  );
}

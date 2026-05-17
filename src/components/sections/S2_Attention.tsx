"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, Card, FlowRow, MonoList, Marquee, Note } from "../atoms";

export default function S2_Attention() {
  return (
    <SectionShell
      id="s2"
      index="II · 002"
      kicker="The industrialization of attention"
      kickerZh="第二部分 · 注意力的工业化"
      headline="Civilization discovered a new fuel. The well is between your eyes."
      headlineZh="文明发现了一种新燃料。井口在你两眼之间。"
      tone="burn"
      reveal="There is no separate attention economy. There is a body, and there is the industry that drills it."
      revealZh="不存在所谓「独立的注意力经济」。只存在一具身体，与正在钻探它的产业。"
    >
      <Lede
        en="Petroleum lay beneath the soil for hundreds of millions of years before any species found a use for it. Attention sat behind 86 billion human eyes for two hundred thousand years before any species found a way to monetize it. In one short generation, the second resource has been extracted, refined, leveraged into a multi-trillion-dollar industry, and depleted at unprecedented speed. The wellhead is your face. The refinery is your phone."
        zh="石油在土壤之下静卧了上亿年，才有某个物种发现了它的用途。注意力在 860 亿双人类眼睛之后沉睡了二十万年，才有某个物种学会变现它。短短一代人之内，第二种资源被开采、提炼、加杠杆为数万亿美元的产业，并以前所未有的速度被耗尽。井口是你的脸。炼厂在你手机里。"
      />

      <div className="mt-20">
        <Aphorism
          accent="burn"
          en="The smartphone is the most efficient extraction rig ever pointed at a primate."
          zh="智能手机，是有史以来被对准灵长类的最高效的开采装置。"
        />
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl text-warning-grad">
          The extraction pipeline
        </h3>
        <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">
          采油 / 采注意管线
        </h4>
        <p className="text-bone/70 mt-3 max-w-3xl">
          Every step has been engineered, A/B-tested, and tuned across a
          billion users to maximize one number: time-on-platform.
        </p>
        <p className="font-han text-boneDim mt-1 max-w-3xl">
          每一步都被工程化、A/B 测试，并在十亿用户上调优，目的只有一个数字：在平台上停留的时间。
        </p>
        <div className="mt-8">
          <FlowRow
            accent="burn"
            steps={[
              { en: "Hook (0–1s)",      zh: "钩子" },
              { en: "Variable reward", zh: "可变奖励" },
              { en: "Social proof",    zh: "社会证据" },
              { en: "Notification",    zh: "通知" },
              { en: "Streak / FOMO",   zh: "连击 · FOMO" },
              { en: "Auto-play",       zh: "自动播放" },
              { en: "Ad insertion",    zh: "广告插入" },
              { en: "Behavioral profile", zh: "行为画像" },
            ]}
          />
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card accent="burn" num="X-01"
          enTitle="Infinite scroll" zhTitle="无限滚动"
          enBody="The single most successful UI invention of the century. By removing the bottom of the page, it removed the natural stopping rule the brain had used for fifty centuries of reading."
          zhBody="本世纪最成功的 UI 发明。通过去掉「页面底部」，它取消了大脑五千年来阅读时唯一可靠的停下规则。" />
        <Card accent="burn" num="X-02"
          enTitle="Variable reward" zhTitle="可变奖励"
          enBody="Slot-machine mathematics adapted for grief. The brain learns: the next swipe might be the one. Uncertainty is the engine."
          zhBody="老虎机数学，被改写来处理悲伤。大脑学到：下一次滑动也许就是「那一次」。不确定本身是引擎。" />
        <Card accent="burn" num="X-03"
          enTitle="Notification warfare" zhTitle="通知战"
          enBody="A red dot is a debt you owe the platform. You pay it by opening the app. Default sound design favors fear-adjacent frequencies."
          zhBody="一个红点是你欠平台的债。你通过打开应用偿还。默认提示音的频率，故意贴近恐惧。" />
        <Card accent="burn" num="X-04"
          enTitle="Outrage amplification" zhTitle="愤怒放大"
          enBody="Negative-affect content travels six times farther than neutral content. Engagement is rage in a wig."
          zhBody="负面情绪内容的传播距离是中性内容的六倍。「互动」只是戴着假发的「愤怒」。" />
        <Card accent="burn" num="X-05"
          enTitle="Algorithmic intimacy" zhTitle="算法亲密"
          enBody="The feed knows you better than your partner does. Being seen — even by a function — is hard to walk away from."
          zhBody="信息流比你的伴侣更懂你。被「看见」 —— 即便是被一个函数 —— 也很难走开。" />
        <Card accent="burn" num="X-06"
          enTitle="Behavioral extraction" zhTitle="行为提取"
          enBody="Each touch is a feature. The model that predicts your next click is the model the advertiser buys access to. The product is you, sold by the second."
          zhBody="每一次触屏是一个特征。预测你下次点击的模型，正是广告主购买访问权的那个模型。产品是你，按秒计价。" />
        <Card accent="burn" num="X-07"
          enTitle="Auto-play" zhTitle="自动播放"
          enBody="The default is the next dose. To stop, you must act. To continue, you must do nothing. The friction has been moved to disengagement."
          zhBody="默认值就是下一剂。停下需要动作。继续什么都不做。摩擦被搬到了「脱身」这一边。" />
        <Card accent="burn" num="X-08"
          enTitle="Surveillance economics" zhTitle="监控经济"
          enBody="Every dwell time, every replay, every face muscle on the front-camera test becomes a vector. The economy of inference is bigger than the economy of content."
          zhBody="每一段停留、每一次重播、每一束前置摄像头测试中的面部肌肉激活都是向量。推断的经济，比内容的经济更大。" />
        <Card accent="burn" num="X-09"
          enTitle="Engagement optimization" zhTitle="互动优化"
          enBody="The ranker does not aim for what is good for you. It aims for what you will reliably click under cognitive load. Inside that target, reality is a means."
          zhBody="排序器并不瞄准「对你好」。它瞄准「你在认知负担下会稳定点的内容」。在这个目标里，现实只是工具。" />
      </div>

      <div className="mt-20">
        <Marquee
          items={[
            { en: "ATTENTION IS THE NEW OIL", zh: "注意力是新的石油" },
            { en: "ENGAGEMENT IS RAGE", zh: "互动即愤怒" },
            { en: "RANKING IS RULING", zh: "排序即治理" },
            { en: "INFINITY IS A UI DECISION", zh: "无限是一种 UI 决策" },
            { en: "THE PRODUCT IS YOU", zh: "产品是你" },
            { en: "DOPAMINE PER DOLLAR", zh: "每美元多巴胺" },
          ]}
        />
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-warning-grad">What the system harvests</h3>
          <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">系统收割什么</h4>
          <div className="mt-6">
            <MonoList accent="burn" items={[
              { en: "Eye-time — the cleanest unit, measurable in milliseconds.", zh: "目光时间 · 最干净的单位，毫秒可测。" },
              { en: "Scroll velocity — how fast you tried to escape.", zh: "滚动速度 · 你试图逃离的速度。" },
              { en: "Pause depth — where you slowed without clicking.", zh: "暂停深度 · 你在哪里慢下来却没点击。" },
              { en: "Re-watches — what your subconscious refused to leave.", zh: "重看 · 潜意识不愿离开的内容。" },
              { en: "Facial-muscle activation — front-camera test.", zh: "面部肌肉激活 · 前置摄像头测试。" },
              { en: "Network adjacency — who else lingers where you linger.", zh: "网络邻近性 · 还有谁在你停留处停留。" },
            ]}/>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-warning-grad">What the user loses</h3>
          <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">用户失去什么</h4>
          <div className="mt-6">
            <MonoList accent="burn" items={[
              { en: "Long attention — the ability to sit with one idea.", zh: "长注意 · 与一个念头共处的能力。" },
              { en: "Quiet — the room between two thoughts.", zh: "安静 · 两个念头之间的房间。" },
              { en: "Boredom — the substrate of inner generation.", zh: "无聊 · 内在生成的衬底。" },
              { en: "Sleep — the system never closes.", zh: "睡眠 · 系统从不打烊。" },
              { en: "Memory — externalized into the device.", zh: "记忆 · 被外包给设备。" },
              { en: "Wonder — pre-rendered as a thumbnail.", zh: "惊奇 · 被预渲染为缩略图。" },
            ]}/>
          </div>
        </div>
      </div>

      <Note
        accent="burn"
        en="Petroleum at least signaled when the well was running dry. The attention well sends no such signal. The user is the well, and the well does not know it is empty."
        zh="石油至少在油井见底时会发出信号。注意力之井没有这种信号。用户既是井，而井并不知道自己已经空了。"
      />
    </SectionShell>
  );
}

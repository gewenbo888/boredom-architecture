"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, Card, FlowRow, MonoList, Stat, Note } from "../atoms";

export default function S1_Biology() {
  return (
    <SectionShell
      id="s1"
      index="I · 001"
      kicker="The biology of boredom"
      kickerZh="第一部分 · 无聊的生物学"
      headline="Boredom is not a void. It is a low-fuel light on a 200,000-year-old dashboard."
      headlineZh="无聊不是真空。它是仪表盘上一盏闪了二十万年的「燃料过低」警示灯。"
      reveal="Your boredom is your brain reporting that nothing it has been served deserves an action."
      revealZh="你的无聊，是大脑在汇报：「目前被端到面前的东西，没有一个值得我采取行动。」"
    >
      <Lede
        en="Modern people experience boredom as failure — as something to be eliminated by another scroll. The body experiences it as a measurement. The mesolimbic dopamine system runs constant predictions: given what is in front of me, what is the expected reward of acting? When the prediction returns 'nothing,' an alarm fires. That alarm is what you call boredom. It is not a glitch. It is the most accurate sensor a hominid ever evolved."
        zh="现代人把无聊当作失败 —— 当作下一次滑动就该消除的东西。身体却把它当作一种测量。中脑多巴胺系统持续运行预测：根据当前在我面前的东西，行动的预期回报是多少？当预测返回「无」，警报响起。这个警报，就是你所说的无聊。它不是 bug。它是人类祖先进化出的、最精确的传感器之一。"
      />

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        <Stat value="≈400ms" enLabel="Latency between novelty detection and dopamine release." zhLabel="新颖性被识别到多巴胺释放的延迟。" />
        <Stat accent="dopa" value="86B" enLabel="Neurons in the average human brain — most of them idle." zhLabel="人脑神经元数量 —— 大多数处于空闲状态。" />
        <Stat accent="burn" value="13.2s" enLabel="Median attention dwell before next swipe (short-form video)." zhLabel="短视频上滑动前的中位停留时间。" />
      </div>

      <div className="mt-20">
        <Aphorism
          en="A hunter-gatherer with your level of boredom would have invented an entire technology by sundown."
          zh="一个具有你这种无聊感的旧石器猎人，会在日落前发明出一整套工具。"
        />
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl text-cold-grad">
          The reward prediction cycle
        </h3>
        <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">
          奖励预测循环
        </h4>
        <p className="text-bone/70 mt-3 max-w-3xl">
          Dopamine is not the molecule of pleasure. It is the molecule of
          prediction error. The neurons fire most strongly when the world
          delivers more than the brain expected. Boredom is the slow leak in a
          system that no longer encounters surprises.
        </p>
        <p className="font-han text-boneDim mt-1 max-w-3xl">
          多巴胺不是「快感分子」。它是「预测误差分子」。当世界给出的回报超出大脑的预期，神经元最强烈地放电。无聊就是一个再也碰不到惊喜的系统里的慢性漏气。
        </p>
        <div className="mt-8">
          <FlowRow
            steps={[
              { en: "Stimulus",           zh: "刺激" },
              { en: "Prior expectation",  zh: "先验预期" },
              { en: "Prediction error",   zh: "预测误差" },
              { en: "Dopamine signal",    zh: "多巴胺信号" },
              { en: "Behavior",           zh: "行为" },
              { en: "Updated prior",      zh: "更新先验" },
            ]}
          />
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card num="01"
          enTitle="Novelty bias" zhTitle="新颖偏好"
          enBody="The brain assigns reward to inputs that violate its current model. Two centuries of cinema and one decade of recommendation systems have raised the violation floor — what shocks today did not exist last year."
          zhBody="大脑把奖励分配给违反当前模型的输入。两个世纪的电影、十年的推荐系统已经抬高了「违反阈值」 —— 今天能震撼你的，去年并不存在。" />
        <Card num="02"
          enTitle="Habituation" zhTitle="习惯化" accent="dopa"
          enBody="Cells become less sensitive to repeated stimulus. Every successful dopamine hit purchases a tiny tax on the next one. Civilization runs the slot machine; you pay the tax."
          zhBody="细胞对反复出现的刺激会变得不敏感。每一次成功的多巴胺刺激，都买下下一次的微税。文明运转老虎机，你交税。" />
        <Card num="03"
          enTitle="Tolerance" zhTitle="耐受" accent="burn"
          enBody="The same dose now produces less effect. The user reaches for a stronger one. A timeline yesterday becomes a clip. A clip becomes a half-clip. A half-clip becomes a face."
          zhBody="同样的剂量产生的效应减弱。用户去找更猛的剂量。昨天的时间线，今天变成短片。短片再变成半截。半截再变成一张脸。" />
        <Card num="04"
          enTitle="Attention fatigue" zhTitle="注意力疲劳"
          enBody="Sustaining executive control is metabolically expensive. After 15 minutes of effortful focus, the prefrontal cortex begs for a cheap input. The phone is the cheapest available."
          zhBody="维持执行控制的代谢成本很高。15 分钟的努力专注之后，前额叶开始乞求廉价输入。手机正是最廉价的那一个。" />
        <Card num="05"
          enTitle="Motivational collapse" zhTitle="动机塌缩" accent="burn"
          enBody="When the prediction system is over-fed with synthetic rewards, the cost of action rises. Anhedonia is the system saying: nothing I could do would beat the next thumbnail."
          zhBody="当预测系统被合成奖励过度喂食，「行动的成本」就升高。快感缺失，是系统在说：我能做的任何事，都打不过下一个缩略图。" />
        <Card num="06"
          enTitle="Hunger-gatherer leftovers" zhTitle="采猎遗产" accent="dopa"
          enBody="The same circuitry that watched the savannah for movement now watches a 6-inch glass rectangle. The substrate has not been re-architected since the Pleistocene."
          zhBody="同一套曾盯着草原寻找猎物的神经回路，如今盯着一块六英寸的玻璃矩形。这个衬底，自更新世以来没有被重新架构过。" />
      </div>

      <div className="mt-16">
        <h3 className="font-display text-2xl md:text-3xl text-cold-grad">What boredom is asking</h3>
        <h4 className="font-han text-xl md:text-2xl text-boneDim mt-1">无聊到底在问什么</h4>
        <div className="mt-6 max-w-4xl">
          <MonoList items={[
            { en: "Is there something here whose reward exceeds my expectation?", zh: "这里有没有一件事，其回报超过我的预期？" },
            { en: "If not, where else should I aim my attention?", zh: "如果没有，我应该把注意力转向何处？" },
            { en: "Is the environment too predictable, or are my priors too high?", zh: "是环境太可预测，还是我的预期被抬得太高？" },
            { en: "Is the inability to act real, or is my reward circuitry just exhausted?", zh: "「不愿行动」是真的，还是奖励回路只是累了？" },
            { en: "What is the smallest action that would change my prior?", zh: "能改变我先验的最小行动是什么？" },
          ]}/>
        </div>
      </div>

      <Note
        en="Treating boredom as a feeling-to-be-killed deletes the only honest report the body sends about reality. Every escape attempt also deletes the signal."
        zh="把无聊当作「要消灭的感觉」，等于删除了身体关于现实的唯一诚实报告。每一次逃避，也在删除这个信号。"
      />
    </SectionShell>
  );
}

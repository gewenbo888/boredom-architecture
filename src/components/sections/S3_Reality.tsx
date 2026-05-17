"use client";

import { SectionShell } from "../SectionShell";
import { Lede, Aphorism, RealityFeed, Note, MonoList } from "../atoms";

export default function S3_Reality() {
  return (
    <SectionShell
      id="s3"
      index="III · 003"
      kicker="Why modern people cannot feel reality"
      kickerZh="第三部分 · 为什么现代人无法感受现实"
      headline="The feed is louder, faster, kinder, and lower-stakes than reality. The body picks the feed."
      headlineZh="信息流比现实更响亮、更快、更友善、风险更低。身体选了信息流。"
      tone="synth"
      reveal="The simulation does not have to be perfect. It only has to be more comfortable than the original."
      revealZh="模拟不必完美。它只需要比原件更舒服。"
    >
      <Lede
        en="Hyperreality is not a philosopher's word game. It is a behavioral default. A real meal has friction, ambivalence, and a body that gets tired. A meal on a feed has neither friction nor ambivalence and never gets tired. The body — which exists primarily to minimize friction — increasingly chooses the feed. Reality, by comparison, has begun to feel slow, low-resolution, and rude."
        zh="超现实不是哲学家的文字游戏，而是行为默认值。一顿真实的饭有摩擦、有矛盾、有一具会累的身体。信息流里的一顿饭既没有摩擦也没有矛盾，永远不累。身体 —— 其首要目的就是最小化摩擦 —— 越来越选择信息流。相比之下，现实开始显得缓慢、低分辨率、且无礼。"
      />

      <div className="mt-20">
        <Aphorism
          accent="synth"
          en="The image of the thing is not the thing. But the image gets the dopamine."
          zh="一物之像并非一物本身。但一物之像收到了多巴胺。"
        />
      </div>

      <div className="mt-20 space-y-5 md:space-y-7">
        <RealityFeed
          realityTitle="Eating a meal"
          realityZh="吃饭"
          realityBody="A real meal is messy, has gravity, sometimes burns the mouth, takes 30 minutes and engages all five senses simultaneously."
          realityBodyZh="真实的一餐是凌乱的、有重力、偶尔烫嘴、需要 30 分钟、并同时调用五种感官。"
          feedTitle="Watching food content"
          feedZh="看美食内容"
          feedBody="A pre-edited, color-graded, ASMR-amplified, plate-spinning montage of 100 meals in 8 minutes. Calorie content: zero. Attention cost: enormous."
          feedBodyZh="一段预剪辑、调色、ASMR 放大的蒙太奇 —— 8 分钟内端上 100 道菜。热量摄入为零。注意力代价巨大。"
        />
        <RealityFeed
          realityTitle="Traveling"
          realityZh="出行"
          realityBody="Time zones, lost luggage, food you can't read, strangers whose grammar resists you. Memory deepens because the body had to negotiate."
          realityBodyZh="时差、丢失的行李、读不懂的菜单、语法不让步的陌生人。记忆变深，因为身体不得不谈判。"
          feedTitle="Consuming travel media"
          feedZh="消费旅行媒体"
          feedBody="A drone over an island you will never visit, scored to a song you have never heard, edited by an algorithm that wants your next nine minutes."
          feedBodyZh="无人机飞过你不会去的岛屿，配着你从未听过的歌，由一个想得到你接下来九分钟的算法剪辑。"
        />
        <RealityFeed
          realityTitle="Friendship"
          realityZh="友情"
          realityBody="A friend asks something of you. They take up clock time. They are slow to forgive. They remember the version of you who failed."
          realityBodyZh="朋友会对你提出要求。他们占用时钟时间。他们原谅得慢。他们记得那个失败过的你。"
          feedTitle="Parasocial intimacy"
          feedZh="拟社会亲密"
          feedBody="An influencer addresses 'you' (1 of 4 million). The bond is one-way, unrequited, and infinitely scalable. The intimacy is real to the body only."
          feedBodyZh="网红对「你」说话（你是 400 万分之一）。这种连接是单向、不被回应、可无限扩展的。亲密感只对身体来说是真实的。"
        />
        <RealityFeed
          realityTitle="Thinking"
          realityZh="思考"
          realityBody="Sitting with a question long enough for the answer to surprise you. Boredom is the substrate. Silence is the operating system."
          realityBodyZh="把一个问题坐到足够久，让答案自己冒出来吓你一跳。无聊是衬底。安静是操作系统。"
          feedTitle="Scrolling"
          feedZh="滑动"
          feedBody="A function that, for any input, outputs the next more-interesting thing. Real thinking has been outsourced — first to search, now to ranking."
          feedBodyZh="一个函数：对任何输入，输出下一件更有趣的事。真正的思考已被外包 —— 先是搜索，后是排序器。"
        />
        <RealityFeed
          realityTitle="Silence"
          realityZh="安静"
          realityBody="A room with no inputs. The body has to generate its own state. Most adults can no longer sustain it for more than three minutes."
          realityBodyZh="一个没有输入的房间。身体必须自己生成状态。多数成年人无法持续超过三分钟。"
          feedTitle="A notification environment"
          feedZh="通知环境"
          feedBody="A space where every quiet moment is interruptible. The mind never has to find itself. The price is paid in inability to be alone."
          feedBodyZh="一种空间：每一个安静时刻都可被打断。心灵永远不必找回自己。代价是「无法独处」的能力。"
        />
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <Aphorism
          accent="synth"
          en="A real friend can fail you. A parasocial one cannot. That is the entire competitive advantage of the feed."
          zh="真实的朋友会让你失望。拟社会的朋友不会。这就是信息流的全部竞争优势。"
        />
        <div className="rounded-lg p-7 glass">
          <div className="eyebrow text-synth mb-3">Symptoms · 症状</div>
          <MonoList accent="synth" items={[
            { en: "Restless even at rest.",                            zh: "即使在休息也焦躁。" },
            { en: "Cannot enjoy what you wanted last week.",           zh: "对自己上周想要的东西，已无法享受。" },
            { en: "Feels embarrassed by sincerity.",                   zh: "被真诚弄得尴尬。" },
            { en: "Cannot stop checking — even when there is nothing.", zh: "停不下来反复刷 —— 即便什么也没有。" },
            { en: "Real conversations feel slow.",                     zh: "真实对话显得太慢。" },
            { en: "Memories store as posts, not as smells.",           zh: "记忆以「帖子」而不是「气味」储存。" },
          ]}/>
        </div>
      </div>

      <Note
        accent="synth"
        en="The opposite of reality is not virtuality. The opposite of reality is comfort. The feed wins because reality is uncomfortable — and that is exactly what made reality real."
        zh="现实的反义词不是虚拟。现实的反义词是「舒适」。信息流胜出，是因为现实让人不舒服 —— 而那种不舒服，正是让现实成为现实的东西。"
      />
    </SectionShell>
  );
}

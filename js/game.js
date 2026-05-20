const MAIN_CHARACTER_IDS = ["tong", "bai", "guo", "lv", "li", "mo"];

const CHARACTERS = {
    tong: {
        name: "佟湘玉",
        role: "掌柜",
        portrait: "images/characters/image2/tong.png",
        idle: "额开客栈这么多年，最怕的不是没事，是看起来没事。"
    },
    bai: {
        name: "白展堂",
        role: "跑堂",
        portrait: "images/characters/image2/bai.png",
        idle: "江湖经验第一条，能坐着说的事，千万别站起来逞能。"
    },
    guo: {
        name: "郭芙蓉",
        role: "杂役",
        portrait: "images/characters/image2/guo.png",
        idle: "我现在特别冷静，冷静得很想拍桌子。"
    },
    lv: {
        name: "吕秀才",
        role: "账房",
        portrait: "images/characters/image2/lv.png",
        idle: "子曾经曰过，很多误会的根源，是没有让读书人把话说完。"
    },
    li: {
        name: "李大嘴",
        role: "厨子",
        portrait: "images/characters/image2/li.png",
        idle: "先吃口热的，天大的事也不能空着肚子说。"
    },
    mo: {
        name: "莫小贝",
        role: "衡山派掌门",
        portrait: "images/characters/image2/mo.png",
        idle: "我是掌门，掌门偶尔不想上学，这叫体察江湖。"
    },
    xing: {
        name: "邢捕头",
        role: "捕头",
        portrait: "images/characters/image2/xing.png",
        idle: "我来不是蹭饭的，我是顺路维护七侠镇治安。顺便有饭更好。"
    },
    xiaoliu: {
        name: "燕小六",
        role: "捕快",
        portrait: "images/characters/image2/xiaoliu.png",
        idle: "帮我照顾好我七舅姥爷，还有这桌饭钱。"
    },
    wushuang: {
        name: "祝无双",
        role: "捕快",
        portrait: "images/characters/image2/wushuang.png",
        idle: "我只是来帮忙，不想让谁为难。"
    },
    hongling: {
        name: "展红绫",
        role: "六扇门女捕头",
        portrait: "images/characters/image2/hongling.png",
        idle: "有些旧事留在身后，人走到哪儿，回头一看就知道。"
    }
};

const FINAL_DIALOGUE = [
    {
        speaker: null,
        text: "前 19 集都是日常。\n第 20 集是同福小宴，大家都在，灯笼有点暗，外面七侠镇很安静。\n\n你听见有人叫你："
    },
    {
        speaker: "tong",
        text: "醒醒，客官？"
    },
    {
        speaker: null,
        text: "你睁眼，发现自己趴在同福客栈的桌上。\n桌上有一碗没喝完的茶，旁边放着你前 19 集留下的“今日传闻”。"
    },
    {
        speaker: "tong",
        text: "你可算醒咧。刚才一直嘟囔啥上班、打卡、消息、会还没开……额一句都听不懂。"
    },
    {
        speaker: "bai",
        text: "我听见了，什么领导追杀你？这江湖仇家挺多啊。"
    },
    {
        speaker: "lv",
        text: "依我看，此人乃心神劳损，魂游物外。"
    },
    {
        speaker: "li",
        text: "先别管啥魂不魂的，吃口热的。"
    },
    {
        speaker: "mo",
        text: "你要是不想回去，就说你是我们衡山派外门弟子。"
    },
    {
        speaker: "guo",
        text: "住下可以，活还是得干啊。"
    },
    {
        speaker: "tong",
        text: "这里不是啥大地方，就是个客栈。路过的人累了，能坐一会儿。你要是还困，就再歇歇。天亮了再说。"
    }
];

const RAW_EPISODES = [
    {
        title: "麻烦客人",
        subtitle: "有人拍桌要免单，客栈先学会给人留台阶。",
        theme: "面子 / 信任",
        speaker: "tong",
        line: "能讲理就别动手，能少赔就别多赔。",
        scene: "晌午刚过，一个客人拍着桌子说菜里有江湖气，要掌柜免单。\n\n桌子摇得比他的理由还凶。佟湘玉脸上挂着笑，手已经摸向账本；郭芙蓉站起来半截，白展堂正假装自己只是路过。",
        callbacks: [],
        reactions: {
            bai: "这人不是来吃饭的，是来找人给他一个下台阶。",
            guo: "让我来，我特别会给人台阶，直接一掌送下去。",
            li: "他要是真饿了，哪还有劲拍这么响。"
        },
        choices: [
            {
                text: "先给茶，问他是不是遇到难处",
                speaker: "tong",
                line: "话说到这份上，额再扣就不像掌柜，像算盘成精。",
                resultTitle: "台阶留人",
                result: "客人终于承认钱袋丢了，怕丢面子才闹。老白去后院转了一圈，钱袋找到了，桌子也保住了。\n\n佟湘玉嘴上说麻烦，还是让大嘴多加了半勺汤。",
                rumor: "今日传闻：掌柜又做了一笔赔本买卖，但她坚持说这是长远经营。",
                tags: ["tong_steps", "bai_quiet_help", "inn_warm"]
            },
            {
                text: "让他留下干活抵饭钱",
                speaker: "li",
                line: "这不比吵架强？吵架费嗓子，劈柴还能烧锅。",
                resultTitle: "以工抵饭",
                result: "客人去后院劈了半个时辰柴，火气劈没了，饭钱也抵了。\n\n郭芙蓉觉得这法子不够痛快，佟湘玉觉得这法子很会过日子。",
                rumor: "后院新增客栈规矩：能讲理讲理，不能讲理先劈柴。",
                tags: ["li_hot_meal", "inn_practical"]
            }
        ]
    },
    {
        title: "小贝逃课",
        subtitle: "不爱上学的人不会突然爱上学，但会知道谁是真在管她。",
        theme: "上学 / 管教 / 亲情",
        speaker: "mo",
        line: "掌门今日微服私访，不是逃课，是体察民情。",
        scene: "小贝背着书包从后门溜进来，书没带，糖葫芦带了三串。\n\n佟湘玉气得陕西话都快拐弯，秀才已经准备讲一篇《求学与成人之道》，大嘴在旁边小声问糖葫芦能不能分一颗。",
        callbacks: [
            { tag: "tong_steps", text: "上一回你给客人留过台阶，佟湘玉这次看向你，像是在问：小孩也要台阶不？" }
        ],
        reactions: {
            mo: "我不是不学，我是觉得先生讲得没有江湖紧急。",
            lv: "学习不是为了先生，是为了你将来吹牛的时候不露怯。",
            tong: "额管她不是为了让她怕额，是怕没人管她。"
        },
        choices: [
            {
                text: "让小贝自己说今天为什么不想去",
                speaker: "mo",
                line: "我就是有一道题不会，先生一问我，我就像被点穴了一样。",
                resultTitle: "不会也能说",
                result: "秀才没讲大道理，只把那道题拆成三步。小贝还是不喜欢上学，但她发现不会的事说出来，也不会天塌。\n\n佟湘玉没有少骂，只是骂完给她塞了块饼。",
                rumor: "今日传闻：衡山派掌门承认有题不会，但坚决不承认自己怕先生。",
                tags: ["mo_seen", "lv_patient", "family_soft"]
            },
            {
                text: "先罚她帮掌柜算半天账",
                speaker: "tong",
                line: "不想上学可以，先看看不上学咋算错钱。",
                resultTitle: "账本罚站",
                result: "小贝算到第三页就崩了，发现账本比先生可怕多了。\n\n她第二天还是不情愿上学，但走之前主动把书塞进包里。佟湘玉假装没看见，嘴角憋得很辛苦。",
                rumor: "今日传闻：小贝说账房是江湖上最阴险的门派，因为错一文钱都能被发现。",
                tags: ["mo_account_book", "tong_guardian", "money_lesson"]
            }
        ]
    },
    {
        title: "老白请假",
        subtitle: "他习惯先找退路，但心里知道自己跑不了。",
        theme: "逃避责任 / 信任",
        speaker: "bai",
        line: "我这不是偷懒，我这是预判风险。",
        scene: "客栈刚忙起来，白展堂突然捂着腰说旧伤复发。\n\n郭芙蓉说他装得太假，秀才说要讲证据，大嘴说要不先吃碗面看看是不是饿的。佟湘玉没拆穿，只问他到底怕什么。",
        callbacks: [
            { tag: "bai_quiet_help", text: "老白还记得你上回没有逼他当众显本事，所以这次装病时，眼神先虚了一下。" }
        ],
        reactions: {
            bai: "我不是怕事，我是怕事找上门还赖我会轻功。",
            tong: "额不怕他跑，额怕他啥都自己憋着。",
            guo: "他要是真腰疼，我就不拍他了；要是装的，我更想拍。"
        },
        choices: [
            {
                text: "给老白留最轻的活，看他还愿不愿意留下",
                speaker: "bai",
                line: "你这人吧，损是损了点，但还挺会给人留面儿。",
                resultTitle: "轻活重心",
                result: "老白擦了一下午桌子，嘴上喊腰疼，手上没停。\n\n晚上打烊，他把门闩检查了三遍。佟湘玉没有夸，只说：明天早饭给他多盛半碗。",
                rumor: "今日传闻：老白请假失败，但成功获得半碗早饭补贴。",
                tags: ["bai_stays", "tong_trusts_bai", "inn_steady"]
            },
            {
                text: "让大家轮流说一件需要他的事",
                speaker: "bai",
                line: "行行行，别说了，再说我像英勇就义似的。",
                resultTitle: "有人用得上",
                result: "大嘴要他端菜，秀才要他撑场面，小贝要他帮忙挡先生，佟湘玉只说了一句：客栈少个跑堂，不顺手。\n\n老白嘟囔着麻烦，还是把抹布搭回肩上。",
                rumor: "今日传闻：白展堂发现自己在客栈里很有用，虽然本人强烈要求低调处理。",
                tags: ["bai_needed", "found_family"]
            }
        ]
    },
    {
        title: "秀才写告示",
        subtitle: "话太长的时候，道理会先睡着。",
        theme: "沟通 / 搞笑",
        speaker: "lv",
        line: "制度建设，是客栈长治久安之本。",
        scene: "为了防止客人拍桌，吕秀才写了一张《同福客栈顾客行为与桌椅保护暂行条例》。\n\n客人读到第二行，火气没了，困意上来了。小贝建议改成四个字：拍坏了赔。",
        callbacks: [
            { tag: "mo_seen", text: "小贝这次没有逃跑，反而站在告示前认真指出：字太多，会伤害掌门视力。" }
        ],
        reactions: {
            lv: "短不是问题，浅才是问题。",
            mo: "浅怎么了？水太深容易淹死。",
            guo: "我赞成短的，最好短到不用我读。"
        },
        choices: [
            {
                text: "采用小贝版短告示",
                speaker: "mo",
                line: "看吧，掌门说话就是有用。",
                resultTitle: "短告示立功",
                result: "告示贴出去后，客人看得懂，桌子也少受罪。\n\n秀才不太服，但承认传播效率确实提高了。他偷偷在告示背面写了注释版。",
                rumor: "今日传闻：客栈新规只有四个字，秀才认为这是文化的重大让步。",
                tags: ["short_notice", "mo_proud", "lv_learns_plain"]
            },
            {
                text: "保留秀才长文，专治吵架",
                speaker: "bai",
                line: "好家伙，这是用文化把人点穴了。",
                resultTitle: "文字点穴",
                result: "秀才念完第三段第二款，两个吵架的客人同时睡着。\n\n佟湘玉看着一屋安静，决定把长告示贴后院，专治小贝不睡觉。",
                rumor: "今日传闻：吕秀才获得某种意义上的胜利，没有人反驳，因为没人醒着。",
                tags: ["long_notice", "lv_words", "inn_quiet"]
            }
        ]
    },
    {
        title: "芙蓉变温柔",
        subtitle: "她想收住火气，也想保住自己的锋芒。",
        theme: "友情 / 面子",
        speaker: "guo",
        line: "从今天起，我郭芙蓉说话轻一点，动手晚一点。",
        scene: "郭芙蓉决定做一个温柔的人。第一位客人让她添茶，她笑得像在练内功；第二位客人挑刺，她手已经摸到桌角。\n\n老白说她这个温柔有杀气，秀才说成长总要有过程。",
        callbacks: [
            { tag: "lv_learns_plain", text: "秀才这次先把话说短：小郭不是脾气大，是怕别人只看见她脾气大。" }
        ],
        reactions: {
            guo: "我不是装，我是在修炼新的江湖形象。",
            lv: "她已经很努力了，虽然桌子目前还不知道。",
            tong: "温柔不是不生气，是生气了别先算家具钱。"
        },
        choices: [
            {
                text: "帮她把“忍住没拍”也算成进步",
                speaker: "guo",
                line: "这话我爱听，虽然听完还是想拍。",
                resultTitle: "没拍也是本事",
                result: "郭芙蓉一整天只拍坏了一只筷子，创造个人纪录。\n\n秀才认真给她记了一笔：今日克制有功。她嫌酸，但没撕。",
                rumor: "今日传闻：郭女侠练成新招，名为差点排山倒海。",
                tags: ["guo_seen", "lv_supports_guo", "friendship_warm"]
            },
            {
                text: "安排她去后院劈柴发泄",
                speaker: "li",
                line: "这法子好啊，柴火够了，桌子也活了。",
                resultTitle: "后院消气",
                result: "后院柴堆矮了半截，郭芙蓉的火气也矮了半截。\n\n她回来继续添茶，动作还是重，但没人再担心桌子寿命。",
                rumor: "今日传闻：后院柴火储备大增，掌柜认为这是情绪管理的副产品。",
                tags: ["guo_energy", "inn_practical"]
            }
        ]
    },
    {
        title: "掌柜算错账",
        subtitle: "七钱银子不大，掌柜的体面很大。",
        theme: "钱 / 信任 / 体面",
        speaker: "tong",
        line: "额怎么可能算错？账本错了都比额算错合理。",
        scene: "月底盘账，账本少了七钱银子。\n\n佟湘玉脸色比锅底还沉，大嘴不敢多夹菜，老白已经准备把自己摘出去。秀才看了半天，小声说：掌柜的，好像是您进位进错了。",
        callbacks: [
            { tag: "money_lesson", text: "小贝抱着账本路过，立刻说：看吧，账房门派果然阴险。" }
        ],
        reactions: {
            tong: "额不是心疼钱，额是心疼额英明神武的形象。",
            lv: "错账不可怕，可怕的是为了面子继续错。",
            bai: "掌柜的也会错，这事得记下来，以后保命用。"
        },
        choices: [
            {
                text: "私下提醒，让她自己圆回来",
                speaker: "tong",
                line: "额知道咧。你出去，顺便把老白也支走。",
                resultTitle: "账本留面",
                result: "佟湘玉当晚重新算账，第二天说昨日优惠记法有误。\n\n大家都懂，但没人拆穿。老白只多看了一眼账本，就被掌柜瞪回去了。",
                rumor: "今日传闻：掌柜修正账本，官方说法是优惠方式升级。",
                tags: ["tong_face_saved", "money_gentle", "inn_steady"]
            },
            {
                text: "当众说清，免得大家互相猜",
                speaker: "tong",
                line: "行，额错咧。谁笑，谁今天洗碗。",
                resultTitle: "错也能认",
                result: "掌柜认错认得很硬气，硬气到没人敢笑。\n\n但那七钱银子的疑云散了，大家吃饭终于不用互相看手。",
                rumor: "今日传闻：佟掌柜承认算错账，全客栈无人敢将此事称为笑话。",
                tags: ["tong_admits", "trust_clear", "money_clear"]
            }
        ]
    },
    {
        title: "邢捕头蹭饭",
        subtitle: "人情不能全算钱，也不能全不算钱。",
        theme: "人情 / 钱 / 搞笑",
        speaker: "xing",
        line: "我这是巡逻路过，顺便看看你们饭菜有没有安全隐患。",
        scene: "邢捕头第三次“巡逻”到饭点，筷子比公文先到桌上。\n\n佟湘玉皮笑肉不笑，老白说衙门的人情账最难算，大嘴已经习惯性给他盛饭。",
        callbacks: [
            { tag: "tong_face_saved", text: "掌柜最近对账格外敏感，邢捕头一坐下，她算盘都拨响了。" }
        ],
        reactions: {
            xing: "我不是白吃，我维护了你们吃饭环境的稳定。",
            li: "他吃得是真香，付得是真少。",
            bai: "这叫治安成本，掌柜的听见能晕过去。"
        },
        choices: [
            {
                text: "给他设一份捕头巡逻餐，便宜但记账",
                speaker: "tong",
                line: "人情归人情，账本归账本，两个都不能饿死。",
                resultTitle: "巡逻餐",
                result: "邢捕头觉得自己有了专属待遇，佟湘玉觉得账本终于有了名目。\n\n大嘴很高兴，因为巡逻餐固定少放肉。",
                rumor: "今日传闻：同福客栈推出巡逻餐，限衙门人员，限量，也限肉。",
                tags: ["xing_meal", "money_named", "inn_funny"]
            },
            {
                text: "请他帮客栈贴告示，饭钱抵工",
                speaker: "xing",
                line: "这叫警民合作，不叫打零工。",
                resultTitle: "饭钱抵工",
                result: "邢捕头拿着告示满镇贴，贴完回来又吃了一碗。\n\n佟湘玉算了算，发现还是亏，但亏得比以前有秩序。",
                rumor: "今日传闻：邢捕头为客栈奔走半日，最终以一碗面结案。",
                tags: ["xing_helps", "short_notice", "money_gentle"]
            }
        ]
    },
    {
        title: "小六学办案",
        subtitle: "悬疑可以有，但七侠镇的悬疑通常先跑偏。",
        theme: "误会 / 成长 / 轻悬疑",
        speaker: "xiaoliu",
        line: "我判断，此案背后必有重大隐情。",
        scene: "客栈丢了一只鸡腿。燕小六郑重宣布立案，邢捕头郑重宣布先吃饭。\n\n郭芙蓉说查案就查案，别把所有人都当贼；老白听到“贼”字，筷子停了一下。",
        callbacks: [
            { tag: "xing_meal", text: "邢捕头看见巡逻餐，决定本案可以边吃边办。" }
        ],
        reactions: {
            xiaoliu: "我的直觉告诉我，凶手一定吃过饭。",
            bai: "这判断范围挺大，基本把活人都圈进去了。",
            li: "鸡腿是我留着晚上吃的，谁偷都太不是人了。"
        },
        choices: [
            {
                text: "让小六按证据查，不准先喊口号",
                speaker: "xiaoliu",
                line: "证据显示，鸡腿最后出现在小贝书包旁边。",
                resultTitle: "证据先行",
                result: "小贝承认她拿了鸡腿，但说是为了救一只饿得走不动的狗。大嘴很心疼鸡腿，也很难继续骂。\n\n小六第一次觉得，查清楚不等于简单处罚。",
                rumor: "今日传闻：鸡腿失踪案告破，凶手供认不讳，但动机过于善良。",
                tags: ["xiaoliu_evidence", "mo_kind", "li_soft"]
            },
            {
                text: "顺着他的推理，让大家陪他演一场",
                speaker: "bai",
                line: "我演无辜群众可以，演嫌犯我有心理阴影。",
                resultTitle: "全员嫌疑",
                result: "小六把每个人都审了一遍，最后发现鸡腿在大嘴自己锅边。\n\n大嘴沉默片刻，说这叫厨子对食材的二次观察。",
                rumor: "今日传闻：燕小六破获一起厨子误会厨子的重大案件。",
                tags: ["xiaoliu_confidence", "inn_chaotic", "funny_case"]
            }
        ]
    },
    {
        title: "无双来帮忙",
        subtitle: "无双越能干，小郭越怕自己被比下去。",
        theme: "友情 / 爱情 / 不安全感",
        speaker: "wushuang",
        line: "我听说客栈忙，就来搭把手。若是不方便，我马上走。",
        scene: "祝无双来客栈帮忙，动作麻利，说话轻，连碗都洗得像没脾气。\n\n郭芙蓉看着她，又看了看自己袖口的水渍，忽然不说话了。秀才端着一摞空碗站在中间，夸也不敢夸，递也不知道递给谁。",
        callbacks: [
            { tag: "lv_supports_guo", text: "秀才还记得上一回小郭努力克制的样子，这次开口前终于先看了她一眼。" }
        ],
        reactions: {
            wushuang: "小郭姐姐很好，我不想让她不舒服。",
            guo: "我没有不舒服，我就是突然觉得这碗特别碍眼。",
            lv: "比较伤人，尤其是拿两个本来都很好的人比较。"
        },
        choices: [
            {
                text: "碰一下秀才胳膊，让他先看小郭",
                speaker: "lv",
                line: "芙妹，你今天已经忙了一下午，我刚才该先看见这个。",
                resultTitle: "话说在前面",
                result: "秀才说得有点笨，顺序终于对了。\n\n无双松了一口气，小郭嘴上嫌酸，还是把洗好的碗递给她。两个人隔着一摞碗站着，尴尬少了一层。",
                rumor: "今日传闻：秀才今日说话没有绕远路，客栈上下深感意外。",
                tags: ["lv_boundary", "guo_reassured", "wushuang_kind"]
            },
            {
                text: "把最难缠那桌留给小郭，无双在旁边接碗",
                speaker: "guo",
                line: "那桌我来。你接碗，别抢我话。",
                resultTitle: "不躲比较",
                result: "小郭站到最难缠那桌前，语气硬，手很稳。无双在旁边接碗，没有替她圆场，只在客人要发作时轻轻添了一杯茶。\n\n处理完后，小郭只说了一句：你还挺懂事。",
                rumor: "今日传闻：郭女侠和祝捕快共同击退晚饭高峰，未发生碗碟伤亡。",
                tags: ["guo_faces_compare", "wushuang_respects_guo", "friendship_warm"]
            }
        ]
    },
    {
        title: "大嘴被夸过头",
        subtitle: "人需要被认可，也需要别被捧到下不来。",
        theme: "面子 / 钱 / 搞笑",
        speaker: "li",
        line: "我早说我李大嘴迟早有一道镇店名菜。",
        scene: "有客人夸大嘴的菜有江湖气，大嘴当天就开始给自己设计招牌。\n\n佟湘玉担心他涨价，老白担心他让大家试菜，郭芙蓉担心那道菜会反击。",
        callbacks: [
            { tag: "li_soft", text: "经历过鸡腿案以后，大嘴对食物的感情更深了，深到掌柜开始担心成本。" }
        ],
        reactions: {
            li: "人这一辈子，总得有个拿得出手的菜。",
            tong: "拿得出手可以，拿不出账本不行。",
            bai: "你这菜不是难吃，是有风险提示。"
        },
        choices: [
            {
                text: "保留特色，但别折磨客人",
                speaker: "li",
                line: "这才对，不能把我改没了。",
                resultTitle: "大嘴招牌",
                result: "大家只改火候和咸淡，不改大嘴那股热乎劲。\n\n第二版端上桌，老白吃完没跑，小郭吃完没拍桌，小贝吃完说可以给掌门留半份。",
                rumor: "菜牌新增：大嘴招牌菜。备注：别问配方，问就是祖传加改良。",
                tags: ["li_signature", "inn_menu", "warmth_food"]
            },
            {
                text: "把它做成限量菜，卖给好奇的客人",
                speaker: "tong",
                line: "限量好，卖不出去也可以说卖完咧。",
                resultTitle: "限量话题菜",
                result: "这道菜评价两极，但茶水销量大涨。\n\n大嘴发现招牌菜不一定人人爱吃，但一定要有人愿意聊。",
                rumor: "今日传闻：同福客栈茶水销量上涨三成，原因不便明说。",
                tags: ["li_limited", "money_named", "inn_funny"]
            }
        ]
    },
    {
        title: "小贝当一天掌柜",
        subtitle: "权力很好玩，直到它要负责。",
        theme: "管教 / 钱 / 责任",
        speaker: "mo",
        line: "本掌柜宣布，今日所有规矩重新制定。",
        scene: "小贝被允许当一天小掌柜，第一条新规是掌门可以赊糖葫芦。\n\n佟湘玉忍得很辛苦，老白说这叫提前体验人生险恶，秀才准备记录制度崩坏全过程。",
        callbacks: [
            { tag: "mo_account_book", text: "小贝看见账本就皱眉，但这次没有逃，因为掌柜印章在她手里。" }
        ],
        reactions: {
            mo: "原来掌柜不是坐着收钱的？",
            tong: "你以为额每天心疼钱是天生的？那都是练出来的。",
            li: "她当掌柜第一天就想给厨子涨工钱，我支持。"
        },
        choices: [
            {
                text: "让她自己处理一位赊账客人",
                speaker: "mo",
                line: "你先别哭，我也是第一次当掌柜。",
                resultTitle: "小掌柜犯难",
                result: "赊账客人说家里有难，小贝想免单，又怕赔钱。\n\n佟湘玉没有替她决定，只教她写下名字和日期。小贝第一次知道，心软也要有办法收尾。",
                rumor: "今日传闻：小掌柜批准赊账一笔，并郑重宣布以后当掌柜要配糖。",
                tags: ["mo_responsibility", "tong_teaches", "money_gentle"]
            },
            {
                text: "让她给每个人安排活，自己也必须干",
                speaker: "mo",
                line: "掌柜还要干活？这门派规矩不合理。",
                resultTitle: "掌柜也干活",
                result: "小贝安排得乱七八糟，最后自己端了半天茶。\n\n晚上她把掌柜印章还给佟湘玉，说这东西拿着沉。佟湘玉接过去，只说：知道沉就好。",
                rumor: "今日传闻：衡山派掌门短暂接管客栈，结论是掌柜不好当。",
                tags: ["mo_responsibility", "family_soft", "inn_steady"]
            }
        ]
    },
    {
        title: "旧话新听",
        subtitle: "同一句“贼”，在旧人和新生活里分量不同。",
        theme: "爱情 / 旧身份 / 留下",
        speaker: "bai",
        line: "有些话吧，当年听着像风声，后来想想全是回声。",
        scene: "邢捕头带来一本旧《缉盗指南》，扉页上有展红绫留下的批注。\n\n老白嘴上说旧书不值钱，手却停在那一页。那页旁边夹着一句旧话：你要是个贼该多好。\n\n佟湘玉没追问，只把茶放到他手边。老白低声说，后来我才明白，有些人盼你不是贼，有些时候，是你自己想说：我要不是个贼就好了。",
        callbacks: [
            { tag: "tong_trusts_bai", text: "佟湘玉没有逼他解释。她以前信过他，现在也一样。" }
        ],
        reactions: {
            bai: "以前我想的是别人能不能跟我走，现在想的是我能不能留下。",
            tong: "额不是要翻旧账，额是想知道你还疼不疼。",
            guo: "这话听着怪酸的，但我这回不笑。"
        },
        choices: [
            {
                text: "劝老白把旧书收好，也把话说清楚",
                speaker: "bai",
                line: "我不想回去了。我就是有时候怕，怕自己不够堂堂正正。",
                resultTitle: "旧书收好",
                result: "老白把《缉盗指南》放进柜底，没有烧，也没有藏得太深。\n\n佟湘玉只说：柜子钥匙在额这儿，丢不了。两个人谁也没把话说满，但客栈夜里安静了很多。",
                rumor: "今日传闻：白展堂收起一本旧书，掌柜没有问太多，却把柜子锁好了。",
                tags: ["bai_old_name", "tong_bai_deeper", "inn_steady"]
            },
            {
                text: "用玩笑岔开，但给他留一盏灯",
                speaker: "bai",
                line: "你这人真是，嘴上不饶人，灯倒是留得挺亮。",
                resultTitle: "灯还亮着",
                result: "大家把旧事笑过去，老白也跟着笑。\n\n只是打烊后，那盏灯一直没灭。佟湘玉坐在柜台后拨算盘，老白擦同一张桌子擦了很久。",
                rumor: "今日传闻：客栈今夜有盏灯亮得格外久，没人承认是特意留的。",
                tags: ["bai_lantern", "tong_bai_unsaid", "dream_lantern"]
            }
        ]
    },
    {
        title: "秀才开课没人听",
        subtitle: "被听见，有时候比讲赢更重要。",
        theme: "存在感 / 友情",
        speaker: "lv",
        line: "今日开讲，主题是如何用理性化解日常冲突。",
        scene: "秀才决定给大家开一堂课。小贝带了瓜子，大嘴带了锅铲，老白带了随时离开的腿。\n\n郭芙蓉坐在第一排，表情像在等他讲完，也像在护着他讲完。",
        callbacks: [
            { tag: "lv_boundary", text: "经历过无双那次以后，秀才知道有些话不能只在心里绕。" },
            { tag: "long_notice", text: "大家对秀才长文仍有心理阴影，所以这次一听“开讲”就齐齐后退半步。" }
        ],
        reactions: {
            lv: "我不是非要大家崇拜学问，我只是希望有人认真听。",
            guo: "讲可以，超过一炷香我就开始练掌。",
            bai: "秀才讲课有个优点，安全，不容易发生肢体冲突，因为都困了。"
        },
        choices: [
            {
                text: "请每个人只听一个对自己有用的点",
                speaker: "lv",
                line: "一个也行，一个也是道理落地。",
                resultTitle: "只听一点",
                result: "大嘴听到“先问需求”，决定以后上菜前问忌口；小贝听到“表达清楚”，决定逃课前写理由。\n\n秀才觉得不够完整，但第一次发现，少讲一点反而有人记得。",
                rumor: "今日传闻：秀才开课成功，成功标准从全员听懂调整为有人没睡。",
                tags: ["lv_heard", "inn_learns", "friendship_warm"]
            },
            {
                text: "让小郭替大家提问，别让他自说自话",
                speaker: "guo",
                line: "我问得直接，你别嫌。",
                resultTitle: "有人接话",
                result: "小郭的问题很冲，但每一句都把秀才拉回人话。\n\n秀才一开始急，后来笑了。他发现她不是拆台，是帮他把台搭稳。",
                rumor: "今日传闻：郭芙蓉以提问方式保护课堂，秀才认为这是学术互动。",
                tags: ["lv_heard", "guo_supports_lv", "love_small"]
            }
        ]
    },
    {
        title: "芙蓉讲理失败",
        subtitle: "有些道理，拍不到别人耳朵里。",
        theme: "克制 / 误会 / 面子",
        speaker: "guo",
        line: "我今天不动手，我今天只讲理。",
        scene: "郭芙蓉遇到一个蛮不讲理的客人，决定用秀才教的方法沟通。\n\n她讲到第三句，对方还在胡搅蛮缠；她的手掌开始发亮，秀才的脸开始发白。",
        callbacks: [
            { tag: "lv_heard", text: "秀才看着她努力用自己的方法，紧张得比她还像要动手。" }
        ],
        reactions: {
            guo: "讲理怎么这么累？拍一下不就明白了？",
            lv: "讲理不是保证别人听，是保证自己不先输给火气。",
            tong: "能讲到第三句，已经省了一张桌子。"
        },
        choices: [
            {
                text: "承认她已经很克制，换老白接场",
                speaker: "bai",
                line: "我来，我这人别的不行，圆场很有逃跑经验。",
                resultTitle: "有人接场",
                result: "老白把客人哄走，小郭坐下喝茶，手还在抖。\n\n秀才没有劝她继续忍，只说：你刚才没有拍下去，已经很厉害了。",
                rumor: "今日传闻：郭女侠今日没有排山倒海，桌椅集体表示感谢。",
                tags: ["guo_seen", "bai_rounds", "lv_supports_guo"]
            },
            {
                text: "给她一个明面上的台阶：后院需要女侠镇守",
                speaker: "guo",
                line: "行，我去镇守后院。谁敢说我是躲了？",
                resultTitle: "后院台阶",
                result: "小郭去了后院，狠狠劈柴。\n\n等她回来，事情已经解决。她嘴上说早知道我来，眼神却松了。",
                rumor: "今日传闻：后院今日平安无事，主要因为郭女侠镇守得过于认真。",
                tags: ["guo_energy", "friendship_warm", "inn_practical"]
            }
        ]
    },
    {
        title: "一封没有署名的信",
        subtitle: "被人惦记，不一定非要说出口。",
        theme: "爱情 / 误会 / 温馨",
        speaker: "tong",
        line: "谁写的信不署名？这不是让人心里打算盘嘛。",
        scene: "客栈门缝里塞进一封信，只有一句：天凉，记得添衣。\n\n佟湘玉怀疑是老白，老白怀疑是恶作剧，秀才怀疑是文学。小郭嘴上说无聊，手已经把信折得很整齐。",
        callbacks: [
            { tag: "love_small", text: "秀才和小郭那点没说破的关心，让这封信显得更像一面镜子。" }
        ],
        reactions: {
            tong: "关心人就关心人，弄这么神秘干啥嘛。",
            bai: "不是我啊。我关心人一般比较隐蔽，隐蔽到我自己都不知道。",
            lv: "匿名并不等于无情，有时只是怕情太重。"
        },
        choices: [
            {
                text: "把信贴在后厨门口，请大家各添一句提醒",
                speaker: "li",
                line: "贴这儿好，谁添不添衣我不知道，反正我添柴。",
                resultTitle: "大家都添衣",
                result: "那封信最后变成客栈全员提醒。\n\n第二天每个人都多穿了一点，只有老白嘴硬说自己是为了行动方便。",
                rumor: "今日传闻：客栈出现匿名关怀，最终被掌柜改造成公共告示。",
                tags: ["letter_shared", "inn_warm", "care_unsaid"]
            },
            {
                text: "让每个人写一句不署名的话放进盒子",
                speaker: "mo",
                line: "我写：掌门今日表现很好。谁也别问是不是我写的。",
                resultTitle: "无名话盒",
                result: "盒子里多了很多别扭的关心。\n\n有人写少熬夜，有人写少逞强，有人写少赊账。佟湘玉看完说无聊，却把盒子收进柜台。",
                rumor: "今日传闻：同福客栈新增无名话盒，专收说不出口的好话。",
                tags: ["word_box", "care_unsaid", "found_family"]
            }
        ]
    },
    {
        title: "客房只剩一间",
        subtitle: "生意、人情和规矩，哪一个都不能全丢。",
        theme: "钱 / 人情 / 信任",
        speaker: "tong",
        line: "只剩一间房的时候，最考验掌柜的良心和账本。",
        scene: "雨夜来了两拨客人，都说必须住下。\n\n一边有钱，一边带着老人孩子。佟湘玉看着房牌，算盘没响，人先沉默了。",
        callbacks: [
            { tag: "care_unsaid", text: "那只无名话盒还在柜台底下，像是在提醒客栈：有些话不说，也得做。" }
        ],
        reactions: {
            tong: "额不是圣人，额也要付房租。可这雨下得太硬了。",
            bai: "规矩不是死的，死的是人没地方睡。",
            li: "厨房能打地铺，别嫌，有锅味，暖和。"
        },
        choices: [
            {
                text: "把房间给老人孩子，其他人挤大堂",
                speaker: "tong",
                line: "今晚少赚点，明早多卖点粥补回来。",
                resultTitle: "雨夜挤一挤",
                result: "大堂铺满临时被褥，谁都睡得不舒服，但谁也没被赶进雨里。\n\n老白守了半夜门，嘴上说怕人偷东西，其实是怕风吹灭灯。",
                rumor: "今日传闻：同福客栈雨夜扩容成功，代价是跑堂腰酸。",
                tags: ["rain_shelter", "bai_lantern", "inn_shelter"]
            },
            {
                text: "明说价钱和难处，请有钱客人合住补贴",
                speaker: "lv",
                line: "把难处说清楚，有时候比假装大方更体面。",
                resultTitle: "难处明说",
                result: "有钱客人本来不快，听完也没再争。他多付了一点，让老人孩子住下。\n\n佟湘玉第一次觉得，账本和人情不是非得打一架。",
                rumor: "今日传闻：掌柜把难处摆在明处，居然没有亏，还多收半钱。",
                tags: ["money_clear", "inn_shelter", "trust_clear"]
            }
        ]
    },
    {
        title: "灯笼坏了",
        subtitle: "修一盏灯，也是在修一个能回来的地方。",
        theme: "物件连贯 / 温馨",
        speaker: "bai",
        line: "这灯笼怎么还认人啊？我一碰它就灭。",
        scene: "客栈门口的灯笼坏了，七侠镇夜里一下安静得不像话。\n\n佟湘玉说换新的太贵，大嘴说旧的还能糊，秀才说灯笼有象征意义，郭芙蓉说象征意义能照路吗。",
        callbacks: [
            { tag: "rain_shelter", text: "经历过那个雨夜以后，大家看这盏灯的眼神都不太一样了。" },
            { tag: "bai_lantern", text: "那晚老白留过一盏灯，所以这次他说不修不行，说完又假装只是怕客人找不到门。" }
        ],
        reactions: {
            tong: "灯是要修的，钱也是要算的，这两件事都很要命。",
            bai: "门口没灯，跑堂心里不踏实。",
            lv: "灯笼的意义，在于它让路过的人知道，此处有人。"
        },
        choices: [
            {
                text: "大家各出一点，把旧灯笼修好",
                speaker: "tong",
                line: "修旧的好，旧的认门，也认人。",
                resultTitle: "旧灯重亮",
                result: "灯笼修好那晚，光不亮，却很稳。\n\n小贝说它像掌柜，嘴硬、旧、但还挺有用。佟湘玉追了她半条街。",
                rumor: "今日传闻：客栈旧灯笼重亮，小贝因比喻不当被掌柜追捕。",
                tags: ["lantern_fixed", "dream_lantern", "found_family"]
            },
            {
                text: "让每个人写一小条愿望糊进灯里",
                speaker: "mo",
                line: "我写掌门不用考试，这个愿望比较实用。",
                resultTitle: "灯里有话",
                result: "灯笼里糊进了很多小纸条，没人公开念。\n\n夜里风吹灯响，像客栈把那些说不出口的话悄悄收着。",
                rumor: "今日传闻：灯笼修好了，但里面疑似藏有全客栈不愿公开的心事。",
                tags: ["lantern_words", "care_unsaid", "dream_lantern"]
            }
        ]
    },
    {
        title: "今日不营业",
        subtitle: "活人需要喘气，客栈也需要。",
        theme: "休息 / 钱 / 亲情",
        speaker: "tong",
        line: "不营业一天，额心疼得像少活半集。",
        scene: "大家连忙几天，客栈里每个人都像被算盘拨过。\n\n你提议今日不营业。佟湘玉第一反应是不同意，第二反应是问损失能不能少算点。",
        callbacks: [
            { tag: "lantern_fixed", text: "门口旧灯笼还亮着，像是在说：今天不开门，也还是客栈。" }
        ],
        reactions: {
            li: "不营业可以，我能不能给自己做顿像样的？",
            guo: "休息就休息，谁敢让我干活我就让他也休息。",
            bai: "掌柜的休息起来也像在盘账。"
        },
        choices: [
            {
                text: "关上门，请大家一起吃一顿自己人饭",
                speaker: "li",
                line: "这顿不卖钱，那我可按自己心情做了。",
                resultTitle: "自己人饭",
                result: "没有客人，没有催菜，没有算账。\n\n大嘴做了一桌家常菜，佟湘玉一边说浪费，一边把最后一块豆腐夹走。",
                rumor: "今日传闻：同福客栈罕见不营业，掌柜坚称这是成本控制实验。",
                tags: ["family_meal", "li_hot_meal", "found_family"]
            },
            {
                text: "下午不开门，晚上照常接客",
                speaker: "tong",
                line: "这个好，歇也歇了，钱也没全飞。",
                resultTitle: "半日清静",
                result: "下午的客栈静得能听见锅里冒泡。\n\n晚上开门时，大家虽然还是忙，但没那么散。佟湘玉嘴上说以后少来，心里已经记下了。",
                rumor: "今日传闻：客栈下午短暂清静，晚饭高峰仍旧把所有人打回原形。",
                tags: ["half_rest", "inn_steady", "money_gentle"]
            }
        ]
    },
    {
        title: "小贝写家书",
        subtitle: "亲情有时候藏在写错字的家书里。",
        theme: "亲情 / 上学 / 温馨",
        speaker: "mo",
        line: "我又不是想家，我就是练字。",
        scene: "先生让小贝写家书。她写了三行，划掉两行半。\n\n佟湘玉看见纸团，没有拆，只问她要不要重新拿张纸。小贝说不用，掌门的字越乱越有威严。",
        callbacks: [
            { tag: "family_meal", text: "那顿自己人饭之后，小贝写家书时突然不知道该把谁算进家里。" }
        ],
        reactions: {
            mo: "我写给我哥，又不是写给先生看。",
            tong: "写给谁都好好写，字丑也要丑得有诚意。",
            lv: "家书重在真情，不在辞藻。虽然辞藻也很重要。"
        },
        choices: [
            {
                text: "不替她写，只陪她把话说顺",
                speaker: "mo",
                line: "那我就写：我在这儿挺好的，就是掌柜有点凶。",
                resultTitle: "自己写",
                result: "小贝最后写得歪歪扭扭，但都是自己的话。\n\n佟湘玉看完第一句就想骂，看完最后一句，把信折得很轻。",
                rumor: "今日传闻：小贝家书完成，掌柜评价字太丑，眼圈却有点红。",
                tags: ["mo_family_letter", "tong_guardian", "family_soft"]
            },
            {
                text: "让大家各添一句，变成客栈合写",
                speaker: "bai",
                line: "我写她最近挺乖，虽然证据不足。",
                resultTitle: "合写家书",
                result: "每个人都添了一句，信变得又长又乱。\n\n小贝嘴上嫌烦，最后把那张纸压在书下面。她说这是门派档案，谁也不许乱碰。",
                rumor: "今日传闻：衡山派掌门收到全客栈联合认证，内容包括乖、能吃、偶尔上学。",
                tags: ["mo_family_letter", "found_family", "word_box"]
            }
        ]
    },
    {
        title: "不说破的误会",
        subtitle: "误会拆得太急，反而伤人。",
        theme: "误会 / 信任",
        speaker: "tong",
        line: "额最烦误会，但更烦把误会拆成难堪。",
        scene: "大嘴误以为大家嫌他做饭差，开始偷偷练刀工；小郭误以为秀才嫌她不够温柔，开始说话夹着嗓子；老白误以为掌柜要扣工钱，已经开始找借口。",
        callbacks: [
            { tag: "word_box", text: "无名话盒还在柜台里，可这次每个人都宁愿猜，也不肯直接问。" }
        ],
        reactions: {
            li: "你们要是嫌我做饭，就直说。别让我猜，我猜得饿。",
            guo: "我没有夹嗓子，我这是江湖淑女音。",
            bai: "扣工钱这事不用误会，掌柜的眼神已经很明确了。"
        },
        choices: [
            {
                text: "开一桌饭，把话都放在菜上说",
                speaker: "li",
                line: "饭桌上好说话，吃着吃着就没那么硬了。",
                resultTitle: "饭桌拆误会",
                result: "大家边吃边绕，绕到最后还是说开了。\n\n大嘴知道大家不是嫌弃，是怕他累；小郭知道秀才不是比较，是嘴笨；老白知道掌柜确实想扣，但只扣偷懒的。",
                rumor: "今日传闻：客栈用一桌饭解决三场误会，成本可控，效果显著。",
                tags: ["misunderstanding_cleared", "family_meal", "trust_clear"]
            },
            {
                text: "每个人只说一句真话，不许解释太长",
                speaker: "lv",
                line: "一句真话很难，因为它不能躲在修辞后面。",
                resultTitle: "一句真话",
                result: "一句一句说下来，客栈安静得少见。\n\n小贝最后说：那我也说一句，我今天作业没写。气氛瞬间恢复正常。",
                rumor: "今日传闻：同福客栈短暂真诚，后因小贝作业问题重新混乱。",
                tags: ["truth_one_line", "mo_homework", "inn_funny"]
            }
        ]
    },
    {
        title: "七侠镇安静了一晚",
        subtitle: "越接近分别，越像普通一天。",
        theme: "友情 / 收束 / 日常",
        speaker: "bai",
        line: "今晚太安静了，安静得我想检查门闩。",
        scene: "七侠镇难得没有吵架，没有追捕，没有赊账客人拍门。\n\n大家反而不习惯。佟湘玉拨算盘，秀才擦笔，郭芙蓉练到一半停手，大嘴在厨房试汤，小贝趴在桌上写作业，老白把门闩推来推去。",
        callbacks: [
            { tag: "lantern_words", text: "灯笼里的纸条没有人再提，但每个人路过门口都会抬头看一眼。" },
            { tag: "misunderstanding_cleared", text: "误会散过一次以后，这一晚大家话不多，却没那么别扭。" }
        ],
        reactions: {
            tong: "安静点不好吗？额就喜欢安静，安静省钱。",
            guo: "太安静了，我都不好意思拍桌子。",
            mo: "我作业快写完了，你们谁来制造点事？"
        },
        choices: [
            {
                text: "什么都不推动，陪他们坐一会儿",
                speaker: "tong",
                line: "客官，有时候不管事，也是帮忙。",
                resultTitle: "坐一会儿",
                result: "你没有出主意，也没有打圆场，只是在大堂坐着。\n\n过了一会儿，大嘴端来一碗汤，小贝把作业本往你这边推了半寸，老白说别坐门口有风。",
                rumor: "今日传闻：客栈今夜无大事，客官坐了很久，众人默认他可以继续坐。",
                tags: ["guest_accepted", "quiet_night", "inn_shelter"]
            },
            {
                text: "提议明晚大家一起吃顿小宴",
                speaker: "li",
                line: "小宴？这词好，我能发挥。",
                resultTitle: "小宴约定",
                result: "大家一开始都嫌麻烦，后来又各自提了菜。\n\n佟湘玉说预算有限，老白说气氛到位就行，小贝说掌门要坐主位。没有人认真反对。",
                rumor: "今日传闻：同福客栈约定明晚小宴，掌柜已提前声明不许铺张。",
                tags: ["banquet_promised", "guest_accepted", "family_meal"]
            }
        ]
    },
    {
        title: "同福小宴",
        subtitle: "大家都在，普通得像最好的结尾前一刻。",
        theme: "友情 / 温馨 / 收束",
        speaker: "tong",
        line: "说好小宴，谁敢铺张，额先把谁记账上。",
        scene: "小宴摆起来了。没有大事，没有贵客，只是同福客栈的人都在。\n\n大嘴把菜端得很认真，秀才给每道菜起名，小郭嫌酸却没阻止，小贝抢主位失败，老白在门口挂好灯笼，又回来看大家有没有偷吃。",
        callbacks: [
            { tag: "banquet_promised", text: "这顿饭是昨晚随口约下的，但大家都当了真。" },
            { tag: "guest_accepted", text: "桌边给你留了位置，没人解释为什么。" }
        ],
        reactions: {
            li: "这顿饭不卖钱，但不能不好吃。",
            lv: "若一定要命名，我建议叫同福一席。",
            bai: "别命名了，再命名掌柜的要收费。"
        },
        choices: [
            {
                text: "把前面留下的传闻翻给大家看",
                speaker: "tong",
                line: "额咋觉得这些事都像昨天，又像过了很久。",
                resultTitle: "传闻翻到这里",
                result: "你翻开传闻册，大家一边嫌弃一边补充细节。\n\n说着说着，灯笼暗了一点，外面的七侠镇安静下来。你忽然觉得很困。",
                rumor: "今日传闻：同福小宴上，众人翻看旧事，笑声比菜还满。",
                tags: ["rumor_book_ready", "dream_lantern", "guest_accepted"]
            },
            {
                text: "把传闻册合上，给大家添茶到宴席散场",
                speaker: "bai",
                line: "也行，有些事记在册子里，有些事记在肚子里。",
                resultTitle: "吃完这顿饭",
                result: "这顿饭吃得很慢，慢到掌柜忘了催人收碗。\n\n灯笼暗了一点，茶还温着。你趴在桌上，只想再歇一会儿。",
                rumor: "今日传闻：同福小宴无事发生，只有一位客官后来睡着了。",
                tags: ["quiet_banquet", "dream_lantern", "guest_accepted"]
            }
        ]
    },
    {
        title: "你醒啦",
        subtitle: "这里不是大地方，就是个客栈。",
        theme: "梦核 / 休息 / 被接住",
        speaker: "tong",
        line: "醒醒，客官？",
        scene: "第 20 集是同福小宴，大家都在，灯笼有点暗，外面七侠镇很安静。\n\n你听见有人叫你。",
        finale: true,
        objects: [
            {
                id: "rumors",
                text: "翻看传闻册",
                speaker: "lv",
                line: "这些不是案卷，也不是功绩，只是你在这里坐过的痕迹。",
                body: "传闻册摊在桌上。前 19 集留下的字迹有的工整，有的潦草，像客栈每天的热闹被一页一页压住。"
            },
            {
                id: "noodle",
                text: "看那碗热面",
                speaker: "li",
                line: "坨了也能吃，别嫌。人醒过来，先垫垫肚子。",
                body: "面汤还冒着一点热气。不是大菜，也不稀奇，但它摆在你面前，像有人知道你会饿。"
            },
            {
                id: "tea",
                text: "摸摸茶碗",
                speaker: "tong",
                line: "茶没凉透，说明你没睡太久。也可能是额刚给你添过。",
                body: "茶碗温着。你想不起自己什么时候睡着，只觉得这点温度很实在。"
            },
            {
                id: "door",
                text: "望向门外",
                speaker: "bai",
                line: "外头没事。真有事我先跑，跑完回来叫你。",
                body: "门外的七侠镇很安静。远处没有催命的消息声，也没有赶不完的路。"
            },
            {
                id: "lantern",
                text: "看门口灯笼",
                speaker: "mo",
                line: "灯还亮着呢。你要是不想回去，就说你是我们衡山派外门弟子。",
                body: "灯笼有点暗，但没有灭。它照不远，只照到客栈门口这一小块地方。"
            }
        ],
        finalLine: "今夜无事。客官且歇。"
    }
];

const SKIPPED_EPISODES = new Set(["小贝写家书", "不说破的误会", "七侠镇安静了一晚"]);

const EXTRA_CHOICES = {
    "麻烦客人": {
        text: "请老白绕到门口观察他有没有同伴",
        speaker: "bai",
        line: "我这不是盯梢，我是替掌柜的保护桌椅财产。",
        resultTitle: "看破不说破",
        result: "老白很快发现那人一直往门外瞟，原来同行的人就在街角等他，等着看他能不能把这顿赖掉。\n\n佟湘玉没有当众拆穿，只把茶碗推过去，让他自己把话说圆。人走后，郭芙蓉很不服，说这种人就该一掌；掌柜只说：给人留脸，不代表让人占便宜。",
        rumor: "今日传闻：客栈识破一场免单小把戏，但为了桌椅安康，选择文明收场。",
        tags: ["bai_observes", "tong_steps", "trust_clear"]
    },
    "小贝逃课": {
        text: "陪她去学堂门口坐一会儿，不逼她进去",
        speaker: "mo",
        line: "我就是坐坐啊，不代表我怕先生，更不代表我想念书。",
        resultTitle: "门口坐坐",
        result: "小贝在学堂门口坐了半炷香，嘴上把先生、课本、桌椅都嫌了一遍，最后还是自己站起来进去了。\n\n她还是不爱上学，出来时脸也臭，但她把今天不会的题折了个角，塞给秀才。佟湘玉看见了，没揭穿，只让大嘴晚上多做一个鸡蛋。",
        rumor: "今日传闻：衡山派掌门今日自行走进学堂，官方解释为战略侦察。",
        tags: ["mo_seen", "family_soft", "lv_patient"]
    },
    "老白请假": {
        text: "把门口迎客的活交给他，让他只管说话",
        speaker: "bai",
        line: "说话这事我擅长，尤其是说完不用负责那种。",
        resultTitle: "跑堂门面",
        result: "老白一开始说自己只是站站，后来连哪桌茶淡了、哪位客人想赊账都看得清清楚楚。\n\n佟湘玉故意不夸他，只在打烊后把门闩递给他。老白接得很自然，接完才发现自己又把留下这件事做顺手了。",
        rumor: "今日传闻：白展堂请假未果，但成功证明门口站着也能很忙。",
        tags: ["bai_stays", "bai_needed", "inn_steady"]
    },
    "秀才写告示": {
        text: "让每个人各删一句，只留下大家都听得懂的",
        speaker: "lv",
        line: "删可以，但请各位尊重语言的完整性，尤其是我的尊严。",
        resultTitle: "众人删稿",
        result: "告示被删得很惨，秀才的脸也很惨。\n\n可贴出去之后，客人真看懂了。小郭说这叫实用，秀才说这叫文辞遭遇市井现实。佟湘玉最后把被删掉的长版收进账本，说以后谁赊账就念给谁听。",
        rumor: "今日传闻：客栈告示经历集体删改，读书人受到轻微打击，传播效果显著提升。",
        tags: ["short_notice", "lv_learns_plain", "inn_practical"]
    },
    "芙蓉变温柔": {
        text: "让她只负责迎第一桌客人，剩下的先不管",
        speaker: "guo",
        line: "第一桌可以，第二桌开始我不保证桌子安全。",
        resultTitle: "第一桌平安",
        result: "郭芙蓉把第一桌客人迎得很端正，端正到客人有点害怕。\n\n可等客人真夸她一句，她反而不知道怎么接，只把茶壶放得轻了一点。秀才想夸她，话到嘴边又咽回去，换成一句：茶倒得挺稳。",
        rumor: "今日传闻：郭女侠完成温柔试运行，桌椅损耗暂未上升。",
        tags: ["guo_seen", "lv_supports_guo", "friendship_warm"]
    },
    "掌柜算错账": {
        text: "把相关人都请到一桌，按事实重算",
        speaker: "tong",
        line: "额不是怕算错，额是怕你们看见额算错还记住。",
        resultTitle: "一桌重算",
        result: "秀才把账摊开，老白负责按住想逃的客人，小郭负责按住想逃的老白。\n\n最后错账说清楚了，掌柜面子掉了一点，客栈信任多了一点。她嘴硬说以后谁也不许提，转身却把重算后的账页夹得很平。",
        rumor: "今日传闻：同福客栈公开重算一笔旧账，掌柜表示此事纯属财务演练。",
        tags: ["tong_admits", "trust_clear", "money_clear"]
    },
    "邢捕头蹭饭": {
        text: "让他讲一件真帮过客栈的小事，饭钱另算",
        speaker: "xing",
        line: "这话说的，我为七侠镇流过汗，为同福客栈闻过饭香。",
        resultTitle: "人情有账",
        result: "邢捕头讲起半夜替客栈赶走醉汉的事，讲得很威风，也讲得很饿。\n\n佟湘玉听完给他打了折，但仍然记账。邢捕头很受伤，说人情怎么能写账本；掌柜说：写上才不会忘。",
        rumor: "今日传闻：邢捕头一边讲功劳一边吃面，掌柜一边感动一边记账。",
        tags: ["xing_helps", "money_named", "inn_warm"]
    },
    "小六学办案": {
        text: "让他先问三个人，再下结论",
        speaker: "xiaoliu",
        line: "问三个人就够了吗？我还可以问桌子，桌子也很可疑。",
        resultTitle: "三问成案",
        result: "小六问了大嘴、小贝和老白，线索越来越乱，气势越来越足。\n\n最后他发现不是谁偷鸡腿，是大嘴记错了锅。邢捕头拍拍他，说办案第一步就是别急着像个办案的。小六认真点头，差点把这句写成办案口诀。",
        rumor: "今日传闻：燕小六学习先问再喊，鸡腿案因此减少一半冤情。",
        tags: ["xiaoliu_evidence", "funny_case", "inn_chaotic"]
    },
    "无双来帮忙": {
        text: "安排无双和小郭一起做一件必须配合的活",
        speaker: "wushuang",
        line: "我听小郭姐姐的，只要她别觉得我是在抢。",
        resultTitle: "一起收桌",
        result: "晚饭高峰一来，谁也顾不上别扭。无双手快，小郭手稳，一个收碗一个挡客人，竟然配得很顺。\n\n秀才几次想说话，都被两个人同时瞪回去。等忙完，小郭只说：你手脚还行。无双笑着回：姐姐也很厉害。",
        rumor: "今日传闻：郭女侠与祝捕快共同守住晚饭高峰，秀才全程谨慎发言。",
        tags: ["guo_faces_compare", "wushuang_respects_guo", "lv_boundary"]
    },
    "大嘴被夸过头": {
        text: "让每个人只说一句真评价，不能只哄他",
        speaker: "li",
        line: "真评价可以，但谁说难吃谁今晚别想加菜。",
        resultTitle: "真话调味",
        result: "大家说得很小心：小贝说香但咸，老白说有特色但费水，小郭说能吃但别骄傲。\n\n大嘴一开始脸挂不住，后来真的改了盐。第二锅端出来，掌柜夹了一筷子，没夸，只说：这个能卖。",
        rumor: "今日传闻：李大嘴接受真话若干，菜咸度下降，厨子尊严基本保全。",
        tags: ["li_signature", "trust_clear", "warmth_food"]
    },
    "小贝当一天掌柜": {
        text: "让她自己决定今天最该省哪一笔钱",
        speaker: "mo",
        line: "省钱还不容易？先把先生的束脩省了。",
        resultTitle: "省错地方",
        result: "小贝先想省学费，被佟湘玉瞪回去；又想省柴火，被大嘴瞪回去；最后决定少买零嘴。\n\n她不情不愿地把铜板放回匣子里，像做了很大的牺牲。佟湘玉没笑她，只说掌柜每天都要牺牲很多小馋虫。",
        rumor: "今日传闻：小掌柜学习成本控制，第一笔牺牲来自零嘴预算。",
        tags: ["mo_responsibility", "money_lesson", "tong_teaches"]
    },
    "旧话新听": {
        text: "请老白把现在想说的话说给屋里的人听",
        speaker: "bai",
        line: "以前很多话说给江湖听，现在吧，说给屋里这几个人也够了。",
        resultTitle: "话落在屋里",
        result: "展红绫没有逼问，佟湘玉也没有抢话。\n\n老白把那句旧话轻轻放下，又把现在这句话说得很慢。桌边没人起哄，连小郭都忍住了。那一刻，旧江湖没有消失，只是退到门外。",
        rumor: "今日传闻：白展堂旧话重听，最后还是把脚留在同福客栈地上。",
        tags: ["bai_stays", "tong_trusts_bai", "hongling_respected"]
    },
    "秀才开课没人听": {
        text: "让他只讲一个故事，不许讲道理",
        speaker: "lv",
        line: "故事里自然有道理，不让我点明，实在有点残忍。",
        resultTitle: "故事先行",
        result: "秀才讲了一个书生赶路借宿的小故事，讲到一半，小贝居然没跑。\n\n他差点忍不住总结中心思想，被小郭用眼神按住。最后大家各自听出不同东西，秀才第一次发现：不把道理说死，别人反而会多想一会儿。",
        rumor: "今日传闻：吕秀才课堂出现罕见听众，原因疑似讲得像人话。",
        tags: ["lv_heard", "lv_learns_plain", "inn_learns"]
    },
    "芙蓉讲理失败": {
        text: "让她先把火气说出来，再决定要不要讲理",
        speaker: "guo",
        line: "我现在很生气，但我先声明，我已经比以前文明很多了。",
        resultTitle: "火气有名字",
        result: "郭芙蓉把自己为什么生气说完，声音还是冲，但手没动。\n\n客人被她吓住，也听懂了一点。秀才没有急着纠正她的语气，只给她倒了杯水。小郭接过水，小声说：我知道我刚才吓人了。",
        rumor: "今日传闻：郭女侠今日用语言完成一次小型排山倒海。",
        tags: ["guo_seen", "lv_supports_guo", "friendship_warm"]
    },
    "一封没有署名的信": {
        text: "让大家猜一句，不猜写信人，只猜这句话给谁",
        speaker: "tong",
        line: "猜可以，谁敢借机表白，额先收茶水钱。",
        resultTitle: "猜给谁听",
        result: "没人猜出写信人，却猜出每个人最近都在硬撑。\n\n大嘴猜小郭，小郭猜秀才，秀才猜掌柜，掌柜嘴上嫌烦，最后把信折好放进柜台。信没有破案，但让客栈当天少了几句硬话。",
        rumor: "今日传闻：匿名信未破，客栈成员互相关心证据增多。",
        tags: ["care_unsaid", "found_family", "love_small"]
    },
    "客房只剩一间": {
        text: "把大堂收拾出来，先让所有人别站在雨里",
        speaker: "li",
        line: "大堂能睡，厨房也能睡，就是别睡锅里。",
        resultTitle: "先避雨",
        result: "大家先把湿透的人迎进来，争房间的声音立刻小了。\n\n佟湘玉还是心疼被褥，老白还是担心门口，小郭抱着一摞干布巾来回跑。最后房间怎么分，反而没那么难了，因为所有人先被当成人看见了。",
        rumor: "今日传闻：同福客栈雨夜临时扩容，掌柜表示被褥损耗需另行统计。",
        tags: ["rain_shelter", "inn_shelter", "inn_warm"]
    },
    "灯笼坏了": {
        text: "先不换新的，问问谁还记得这盏灯的旧事",
        speaker: "lv",
        line: "一物之所以为旧，不是因为它破，是因为它被人记得。",
        resultTitle: "旧灯有旧事",
        result: "每个人都说了一点：谁夜里靠它找过门，谁躲雨时看过它，谁打烊后嫌它费油。\n\n灯笼还是那盏灯，修起来却不只像修东西。老白最后爬上去挂灯，嘴上说怕掌柜乱花钱，手上系得很仔细。",
        rumor: "今日传闻：旧灯笼修复工程启动，原因包括照明、认路与若干不愿承认的舍不得。",
        tags: ["lantern_fixed", "bai_lantern", "dream_lantern"]
    },
    "今日不营业": {
        text: "门不开，但给熟人留一壶茶",
        speaker: "tong",
        line: "不营业是不营业，路过的人渴了，总不能让他干站着嘛。",
        resultTitle: "门不开茶还热",
        result: "客栈大门半掩，桌上留着一壶茶。没人吆喝，也没人赶客。\n\n傍晚有人路过，喝了半碗，放下两个铜板就走。佟湘玉嘴上嫌他多事，转头把铜板收得很轻。",
        rumor: "今日传闻：同福客栈今日不营业，但茶壶没有严格执行。",
        tags: ["half_rest", "guest_accepted", "inn_shelter"]
    },
    "同福小宴": {
        text: "把座位空一个，谁也不用解释留给谁",
        speaker: "tong",
        line: "空着就空着，又不多占地方。谁问谁付茶钱。",
        resultTitle: "空位不空",
        result: "那只空碗摆在桌边，大家都看见了，又都没说破。\n\n小贝抢菜时还记得绕开它，大嘴盛汤时顺手多盛半勺。灯笼暗下来之前，你忽然发现，自己好像一直都坐在这个位置上。",
        rumor: "今日传闻：同福小宴多留一副碗筷，掌柜坚称只是摆桌习惯。",
        tags: ["quiet_banquet", "guest_accepted", "dream_lantern"]
    }
};

const FIRST_CHOICE_TEXT_REWRITES = {
    "先给茶，问他是不是遇到难处": "倒杯茶，低声问他是不是手头紧",
    "让他留下干活抵饭钱": "把后院柴刀递给他，饭钱先记着",
    "请老白绕到门口观察他有没有同伴": "给老白使个眼色，让他去门口看一眼",
    "让小贝自己说今天为什么不想去": "把书包放回她手里，让她自己说怕什么",
    "先罚她帮掌柜算半天账": "把账本推给小贝，让她试试掌柜的难处",
    "陪她去学堂门口坐一会儿，不逼她进去": "陪小贝走到学堂门口，先坐一会儿",
    "给老白留最轻的活，看他还愿不愿意留下": "把最轻的茶盘塞给老白，看他接不接",
    "让大家轮流说一件需要他的事": "请桌边每个人说一句今天缺他哪儿不顺手",
    "把门口迎客的活交给他，让他只管说话": "把门口位置让给老白，让他先招呼客人",
    "采用小贝版短告示": "把小贝那张短告示先贴到门口试试",
    "保留秀才长文，专治吵架": "把秀才长文收起来，留给最吵的那桌念",
    "让每个人各删一句，只留下大家都听得懂的": "把笔递给大家，一人删一句看不懂的",
    "帮她把“忍住没拍”也算成进步": "把没拍坏的那只筷子拿给小郭看",
    "安排她去后院劈柴发泄": "把后院柴堆指给小郭，先让火气有地方去",
    "让她只负责迎第一桌客人，剩下的先不管": "让小郭先迎第一桌，其他桌你来挡",
    "私下提醒，让她自己圆回来": "趁没人注意，把错账那页轻轻推给掌柜",
    "当众说清，免得大家互相猜": "把账本摊到桌中间，让大家一起重算",
    "把相关人都请到一桌，按事实重算": "把几个人请到一桌，算盘也摆上来",
    "给他设一份捕头巡逻餐，便宜但记账": "给邢捕头写一张巡逻餐小牌子",
    "请他帮客栈贴告示，饭钱抵工": "把告示卷塞给邢捕头，让他跑一趟街口",
    "让他讲一件真帮过客栈的小事，饭钱另算": "先让邢捕头讲清楚，他到底帮过哪件忙",
    "让小六按证据查，不准先喊口号": "按住小六的腰刀，让他先看锅边线索",
    "顺着他的推理，让大家陪他演一场": "把众人叫到一桌，陪小六把案子演一遍",
    "让他先问三个人，再下结论": "把大嘴、小贝、老白叫来，让小六一个个问",
    "让秀才先肯定小郭，再感谢无双": "碰一下秀才的胳膊，让他先看小郭",
    "安排无双负责外场，小郭负责后院练手": "把外场和后院分开，让两个人都能喘口气",
    "安排无双和小郭一起做一件必须配合的活": "把一摞碗递给无双和小郭，让她们一起收桌",
    "保留特色，但别折磨客人": "把那盘菜推回大嘴面前，让他少放半勺盐",
    "把它做成限量菜，卖给好奇的客人": "在菜牌边写上限量二字，让好奇客人自己点",
    "让每个人只说一句真评价，不能只哄他": "请每个人尝一口，只准说一句实话",
    "让她自己处理一位赊账客人": "把赊账条递给小贝，让她自己问清楚",
    "让她给每个人安排活，自己也必须干": "让小贝排活，最后给她也留一只茶盘",
    "让她自己决定今天最该省哪一笔钱": "把钱匣推给小贝，让她自己挑一笔该省的",
    "劝老白把旧书收好，也把话说清楚": "把那本旧书递回老白手里，让他自己收好",
    "用玩笑岔开，但给他留一盏灯": "接一句玩笑，顺手把门口灯留亮",
    "请老白把现在想说的话说给屋里的人听": "把桌边让开一点，让老白把话说给屋里人听",
    "请每个人只听一个对自己有用的点": "请大家先别散，每人只听秀才一句",
    "让小郭替大家提问，别让他自说自话": "把凳子推给小郭，让她替大家问一句",
    "让他只讲一个故事，不许讲道理": "把茶杯按到秀才手边，只许他先讲个故事",
    "承认她已经很克制，换老白接场": "把水递给小郭，再叫老白去圆场",
    "给她一个明面上的台阶：后院需要女侠镇守": "指指后院柴堆，给小郭一个能退开的理由",
    "让她先把火气说出来，再决定要不要讲理": "让小郭先说自己气在哪儿，手先别动",
    "把信贴在后厨门口，请大家各添一句提醒": "把那封信贴到后厨门口，让大家顺手添一句",
    "让每个人写一句不署名的话放进盒子": "拿个空盒放到柜台下，谁想写就塞进去",
    "让大家猜一句，不猜写信人，只猜这句话给谁": "把信纸摊开，只猜这句话像写给谁",
    "把房间给老人孩子，其他人挤大堂": "把房牌递给老人孩子，再去大堂铺被褥",
    "明说价钱和难处，请有钱客人合住补贴": "把价钱和难处摊开，请那位客人搭把手",
    "把大堂收拾出来，先让所有人别站在雨里": "先搬开大堂桌椅，让淋雨的人都进门",
    "大家各出一点，把旧灯笼修好": "把旧灯笼取下来，叫大家各找一点能用的材料",
    "让每个人写一小条愿望糊进灯里": "裁几张小纸条，糊进旧灯笼里",
    "先不换新的，问问谁还记得这盏灯的旧事": "先别买新的，把旧灯笼放到桌上听大家说",
    "关上门，请大家一起吃一顿自己人饭": "把门闩插上，叫大家先坐下吃顿热饭",
    "下午不开门，晚上照常接客": "把门牌翻到半日清静，晚上再开",
    "门不开，但给熟人留一壶茶": "门先不开，在门边留一壶热茶",
    "把前面留下的传闻翻给大家看": "翻开传闻册，把前面的日子念给大家听",
    "把传闻册合上，给大家添茶到宴席散场": "合上传闻册，给每个人添一轮茶",
    "把座位空一个，谁也不用解释留给谁": "多摆一副碗筷，谁也别问给谁"
};

const EPISODE_DETAILS = {
    "麻烦客人": "那人一开始声音不大。他先把筷子摆得很齐，又把菜翻了两下，像是在等谁先问他一句。可客栈正赶上饭点，大嘴催菜，老白跑堂，小郭端茶端得胳膊发酸，没人有空照顾一个陌生人的别扭。\n\n等他终于拍桌，整间大堂都停了一瞬。佟湘玉先看到他袖口磨破的边；老白看见他脚尖一直朝着门口；小郭盯着那张快被拍裂的桌子。\n\n这件事如果只按饭钱算，很简单。可一旦有人把面子、难处和撒泼揉在一起，客栈就不能只算账。你坐在旁边，能感觉到这桌缺一个能让他把话说下去的台阶。",
    "小贝逃课": "早上小贝把书包藏在米缸后面，藏得很认真，认真到大嘴舀米时差点把课本一起下锅。她不承认自己逃课，只说衡山派掌门今日要体察民情。\n\n佟湘玉一边骂她，一边把书包上的灰拍干净。秀才本来想讲读书明理，刚开口就被小贝用一句“你明理你怎么还欠账”顶了回去。小郭觉得小孩不听话就该吓一吓，老白觉得小孩越吓跑得越快。\n\n小贝一时半会儿爱不上学堂。她怕先生点名，怕题不会，怕自己一露怯就被当成小孩。她嘴上越硬，脚尖越往后退，像只要把“烦”说得够大声，就没人听见那个“怕”。",
    "老白请假": "老白一大早就扶着腰从楼梯上下来，动作夸张得像昨晚跟整个江湖打了一架。可他扶腰的手一边换位置，一边还能精准接住快掉的茶盘。\n\n佟湘玉看破不说破，账本翻得哗哗响。小郭等着看他露馅，秀才试图从医学和伦理两方面分析请假的合理性，大嘴只关心今天少一个跑堂会不会轮到自己端菜。\n\n老白有偷懒，也有试探。他知道自己有用，也怕别人太知道他有用。留在一个地方，意味着别人会指望你；被人指望久了，就不好再说走就走。今天这场请假，表面是腰疼，里面藏着一句话：客栈到底用得上他，还是离不开他。",
    "秀才写告示": "客栈最近桌椅损耗严重，佟湘玉决定立规矩。秀才听见“写告示”三个字，眼睛一下亮了，像终于等到读书人的用武之地。\n\n半个时辰后，他写出一整张密密麻麻的告示，从待客礼法写到损坏赔偿，从君子慎独写到桌椅寿命。小贝看了三行开始打哈欠，小郭看了五行想拍桌，老白看完标题就说这东西贴出去能防贼，因为贼也看不完。\n\n秀才有才华，也很怕别人不认真听。可客栈终究是客栈，来吃饭的人只想知道什么能做、什么不能做。那张纸如果能从长文里瘦下来，也许客人真能照着做。",
    "芙蓉变温柔": "郭芙蓉听见有客人说她凶，表面不在乎，擦桌子的力气却越来越大。那块抹布被她拧得像跟她有仇，桌角也跟着吱呀一声。\n\n佟湘玉想让她学着温柔点，可这话一出口就像在说她从前全错了。秀才想劝，又怕越劝越酸；老白在旁边看热闹，看着看着发现小郭是真的有点难过。\n\n小郭会温柔，只是怕一温柔就被当成好欺负；她也怕自己努力改了，大家还是只记得那个一掌拍桌的郭芙蓉。今天这点别扭绕来绕去，最后落在两个字上：克制。",
    "掌柜算错账": "那七钱银子的错账本来不大，大到不值得吵，小到最伤掌柜的面子。偏偏账本摊在柜台上，秀才看见了，老白也看见了，连小贝都看见了。\n\n佟湘玉第一反应是把账本合上。她开客栈这么多年，钱算错可以补，掌柜的威信一旦松了，就像门闩没插好，夜里总让人不踏实。\n\n可钱这东西，越藏越像心虚。大嘴担心少买肉，小郭担心客人闹事，秀才担心原则被糊弄过去。账本躺在柜台上，像一枚小小的钉子，把银子和体面同时钉住了。",
    "邢捕头蹭饭": "邢捕头进门时先咳了一声，表示自己是公务路过。可他坐的位置离后厨最近，眼神也一直跟着大嘴的锅走，公务显然很香。\n\n佟湘玉的算盘一响，他就开始讲自己为七侠镇风里来雨里去。老白听得直乐，小郭觉得捕头也该付钱，秀才说人情与制度要兼顾，大嘴只问他到底要不要加面。\n\n邢捕头有功劳，也有饭量。客栈里最难算的账，往往绕着熟人的脸面打转。这顿饭要是只当白吃，掌柜心里过不去；要是只按银子算，熟人脸上也挂不住。",
    "小六学办案": "鸡腿不见的时候，小六正好路过。他立刻站直，声音比线索先到：此案不简单。小贝咬着半块饼看他，大嘴捂着锅像失主，老白已经准备好随时脱身。\n\n小六想办一件漂亮案子，最好能让邢捕头夸他几句。可他越想证明自己，越容易先喊口号再找证据。小郭觉得这架势很有江湖气，秀才觉得这架势很危险。\n\n鸡腿案本身不大，大不了少一口肉。一个年轻捕快第一次发现：查清楚，需要慢慢问；抓人认错，往往只会把误会吓得满街跑。",
    "无双来帮忙": "无双来得很早，进门先挽袖子，没问谁安排，已经把两桌碗收了。她越能干，客栈越顺手，小郭的脸色也越不顺手。\n\n晚饭高峰压到门口，桌上等菜，后厨催碗，佟湘玉一边拨算盘一边喊人。小郭端着茶盘从无双身边擦过去，袖口扫到一只碗，碗沿一歪，被无双稳稳接住。\n\n秀才想感谢无双，又想照顾小郭，开口却像在两边添柴。无双更小心，小郭更别扭。三个人都站在自己那点难处里，谁也没真想伤谁；只是碗碟和话都容易磕碰。",
    "大嘴被夸过头": "有个外地客人夸大嘴的菜有江湖气，大嘴当天走路都轻了半寸。到了晚饭，他决定推出招牌菜，名字还没想好，盐已经先放重了。\n\n佟湘玉一听“招牌”就想到涨价，一想到涨价又想到成本。老白试吃一口后开始疯狂喝茶，小郭说能不能别让客人拿命支持梦想，小贝倒是很兴奋，因为这菜配饭特别下饭，也特别费水。\n\n大嘴需要被认可。他平时被嫌弃得多，真有人夸一句，他就容易把那句夸奖顶在头上走。这时候只泼冷水，他会蔫；只哄他，他会飘。灶台边那点热乎劲，得有人帮他按住火候。",
    "小贝当一天掌柜": "小贝拿到掌柜印章时，第一反应是给自己放假，第二反应是给所有人安排活。她坐在柜台后面，脚够不着地，气势倒是很足。\n\n很快问题就来了：客人赊账、后厨缺菜、跑堂偷懒、先生来找人。小贝发现掌柜坐在柜台后面，照样会被每个人追着问怎么办。\n\n佟湘玉没有立刻接回印章。她站在旁边看着小贝犯难，嘴上骂，眼神却没有真急。小贝不会一下子长大，但印章压在手心里，总会让人知道有些决定拿着发沉。",
    "旧话新听": "展红绫来的时候，客栈比平时安静。她没有拔刀，也没有追人，只是站在门口看了一眼老白。那一眼像从很远的江湖里吹进来，吹得老白肩上的抹布都轻了一下。\n\n佟湘玉没有立刻酸，也没有装大方。她只是继续拨算盘，算盘珠子响得比平时慢。小郭想看热闹，被秀才拦了一下；大嘴不知道该不该上菜，小贝倒是很直接，问老白是不是又有仇家。\n\n展红绫带来的是旧江湖，佟湘玉守着的是这张桌子。老白过去那个身份悬在中间：如果他不是贼，很多话会不会不一样；可他现在留在这里，又到底是因为躲累了，还是因为真的想留下。",
    "秀才开课没人听": "秀才决定给大家开一堂课，主题从修身讲到表达，从表达讲到人生。他把凳子摆得很整齐，还在柜台边放了一杯茶，像真的要开坛讲学。\n\n听众到场很不稳定：小贝是被佟湘玉押来的，老白坐在门边方便撤退，大嘴端着菜路过三次都没坐下，小郭说如果讲得无聊她就去后院练掌。\n\n秀才想被听见，但他越想证明自己有学问，越容易把人推远。他的内容很多，入口太窄。话要是一直悬在书上，人就散了；如果能先落到桌边，也许有人愿意多听一句。",
    "芙蓉讲理失败": "有位客人故意拿话刺人，说郭芙蓉端茶像押镖，笑声还不小。小郭的手停在半空，茶壶稳住了，火气没稳住。\n\n以前她可能已经拍下去了。今天她硬是忍了三句，第三句忍得脸都红了。秀才在旁边比她还紧张，佟湘玉已经开始估算桌子赔偿，老白准备随时把客人圆出去。\n\n讲理最难的地方，是对方未必配合。小郭已经进步了，只是还不知道忍住第一掌之后该怎么办。她缺的是下一口气落在哪儿。",
    "一封没有署名的信": "那封信被夹在门缝里，纸很普通，字也不算好看，只写着天气转凉，夜里别逞强。没有署名，反而让每个人都觉得像在说自己。\n\n佟湘玉怀疑有人故弄玄虚，老白第一时间撇清，秀才开始分析笔迹，小郭嘴上说无聊，手却把信拿远了一点，像怕别人看见她认真读。大嘴问是不是提醒他多添柴，小贝问能不能提醒先生少布置作业。\n\n这封信一旦破案，就只剩一个写信人；暂时放在桌上，它就像客栈里所有说不出口的关心，还能照到更多人的别扭。",
    "客房只剩一间": "雨下得很急，街上行人挤进客栈，衣角滴了一地水。偏偏客房只剩一间，来的却有老人、孩子、赶路的商人，还有一个愿意多付钱的客人。\n\n佟湘玉看着房牌，心疼生意，也心疼站在雨里的人。老白去门口挡风，小郭抱来干布巾，秀才试图按先来后到讲规则，大嘴已经在想厨房能不能临时铺个地铺。\n\n房间给谁都牵动一串事。给了人情，规矩会松；守了规矩，人会冷。客栈开门做生意，可门开着，也意味着有人真会把这里当成避雨的地方。",
    "灯笼坏了": "门口那盏旧灯笼坏得不突然。它先是暗了几晚，又在一阵风里歪了一下，最后终于不亮了。白天看着只是个旧物，到了夜里，客栈门口就空了一块。\n\n佟湘玉第一反应是问修灯多少钱，问完又嫌自己太小气。老白说门口没灯不踏实，小贝说换新的才威风，大嘴说旧灯还能不能挂后厨照灶台，秀才则开始讲灯火与归处。\n\n这盏灯很小，却被很多人靠着找过门。大家嘴上谈修不修、换不换，心里都在掂量：一个地方被人记住，靠的是新东西，还是那些旧得舍不得扔的东西。",
    "今日不营业": "佟湘玉宣布今日不营业时，所有人都愣了。老白先摸门闩，像怀疑自己听错；大嘴问那午饭做不做；小郭问不营业是不是就不用干活；小贝立刻提出掌门也应该休假不上学。\n\n可门一关，客栈反而更不像休息。有人想擦桌，有人想盘账，有人觉得不干活浑身不自在。平时大家被客人推着跑，真停下来，才发现自己也不知道怎么歇。\n\n休息这件事，说起来容易，做起来很难。尤其是佟湘玉这种人，嘴上最会算钱，心里最不会放过自己。门关着的时候，客栈也还得像个能坐下来的地方；只是这回要照顾的不是客人，是自己人。",
    "同福小宴": "小宴摆得很随意。一开始只是大嘴说剩了点菜，后来小贝说掌门要加一个鸡腿，秀才说既然人齐不如取个名字，小郭说再取名她就走，老白说别走，走了没人收拾他被掌柜瞪出来的尴尬。\n\n灯笼比平时暗，桌上的菜也不成席面。可每个人都在：掌柜还在算这顿亏不亏，老白帮她把茶添满，小郭嘴硬地把好菜往别人那边推，秀才认真记录今日传闻，大嘴等着别人夸，小贝已经开始抢。\n\n前面的十九日没有变成什么惊天大事，只是一点一点把你放进这张桌子旁边。等大家说笑声慢下来，你忽然发现，自己困得很自然，像一个在客栈里待久了的人，终于可以趴下歇一会儿。"
};

const EPISODE_EXTRA_DEPTH = {
    "麻烦客人": "佟湘玉最后把目光落到你这桌。你刚才看见了那人藏钱袋时的慌，也看见了小郭快压不住的火。客栈里有些事就是这样，谁先递一句话，后面就可能完全不一样。",
    "小贝逃课": "小贝躲到你旁边，因为你暂时不像先生，也不像嫂子。她把书包往你脚边一推，小声说自己烦。这个“烦”要是没人接住，很快就会变成一场吵架。",
    "老白请假": "老白说自己病得厉害，却把你桌上的茶续得刚刚好。佟湘玉看见了，没戳穿，只问你一句：客官，你说这人到底还能不能干活？这个问题问得轻，其实是在给老白一个自己走回来的机会。",
    "秀才写告示": "告示被递到你手里时，墨还没干。秀才等着一个懂他的人，掌柜等着一个能让客人看懂的人，小贝等着一个能少写字的人。你这一句意见，会决定这张纸是贴在门口，还是变成后院助眠工具。",
    "芙蓉变温柔": "第一桌客人已经进门，郭芙蓉站在柜台边，像上战场前等号令。她不想被人看笑话，也不想让掌柜觉得自己永远改不了。你能替她选一个不会把她逼炸的开始。",
    "掌柜算错账": "账本摊开时，你正好坐在柜台最近的位置。你听见掌柜把算盘拨重了一下，也听见秀才轻轻吸了口气。若你装没看见，事情会过去；若你当众指出，事情也会过去，只是留下的东西不一样。",
    "邢捕头蹭饭": "邢捕头把筷子摆好，已经默认这顿饭会落在桌上。掌柜没直接赶人，是因为熟人难办；也没直接上菜，是因为账本也难办。你这个外来客官反而成了中间那个人，能让人情不至于太难看。",
    "小六学办案": "小六把你也列成临时见证人，问你有没有看见鸡腿最后出现在哪里。他的认真很真，莽撞也很真。若没人帮他把节奏按慢一点，这案子最后多半会变成所有人互相证明自己没偷吃。",
    "无双来帮忙": "佟湘玉把你叫到柜台边，低声让你递一把手。前堂还有三桌没收，后厨还缺一摞碗；你这一下递给谁，谁就先被大家看见。",
    "大嘴被夸过头": "大嘴端着新菜到你面前，眼睛亮得让人不忍心说重话。可整桌人都在看你第一口的反应，连掌柜都停了算盘。你要是只哄他，他会飘；你要是只打击他，他会蔫。火候不只在锅里。",
    "小贝当一天掌柜": "小贝把第一张赊账条推给你看，问这人是不是该信。她装得很老练，可手指一直按着印章边缘。今天她不会一下子长大，但她可以第一次明白：掌柜做决定时，心软和怕亏经常坐在同一张凳子上。",
    "旧话新听": "展红绫看见你时点了点头，像把你也当成这间客栈今日在场的人。老白没有躲远，佟湘玉也没有走开。桌上那点旧话不能由你替他们说，但你可以决定，是把它推成热闹，还是给它留一点安静。",
    "秀才开课没人听": "秀才把第一张凳子推给你，说客官先坐。你坐下，其他人才不好意思立刻散。于是你忽然成了这堂课能不能开下去的第一个听众。你这一坐，得帮他找到一句别人愿意继续听的话。",
    "芙蓉讲理失败": "小郭看向你，像想确认自己忍到现在有没有意义。她的火气已经到了手腕上，再往前一步就是旧习惯。你能帮她把下一步换成别的动作。",
    "一封没有署名的信": "信纸最后落到你手里，因为你最不像嫌疑人。大家嘴上都说随便看看，眼神却一个比一个认真。你若非要找出写信人，这件事会变小；你若让这句话继续流动，它可能会照到更多人身上。",
    "客房只剩一间": "雨水已经漫到门槛边，站着的人越来越多，柜台前的声音也越来越急。佟湘玉问你，想听一个不在账本里的办法。客栈能不能像客栈，往往就在这种晚上见分晓。",
    "灯笼坏了": "你是第一个说门口比昨晚暗的人。老白听见后立刻抬头，掌柜也跟着看了一眼。灯笼坏得很小，可一旦有人说出来，大家才发现自己都习惯了那点光。你提醒了他们：门口少了一个让人安心的东西。",
    "今日不营业": "门关上后，佟湘玉反而不知道手该放哪儿。她看见你还坐在老位置，就像看见一个问题：不做生意的时候，客栈还算不算客栈？你今天就陪他们试一试，不忙的时候怎么相处。",
    "同福小宴": "这顿小宴没有人正式邀请你，可碗筷就是多了一副。没人解释这副碗筷是谁摆的，也没人问你为什么还在。你前面留下的那些选择，像一页页传闻压在桌边，让这个位置不再像临时添出来的。"
};

function withExtraChoice(episode) {
    const choices = [...(episode.choices || [])];
    if (!episode.finale && EXTRA_CHOICES[episode.title]) {
        choices.push(EXTRA_CHOICES[episode.title]);
    }
    return choices;
}

function withPatchedChoices(episode, choices) {
    const softened = choices.map((choice) => ({
        ...choice,
        text: FIRST_CHOICE_TEXT_REWRITES[choice.text] || choice.text
    }));
    if (episode.title !== "今日不营业") return softened;
    return softened.map((choice) => ({
        ...choice,
        tags: Array.from(new Set([...(choice.tags || []), "guest_accepted"]))
    }));
}

function buildEpisodes(rawEpisodes) {
    return rawEpisodes
        .filter((episode) => !SKIPPED_EPISODES.has(episode.title))
        .map((episode) => {
            const choices = withPatchedChoices(episode, withExtraChoice(episode));
            const detail = EPISODE_DETAILS[episode.title];
            const extraDepth = EPISODE_EXTRA_DEPTH[episode.title];
            return {
                ...episode,
                scene: [episode.scene, detail, extraDepth].filter(Boolean).join("\n\n"),
                choices
            };
        });
}

const EPISODES = buildEpisodes(RAW_EPISODES);

const FOLLOW_UP_CHOICES = [
    {
        text: "先按住最容易炸的人，把茶杯挪远一点",
        title: "先稳住场面",
        speaker: "bai",
        line: "江湖经验，先别让桌子参与讨论。",
        body: "你先把最冲的那个人拦住，事情没有立刻变好，但至少没往坏处滚。等火气降下来，大家终于能听见真正的问题在哪里。",
        rumorNote: "后来大家承认，今天能收场，先靠有人把场面按住了。",
        tags: ["scene_stable", "bai_rounds", "inn_steady"]
    },
    {
        text: "把茶放到当事人手边，等他说出那句硬话",
        title: "话说到根上",
        speaker: "tong",
        line: "话憋着最费钱，憋久了还费桌子。",
        body: "你把话题推回那个最难开口的人身上。几句磕磕绊绊的话说完，客栈安静了一阵，事情反而有了能落脚的地方。",
        rumorNote: "今日这事没有靠热闹解决，而是靠一句终于说出口的真话。",
        tags: ["truth_one_line", "trust_clear", "care_unsaid"]
    },
    {
        text: "接过眼前的活，让他们边忙边说",
        title: "边忙边说",
        speaker: "li",
        line: "有啥事先搭把手，手忙起来，嘴就没那么硬了。",
        body: "你先接过一件具体的活，端茶、收碗、递账本，客栈重新动起来。人一边忙，一边反倒没那么端着，几句真话就混在锅气和脚步声里露了出来。",
        rumorNote: "这一天最后在一阵忙乱里慢慢顺下来了。",
        tags: ["inn_practical", "li_hot_meal", "found_family"]
    }
];

const EPISODE_FOLLOW_UPS = {
    "麻烦客人": [
        { text: "把茶碗推近一点，让他自己把钱袋的事说圆", title: "茶碗留话", speaker: "tong", line: "给台阶可以，额可没说饭钱也一起给了。", body: "茶碗一推过去，那人终于把钱袋丢了的事说出口。掌柜没有笑他，老白也没有拆穿他刚才的硬撑。等钱袋找回来，他付钱时手还有点抖，却没再拍桌。", rumorNote: "客栈后来多了一条没写出来的规矩：先递茶，再算账。", tags: ["tong_steps", "trust_clear", "inn_warm"] },
        { text: "把后院柴刀放到他手边，让他自己选抵不抵饭", title: "劈柴抵饭", speaker: "li", line: "柴火劈开了，饭钱也就有着落了。", body: "那人盯着柴刀看了一会儿，最后跟着大嘴去了后院。半个时辰后，他气没了，柴多了，掌柜把账记得明明白白。小郭很遗憾，因为今天桌子没机会证明自己结实。", rumorNote: "后院柴堆高了一截，客栈少了一场架。", tags: ["li_hot_meal", "inn_practical", "scene_stable"] },
        { text: "请老白送他出门，顺便把街角那个人也请进来", title: "街角同伴", speaker: "bai", line: "来都来了，别躲街角吹风啊。", body: "老白把街角那人也请进来，两个人一对眼，赖账的气势先塌了半截。掌柜没有追问太细，只让他们把饭钱凑齐。事情收得不响，却很干净。", rumorNote: "老白今日立功，主要靠眼尖和腿快。", tags: ["bai_observes", "bai_quiet_help", "trust_clear"] }
    ],
    "小贝逃课": [
        { text: "把那道不会的题夹进书里，让她带去问先生", title: "题夹进书", speaker: "lv", line: "不会不可耻，不问才比较可惜。", body: "小贝把题夹进书里，嘴上说只是顺路带着。下午回来时，她还是不喜欢先生，却把那页折角摊给秀才看了一眼。佟湘玉没追问，只把晚饭盛得满了点。", rumorNote: "小贝仍旧不爱上学，但今天知道不会也能拿出来问。", tags: ["mo_seen", "lv_patient", "family_soft"] },
        { text: "陪她去学堂门口，等她自己迈进去", title: "门口半步", speaker: "mo", line: "我进去不是认输，是掌门巡视。", body: "你陪她在学堂门口站了很久。小贝骂先生、骂课本、骂门槛太高，最后还是自己跨了进去。她没有变乖，只是不再把怕全藏成胡闹。", rumorNote: "衡山派掌门今日自行入学，态度十分不服。", tags: ["mo_seen", "tong_guardian", "family_soft"] },
        { text: "让她先回客栈算一页账，算完再决定逃不逃", title: "账本比先生凶", speaker: "tong", line: "学堂怕不怕另说，账本肯定不惯着你。", body: "小贝算账算到脸皱成一团，终于承认先生只是烦，账本是真可怕。她还是抱怨上学，可第二天出门前，书包没有再藏到米缸后面。", rumorNote: "账本短暂战胜先生，成为小贝心中更阴险的东西。", tags: ["mo_account_book", "money_lesson", "tong_guardian"] }
    ],
    "老白请假": [
        { text: "把茶盘递给他，只说门口那桌没人招呼", title: "茶盘接住", speaker: "bai", line: "我这是顺手，不代表病好了啊。", body: "老白嘴上说自己腰疼，手却很自然地接过茶盘。跑了两趟之后，他也懒得装了，只把抹布往肩上一搭。掌柜看见了，没夸，晚饭却多给他留了半碗汤。", rumorNote: "白展堂今日请假失败，失败得很熟练。", tags: ["bai_stays", "bai_needed", "inn_steady"] },
        { text: "叫大家一人喊他帮个小忙，看他躲到第几个", title: "人人都缺他", speaker: "guo", line: "他要是真没用，怎么谁都喊他？", body: "小贝喊他挡先生，大嘴喊他端菜，秀才喊他撑场面。老白躲了两个，第三个没躲掉，第四个已经自己去了。到打烊时，他终于不再提请假。", rumorNote: "客栈今日证明，跑堂想没用也挺难。", tags: ["bai_needed", "found_family", "scene_stable"] },
        { text: "把门闩交给他，别问他到底疼不疼", title: "门闩在手", speaker: "tong", line: "你要真腰疼，就慢点插门闩。", body: "掌柜把门闩交给他，没有戳穿也没有哄。老白拿着门闩愣了一下，最后还是仔细检查了三遍。有人被信任时，往往比被拆穿更不好跑。", rumorNote: "老白嘴上还想退，手已经替客栈把门关严了。", tags: ["bai_stays", "tong_trusts_bai", "inn_steady"] }
    ],
    "秀才写告示": [
        { text: "把告示念给小贝听，她打哈欠的地方就删掉", title: "哈欠删稿", speaker: "mo", line: "我不是不尊重学问，我是眼睛先投降了。", body: "秀才一念，小贝一打哈欠，告示就短一截。删到最后，客人看懂了，秀才心疼得像丢了半卷圣贤书。掌柜把长版收好，说以后专治赊账。", rumorNote: "客栈新告示终于有人读完，秀才为此沉默半盏茶。", tags: ["short_notice", "lv_learns_plain", "mo_proud"] },
        { text: "把最重要的四个字写大，其余让秀才贴后院", title: "四字新规", speaker: "lv", line: "简洁不是浅薄，是一种极其痛苦的克制。", body: "门口只贴四个大字，后院贴满秀才长文。客人看懂了，小贝睡前也有了新的助眠材料。秀才不服，但承认传播效率确实提高了。", rumorNote: "同福客栈门口变清楚了，后院变深奥了。", tags: ["short_notice", "lv_learns_plain", "inn_practical"] },
        { text: "让吵架那桌先试读，读不下去就算告示失败", title: "客人试读", speaker: "bai", line: "能让吵架的人闭嘴，也算一种成功。", body: "吵架那桌读到第三行就忘了吵，读到第五行开始找水。掌柜觉得这告示有奇效，秀才觉得这是文化胜利，小郭觉得以后可以拿它代替排山倒海。", rumorNote: "长告示没有说服客人，但短暂镇住了客人。", tags: ["long_notice", "lv_words", "inn_quiet"] }
    ],
    "芙蓉变温柔": [
        { text: "把没拍坏的筷子放进柜台，算她今日功劳", title: "筷子作证", speaker: "guo", line: "一双筷子而已，怎么还给我立功了。", body: "那双幸存的筷子被掌柜收进柜台，小郭嘴上嫌丢人，擦桌子却轻了一点。秀才想夸，被她瞪回去，只好说今天桌子运气不错。", rumorNote: "郭女侠今日最大战绩：有东西本来会坏，后来没坏。", tags: ["guo_seen", "lv_supports_guo", "friendship_warm"] },
        { text: "让她迎第一桌，你在旁边替她挡第二桌", title: "第一桌平安", speaker: "tong", line: "先一桌一桌来，别一口气做女菩萨。", body: "小郭把第一桌迎得很僵硬，但总算平安。第二桌客人不耐烦，你先接过去，她才没被逼到爆。她后来小声说，原来温柔也可以有人帮着撑一下。", rumorNote: "小郭今日试着温柔，桌椅表示情况尚可。", tags: ["guo_seen", "friendship_warm", "scene_stable"] },
        { text: "把柴刀递给她，先去后院把火气劈薄", title: "后院消气", speaker: "li", line: "柴火多了，厨房高兴；她气少了，桌子高兴。", body: "后院柴堆矮了又高，小郭回来时还是嘴硬，手却稳了很多。掌柜没有说她逃避，只说今晚火够旺。秀才看她一眼，又把话咽回去。", rumorNote: "后院柴火储备上涨，客栈家具寿命也跟着上涨。", tags: ["guo_energy", "inn_practical", "lv_supports_guo"] }
    ],
    "掌柜算错账": [
        { text: "把错账页折一下，等掌柜自己翻到", title: "账页折角", speaker: "tong", line: "额看见了，额又不是看不见。", body: "掌柜自己翻到那页，脸色变了又稳住。第二天她用优惠记法有误把账圆回来，没人拆穿。老白多看一眼账本，就被她瞪得立刻转身擦桌。", rumorNote: "掌柜修账修得很体面，大家也很配合地假装没看见。", tags: ["tong_face_saved", "money_gentle", "inn_steady"] },
        { text: "把算盘摆到桌中间，当场一文一文重算", title: "一桌重算", speaker: "lv", line: "账目清楚，心里才不打架。", body: "算盘声一响，谁也不好再猜。掌柜认错认得很硬，硬得像在宣布胜利。错账清了，面子掉了一点，信任却补回来一些。", rumorNote: "同福客栈今日公开重算，掌柜称这是财务演练。", tags: ["tong_admits", "trust_clear", "money_clear"] },
        { text: "先替掌柜把客人请走，晚上再陪她对账", title: "夜里对账", speaker: "bai", line: "白天留面子，晚上补窟窿。", body: "白天没有闹开，晚上你陪掌柜把账对完。她嘴上说不用你管，手却把那页账推近了一点。算清以后，她把算盘盖上，很轻地叹了口气。", rumorNote: "那笔错账没有变成笑话，只变成掌柜夜里多拨了几下算盘。", tags: ["tong_face_saved", "money_clear", "care_unsaid"] }
    ],
    "邢捕头蹭饭": [
        { text: "给他写一张巡逻餐牌子，挂在柜台边", title: "巡逻餐挂牌", speaker: "xing", line: "这叫公私合作，挺正规。", body: "邢捕头对专属牌子很满意，掌柜对能记账更满意。大嘴也满意，因为巡逻餐固定少放肉。三个人都觉得自己占了理。", rumorNote: "同福客栈推出巡逻餐，限衙门人员，限肉。", tags: ["xing_meal", "money_named", "inn_funny"] },
        { text: "把告示卷交给他，贴完再端面", title: "贴完再吃", speaker: "tong", line: "饭可以吃，路也得跑。", body: "邢捕头举着告示满镇贴，回来时更饿了。掌柜算了算，还是亏，但亏得有名目。老白说这叫治安合作，大嘴说这叫多洗一个碗。", rumorNote: "邢捕头今日为客栈奔走半日，最终以一碗面结案。", tags: ["xing_helps", "short_notice", "money_gentle"] },
        { text: "让他说一件真帮过客栈的事，说完再记账", title: "人情记账", speaker: "xing", line: "我这功劳，说出来都耽误吃饭。", body: "邢捕头讲起半夜赶走醉汉的事，讲得威风，也讲得很饿。掌柜听完给他打折，但仍然记账。人情被承认，饭钱也没消失。", rumorNote: "人情今日写进账本，邢捕头对此心情复杂。", tags: ["xing_helps", "money_named", "inn_warm"] }
    ],
    "小六学办案": [
        { text: "把鸡腿盘放桌中间，让小六先看线索", title: "先看盘子", speaker: "xiaoliu", line: "盘子不会说谎，但盘子也不会自己招供。", body: "小六围着盘子转了三圈，终于发现油印一路到了锅边。案子没那么威风，却很实在。邢捕头点点头，说这才像办案，不像喊戏。", rumorNote: "燕小六今日学会先看盘子，再看人。", tags: ["xiaoliu_evidence", "funny_case", "inn_chaotic"] },
        { text: "让他问大嘴、小贝、老白，一人只准问一句", title: "三问成案", speaker: "bai", line: "问可以，别问到我真像凶手。", body: "三个人各答一句，线索反而清楚了。鸡腿不是被偷，是大嘴自己换了锅还忘了。小六很失落，又有点高兴，因为这案子至少破得明白。", rumorNote: "鸡腿案告破，凶手疑似厨子记性。", tags: ["xiaoliu_evidence", "li_soft", "scene_stable"] },
        { text: "陪他把推理演一遍，让大家笑完再收场", title: "推理跑偏", speaker: "li", line: "演归演，别把我锅当凶器。", body: "众人陪小六演了一场，越演越不像案子，倒像饭前热闹。最后鸡腿在锅边找到，大嘴沉默片刻，说这叫食材二次观察。", rumorNote: "燕小六破获厨子误会厨子的重大案件。", tags: ["xiaoliu_confidence", "inn_funny", "funny_case"] }
    ],
    "无双来帮忙": [
        { text: "把一摞碗递给小郭，让无双在旁边接", title: "一摞碗", speaker: "guo", line: "接稳了啊，摔了算你的。", body: "小郭在前，无双在旁，两个人手上都忙，话反而少了刺。秀才端着茶盘几次想插嘴，都被两个人同时瞪回去。忙完以后，小郭把最后一只碗递过去，只说了一句：你还挺利索。", rumorNote: "郭女侠和祝捕快共同守住晚饭高峰，秀才谨慎存活。", tags: ["guo_faces_compare", "wushuang_respects_guo", "lv_boundary"] },
        { text: "把茶盘塞给秀才，让他去小郭那桌补一句", title: "补一句话", speaker: "lv", line: "芙妹，那桌刚才多亏你压住了。", body: "秀才端着茶盘过去，声音不大，话也不花。小郭嫌他说得晚，却没有顶回去。无双在旁边低头收碗，嘴角轻轻松了一点。", rumorNote: "秀才今日终于把一句话补在该补的地方。", tags: ["lv_boundary", "guo_reassured", "wushuang_kind"] },
        { text: "把无双接住的那只碗递回小郭手里", title: "碗回手里", speaker: "wushuang", line: "这只碗还得小郭姐姐来放，位置我不熟。", body: "无双把那只碗递回去，动作很轻。小郭接住时愣了一下，脸还是别扭，手却稳了。她知道无双没有把她往旁边挤。", rumorNote: "无双今日让位让得很轻，小郭听懂了一半。", tags: ["wushuang_respects_guo", "guo_reassured", "friendship_warm"] }
    ],
    "大嘴被夸过头": [
        { text: "夹一口菜，再把茶杯推给大嘴让他自己尝", title: "自己尝尝", speaker: "li", line: "我尝，我当然尝……哎呀，是有点咸。", body: "大嘴自己尝完，终于不再硬撑。第二锅少了盐，味道还在，客人也还在。掌柜只说这个能卖，大嘴听得比夸他好吃还高兴。", rumorNote: "李大嘴今日学会，招牌菜也要先过自己这关。", tags: ["li_signature", "warmth_food", "trust_clear"] },
        { text: "请每个人只说一句实话，说完就闭嘴", title: "一句实话", speaker: "tong", line: "说多了伤人，说少了伤菜。", body: "小贝说香但咸，老白说有特色但费水，小郭说能吃但别飘。大嘴脸挂不住，还是把盐罐往远处推了推。", rumorNote: "今日真话下锅，菜咸度下降。", tags: ["li_signature", "trust_clear", "scene_stable"] },
        { text: "在菜牌上写限量二字，先卖三份试试", title: "限量三份", speaker: "bai", line: "限量好啊，卖完就不用解释了。", body: "好奇客人点了三份，评价很热闹，茶水也卖得很热闹。大嘴发现不一定人人爱吃，但有人愿意聊，就是第一步。", rumorNote: "同福客栈茶水销量上涨，原因不便明说。", tags: ["li_limited", "money_named", "inn_funny"] }
    ],
    "小贝当一天掌柜": [
        { text: "把赊账条递给她，让她自己问人姓名日期", title: "赊账有名", speaker: "mo", line: "原来心软还要写日期啊。", body: "小贝想直接免单，又怕亏钱。佟湘玉没有替她决定，只教她写姓名和日期。她第一次知道，心软也要有收尾。", rumorNote: "小掌柜批准赊账一笔，并宣布掌柜应该配糖。", tags: ["mo_responsibility", "tong_teaches", "money_gentle"] },
        { text: "让她排活，最后把最轻的茶盘留给她自己", title: "掌柜也端茶", speaker: "tong", line: "安排别人容易，轮到自己就知道沉了。", body: "小贝排得乱七八糟，最后自己端了半天茶。晚上她把印章还给掌柜，说这东西拿着沉。佟湘玉接过去，只说知道沉就好。", rumorNote: "衡山派掌门短暂接管客栈，结论是掌柜不好当。", tags: ["mo_responsibility", "family_soft", "inn_steady"] },
        { text: "把钱匣打开，让她挑一笔今天真的能省的", title: "零嘴预算", speaker: "li", line: "省啥都行，别先省后厨。", body: "小贝先想省先生束脩，被掌柜瞪回去；又想省柴火，被大嘴瞪回去。最后她少买了零嘴，像做了很大的牺牲。", rumorNote: "小掌柜学习成本控制，第一笔牺牲来自零嘴。", tags: ["mo_responsibility", "money_lesson", "tong_teaches"] }
    ],
    "旧话新听": [
        { text: "把旧书放到老白手边，等他自己收起来", title: "旧书归位", speaker: "bai", line: "有些东西，不翻也知道在那儿。", body: "老白没有急着解释，只把旧书收好。展红绫看见了，佟湘玉也看见了。没人追问那本书里有什么，像是都承认旧事可以在，但不必坐上主位。", rumorNote: "白展堂今日把旧事收好，人还留在屋里。", tags: ["bai_old_name", "tong_bai_deeper", "hongling_respected"] },
        { text: "给门口留一盏灯，让这场话别太像审问", title: "灯下旧话", speaker: "tong", line: "灯亮着，话就别说得太冷。", body: "灯在门口亮着，展红绫没有逼问，佟湘玉也没有抢话。老白说得慢，像把旧江湖一点一点放下。桌边没人起哄。", rumorNote: "旧话在灯下说完，没有变成热闹。", tags: ["bai_lantern", "tong_bai_unsaid", "dream_lantern"] },
        { text: "把话题递回现在，问老白今晚还跑不跑堂", title: "今晚跑堂", speaker: "guo", line: "旧事说完了，菜还得上吧？", body: "老白愣了一下，忽然笑了。他把抹布搭回肩上，说今晚客人多，跑堂当然得在。展红绫看着他，像终于看清他站在哪边。", rumorNote: "白展堂没有把答案说满，只把抹布重新搭上肩。", tags: ["bai_stays", "tong_trusts_bai", "hongling_respected"] }
    ],
    "秀才开课没人听": [
        { text: "把茶杯按到秀才手边，只许他先讲一个故事", title: "先讲故事", speaker: "lv", line: "故事里也有道理，只是暂时不点破。", body: "秀才讲了一个书生借宿的小故事，小贝居然没跑。小郭用眼神按住他总结中心思想的冲动。大家各自听出一点东西，课堂第一次像坐在一起说话。", rumorNote: "吕秀才课堂出现罕见听众，原因疑似讲得像人话。", tags: ["lv_heard", "lv_learns_plain", "inn_learns"] },
        { text: "请小郭坐第一排，专门负责打断他绕远", title: "有人接话", speaker: "guo", line: "我打断你，是为了救大家。", body: "小郭的问题很冲，却把秀才一次次拉回人话。秀才一开始急，后来反而笑了。他发现她不是拆台，是把台搭稳。", rumorNote: "郭芙蓉今日以提问保护课堂，秀才称之为学术互动。", tags: ["lv_heard", "guo_supports_lv", "love_small"] },
        { text: "让每人只听一句，听完就能走", title: "一人一句", speaker: "bai", line: "能活着听完一句，已经很给面子了。", body: "每个人只留下一句。掌柜记住少讲点，小贝记住不会可以问，大嘴记住别空腹听课。秀才觉得不完整，却第一次发现少讲一点反而有人记得。", rumorNote: "秀才开课成功，成功标准调整为有人没睡。", tags: ["lv_heard", "inn_learns", "friendship_warm"] }
    ],
    "芙蓉讲理失败": [
        { text: "把水递给小郭，让她先说自己气在哪儿", title: "火气有名", speaker: "guo", line: "我气的是他说话难听，不是我脾气大。", body: "小郭声音还是冲，但手没动。客人被她吓住，也听懂了一点。秀才没有纠正她的语气，只把水杯往她手边推近。", rumorNote: "郭女侠今日用语言完成一次小型排山倒海。", tags: ["guo_seen", "lv_supports_guo", "friendship_warm"] },
        { text: "叫老白先圆场，你陪小郭去后院站一会儿", title: "后院台阶", speaker: "bai", line: "我先把人送走，你别把后院送走。", body: "老白把客人哄走，小郭在后院站了很久，最后劈了两根柴。她回来时还嘴硬，但没有再说自己没用。", rumorNote: "后院今日平安无事，主要因为郭女侠镇守认真。", tags: ["guo_energy", "bai_rounds", "inn_practical"] },
        { text: "让秀才只说一句，别讲大道理", title: "一句就够", speaker: "lv", line: "你刚才没有拍下去，已经很厉害了。", body: "秀才这次没绕，只说了一句。小郭嫌他说得酸，却没有反驳。那句话落得很轻，正好够她听见。", rumorNote: "秀才今日少讲很多，小郭难得没有嫌他烦。", tags: ["lv_supports_guo", "guo_seen", "love_small"] }
    ],
    "一封没有署名的信": [
        { text: "把信贴在后厨门口，让大家顺手添一句", title: "门口添字", speaker: "tong", line: "添可以，谁敢写酸诗额收钱。", body: "那封信变成了全员提醒。有人写少熬夜，有人写少逞强，有人写少赊账。掌柜嘴上嫌无聊，却把纸贴得很平。", rumorNote: "匿名关怀被掌柜改造成公共告示。", tags: ["letter_shared", "inn_warm", "care_unsaid"] },
        { text: "拿个空盒放柜台下，谁想写就塞进去", title: "无名话盒", speaker: "lv", line: "不署名，有时反而更像真心。", body: "盒子里多了很多别扭的关心。有人写少逞强，有人写别硬撑，有人写少偷懒。掌柜说无聊，却把盒子收进柜台。", rumorNote: "同福客栈新增无名话盒，专收说不出口的好话。", tags: ["word_box", "care_unsaid", "found_family"] },
        { text: "只猜这句话像写给谁，不追写信人", title: "猜给谁听", speaker: "bai", line: "不破案也挺好，破了反而没意思。", body: "没人猜出写信人，却猜出每个人最近都在硬撑。信没有破案，却让客栈当天少了几句硬话。小郭说无聊，手却没把纸放下。", rumorNote: "匿名信未破，客栈成员互相关心证据增多。", tags: ["care_unsaid", "found_family", "love_small"] }
    ],
    "客房只剩一间": [
        { text: "先搬开大堂桌椅，让淋雨的人都进门", title: "先避雨", speaker: "tong", line: "进来归进来，地上的水谁擦？", body: "所有人先从雨里进来，争房间的声音立刻小了。小郭抱来干布巾，老白守住门口，大嘴已经开始算厨房能不能铺地铺。", rumorNote: "同福客栈雨夜临时扩容，掌柜表示被褥损耗需统计。", tags: ["rain_shelter", "inn_shelter", "inn_warm"] },
        { text: "把价钱和难处摊开，请有钱客人搭把手", title: "难处明说", speaker: "lv", line: "道理讲清楚，人未必就不讲情。", body: "有钱客人本来不快，听完也没再争。他多付了一点，让老人孩子住下。掌柜第一次觉得账本和人情不是非得打一架。", rumorNote: "掌柜把难处摆在明处，居然没有亏，还多收半钱。", tags: ["money_clear", "inn_shelter", "trust_clear"] },
        { text: "请老白守半夜门，给大堂留一盏灯", title: "雨夜留灯", speaker: "bai", line: "我就是怕人偷东西，别想太多。", body: "大堂睡得不舒服，却没人被赶进雨里。老白守了半夜门，嘴上说怕人偷东西，其实一直护着那盏灯不灭。", rumorNote: "雨夜很挤，门口那盏灯却没灭。", tags: ["rain_shelter", "bai_lantern", "inn_shelter"] }
    ],
    "灯笼坏了": [
        { text: "把旧灯笼取下来，大家各找一点材料修", title: "旧灯重亮", speaker: "bai", line: "修可以，别让掌柜的买太贵的纸。", body: "灯笼修好那晚，光不亮，却很稳。小贝说它像掌柜，嘴硬、旧、但还挺有用。佟湘玉追了她半条街。", rumorNote: "客栈旧灯笼重亮，小贝因比喻不当被掌柜追捕。", tags: ["lantern_fixed", "dream_lantern", "found_family"] },
        { text: "裁几张小纸条，糊进灯里", title: "灯里有话", speaker: "mo", line: "掌门写的愿望，灯笼必须重点照顾。", body: "灯笼里糊进很多小纸条，没人公开念。夜里风吹灯响，像客栈把那些说不出口的话悄悄收着。", rumorNote: "灯笼修好了，里面疑似藏有全客栈不愿公开的心事。", tags: ["lantern_words", "care_unsaid", "dream_lantern"] },
        { text: "先把旧灯放桌上，听大家说它照过谁", title: "旧灯旧事", speaker: "lv", line: "灯火照人，也照旧事。", body: "每个人都说了一点：谁夜里靠它找门，谁躲雨时看过它，谁嫌它费油。灯笼还是那盏灯，修起来却不只像修东西。", rumorNote: "旧灯笼修复工程启动，原因包括照明、认路和舍不得。", tags: ["lantern_fixed", "bai_lantern", "dream_lantern"] }
    ],
    "今日不营业": [
        { text: "把门闩插上，叫大家先坐下吃顿热饭", title: "自己人饭", speaker: "li", line: "不营业也得吃饭，而且要吃好的。", body: "没有客人，没有催菜，没有算账。大嘴做了一桌家常菜，佟湘玉一边说浪费，一边把最后一块豆腐夹走。", rumorNote: "同福客栈罕见不营业，掌柜坚称这是成本控制实验。", tags: ["family_meal", "li_hot_meal", "found_family", "guest_accepted"] },
        { text: "门牌翻成半日清静，晚上再开", title: "半日清静", speaker: "guo", line: "休息就休息，谁敢让我干活我就让他也休息。", body: "下午的客栈静得能听见锅里冒泡。晚上开门时大家还是忙，却没那么散。掌柜嘴上说以后少来，心里已经记下了。", rumorNote: "客栈下午短暂清静，晚饭高峰仍旧把所有人打回原形。", tags: ["half_rest", "inn_steady", "money_gentle", "guest_accepted"] },
        { text: "门边留一壶热茶，有人路过就自己倒", title: "茶还热", speaker: "tong", line: "不开门是不做生意，又不是不做人。", body: "客栈大门半掩，桌上留着一壶茶。傍晚有人路过喝了半碗，放下两个铜板就走。掌柜嘴上嫌多事，转头把铜板收得很轻。", rumorNote: "同福客栈今日不营业，但茶壶没有严格执行。", tags: ["half_rest", "guest_accepted", "inn_shelter"] }
    ],
    "同福小宴": [
        { text: "把传闻册递给秀才，让他补最后一行", title: "最后一行", speaker: "lv", line: "今日无大事，众人皆在。此句甚好。", body: "秀才郑重写下最后一行，大家一边嫌弃他酸，一边凑过去看。说着说着，灯笼暗了一点，外面的七侠镇安静下来。你忽然觉得很困。", rumorNote: "同福小宴上，传闻册补了最后一行，笑声比菜还满。", tags: ["rumor_book_ready", "dream_lantern", "guest_accepted"] },
        { text: "合上传闻册，给每个人添一轮茶", title: "吃完这顿饭", speaker: "bai", line: "有些事记在册子里，有些事记在肚子里。", body: "这顿饭吃得很慢，慢到掌柜忘了催人收碗。灯笼暗了一点，茶还温着。你趴在桌上，只想再歇一会儿。", rumorNote: "同福小宴无事发生，只有一位客官后来睡着了。", tags: ["quiet_banquet", "dream_lantern", "guest_accepted"] },
        { text: "把那只空碗往自己面前挪一点", title: "空位不空", speaker: "mo", line: "这位置有人了啊，别乱坐。", body: "那副多出来的碗筷摆在桌边，大家都看见了，又都没说破。小贝抢菜时还记得绕开它，大嘴盛汤时顺手多盛半勺。", rumorNote: "同福小宴多留一副碗筷，掌柜坚称只是摆桌习惯。", tags: ["quiet_banquet", "guest_accepted", "dream_lantern"] }
    ]
};

const CONTINUITY_ECHOES = [
    { tag: "tong_steps", after: 1, text: "掌柜处理今天的麻烦前，先看了你一眼。上一回你给人留过台阶，她嘴上没夸，心里显然记下了。" },
    { tag: "bai_quiet_help", after: 2, text: "老白这几天对你松了一点戒心，有些话不再只往玩笑里藏。" },
    { tag: "li_hot_meal", after: 2, text: "大嘴端菜时会顺手问你一句够不够热，像已经默认你不是只路过一顿饭的人。" },
    { tag: "mo_seen", after: 3, text: "小贝遇到不想说的话时，会先往你这边挪半步。她还嘴硬，但不再把怕讲得那么像理直气壮。" },
    { tag: "lv_patient", after: 4, text: "秀才讲道理前会先停一下，像是想起有人提醒过他：先让别人能接住，再说大道理。" },
    { tag: "bai_stays", after: 5, text: "老白嘴上还说麻烦，可门闩、茶壶和客人眼色，他都比从前接得更自然。" },
    { tag: "short_notice", after: 5, text: "门口那张短告示还贴着，客人真看懂了，秀才每次路过都要用眼神给它补一段注释。" },
    { tag: "guo_seen", after: 6, text: "小郭被人惹急时，会先看一眼自己的手，再看你一眼。她不一定忍得住，但已经知道有人看见她在忍。" },
    { tag: "money_clear", after: 8, text: "账本上那次说清楚的旧账，后来成了掌柜的底气。她还是心疼钱，但没那么怕把难处摊开。" },
    { tag: "trust_clear", after: 8, text: "客栈里有人争执时，大家更愿意把话放到桌面上说。不是因为突然坦荡，是因为试过一次以后，发现天没塌。" },
    { tag: "xing_helps", after: 9, text: "邢捕头再进门时会先问有没有活能抵饭，虽然问完还是先看锅。" },
    { tag: "xiaoliu_evidence", after: 10, text: "小六办事还是爱喊口号，但喊完会补一句：先看证据。这句话大概是被客栈磨出来的。" },
    { tag: "lv_boundary", after: 11, text: "秀才再想两边都照顾时，会先把话说清楚一点。小郭不一定领情，但至少不再全靠猜。" },
    { tag: "wushuang_respects_guo", after: 11, text: "无双留下的那份体面，让小郭后来提起她时少了点刺，多了点别扭的认可。" },
    { tag: "li_signature", after: 12, text: "大嘴那道招牌菜还挂在菜牌边上，字写得歪，价钱被掌柜改过两次。" },
    { tag: "mo_responsibility", after: 13, text: "小贝摸过掌柜印章以后，闯祸时偶尔会先问一句：这个要赔多少？问完还是想跑。" },
    { tag: "hongling_respected", after: 14, text: "展红绫来过以后，老白少提江湖一点；不是忘了，是好像终于能把旧事放在门外吹吹风。" },
    { tag: "lv_heard", after: 15, text: "秀才发现有人真的听过他一回，后来说话还是长，但会在最绕的地方自己停一下。" },
    { tag: "care_unsaid", after: 16, text: "柜台底下那股说不出口的关心还在，后来谁嘴硬，大家反而更容易听出里面那点好意。" },
    { tag: "rain_shelter", after: 17, text: "那晚躲雨的人早走了，可大堂角落多备了一床旧被褥。掌柜说是怕潮，其实没人信。" },
    { tag: "lantern_fixed", after: 18, text: "门口旧灯笼还亮着，光不大，但每次有人晚归，都会先被它接住。" },
    { tag: "guest_accepted", after: 18, text: "你坐的位置越来越少被问起。没人正式说你是自己人，但茶碗总会多摆一只。" },
    { tag: "scene_stable", after: 1, text: "客栈后来遇到火气上头的事，老白常拿你那套先稳场面的法子说嘴，仿佛是他原创。" },
    { tag: "truth_one_line", after: 1, text: "那句终于说出口的真话，像给客栈开了个小口子。后来大家嘴硬归嘴硬，绕得没以前那么远。" },
    { tag: "inn_practical", after: 1, text: "你帮忙搭过手以后，大嘴有事更爱直接把东西递给你，完全不问你是不是客人。" }
];

const CONTINUITY_PRIORITY_BY_EPISODE = {
    "小贝逃课": ["tong_steps", "truth_one_line", "mo_seen"],
    "老白请假": ["bai_quiet_help", "scene_stable", "bai_stays"],
    "秀才写告示": ["mo_seen", "lv_patient", "short_notice"],
    "芙蓉变温柔": ["lv_learns_plain", "guo_seen", "scene_stable"],
    "掌柜算错账": ["money_lesson", "tong_steps", "trust_clear"],
    "邢捕头蹭饭": ["tong_face_saved", "money_clear", "xing_helps"],
    "小六学办案": ["xing_meal", "xing_helps", "xiaoliu_evidence"],
    "无双来帮忙": ["lv_supports_guo", "guo_seen", "lv_boundary"],
    "大嘴被夸过头": ["li_soft", "trust_clear", "li_signature"],
    "小贝当一天掌柜": ["mo_account_book", "money_lesson", "mo_responsibility"],
    "旧话新听": ["tong_trusts_bai", "bai_stays", "bai_lantern"],
    "秀才开课没人听": ["lv_boundary", "long_notice", "lv_heard"],
    "芙蓉讲理失败": ["lv_heard", "guo_seen", "lv_supports_guo"],
    "一封没有署名的信": ["love_small", "care_unsaid", "truth_one_line"],
    "客房只剩一间": ["care_unsaid", "money_clear", "inn_shelter"],
    "灯笼坏了": ["rain_shelter", "bai_lantern", "lantern_fixed"],
    "今日不营业": ["lantern_fixed", "family_meal", "half_rest"],
    "同福小宴": ["guest_accepted", "lantern_fixed", "care_unsaid", "found_family"]
};

class WulinGame {
    constructor() {
        this.storageKey = "wulinDailyTheaterV3";
        this.state = this.loadState();
        this.typewriterTimer = null;
        this.nodes = {
            title: document.getElementById("episodeTitle"),
            step: document.getElementById("episodeStep"),
            text: document.getElementById("episodeText"),
            choices: document.getElementById("choiceList"),
            log: document.getElementById("dialogueLog"),
            trust: document.getElementById("trustValue"),
            chaos: document.getElementById("chaosValue"),
            warmth: document.getElementById("warmthValue"),
            characters: document.getElementById("charactersGrid"),
            collection: document.getElementById("endingCollection"),
            episodes: document.getElementById("episodeList"),
            navProgress: document.getElementById("navProgress"),
            openEpisodes: document.getElementById("openEpisodesBtn"),
            episodeModal: document.getElementById("episodeModal"),
            closeEpisodeModal: document.getElementById("closeEpisodeModal"),
            portrait: document.getElementById("currentPortrait"),
            currentName: document.getElementById("currentName"),
            currentRole: document.getElementById("currentRole"),
            stageCaption: document.getElementById("stageCaption"),
            restart: document.getElementById("restartBtn")
        };

        this.bindEvents();
        this.renderCharacters();
        this.render();
    }

    get episodeIndex() {
        return this.state.viewEpisodeIndex;
    }

    get episode() {
        return EPISODES[this.episodeIndex];
    }

    get completedCount() {
        return this.state.completed.filter(Boolean).length;
    }

    get replayUnlocked() {
        return this.completedCount >= EPISODES.length;
    }

    bindEvents() {
        this.nodes.restart.addEventListener("click", () => this.restartCurrent());
        document.addEventListener("click", (event) => {
            if (event.target.closest("#openEpisodesBtn")) {
                event.preventDefault();
                this.openEpisodeModal();
                return;
            }

            if (event.target.closest("#closeEpisodeModal") || event.target === this.nodes.episodeModal) {
                event.preventDefault();
                this.closeEpisodeModal();
            }
        });
    }

    render() {
        this.stopTypewriter();
        const episode = this.episode;
        this.nodes.title.textContent = episode.title;
        this.nodes.step.textContent = this.getStepTitle(episode);
        this.nodes.choices.innerHTML = "";

        if (episode.finale) {
            this.nodes.text.textContent = this.composeScene(episode);
            this.renderFinale(episode);
        } else if (this.state.pendingResult) {
            this.nodes.text.textContent = this.composeResultScene(episode);
            this.renderResult(this.state.pendingResult);
        } else {
            this.renderEpisodeFlow(episode);
        }

        if (episode.finale && !this.state.pendingResult && !this.state.finaleDialogueDone) {
            this.setCurrentSpeaker(episode.speaker, episode.line);
            this.addLine(CHARACTERS[episode.speaker].name, episode.line, true);
        }
        this.renderStatus();
        if (this.nodes.episodeModal.classList.contains("active")) {
            this.renderEpisodes();
        }
        this.renderCollection();
        this.renderRestartButton();
    }

    getStepTitle(episode) {
        if (episode.finale) return `第 ${this.episodeIndex + 1} 集`;
        const labels = ["开场", "堂前起事", "你伸手", "事往下走"];
        return `第 ${this.episodeIndex + 1} 集 · ${labels[this.state.episodeStep || 0] || "收束"}`;
    }

    composeScene(episode) {
        return episode.scene;
    }

    composeTableTalk(episode) {
        const reactions = Object.entries(episode.reactions || {});
        if (!reactions.length) return "";

        const lines = reactions.map(([id, text]) => {
            const character = CHARACTERS[id];
            return `${character.name}：“${text}”`;
        });
        return `桌边几个人各有反应：\n${lines.join("\n")}\n\n几句话落下，大堂静了一点。事情卡在桌边，等有人先伸手。`;
    }

    composeResultScene(episode) {
        return "桌上的茶凉了一点，这一日终于有了落点。有人把刚才的事悄悄记住了。";
    }

    getSceneParts(episode) {
        return episode.scene.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);
    }

    renderEpisodeFlow(episode) {
        const step = this.state.episodeStep || 0;
        if (step <= 0) {
            this.renderStoryBeat(episode, 0, "继续听下去", () => this.goToEpisodeStep(1));
            return;
        }
        if (step === 1) {
            this.renderStoryBeat(episode, 1, "看看该怎么插手", () => this.goToEpisodeStep(2));
            return;
        }
        if (step === 2) {
            this.renderFirstChoiceStage(episode);
            return;
        }
        this.renderFollowUpStage(episode);
    }

    renderStoryBeat(episode, step, buttonText, action) {
        const parts = this.getSceneParts(episode);
        const text = step === 0
            ? parts.slice(0, 2).join("\n\n")
            : [parts.slice(2).join("\n\n"), this.composeTableTalk(episode)].filter(Boolean).join("\n\n");

        this.nodes.text.textContent = text || episode.scene;
        this.setCurrentSpeaker(episode.speaker, episode.line);
        this.addLine(CHARACTERS[episode.speaker].name, episode.line, true);

        const button = document.createElement("button");
        button.className = "choice-btn";
        button.type = "button";
        button.textContent = buttonText;
        button.addEventListener("click", action);
        this.nodes.choices.appendChild(button);
    }

    goToEpisodeStep(step) {
        this.state.episodeStep = step;
        this.saveState();
        this.render();
    }

    renderFirstChoiceStage(episode) {
        const parts = this.getSceneParts(episode);
        this.nodes.text.textContent = [
            this.getActionSetup(episode, parts),
            this.getActionPrompt(episode)
        ].filter(Boolean).join("\n\n");
        this.setCurrentSpeaker(episode.speaker, episode.line);
        this.renderChoices(episode.choices, (choice, index) => this.chooseFirst(choice, index));
    }

    renderChoices(choices, onChoose) {
        choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.className = "choice-btn";
            button.type = "button";
            button.textContent = choice.text;
            button.addEventListener("click", () => onChoose(choice, index));
            this.nodes.choices.appendChild(button);
        });
    }

    getActionSetup(episode, parts) {
        const setups = {
            "无双来帮忙": "前堂的碗已经堆起来，秀才端着茶盘站在中间，小郭和无双都看见了你。"
        };
        return setups[episode.title] || parts[parts.length - 1];
    }

    getActionPrompt(episode) {
        const prompts = {
            "无双来帮忙": "佟湘玉把一摞空碗推到你手边。你伸手递出去，这场尴尬就会往那个方向走。"
        };
        return prompts[episode.title] || "众人的目光慢慢挪到你这桌。你伸手做一件事，让这一天有个开口。";
    }

    chooseFirst(choice, index) {
        this.state.episodePath = {
            episodeIndex: this.episodeIndex,
            firstChoiceIndex: index
        };
        (choice.tags || []).forEach((tag) => {
            this.state.memories[tag] = true;
        });
        this.state.episodeStep = 3;
        this.setCurrentSpeaker(choice.speaker, choice.line);
        this.addLine(CHARACTERS[choice.speaker].name, choice.line);
        this.saveState();
        this.render();
    }

    renderFollowUpStage(episode) {
        const firstChoice = this.getFirstChoice(episode);
        if (!firstChoice) {
            this.state.episodeStep = 2;
            this.saveState();
            this.render();
            return;
        }

        this.nodes.text.textContent = [
            `${CHARACTERS[firstChoice.speaker].name}：“${firstChoice.line}”`,
            firstChoice.result,
            this.getFollowUpLead(episode)
        ].join("\n\n");
        this.setCurrentSpeaker(firstChoice.speaker, firstChoice.line);
        this.addLine(CHARACTERS[firstChoice.speaker].name, firstChoice.line, true);
        this.renderChoices(this.getFollowUpChoices(episode), (choice) => this.chooseFinal(choice));
    }

    getFollowUpChoices(episode) {
        return EPISODE_FOLLOW_UPS[episode.title] || FOLLOW_UP_CHOICES;
    }

    getFollowUpLead(episode) {
        const leads = {
            "麻烦客人": "那人气势塌了一半，桌边的人也都等着看这事怎么收。",
            "小贝逃课": "小贝嘴上还硬，书包却没有再往身后藏。现在要决定，她今天怎么面对学堂。",
            "老白请假": "老白装病装到一半，自己也知道装不圆了。可要让他留下，不能只靠拆穿。",
            "秀才写告示": "墨还没干，大家已经开始嫌字多。告示到底贴出去，还是变成笑话，就看下一笔。",
            "芙蓉变温柔": "小郭的火气还在手腕上，只是暂时没落到桌子上。你得给她一个能接住自己的办法。",
            "掌柜算错账": "算盘珠子停住，掌柜的面子和账本都摆在桌上。哪边都不能摔得太响。",
            "邢捕头蹭饭": "面香已经飘出来，账本也翻开了。人情和饭钱，总得有个说法。",
            "小六学办案": "小六越认真，场面越容易跑偏。鸡腿还没找回来，大家已经快被他审饿了。",
            "无双来帮忙": "晚饭高峰压到门口。茶盘、空碗、难缠客人都挤在一起，你还得再递一次手。",
            "大嘴被夸过头": "大嘴还等着大家夸第二句，可那盘菜已经摆在桌中间。现在要保住他的热乎劲，也保住客人的舌头。",
            "小贝当一天掌柜": "印章在小贝手里，难题也到了她面前。她还小，但今天不能只让大人替她挡。",
            "旧话新听": "旧人站在门口，新生活坐在桌边。老白要怎么开口，比说什么都难。",
            "秀才开课没人听": "凳子摆好了，人却随时想散。秀才要被听见，得先把话放低一点。",
            "芙蓉讲理失败": "小郭已经忍住了第一掌，可火气还没地方去。下一步如果接不好，桌子还是危险。",
            "一封没有署名的信": "信在桌上，谁都说无聊，谁都没走。它到底变成秘密，还是变成一点暖意，就差你推一下。",
            "客房只剩一间": "雨越下越急，门口的人越来越多。房间只有一间，客栈却不能只剩一条规矩。",
            "灯笼坏了": "旧灯笼放在桌上，买新的容易，舍不得也是真的。大家都在等这盏灯怎么回到门口。",
            "今日不营业": "门关上了，人却还不会歇。客栈不开门的这半日，也得有人把大家安顿下来。",
            "同福小宴": "菜快凉了，灯也暗了一点。大家都在，你忽然觉得这顿饭不该吃得太急。"
        };
        return leads[episode.title] || "这一步落下去，桌边的人都有了反应。下一步怎么收，才是今天真正留下来的东西。";
    }

    getFirstChoice(episode) {
        const path = this.state.episodePath || {};
        if (path.episodeIndex !== this.episodeIndex) return null;
        return episode.choices[path.firstChoiceIndex] || null;
    }

    chooseFinal(followUpChoice) {
        const firstChoice = this.getFirstChoice(this.episode);
        if (!firstChoice) return;
        const tags = Array.from(new Set([...(firstChoice.tags || []), ...(followUpChoice.tags || [])]));
        const result = {
            episodeIndex: this.episodeIndex,
            episodeTitle: this.episode.title,
            title: `${firstChoice.resultTitle} · ${followUpChoice.title}`,
            body: followUpChoice.body,
            rumor: this.composeRumorNote(firstChoice, followUpChoice),
            speaker: followUpChoice.speaker,
            line: followUpChoice.line,
            tags
        };

        this.state.pendingResult = result;
        this.state.episodeStep = 4;
        this.recordResult(result);
        this.saveState();
        this.render();
    }

    recordResult(result) {
        this.state.completed[result.episodeIndex] = {
            title: result.title,
            rumor: result.rumor,
            episodeTitle: result.episodeTitle
        };

        const rumorExists = this.state.rumors.some((item) => (
            item.episodeIndex === result.episodeIndex && item.title === result.title
        ));
        if (!rumorExists) {
            this.state.rumors.push({
                episodeIndex: result.episodeIndex,
                episodeTitle: result.episodeTitle,
                title: result.title,
                rumor: result.rumor
            });
        }

        result.tags.forEach((tag) => {
            this.state.memories[tag] = true;
        });
    }

    composeRumorNote(firstChoice, followUpChoice) {
        const raw = followUpChoice.rumorNote || firstChoice.rumor || "";
        const note = raw.replace(/^今日传闻：/, "").trim();
        return note ? `今日传闻：${note}` : "今日传闻：客栈今日也有一件小事落了页。";
    }

    renderResult(result) {
        this.setCurrentSpeaker(result.speaker, result.line);
        this.addLine(CHARACTERS[result.speaker].name, result.line);

        const card = document.createElement("div");
        card.className = "ending-card";
        card.innerHTML = `
            <strong>${result.title}</strong>
            <p>${result.body}</p>
            <small>已收进传闻册。</small>
        `;
        this.nodes.choices.appendChild(card);

        const nextButton = document.createElement("button");
        nextButton.className = "choice-btn";
        nextButton.type = "button";
        nextButton.textContent = this.episodeIndex >= EPISODES.length - 1 ? "在客栈再坐一会儿" : "收进传闻册，去下一日";
        nextButton.addEventListener("click", () => this.advance());
        this.nodes.choices.appendChild(nextButton);
    }

    advance() {
        this.state.pendingResult = null;
        this.state.episodeStep = 0;
        this.state.episodePath = null;
        if (this.episodeIndex < EPISODES.length - 1) {
            this.state.viewEpisodeIndex = this.episodeIndex + 1;
            this.state.currentEpisodeIndex = Math.max(this.state.currentEpisodeIndex, this.state.viewEpisodeIndex);
        }
        this.nodes.log.innerHTML = "";
        this.saveState();
        this.render();
    }

    renderFinale(episode) {
        if (this.state.finaleDone) {
            this.renderFinalCard(episode.finalLine);
            return;
        }

        if (!this.state.finaleDialogueDone) {
            this.renderFinaleDialogue();
            return;
        }

        episode.objects.forEach((item) => {
            const button = document.createElement("button");
            button.className = `choice-btn ${this.state.finalObjects[item.id] ? "visited-choice" : ""}`;
            button.type = "button";
            button.textContent = item.text;
            button.addEventListener("click", () => this.inspectFinalObject(item));
            this.nodes.choices.appendChild(button);
        });

        const viewedAll = episode.objects.every((item) => this.state.finalObjects[item.id]);
        if (viewedAll) {
            const finishButton = document.createElement("button");
            finishButton.className = "choice-btn final-choice";
            finishButton.type = "button";
            finishButton.textContent = episode.finalLine;
            finishButton.addEventListener("click", () => this.finishFinale());
            this.nodes.choices.appendChild(finishButton);
        }
    }

    renderFinaleDialogue() {
        const index = Math.min(this.state.finaleDialogueIndex || 0, FINAL_DIALOGUE.length - 1);
        const item = FINAL_DIALOGUE[index];
        const speaker = item.speaker ? CHARACTERS[item.speaker] : null;

        if (speaker) {
            this.setCurrentSpeaker(item.speaker, item.text);
        } else {
            this.nodes.currentName.textContent = "客栈";
            this.nodes.currentRole.textContent = "夜里";
            this.nodes.stageCaption.textContent = item.text;
        }

        const card = document.createElement("div");
        card.className = "ending-card finale-dialogue-card";

        const name = speaker ? speaker.name : "旁白";
        card.innerHTML = `
            <strong>${name}</strong>
            <p class="typewriter-line" aria-live="polite"></p>
        `;
        this.nodes.choices.appendChild(card);

        const textNode = card.querySelector(".typewriter-line");
        const nextButton = document.createElement("button");
        nextButton.className = "choice-btn final-choice";
        nextButton.type = "button";
        nextButton.textContent = index >= FINAL_DIALOGUE.length - 1 ? "看看桌上的东西" : "继续听";
        nextButton.disabled = true;
        nextButton.addEventListener("click", () => this.advanceFinaleDialogue());
        this.nodes.choices.appendChild(nextButton);

        this.typeText(textNode, item.text, () => {
            nextButton.disabled = false;
        });
    }

    advanceFinaleDialogue() {
        const nextIndex = (this.state.finaleDialogueIndex || 0) + 1;
        if (nextIndex >= FINAL_DIALOGUE.length) {
            this.state.finaleDialogueDone = true;
            this.state.finaleDialogueIndex = FINAL_DIALOGUE.length - 1;
        } else {
            this.state.finaleDialogueIndex = nextIndex;
        }
        this.saveState();
        this.render();
    }

    typeText(node, text, done) {
        this.stopTypewriter();
        let index = 0;
        const tick = () => {
            node.textContent = text.slice(0, index);
            index += 1;
            if (index <= text.length) {
                this.typewriterTimer = window.setTimeout(tick, 22);
            } else {
                this.typewriterTimer = null;
                done?.();
            }
        };
        tick();
    }

    stopTypewriter() {
        if (this.typewriterTimer) {
            window.clearTimeout(this.typewriterTimer);
            this.typewriterTimer = null;
        }
    }

    inspectFinalObject(item) {
        this.state.finalObjects[item.id] = true;
        this.setCurrentSpeaker(item.speaker, item.line);
        this.addLine(CHARACTERS[item.speaker].name, item.line);
        this.nodes.stageCaption.textContent = item.id === "rumors" ? this.composeFinalRumorBookBody() : item.body;
        this.saveState();
        this.renderFinaleOnly();
    }

    composeFinalRumorBookBody() {
        const routeLines = [
            this.state.memories.tong_steps ? "有几页边上沾着茶渍，像是每次有人下不来台时，掌柜都会先想起那只被推过去的茶碗。" : "",
            this.state.memories.bai_stays ? "有一页写着老白后来总爱检查门闩，字旁边被人补了一句：说怕麻烦的人，最会把麻烦接住。" : "",
            this.state.memories.guo_seen ? "小郭那几页笔画很重，像她自己不肯承认的克制，也被传闻册老老实实记下来了。" : "",
            this.state.memories.care_unsaid ? "夹在中间的纸条没有署名，只有几句别扭的关心。没人认领，也没人舍得扔。" : "",
            this.state.memories.lantern_fixed ? "翻到靠后，旧灯笼被画得很小，却每一笔都亮着。" : "",
            this.state.memories.guest_accepted ? "最后几页旁边多了一只空碗。没有写你的名字，但位置一直留着。" : ""
        ].filter(Boolean);
        const recentRumors = this.state.rumors
            .filter((item) => item.episodeIndex < EPISODES.length - 1)
            .slice()
            .sort((a, b) => a.episodeIndex - b.episodeIndex)
            .slice(-4)
            .map((item) => `第 ${item.episodeIndex + 1} 日：${item.title}`);

        return [
            "传闻册摊在桌上。它不像案卷，也不像功劳簿，更像这些日子被压平以后留下的声音。",
            routeLines.join("\n"),
            recentRumors.length ? `翻到后面，最近几页写着：\n${recentRumors.join("\n")}` : "",
            "你忽然明白，前 19 日没有变成一条大案子。它们只是把你一点点放进了这张桌子旁边。"
        ].filter(Boolean).join("\n\n");
    }

    renderFinaleOnly() {
        this.nodes.choices.innerHTML = "";
        this.renderFinale(this.episode);
        this.renderCollection();
    }

    finishFinale() {
        this.state.finaleDone = true;
        this.state.completed[this.episodeIndex] = {
            title: "今夜无事",
            rumor: this.episode.finalLine,
            episodeTitle: this.episode.title
        };
        this.state.rumors.push({
            episodeIndex: this.episodeIndex,
            episodeTitle: this.episode.title,
            title: "今夜无事",
            rumor: this.episode.finalLine
        });
        this.state.memories.guest_rests = true;
        this.saveState();
        this.render();
    }

    renderFinalCard(finalLine) {
        const card = document.createElement("div");
        card.className = "ending-card final-card";
        card.innerHTML = `
            <strong>${finalLine}</strong>
            <p>传闻册已经翻完。现在可以回看前面的日子，补不同选择，或者回到第一日重新坐进同福客栈。</p>
            <small>回看模式已开启。</small>
        `;
        this.nodes.choices.appendChild(card);

        const firstButton = document.createElement("button");
        firstButton.className = "choice-btn";
        firstButton.type = "button";
        firstButton.textContent = "回到第一日";
        firstButton.addEventListener("click", () => this.switchEpisode(0));
        this.nodes.choices.appendChild(firstButton);
    }

    renderEpisodes() {
        this.nodes.episodes.innerHTML = "";
        if (!this.replayUnlocked) {
            const lockCard = document.createElement("div");
            lockCard.className = "episode-card mystery";
            lockCard.innerHTML = `
                <strong>先把二十日过完</strong>
                <span>通关前不展开目录，免得提前知道后面的日子。</span>
                <small>当前：第 ${this.state.currentEpisodeIndex + 1} 日 / 共 ${EPISODES.length} 日</small>
            `;
            this.nodes.episodes.appendChild(lockCard);
            return;
        }

        const visibleEpisodes = EPISODES.map((episode, index) => ({ episode, index }));

        visibleEpisodes.forEach(({ episode, index }) => {
            const completed = Boolean(this.state.completed[index]);
            const isCurrent = index === this.episodeIndex;
            const isPlayable = this.replayUnlocked || index === this.state.currentEpisodeIndex || completed && index === this.episodeIndex;
            const button = document.createElement("button");
            button.className = [
                "episode-card",
                isCurrent ? "active" : "",
                completed ? "completed" : "",
                !isPlayable ? "locked" : ""
            ].join(" ");
            button.type = "button";
            button.disabled = !isPlayable;
            button.innerHTML = `
                <strong>${String(index + 1).padStart(2, "0")} · ${episode.title}</strong>
                <span>${episode.subtitle}</span>
                <small>${this.getEpisodeStateText(index, completed)}</small>
            `;
            button.addEventListener("click", () => this.switchEpisode(index));
            this.nodes.episodes.appendChild(button);
        });
    }

    openEpisodeModal() {
        this.renderEpisodes();
        this.nodes.episodeModal.classList.add("active");
        this.nodes.episodeModal.setAttribute("aria-hidden", "false");
    }

    closeEpisodeModal() {
        this.nodes.episodeModal.classList.remove("active");
        this.nodes.episodeModal.setAttribute("aria-hidden", "true");
    }

    getEpisodeStateText(index, completed) {
        if (this.replayUnlocked) return completed ? "已入传闻册 · 可回看" : "可回看";
        if (index === this.state.currentEpisodeIndex) return "今日正在发生";
        if (completed) return "已入传闻册";
        return "顺序体验中";
    }

    switchEpisode(index) {
        if (!this.replayUnlocked && index !== this.state.currentEpisodeIndex) return;
        this.state.viewEpisodeIndex = index;
        this.state.pendingResult = null;
        this.state.episodeStep = 0;
        this.state.episodePath = null;
        this.closeEpisodeModal();
        this.nodes.log.innerHTML = "";
        this.saveState();
        this.render();
    }

    restartCurrent() {
        if (!this.replayUnlocked && this.state.completed[this.episodeIndex]) return;
        this.state.pendingResult = null;
        this.state.episodeStep = 0;
        this.state.episodePath = null;
        this.state.finalObjects = {};
        this.state.finaleDialogueIndex = 0;
        this.state.finaleDialogueDone = false;
        this.nodes.log.innerHTML = "";
        this.saveState();
        this.render();
    }

    renderRestartButton() {
        if (this.replayUnlocked) {
            this.nodes.restart.textContent = "重看本集";
            this.nodes.restart.disabled = false;
            return;
        }
        const completed = Boolean(this.state.completed[this.episodeIndex]);
        this.nodes.restart.textContent = completed ? "已收进传闻册" : "重开本集";
        this.nodes.restart.disabled = completed;
    }

    renderCharacters() {
        if (!this.nodes.characters) return;
        this.nodes.characters.innerHTML = "";
        MAIN_CHARACTER_IDS.forEach((id) => {
            const character = CHARACTERS[id];
            const card = document.createElement("button");
            card.className = `character-card ${id === this.state.selectedCharacter ? "active" : ""}`;
            card.type = "button";
            card.innerHTML = `
                <span class="avatar"><img src="${character.portrait}" alt="${character.name}头像"></span>
                <span>
                    <span class="character-name">${character.name}</span>
                    <span class="character-role">${character.role}</span>
                </span>
            `;
            card.addEventListener("click", () => this.showCharacterReaction(id));
            this.nodes.characters.appendChild(card);
        });
    }

    showCharacterReaction(id) {
        const line = this.episode.reactions?.[id] || CHARACTERS[id].idle;
        this.state.selectedCharacter = id;
        this.renderCharacters();
        this.setCurrentSpeaker(id, line);
        this.addLine(CHARACTERS[id].name, line);
    }

    setCurrentSpeaker(speakerId, line) {
        const character = CHARACTERS[speakerId];
        if (!character) return;

        this.state.selectedCharacter = MAIN_CHARACTER_IDS.includes(speakerId) ? speakerId : this.state.selectedCharacter;
        this.renderCharacters();

        if (character.portrait) {
            this.nodes.portrait.src = character.portrait;
            this.nodes.portrait.alt = `${character.name}动漫形象`;
            this.nodes.portrait.style.opacity = "1";
        } else {
            this.nodes.portrait.alt = `${character.name}正在说话`;
            this.nodes.portrait.style.opacity = "0";
        }
        this.nodes.currentName.textContent = character.name;
        this.nodes.currentRole.textContent = character.role;
        this.nodes.stageCaption.textContent = line || character.idle;
    }

    addLine(speaker, text, replaceLast = false) {
        if (!speaker || !text) return;
        if (!this.nodes.log) return;
        const last = this.nodes.log.lastElementChild;
        const key = `${this.episodeIndex}:${speaker}:${text}`;
        if (replaceLast && last?.dataset.key === key) return;

        const line = document.createElement("div");
        line.className = "line";
        line.dataset.key = key;
        line.innerHTML = `<strong>${speaker}</strong><p>${text}</p>`;
        this.nodes.log.appendChild(line);
        while (this.nodes.log.children.length > 2) {
            this.nodes.log.removeChild(this.nodes.log.firstElementChild);
        }
        this.nodes.log.scrollTop = this.nodes.log.scrollHeight;
    }

    renderStatus() {
        this.nodes.navProgress.textContent = `第 ${this.episodeIndex + 1} 日 / ${EPISODES.length} 日`;
        this.nodes.openEpisodes.textContent = this.replayUnlocked ? "回看二十日" : "通关后回看";
        this.nodes.openEpisodes.disabled = false;
        this.nodes.trust.textContent = `${this.completedCount}/${EPISODES.length} 集`;
        this.nodes.chaos.textContent = this.getAtmosphereText();
        this.nodes.warmth.textContent = this.getMemoryText();
    }

    getAtmosphereText() {
        const tags = this.state.memories;
        if (tags.guest_rests) return "今夜无事";
        if (tags.dream_lantern) return "灯还亮着";
        if (tags.inn_shelter) return "像能歇脚的地方";
        if (tags.inn_steady) return "热闹里有点稳";
        if (tags.inn_funny || tags.inn_chaotic) return "乱，但不散";
        if (tags.inn_warm) return "有人情味";
        return "刚刚起风";
    }

    getMemoryText() {
        const tags = this.state.memories;
        if (tags.guest_accepted) return "桌边给你留了位置";
        if (tags.found_family) return "有人把你算进热闹里";
        if (tags.tong_bai_deeper) return "旧话被轻轻收好";
        if (tags.mo_family_letter) return "小贝记得你没替她写";
        if (tags.guo_seen) return "小郭记得你看见她忍住";
        if (tags.bai_stays || tags.bai_needed) return "老白记得你没逼他跑";
        if (tags.tong_steps) return "掌柜记得你留过台阶";
        return "还在认门";
    }

    renderCollection() {
        if (!this.state.rumors.length) {
            this.nodes.collection.textContent = "传闻册还空着。先在客栈坐下，等第一件小事发生。";
            return;
        }

        const sortedRumors = this.state.rumors
            .slice()
            .sort((a, b) => a.episodeIndex - b.episodeIndex);
        const latest = sortedRumors[sortedRumors.length - 1];
        const recent = sortedRumors.slice(-4);

        this.nodes.collection.innerHTML = `
            <div class="rumor-summary">
                <strong>${sortedRumors.length} 条传闻已入册</strong>
                <span>最近：第 ${latest.episodeIndex + 1} 集 · ${latest.episodeTitle}</span>
            </div>
            ${recent
            .map((item) => `
                <div class="rumor-item">
                    <strong>${item.title}</strong>
                    <span>第 ${item.episodeIndex + 1} 集 · ${item.episodeTitle}</span>
                </div>
            `)
            .join("")}
        `;
    }

    loadState() {
        const fallback = {
            currentEpisodeIndex: 0,
            viewEpisodeIndex: 0,
            selectedCharacter: "tong",
            completed: Array(EPISODES.length).fill(null),
            rumors: [],
            memories: {},
            pendingResult: null,
            episodeStep: 0,
            episodePath: null,
            finalObjects: {},
            finaleDialogueIndex: 0,
            finaleDialogueDone: false,
            finaleDone: false
        };

        try {
            const saved = JSON.parse(localStorage.getItem(this.storageKey));
            if (!saved) return fallback;
            return {
                ...fallback,
                ...saved,
                completed: Array.from({ length: EPISODES.length }, (_, index) => saved.completed?.[index] || null),
                currentEpisodeIndex: Math.min(saved.currentEpisodeIndex || 0, EPISODES.length - 1),
                viewEpisodeIndex: Math.min(saved.viewEpisodeIndex || saved.currentEpisodeIndex || 0, EPISODES.length - 1)
            };
        } catch {
            return fallback;
        }
    }

    saveState() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }
}

const game = new WulinGame();

<template>
    <div class="abd">
        <div class="page">
            <div class="img" :style="ImageSwitch.imgBack.style">
                <img :src="ImageSwitch.imgBack.src" alt=""/>
            </div>
            <div class="img" :style="ImageSwitch.imgFront.style">
                <img :src="ImageSwitch.imgFront.src" alt=""/>
            </div>
        </div>
        <div class="sc" style="position:absolute;margin-top: 5%;">
            <add-text style="position:absolute;user-select:none;" :arr="poem1"></add-text>
        </div>
        <div style="position:absolute;" class="scrolling-text">
            <div class="text-container" :style="{ '--scrollPosition': scrollPosition + 'px' }">
                <span v-for="(item, index) in irc" :key="index">{{ item }}</span>
            </div>
        </div>
        <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
        <my-button style="margin-top: 34%;margin-left: 70%;"
                   :hidden="1"
                   message="next" urrl="/#/hidden/firework"></my-button>
        <div class="bestbutton">
            <my-button message="next" urrl="/#/hidden/happyBirthday"></my-button>
        </div>
    </div>

</template>
<script setup>
import AddText from "@/components/AddText.vue";
import MyButton from "@/components/button/MyButton.vue";
import axios from "axios";
import {computed, onBeforeUnmount, reactive, ref, watch} from 'vue'

const poem1 = localStorage.getItem("poem1")?.split(',')
const mus = require("@/assets/audios/【中文字幕】ホントノワタシ（真实的我） (feat. Kotoha) - 1.【中文字幕】真实的我(feat. Kotoha)(Av506482346,P1).mp3")
const MusicPlay = ref(null)
const musicPlay = () => {
    MusicPlay.value.volume = 0.15
}
/**
 * 歌词
 * @type {Ref<UnwrapRef<number>>}
 */

const scrollPosition = ref(0);
const irc = [
    "曲名：ホントウノワタシ",
    "演唱：田中琴葉(種田梨沙)",
    "作詞：藤本記子",
    "作曲：野井洋児",
    "編曲：野井洋児",
    "「大丈夫　君は強い人だから」と",
    "「不要怕 你一个人也可以的」",
    "いつもの笑顔の隣で",
    "伴着一如往常的笑颜",
    "「そうね」って笑った",
    "笑着回以一声「是啊」",
    "交差点　シグナルが変わる　黄昏",
    "黄昏的十字街头 信号灯还在闪烁",
    "無邪気に手を振る姿に",
    "望着挥手的天真身影",
    "「じゃあね」って笑った",
    "笑着回以一声「再见」",
    "言えない言葉たちが溢れて",
    "然而未能说出的话语不断漫溢",
    "町も風も空も　にじませてく",
    "渗染着模糊了街陌萧风与天色",
    "本当は泣きたくて　誰よりも臆病で",
    "其实我很想哭泣 其实我无比胆小怯懦",
    "心はこんなにも脆くて",
    "这颗心如此的脆弱易碎",
    "同じ涙いくつ流してもまだ",
    "同样的泪水流过不知多少遍",
    "変われない　変わりたいのになぜ？",
    "明明想要改变 为什么没法狠下心改变？",
    "ああ　やっと気づいても　そんな自分の気持ち",
    "啊啊 这才终于察觉到了 即便此时连自己的心情",
    "見失いそうになるけど",
    "感觉统统都快要迷失了",
    "繰り返して　ほら少しずつ強くなると",
    "不断往复中 我正一点一点变得坚强起来",
    "きっと信じてゆける　私なのに",
    "想来有一天能够相信 即便是这样的自己",
    "小さく「ただいま」　明かりもつけずに",
    "喃喃着「我回来了」 早已习惯不开灯的房间",
    "鏡の中　知らない私が",
    "镜子里 那个陌生的自己",
    "こっち見つめてる",
    "同样在凝视着对方",
    "着信　留守電に変わる　真夜中",
    "响铃已久的电话 深夜里变成留言",
    "上手に話せそうもなくて",
    "心意始终无法好好说出口",
    "ただ見つめてた",
    "只是木讷地呆望着",
    "駄目ね　自分が嫌で悔しくて",
    "真是没用 对自己感到嫌弃与不甘",
    "冷たい床の上　膝を抱いたままで",
    "在冰冷的地板上 久久地独自抱膝坐着",
    "待ちわびてる　窓に訪れる光を",
    "只是煎熬等待着 窗外映起拂晓的光亮",
    "本当は泣きたくて　誰よりも臆病で",
    "其实我很想哭泣 其实我无比胆小怯懦",
    "心はこんなにも弱くて",
    "这颗心如此的纤弱无力",
    "この胸に何度も　問いかけてみる",
    "多少次在内心中 询问自己的想法",
    "変わりたい　変われないのはなぜ？",
    "明明期盼着改变 为什么没法狠下心改变？",
    "ああ　思い願うほど　一途に追いかけるほど",
    "啊啊 越是在心中期盼着 越是不管不顾地追寻着",
    "また逸れそうになるけど",
    "越是忍不住想要选择逃避",
    "繰り返して　今日より明日は強くなると",
    "不断往复中 是一天一天愈发坚强的自己",
    "ずっと　信じてゆける　私だから",
    "正因为是这样的自己 所以永远能够相信"
];


watch(new Date(), () => {
    scrollPosition.value -= 0.001; // 每次滚动的距离
});

const scrollInterval = setTimeout(()=>{
    setInterval(() => {
        scrollPosition.value -= 0.1; // 每次滚动的距离
    }, 5); // 滚动速度
},1000)


// 在组件销毁时清除定时器
onBeforeUnmount(() => {
    clearInterval(scrollInterval);
});


const generatedNumbers = ref([]);
const randomNum = ref()

function generateUniqueRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (generatedNumbers.value.length === max) {
        generatedNumbers.value = []
        return generateUniqueRandomNumber(min, max);
    } else {
        // 检查生成的随机数是否已存在于数组中
        if (generatedNumbers.value.includes(randomNumber)) {
            // 如果已存在，则递归调用该函数重新生成随机数
            return generateUniqueRandomNumber(min, max);
        } else {
            // 如果不存在，则将随机数添加到数组中，并返回该随机数
            generatedNumbers.value.push(randomNumber);
            return randomNumber;
        }
    }
}
const submit = () => {
    const data = {
        username: localStorage.getItem("username"),
        page: "confession"
    }
    axios.post("/api/insertPageLog", data)
}
submit()

const ImageSwitch = reactive({
    speed: 8,
    imgFront: {
        src: require("/src/assets/images/madoka/" + 0 + ".jpg"),
        opacity: 1,
        style: computed(() => {
            const opacity = ImageSwitch.imgFront.opacity;
            if (randomNum.value % 2 === 0) {
                return {
                    opacity,
                    transform: `translateX(${opacity * 800 - 800}px)`,
                };
            } else {
                return {
                    opacity,
                    transform: `scale(${opacity})`,
                }
            }

        }),
    },
    imgBack: {
        src: require("/src/assets/images/madoka/" + 1 + ".jpg"),
        opacity: 0,
        style: computed(() => {
            const opacity = ImageSwitch.imgBack.opacity;
            if (randomNum.value % 2 === 0) {
                return {
                    opacity,
                    transform: `scale(${opacity})`,
                };
            } else {
                return {
                    opacity,
                    transform: `scale(${opacity})`,
                }
            }

        }),
    },
});


const i = ref(1)
setInterval(() => {
    if (i.value !== 0) {
        i.value -= 0.1
    }
}, 100)

const run = (newSrc = "") => {
    const front = ImageSwitch.imgFront;
    const back = ImageSwitch.imgBack;
    if (newSrc) {
        back.src = front.src;
        back.opacity = 1;
        front.src = newSrc;
        front.opacity = 0;
        requestAnimationFrame(() => run());
    } else {
        back.opacity -= ImageSwitch.speed * 1e-3;
        front.opacity += ImageSwitch.speed * 1e-3;
        if (front.opacity >= 1) {
            back.opacity = 0;
            front.opacity = 1;
        } else {
            requestAnimationFrame(() => run());
        }
    }
};

run(require("/src/assets/images/madoka/" + 1 + ".jpg"));
setInterval(() => {
    randomNum.value = generateUniqueRandomNumber(0, 33);
    run(require("/src/assets/images/madoka/" + randomNum.value + ".jpg"))
}, 3500)
</script>


<style scoped lang="scss">
.abd {
  max-width: 1200px;
  max-height: 860px;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 100%;
}

.sc {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 95%;
  overflow: scroll;
  background-size: 100%;
}

.page {
  position: relative;
  width: 1200px;
  height: 1000px;
  overflow: hidden;
}

.img {
  display: block;
  position: absolute;
  width: 1200px;
  background-size: cover;

  & > img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}

.scrolling-text {
  width: 200px; /* 设置滚动字幕容器的宽度 */
  height: 200px; /* 设置滚动字幕容器的高度 */
  overflow: hidden; /* 隐藏溢出的文本 */
}

.text-container {
  position: relative;
  transform: translateY(var(--scrollPosition)); /* 使用CSS变量控制垂直位移 */
}

.text-container span {
  display: block; /* 将每行文本显示为块级元素 */
  margin-bottom: 20px; /* 设置文本行之间的间距 */
}
</style>


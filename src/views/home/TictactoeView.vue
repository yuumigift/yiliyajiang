<template>
    <div class="mainn" @click="musicPlay">
        <div class="title">
            <my-label message="祝小天使生日快乐！"></my-label>
            <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
        </div>
        <div class="poem">
            <add-text style="position: absolute; pointer-events: none" :arr="poem"></add-text>
        </div>
        <div class="control">
            <div class="control--inner">
                <my-button @click="push" :style="{ 'pointer-events': none }" style="background-color: white; opacity: 0.8" :message="newMsg"></my-button>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/button/MyButton.vue";
import { sakura } from "../../assets/js/sakura";
import MyLabel from "@/components/lable/MyLabel.vue";
import AddText from "@/components/AddText.vue";
export default {
    name: "TictactoeView",
    components: { AddText, MyLabel, MyButton },
    data() {
        return {
            newMsg: "派对正在准备中，请稍候...",
            timeCount: 59,
            x: 0,
            none: "none",
            poem: [],
            show: true,
            mus: require("../../assets/audios/Irony,℃iel - 藍　Second Love♥ふたりの唇 .mp3"),
        };
    },
    init() {},
    mounted() {
        const arr = localStorage.getItem("poem")?.split(",");
        this.poem = arr;
        this.$refs.MusicPlay.volume = 0.15;
        setTimeout(() => {
            setInterval(() => {
                if (this.timeCount > 0) {
                    this.timeCount--;
                    this.newMsg = "派对正在准备中，请稍候" + this.timeCount;
                } else {
                    if (this.newMsg !== "派对正在准备中，请稍候") this.newMsg = "前往生日派对";
                    this.none = "";
                }
            }, 1000);
        }, 60000);
    },
    methods: {
        push() {
            this.$router.push("/hidden/happyBirthday");
        },

        /**
         * 播放音乐并开始旋转
         */
        musicPlay() {
            this.$refs.MusicPlay.play();
            this.show = false;
        },
    },
};
</script>

<style scoped lang="scss">
.mainn {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr 60px;
    border-radius: 14px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
    background-image: url("../../assets/images/sakuraTree01.jpeg");
    background-size: 100%;
}
.title {
    text-align: center;
}
.poem {
    position: relative;
    overflow-y: auto;
}
.control {
    position: relative;
    text-align: right;

    &--inner {
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 99;
    }
}
</style>

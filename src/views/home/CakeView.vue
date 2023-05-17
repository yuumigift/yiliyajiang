<template>
    <div class="c__cake_view">
        <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
        <div class="desk">
            <img src="../../assets/images/桌布.jpg" alt="" />
        </div>
        <div class="cake">
            <img src="../../assets/images/生日蛋糕.png" alt="" />
        </div>
        <div class="star_container" style="top: -90px">
            <div class="line" v-for="(item, index) in stars" style="" :key="index" :style="{ left: `${item.x}px`, top: `${item.y}px` }">
                <div class="line--inner"></div>
            </div>
            <div class="stars" v-for="(item, index) in stars" :key="index" :style="{ left: `${item.x}px`, top: `${item.y}px` }">
                <div class="stars--inner">
                    <video autoplay muted :hidden="hidden">
                        <source src="../../assets/mp4/星星（生成）.mp4" type="video/mp4" />
                    </video>
                    <video autoplay muted loop :hidden="!hidden" @ended="handleEnded(item)">
                        <source src="../../assets/mp4/星星（完整）.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>
<script>
import AddText from "@/components/AddText.vue";

export default {
    components: { AddText },
    data() {
        return {
            a_speed: 0,
            RANGE: 30, // 星星摇晃幅度
            mus: require("../../assets/audios/泠鸢yousa - 勾指起誓.mp3"),
            hidden: false,
            stars: [
                // speed：星星摇晃频率
                { y: 50, x: 0, speed: 1.3, shaking: false, angle: Math.PI },
                { y: 120, x: 0, speed: 1.6, shaking: false, angle: Math.PI },
                { y: 0, x: 0, speed: 1.4, shaking: false, angle: Math.PI },
                { y: 60, x: 0, speed: 1.5, shaking: false, angle: 0 },
                { y: 20, x: 0, speed: 1.7, shaking: false, angle: 0 },
                { y: 160, x: 0, speed: 1.3, shaking: false, angle: 0 },
            ],
        };
    },
    mounted() {
        this.$refs.MusicPlay.volume = 0.15;
        this.enterFrame();
        setTimeout(() => {
            this.hidden = true;
        }, 24500);
    },
    methods: {
        handleEnded(item) {
            item.shaking = true;
        },
        musicPlay() {
            this.$refs.MusicPlay.play();
        },
        move(item) {
            let { x, speed, angle, shaking } = item;
            if (this.hidden) {
                if (this.a_speed < 1) {
                    angle += speed * 0.01 * this.a_speed;
                    this.a_speed += 0.0002;
                } else {
                    angle += speed * 0.01;
                }
            }
            if (angle > Math.PI * 2) {
                angle -= Math.PI * 2;
            }
            x = Math.cos(angle) * this.RANGE;
            return { x, speed, angle, shaking };
        },
        enterFrame() {
            requestAnimationFrame(this.enterFrame);
            this.stars = this.stars.map((item) => this.move(item));
        },
    },
};
</script>
<style scoped lang="scss">
video {
    mix-blend-mode: screen;
}
.c__cake_view {
    flex: 1;
    display: grid;
    overflow: hidden;
}
.desk {
    position: relative;
    grid-row: 1;
    grid-column: 1;
    backdrop-filter: blur(20px);
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.cake {
    position: relative;
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self: center;
    width: 500px;
    transform: translateY(70px);

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.mask {
    grid-row: 1;
    grid-column: 1;
    background: #000;
    animation: appear 10s both;
    pointer-events: none;
}
@keyframes appear {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
.star_container {
    position: relative;
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 90px auto 1fr;
}
.stars {
    position: relative;

    &--inner {
        position: absolute;
    }
}

.line {
    position: relative;
    display: grid;
    transform: translateY(10px);

    &--inner {
        position: absolute;
        justify-self: center;
        width: 1px;
        height: 500px;
        bottom: -30px;
        transform: translateX(2px);
        border-right: dashed 1px #fff;
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
    }
}
</style>

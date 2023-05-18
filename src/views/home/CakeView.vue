<template>
    <div class="c__cake_view">
        <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
        <div class="desk">
            <img src="../../assets/images/桌布.jpg" alt="" />
        </div>
        <div class="cake">
            <img src="../../assets/images/生日蛋糕.png" alt="" />
        </div>
        <div class="star_container">
            <OverhangStar :angle="Math.PI" :x="0" :y="50" :speed="13" :freezing="80"></OverhangStar>
            <OverhangStar :angle="Math.PI" :x="200" :y="100" :speed="16" :freezing="40"></OverhangStar>
            <OverhangStar :angle="Math.PI" :x="400" :y="0" :speed="11" :freezing="0"></OverhangStar>
            <OverhangStar :angle="0" :x="600" :y="60" :speed="14" :freezing="60"></OverhangStar>
            <OverhangStar :angle="0" :x="800" :y="20" :speed="12" :freezing="100"></OverhangStar>
            <OverhangStar :angle="0" :x="1000" :y="120" :speed="18" :freezing="20"></OverhangStar>
        </div>
        <div class="mask"></div>
    </div>
</template>
<script>
import AddText from "@/components/AddText.vue";
import OverhangStar from "@/components/OverhangStar.vue";

export default {
    components: { AddText, OverhangStar },
    data() {
        return {
            mus: require("../../assets/audios/泠鸢yousa - 勾指起誓.mp3"),
        };
    },
    mounted() {
        this.$refs.MusicPlay.volume = 0.15;
    },
    methods: {
        musicPlay() {
            this.$refs.MusicPlay.play();
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
    grid-row: 1;
    grid-column: 1;
    position: relative;
}
</style>

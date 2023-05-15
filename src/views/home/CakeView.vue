<template>
    <div class="mainn">
        <div class="cake" style="position:absolute;margin-top: 27%;margin-left: 35%;" >
            <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
        </div>
        <div class="container" v-for="(item,index) in arr" :key="index"
             :style="{ left: 260 * index + 'px' }">
            <video width="160" height="120" autoplay loop>
                <source src="../../assets/mp4/星星_1.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>
<script>
import AddText from "@/components/AddText.vue";

export default {
    components: {AddText},
    data(){
        return{
            mus:require('../../assets/audios/泠鸢yousa - 勾指起誓.mp3'),
            arr:[1,2,3,4]
        }
    },
    mounted() {
        this.$refs.MusicPlay.volume = 0.15
    },
    methods:{
        musicPlay() {
            this.$refs.MusicPlay.play();
        },
    }

}
</script>
<style scoped lang="scss">
.mainn{
    max-width: 1250px;
    max-height: 860px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    width: 100%;
    border-radius: 14px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
    background-size: 100%;
    background-image: url("../../assets/images/桌布.jpg");
}

.cake{
    background-repeat: no-repeat;
    height: 90vh;

    width: 40%;
    background-size: 100%;
    background-image: url("../../assets/images/生日蛋糕.png");
}
video {
    mix-blend-mode: screen;
}
.container {
    position: absolute;
    margin-left: 1%;
}
</style>
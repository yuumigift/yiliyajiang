<template>
    <div class="treasure">
        <div class="video-bg" style="width: 100%;height: 100%">
            <video width="320" height="240" autoplay muted>
                <source :src="src" type="video/mp4">
            </video>
        </div>
        <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay" :muted="muted"></audio>
        <div style="width: 66px;position: fixed;top:85%;left:80%;line-height: 0;z-index: 100;">
            <div style="width: 190%;">
                <my-button height="45px" style="margin-top: 49%;margin-left: 140%;width: 50%;"
                           message="sikp" urrl="/#/messageBoard"></my-button>
            </div>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";
import {useRoute} from "vue-router"

export default {
    components: {MyButton},
    data(){
        return{
            muted:false,
            mus:'',
            src:''
        }
    },

    mounted(){
        console.log(Math.random())
        this.mus = require("../../assets/audios/死奏怜音、玲珑终.mp3")
    },
    methods:{
        choose(){
            this.src = "http://localhost:8081/%E3%80%90%E5%A5%B3%E7%8E%8B%E8%9C%82_%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E5%B0%8F%E5%9C%86%E3%80%91.mp4"
            this.src = "http://wuwangwo.space:8081/%E8%BD%A6%E4%B8%87%E9%B8%A3%E6%B3%A3%E4%B9%8B%E6%97%B6.mp4"
        }
    }

}
</script>

<style scoped lang="scss">
.video-bg {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.treasure {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: #fff;
    padding: 20px 40px;
    height: 100%;
    overflow: auto;
    background-color: rgba(16 18 27 / 10%);
    @media screen and (max-width: 510px) {
        padding: 20px;
    }

}
.maindd{
    margin-top: 55%;
    max-width: 1250px;
    max-height: 860px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 0;
    font-size: 15px;
    font-weight: 500;
}
</style>
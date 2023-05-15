<template>
    <div class="treasure">
        <div class="video-bg" style="width: 100%;height: 100%">
            <video width="320" height="240" autoplay>
                <source src="http://wuwangwo.space:8081/%E5%87%BA%E5%9C%BA-%E7%94%9F%E6%97%A5%E7%83%9F%E7%81%AB.mp4" type="video/mp4">
            </video>
        </div>
        <div style="width: 66px;position: fixed;top:85%;left:80%;line-height: 0;z-index: 100;">
            <div style="width: 190%;">
                <my-button height="45px" style="margin-top: 49%;margin-left: 110%;width: 130%;"
                           message="前往下一站" urrl="/#/hidden/cake"></my-button>
            </div>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";

export default {
    components: {MyButton},
    data(){
        return{
            muted:false,
        }
    },
    mounted(){
    },
    methods:{

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
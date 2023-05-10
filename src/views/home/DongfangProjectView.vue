<template>
    <div class="video-bg">
        <video width="320" height="240" autoplay :hidden="hidden" :muted="muted" ref="MusicPlay">
            <source src="../../assets/mp4/秋姉妹のなく顷に.mp4" type="video/mp4">
        </video>
    </div>
    <div class="maind">
        <img src="../../assets/images/圆焰贴贴.jpg" :hidden="imgHidden">
        <div style="position: absolute;
                    left:50%;
                    top:50%;
                    transform: translate(-50%, -50%);"
                    :hidden="messageHidden">
            <MyLabel :message="message"></MyLabel>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";
import MyLabel from "@/components/lable/MyLabel.vue";

export default {
    name:"DongfangProjectView",
    components: {MyLabel, MyButton},
    data(){
        return{
            hidden:true,
            muted:false,
            imgHidden:false,
            messageHidden:false,
            message:'秋姉妹のなく顷に'
        }
    },
    mounted() {
        this.$refs.MusicPlay.volume = 0.15
        setTimeout(()=>{
            this.messageHidden = false
            this.message = "在未来等你！"
            setTimeout(()=>{
                this.messageHidden = true
            },2000)
        },149000)
        setTimeout(()=>{
            this.hidden = false;
            this.messageHidden = true;
            this.imgHidden = true;
        },19000)
    }
}
</script>
<style scoped lang="scss">
/*背景视频*/
.video-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}


</style>
<template>
    <div class="video-bg">
        <video width="320" height="240" autoplay :hidden="hidden" :muted="muted" ref="MusicPlay">
            <source src="http://wuwangwo.space:8081/%E7%A7%8B%E5%A7%89%E5%A6%B9%E3%81%AE%E3%81%AA%E3%81%8F%E9%A1%B7%E3%81%AB.mp4" type="video/mp4">
        </video>
    </div>
    <div style="position: absolute">
        <img src="../../assets/images/圆焰贴贴.png" :hidden="imgHidden" style="height: 100%">
        <div style="position: absolute;
                    left:50%;
                    top:50%;
                    transform: translate(-50%, -50%);"
                    :hidden="messageHidden">
            <MyLabel :message="message"></MyLabel>
        </div>
    </div>
  <div class="bestbutton">
    <my-button message="next" urrl="/#/hidden/theLast"></my-button>
  </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
import axios from "axios";

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
      this.submit()
    },
    methods:{
      submit(){
        const data = {
          username:localStorage.getItem("username"),
          page:"cake"
        }
        axios.post("/api/insertPageLog",data)
      },
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

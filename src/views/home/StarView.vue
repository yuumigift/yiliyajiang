<template>
    <div class="video-bg" style="width: 100%;height: 100%">
        <video width="320" height="240" autoplay ref="MusicPlay">
            <source src="http://localhost:8081/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%94%9F%E6%97%A5%E7%A5%9D%E7%A6%8F.mp4" type="video/mp4">
        </video>
    </div>
    <div class="maindd">
        <div style="position: absolute;
                    left:76%;
                    width: 20%;
                    height: 0%;
                    transform: translate(-50%, -50%);">
            <div style="width: 170%;">
                <video width="320" height="240" autoplay :muted="muted" :hidden="messageHidden" ref="MusicPlay1">
                    <source src="../../assets/mp4/星茶会.mp4" type="video/mp4">
                </video>
                <my-button style="margin-top: 34%;margin-left: 70%;"
                           :hidden="buttonHidden"
                           message="前往生日派对" urrl="/#/hidden/tictactoe"></my-button>
            </div>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/button/MyButton.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
import store from "@/store";

export default {
    name:"StarView",
    components: {MyLabel, MyButton},
    data(){
        return{
            messageHidden:false,
            message:'',
            muted:false,
            buttonHidden:true
        }
    },
    mounted() {
        this.$refs.MusicPlay.volume = 0.15
        this.$refs.MusicPlay1.volume = 0.15
        setTimeout(()=> {
            this.messageHidden = true;
            this.muted = true
        },135000);
        setTimeout(()=> {
            this.messageHidden = true;
            this.muted = true
            this.buttonHidden = false
        },261000);
    },
    methods:{
        loginOut(){
            store.state.data = null;
            let a = store.state.data
            this.$router.push('/login')
            console.log(a + "是")
        }
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

.maindd{
    margin-top: 45%;
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
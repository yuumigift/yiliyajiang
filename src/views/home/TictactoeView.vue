<template>
	<div class="mainn" @click="musicPlay">
		<div style="display: flex;margin-left: 37%">
			<my-label
			message="祝小天使生日快乐！"></my-label>
			<audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
		</div>
    <div class="bestbutton">
      <div>
        <my-button
            @click="push"
            :style="{
						'pointer-events':none
					}"
            style="background-color: white;opacity: 0.8"
            :message=newMsg></my-button>
      </div>
    </div>
		<div style="position:absolute;margin-top: 5%;margin-left: 43%;">
			<add-text :color="color" style="position:absolute;pointer-events: none" :arr="poem"></add-text>
		</div>
	</div>
</template>

<script>
import MyButton from "@/components/button/MyButton.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
import AddText from "@/components/AddText.vue";
import axios from "axios";
export default {
	name: "TictactoeView",
	components: {AddText, MyLabel, MyButton},
	data(){
		return{
			newMsg:'派对正在准备中，请稍候...',
			timeCount:59,
			x:0,
			none:'none',
			poem:[],
			show:true,
			mus:require("../../assets/audios/Irony,℃iel - 藍　Second Love♥ふたりの唇 .mp3"),
      color:null,
      a:236,
      b:16,
      c:188
		}
	},
	init(){
	},
	mounted() {
		window.is_start_sakura = true;
		const arr = localStorage.getItem("poem")?.split(',')
		this.poem = arr
		this.$refs.MusicPlay.volume = 0.15
    setInterval(()=>{
      this.a = Math.random()*140+116
      if (this.a < 60){
        this.a = 60
      }
      this.b = Math.random()*140+116
      this.c = Math.random()*140+116
      this.color = this.a + "," + this.b + "," + this.c
    },1000)
		setTimeout(()=> {
			setInterval(()=>{
				if (this.timeCount>0){
					this.timeCount--
					this.newMsg = "派对正在准备中，请稍候"+ this.timeCount;
				}else {
					if (this.newMsg !== "派对正在准备中，请稍候")
					this.newMsg = "前往生日派对"
					this.none = ''
				}
			},1000)
		},60000);
    this.submit()
	},
	methods:{
    submit(){
      const data = {
        username:localStorage.getItem("username"),
        page:"tictactoe"
      }
      axios.post("/api/insertPageLog",data)
    },
		push(){
			this.$router.push('/hidden/cake')
		},

		/**
		 * 播放音乐并开始旋转
		 */
		musicPlay() {
			this.$refs.MusicPlay.play();
			this.show = false;
		},
	}
}
</script>

<style scoped lang="scss">

.mainn{
/*	height: 83.3vh;*/
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: absolute;
	width: 100%;
  height: 100%;
	border-radius: 14px;
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	font-size: 15px;
	font-weight: 500;
	background-image: url("@/assets/images/sakuraTree01.jpeg");
	background-size: 100%;
}

</style>

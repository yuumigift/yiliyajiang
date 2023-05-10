<template>
	<div class="mainn" @click="musicPlay">
		<div style="display: flex;margin-left: 37%">
			<my-label
			message="祝小天使生日快乐！"></my-label>
			<audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
		</div>

		<div style="margin-left: 88%;margin-top: 50%" class="point" >
			<my-button
					@click="push"
					:style="{
						'pointer-events':none
					}"
					style="background-color: white;opacity: 0.8"
					:message=newMsg></my-button>
		</div>
		<div style="margin-left: 40%;margin-top: -58%;font-family: ysbth;width: 18%">
			<ul style="list-style: none;color: hotpink">
				<li v-for="(label, index) in labels" class="text">
					{{ label.one }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import MyButton from "@/components/button/MyButton.vue";
import {sakura} from "../../assets/js/sakura";
import MyLabel from "@/components/lable/MyLabel.vue";
import store from "@/store";
export default {
	name: "TictactoeView",
	components: {MyLabel, MyButton},
	data(){
		return{
			newMsg:'派对正在准备中，请稍候...',
			timeCount:59,
			x:0,
			none:'none',
			poem:[],
			labels:[],
			show:true,
			mus:require("../../assets/audios/doriko,初音ミク - 夕日坂.mp3"),
		}
	},
	init(){
	},
	mounted() {
		this.poem = store.state.message.poem
		this.$refs.MusicPlay.volume = 0.15
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
			setInterval(()=>{
				this.addRow();
			},1900)
		},60000);

	},
	methods:{
		push(){
			this.$router.push('/hidden/happyBirthday')
		},
		addRow(){
			this.labels.push({
				one:this.poem[this.x],
			})
			this.x++;
		},
		/**
		 * 暂停音乐并停止旋转
		 */
		musicPause() {
			this.$refs.MusicPlay.pause();
			this.musicTF = true;
		},

		/**
		 * 播放音乐并开始旋转
		 */
		musicPlay() {
			this.$refs.MusicPlay.play();
			this.musicTF = false
			this.show = false;
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
	position: relative;
	width: 100%;
	border-radius: 14px;
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	font-size: 15px;
	font-weight: 500;
	background-image: url("../../assets/images/sakuraTree01.jpeg");
	background-size: 100%;
}
.point{
}
</style>
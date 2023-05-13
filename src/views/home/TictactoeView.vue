<template>
	<div class="mainn" @click="musicPlay">
		<div style="display: flex;margin-left: 37%">
			<my-label
			message="祝小天使生日快乐！"></my-label>
			<audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio>
		</div>

		<div style="margin-left: 88%;margin-top: 50%">
			<my-button
					@click="push"
					:style="{
						'pointer-events':none
					}"
					style="background-color: white;opacity: 0.8"
					:message=newMsg></my-button>
		</div>
		<div style="position:absolute;margin-top: 5%;margin-left: 43%;">
			<add-text style="position:absolute;pointer-events: none" :arr="poem"></add-text>
		</div>
	</div>
</template>

<script>
import MyButton from "@/components/button/MyButton.vue";
import {sakura} from "../../assets/js/sakura";
import MyLabel from "@/components/lable/MyLabel.vue";
import AddText from "@/components/AddText.vue";
export default {
	name: "TictactoeView",
	components: {AddText, MyLabel, MyButton},
	data(){
		return{
			newMsg:'派对正在准备中，请稍候...',
			timeCount:59,
			x:0,
			none:'none',
			poem:["微风躲在霞草里舞蹈",
				"提醒我你的生日快到",
				"玫瑰刺拽着衬衫衣角",
				"你的礼物我怎么会忘掉",
				"绵云像麦芽糖被阳光发酵",
				"是你也想了解的味道",
				"我站在山坡上踮起脚",
				"只有这个角度刚刚好",
				"想象里摘一朵 送给你要不要",
				"下过雨的天怎么更吸引小鸟",
				"关于这个问题我一直在思考",
				"原来是涂了彩虹颜色的唇膏",
				"于是我悄悄 偷一点放在你的化装盒",
				"想你也一定喜欢得不得了",
				"庄园里刚结出的花苞",
				"九百九十九朵不多也不少",
				"让我用勤劳 培育给你的祈祷",
				"瞧",
				"那一株花蕊轻盈 像你的睫毛",
				"那一朵欲放未放 是你羞涩而温暖的笑",
				"风车缓缓地绕 陪着牛儿吃草",
				"夕阳懒懒地照 在等黎明破晓",
				"你倔起嘴巴在撒娇",
				"又溜走一岁 这时光飞逝的年少",
				"风筝飞呀飞 系着愿望在飘",
				"秋千摇呀摇 我累得快睡着",
				"想起这首旋律古老的歌谣",
				"化身田园诗人为你唱:",
				"祝你生日快乐",
				"祝你生日快乐",
				"祝你生日快乐",
				"祝你生日快乐",],
			show:true,
			mus:require("../../assets/audios/Irony,℃iel - 藍　Second Love♥ふたりの唇 .mp3"),
		}
	},
	init(){
	},
	mounted() {
		const arr = localStorage.getItem("poem").split(',')
		// this.poem = arr
		console.log(localStorage.getItem("poem"))
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
		},60000);
	},
	methods:{
		push(){
			this.$router.push('/hidden/happyBirthday')
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
	background-image: url("../../assets/images/sakuraTree01.jpeg");
	background-size: 100%;
}

</style>
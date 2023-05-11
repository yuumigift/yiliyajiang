<template>
	<!--父级路由和子级路由的选择-->
	<router-view v-if="$route.path !== '/treasure'"></router-view>

	<div class="treasure">
		<!--		弹出注册层-->
		<div style="margin-left: 20%;margin-top: 50%;;font-size: 17px;position:absolute;">
			<my-label font-size="11" message="本网页不支持手机端，如果登陆不上请用电脑连接手机热点即可登陆"></my-label>
		</div>
		<dialog-component style="position:absolute;margin-left: 22%;margin-top: 14%;" :hidden="visitAble" @event="event" ref="dialog"></dialog-component>
		<div style="margin-top: 15%;font-size: 17px">
		</div>
		<div style="margin-left: 32%;margin-top: 2%;">
			<my-search width="50%" type="text" placeholder="请输入用户名" v-model="username"></my-search>
		</div>
		<div style="margin-left: 32%;margin-top: 20px;">
			<my-search width="50%" type="password" placeholder="请输入密码" v-model="password"></my-search>
		</div>
		<div style="margin-left: 40%;font-size: 20px">
			<my-button
					class="ass"
					height="59px"
					style="cursor: pointer;width: 12%;"
					@click="register"
					message="注册"></my-button>
		</div>
		<div style="margin-left: 50%;margin-top: -77px;font-size: 20px">
			<my-button
					class="ass"
					height="59px"
					style="cursor: pointer;width: 14%;margin-top: 3%;float:left;"
					@click="submit"
					message="Login"></my-button>
		</div>
		<div style="margin-top: 15%;font-size: 17px">
			<green-label message="网页正在建设中，每天不定时开放（晚上6点后必定开放）"></green-label>
		</div>
	</div>
</template>

<script>
import ContentWrapper from '@/components/treasure/ContentWrapper.vue';
import MyButton from "@/components/button/MyButton.vue";
import GreenButton from "@/components/button/GreenButton.vue";
import MyLabel from "@/components/lable/MyLabel.vue";
import GreenLabel from "@/components/lable/GreenLabel.vue";
import MySearch from "@/components/search/MySearch.vue";
import router from "@/router";
import {computed, onMounted, reactive} from "vue";
import axios, {post} from "axios";
import {useStore} from "vuex";
import store from "@/store";
import DialogComponent from "@/components/dialog/dialog.vue";

export default {
	components: {DialogComponent, MySearch, GreenLabel, MyLabel, GreenButton, MyButton, ContentWrapper},
	data(){
		return {
				password:'',
				username:'',
				role:'',
				visitAble:true
		}
	},
	methods:{
		event(data){
			this.visitAble = data
		},
		register(){
			this.visitAble=false;
		},
		submit(){
			if (this.username !== '' && this.password !== null){
				this.login();
			}
			else if (this.password === ''||this.username === ''){
				alert("用户名或密码不能为空！")
			}
		},
		login(){
			let data = {
				username : this.username,
				password : this.password
			}
			axios.post("/api/login",data).then(resp =>{
				const data = resp.data
				this.role = data.role
				if (data.code === 200){
					if (resp.data.role === 0){
						this.$router.replace('/hidden/Login')
						store.state.message.m1 = resp.data.m1;
						store.state.message.poem = resp.data.poem;
					}else {
						this.$router.replace('/home')
					}
				}else {
					alert(data.message)
				}
				store.state.username = this.username;
				store.state.data = this.role;
				localStorage.setItem("role",this.role)
				localStorage.setItem("username",this.username)
			})
		}
	}
}
</script>

<style lang="scss" scoped>

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
	font-family: ysbth;

}
.aaa{
	position: relative;
	display: inline-block;
	padding: 10px;
	color: #03e9f4;
	text-decoration: none;
	//text-transform: uppercase;
	transition: 0.5s;
	letter-spacing: 2px;
	overflow: hidden;
	margin: 10px;


	span{
		position: absolute;
		display: block;
	}
	// 上
	span:nth-child(1){
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg,transparent,#03e9f4);
		animation: animate1 1s linear infinite;

		@keyframes animate1{
			0%{
				left: -100%;
			}
			50%,100%{
				left: 100%;
			}
		}
	}
	// 右
	span:nth-child(2){
		top: -100%;
		right: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(180deg,transparent,#03e9f4);
		animation: animate2 1s linear infinite;
		animation-delay: 0.25s;

		@keyframes animate2{
			0%{
				top: -100%;
			}
			50%,100%{
				top: 100%;
			}
		}
	}
	// 下
	span:nth-child(3){
		bottom: 0;
		right: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(270deg,transparent,#03e9f4);
		animation: animate3 1s linear infinite;
		animation-delay: 0.50s;

		@keyframes animate3{
			0%{
				right: -100%;
			}
			50%,100%{
				right: 100%;
			}
		}
	}
	// 左
	span:nth-child(4){
		bottom: -100%;
		left: 0;
		width: 2px;
		height: 100%;
		background: linear-gradient(360deg,transparent,#03e9f4);
		animation: animate4 1s linear infinite;
		animation-delay: 0.75s;

		@keyframes animate4{
			0%{
				bottom: -100%;
			}
			50%,100%{
				bottom: 100%;
			}
		}
	}


}

.aaa:hover{
	background: #03e9f4;
	color: #ffffff;
	box-shadow: 0 0 5px #03e9f4,
	0 0 25px #03e9f4,
	0 0 50px #03e9f4,
	0 0 200px #03e9f4;
	-webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}

.aaa:nth-child(1){
	filter: hue-rotate(100deg);
}

.hover-slide-right{
	&::before {
		top: 0; bottom: 0; left: 0;
		height: 100%; width: 0%;
	}
	&:hover::before {
		width: 100%;
	}
}

</style>>


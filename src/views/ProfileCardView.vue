<template>
	<div class="card-box">
		<div class="card" :class="active(2) || active(3)" >
			<div class="card-header">
				<img class="card-avatar" :src="imageUrl" alt="avatar"/>
				<h1 class="card-fullname">周杰伦 Jay Chou</h1>
				<h2 class="card-jobtitle">华语流行乐男歌手</h2>
			</div>
			
			<div class="card-main">
				
				<!--第一页-->
				<div class="card-section" :class="active(1)">
					<div class="card-content">
						<div class="card-subtitle">关于</div>
						<p class="card-desc">中国台湾华语流行歌手、著名音乐人、音乐创作家、作曲家、作词人、制作人、杰威尔音乐公司老板之一、导演。</p>
					</div>
					<!--四个图标-->
					<div class="card-social">
						<a href="#">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"/>
							</svg>
						</a>
						<a href="#">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path
									d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"/>
							</svg>
						</a>
						<a href="#">
							<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"/>
								<path
									d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"/>
								<path
									d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"/>
							</svg>
						</a>
						<a href="#">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"/>
							</svg>
						</a>
					</div>
				</div>
				
				<!--第二页-->
				<div class="card-section" :class="active(2)">
					<div class="card-content">
						<div class="card-subtitle">专辑发布</div>
						
						<div class="card-timeline">
							<div class="card-item" :data-year="item.time"  v-for="item in timeline" :key="item.id">
								<div class="card-item-title">{{item.title}}</div>
								<div class="card-item-desc">{{item.description}}</div>
							</div>
						</div>
					</div>
				</div>
				
				<!--第三页-->
				<div class="card-section" :class="active(3)">
					<div class="card-content">
						<div class="card-subtitle">联系</div>
						<div class="card-contact-wrapper">
							<div class="card-contact" v-for="item in contact" :key="item.id">
								<img :src="item.image">
								<span>{{item.info}}</span>
							</div>
							<button class="contact-me">一起工作</button>
						</div>
					</div>
				</div>
				
				<!--底部按钮-->
				<div class="card-buttons">
					<button :class="active(1)" @click="selectTab(1)">关于</button>
					<button :class="active(2)" @click="selectTab(2)">经历</button>
					<button :class="active(3)" @click="selectTab(3)">联系</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProfileCardView",
	data(){
		return {
			index: 1,
			imageUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.e23.cn%2F2020%2F0224%2F20200224041337504.jpg&refer=http%3A%2F%2Fimg01.e23.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662453154&t=821e7d98bb6796c7da0b1039184239d1#pskt#&imgName=%u70B9%u51FB%u67E5%u770B%u56FE%u7247%u6765%u6E90&imgLink=https%3A%2F%2Fimage.baidu.com%2Fsearch%2Findex%3Ftn%3Dbaiduimage%26ps%3D1%26ct%3D201326592%26lm%3D-1%26cl%3D2%26nc%3D1%26ie%3Dutf-8%26dyTabStr%3DMCwzLDEsMiw2LDQsNSw3LDgsOQ%253D%253D%26word%3D%25E5%2591%25A8%25E6%259D%25B0%25E4%25BC%25A6',
			timeline:[
				{time:'2010', title:'《跨时代》', description:'第十张专辑'},
				{time:'2011', title:'《惊叹号》', description:'第十一张专辑'},
				{time:'2012', title:'《十二新作》', description:'第十二张专辑'},
				{time:'2014', title:'《哎哟 不错哦》', description:'第十三张专辑'},
				{time:'2016', title:'《周杰伦的床边故事》', description:'第十四张专辑'},
				{time:'2022', title:'《最伟大的作品》', description:'第十五张专辑'},
			],
			
			contact:[
				{image:require('.././assets/images/change_skin.png'), info:'中国台北市大安区和平东路上的何平大苑'},
				{image:require('.././assets/images/change_skin.png'), info:'152xxxx4517'},
				{image: require('.././assets/images/change_skin.png'), info: 'Jay Chou@xxx.com'}
			]
		}
	},
	methods:{
		selectTab(index){
			this.index = index;
		},
		active(index){
			return index === this.index ? 'is-active' : ''
		}
	},
	computed:{
	
	}
}
</script>

<style lang="scss" scoped>

@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");


.card-box {
	font-family: "Jost", sans-serif;
	display: flex;
	flex-direction: column;
	//flex-wrap: wrap;
	align-items: center;
	overflow: auto;
	width: 100%;
	
}

.card {
	width: 340px;
	background-color: rgba(255, 255, 255, 1);
	display: flex;
	flex-direction: column;
	transition: 0.5s;
	border-radius: 10px;
	box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
	margin: 60px 0;
}

.card-header {
	position: relative;
	display: flex;
	height: 200px;
	flex-shrink: 0;
	width: 100%;
	transition: 0.5s;
	
	*{
		transition: 0.5s;
	}
	.card-avatar {
		width: 100px;
		height: 100px;
		box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
		border-radius: 50%;
		object-position: center;
		object-fit: cover;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-64px);
	}
	.card-fullname {
		position: absolute;
		bottom: 0;
		font-size: 22px;
		font-weight: 700;
		text-align: center;
		white-space: nowrap;
		transform: translateY(-10px) translateX(-50%);
		left: 50%;
	}
	
	.card-jobtitle {
		position: absolute;
		bottom: 0;
		font-size: 11px;
		white-space: nowrap;
		font-weight: 500;
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-7px);
	}
}

.card.is-active {
	.card-header {
		height: 80px;
	}
	
	.card-avatar {
		transform: none;
		left: 20px;
		width: 50px;
		height: 50px;
		bottom: 10px;
	}
	
	.card-fullname,
	.card-jobtitle {
		left: 86px;
		transform: none;
	}
	
	.card-fullname {
		bottom: 18px;
		font-size: 19px;
	}
	
	.card-jobtitle {
		bottom: 16px;
		letter-spacing: 1px;
		font-size: 10px;
	}
}

.card-main {
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
	padding-top: 10px;
	flex-direction: column;
	
	.card-section {
		display: none;
		
		&.is-active {
			display: block;
			animation: fadeIn 0.6s both;
		}
		
		.card-content {
			padding: 20px;
			
			.card-subtitle {
				font-weight: 700;
				font-size: 13px;
				margin-bottom: 8px;
			}
			
			//第一块
			.card-desc {
				line-height: 1.6;
				color: #636b6f;
				font-size: 14px;
				margin: 0;
				font-weight: 400;
				font-family: "DM Sans", sans-serif;
			}
			
			//第二块
			.card-timeline {
				margin-top: 30px;
				position: relative;
				
				&:after {
					background: linear-gradient(
							to top,
							rgba(134, 214, 243, 0) 0%,
							rgba(81, 106, 204, 1) 100%
					);
					content: "";
					left: 42px;
					width: 2px;
					top: 0;
					height: 100%;
					position: absolute;
				}
				
				.card-item {
					position: relative;
					padding-left: 60px;
					padding-right: 20px;
					padding-bottom: 30px;
					z-index: 1;
					
					&:last-child {
						padding-bottom: 5px;
					}
					
					&:after {
						content: attr(data-year);
						width: 10px;
						position: absolute;
						top: 0;
						left: 37px;
						width: 8px;
						height: 8px;
						line-height: 0.6;
						border: 2px solid #fff;
						font-size: 11px;
						text-indent: -35px;
						border-radius: 50%;
						color: rgba(#868686, 0.7);
						background: linear-gradient(
								to bottom,
								lighten(#516acc, 20%) 0%,
								#516acc 100%
						);
					}
					
					.card-item-title {
						font-weight: 500;
						font-size: 14px;
						margin-bottom: 5px;
					}
					.card-item-desc {
						font-size: 13px;
						color: #6f6f7b;
						line-height: 1.5;
						font-family: "DM Sans", sans-serif;
					}
				}
				
			}
			
			//第三块
			.card-contact-wrapper {
				margin-top: 20px;
				
				.card-contact {
					display: flex;
					align-items: center;
					font-size: 13px;
					color: #6f6f7b;
					font-family: "DM Sans", sans-serif;
					line-height: 1.6;
					cursor: pointer;
					margin-bottom: 10px;
					
					& + & {
						margin-top: 16px;
					}
					
					img {
						flex-shrink: 0;
						width: 25px;
						height: 25px;
						transition: 0.3s;
						margin-right: 10px;
					}
					span{
						border-left: 1px solid #dfe2ec;
						padding-left: 12px;
					}
				}
				.contact-me {
					border: 0;
					outline: none;
					background: linear-gradient(
							to right,
							rgba(83, 200, 239, 0.8) 0%,
							rgba(81, 106, 204, 0.8) 96%
					);
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
					color: #fff;
					padding: 12px 16px;
					width: 100%;
					border-radius: 5px;
					margin-top: 25px;
					cursor: pointer;
					font-size: 14px;
					font-weight: 500;
					font-family: "Jost", sans-serif;
					transition: 0.5s;
				}
			}
			
		}
		
		//第一块
		.card-social {
			display: flex;
			align-items: center;
			padding: 0 20px;
			margin-bottom: 30px;
			
			svg {
				fill: rgb(165, 181, 206);
				width: 16px;
				display: block;
				transition: 0.5s;
			}
			
			a {
				color: #8797a1;
				height: 32px;
				width: 32px;
				border-radius: 50%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				transition: 0.5s;
				background-color: rgba(93, 133, 193, 0.05);
				margin-right: 10px;
				
				&:hover {
					svg {
						fill: darken(rgb(165, 181, 206), 20%);
					}
				}
				
				&:last-child {
					margin-right: 0;
				}
			}
			
			
		}
	}
	
	//底部按钮
	.card-buttons {
		display: flex;
		background-color: #fff;
		margin-top: auto;
		width: 98%;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		
		button {
			flex: 1 1 auto;
			user-select: none;
			background: 0;
			font-size: 13px;
			border: 0;
			padding: 15px 5px;
			cursor: pointer;
			color: #5c5c6d;
			transition: 0.5s;
			font-family: "Jost", sans-serif;
			font-weight: 500;
			outline: 0;
			border-bottom: 3px solid transparent;
			
			&.is-active,
			&:hover {
				color: #2b2c48;
				border-bottom: 3px solid #8a84ff;
				background: linear-gradient(
						to bottom,
						rgba(127, 199, 231, 0) 0%,
						rgba(207, 204, 255, 0.2) 44%,
						rgba(211, 226, 255, 0.4) 100%
				);
			}
		}
	}
}


</style>
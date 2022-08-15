<template>
	<div class="record">
		<h1>记录线</h1>
		<div class="record-boxes">
			<div class="boxes">
				<div class="box" v-for="item in list" :key="item.id">
					<!--<p class="icon"></p>-->
					<h2>{{item.title}}</h2>
					<p class="time">{{item.time}}</p>
					{{item.content}}
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[
				//{id:10,title:'',time:'',content:''},
				{id:9,title:'喜捷径',time:'2022-08-14',content:'完成了喜捷径页面的开发，较为重大的更新了路由信息'},
				{id:8,title:'HoverButton',time:'2022-08-14',content:'创建并且完成了HoverButton.vue的代码开发'},
				{id:7,title:'个人信息页面',time:'2022-08-13',content:'完成开发个人信息界面，其中主要包含了邓紫棋的信息，包括个人资料和发布的专辑信息。'},
				{id:6,title:'新闻卡片',time:'2022-08-12',content:'新闻卡片完成开发，搜集邓紫棋新歌消息'},
				{id:5,title:'第二次提交项目',time:'2022-08-10',content:'第二次提交项目到gitee，项目更新较大，其中包括，颜色剪切板，画廊等多项内容。'},
				{id:4,title:'实用表格',time:'2022-08-08',content:'完成文章详情页面的开发，更新文章《大雨滂沱》。创建文件ParticalTableView.vue并更新颜色剪切板的颜色列表'},
				{id:3,title:'文章详情',time:'2022-08-07',content:'创建文章详情页文件AarticleDetails.vue'},
				{id:2,title:'肖像卡片',time:'2022-08-06',content:'创建文件ProfileCard.vue,并且完成页面的开发'},
				{id:1,title:'创建魔法诗',time:'2022-08-06',content:'首次推送magic-poetry到gitee，项目搭建完成，准备开始开发网页。'},
			]
		}
	}
	
}
</script>

<style lang="scss" scoped>

	/*.record{
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
	}*/
	
	@import url("https://fonts.googleapis.com/css?family=Lato:200,300,400,400i,700");
	@import url("https://fonts.googleapis.com/css?family=Merriweather:200,400,400i,700");
	
	.record {
		background-color: #181818;
		//background-color: rgba(16 18 27 / 10%);
		color: #d8d8d8;
		font-family: Lato, sans-serif;
		padding: 20px 40px;
		width: 100%;
		overflow: auto;
		
		h1{
			font-size: 2.5em;
			text-transform: uppercase;
			letter-spacing: 10px;
			text-align: center;
			font-family: Lora, serif;
			font-weight: 200;
			
			&::before {
				content: '─';
				margin-right: 0.6em;
				color: #686868;
			}
			&::after {
				content: '─';
				margin-left: 0.6em;
				color: #686868;
			}
		}
		
		.record-boxes{
			width: 100%;
			
			.boxes {
				margin-top: 50px;
				display: flex;
				flex-wrap: wrap;
				margin-right: -30px;
				
				&:last-child {
					margin-top: 120px;
				}
				
				.box {
					width: calc(33.333333% - 30px);
					margin-right: 30px;
					font-size: 1em;
					line-height: 1.5em;
					font-weight: 200;
					padding: 0 4vw 4vw;
					border-right: 2px;
					border-left: 0px;
					border-style: solid;
					/* 	border-image: linear-gradient(to bottom, #ccc, #555 66%, #181818) 1 100%; */
					border-image: linear-gradient(to bottom, #181818, #eee, #181818) 1 100%;
					
					
					// 只选取三的倍数的元素
					&:nth-child(3n){
						border-right: 0;
					}
					
					
					h2 {
						font-size: 1.3em;
						text-transform: uppercase;
						letter-spacing: 4px;
						font-weight: 200;
						line-height: 0.5em;
						color: #f2f2f2;
					}
					.time {
						font-style: italic;
						color: #9f9f9f;
						margin-bottom: 0.5em;
						letter-spacing: 1px;
						font-family: Lora, serif;
						//background-color: red;
					}
					
					
					&:hover{
						transform: scale(1.02);
						background-color: rgba(16 18 27 / 20%);
					}
				}
				
				
			}
		}
	}
	
	
</style>
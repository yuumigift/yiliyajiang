<template>
	
	<div class="dog-rose">
		<img src="../../assets/images/dog.jpg">
	</div>
</template>

<script>
export default {
	name: "DogRoseView",
	data(){
		return{
			img: 'https://www.lakeside.com/images/dog-valentine-AS49813405.jpg',
			//	https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/135137092-dog-valentines-day-date-632x475.jpg
			
		}
	}
}
</script>

<style scoped lang="scss">
	.dog-rose{
		display: flex;
		width: 100%;
		padding: 20px;
		position: relative;
		
		img{
			width: calc(100% - 40px);
			object-fit: cover;
			object-position: center;
			position: absolute;
		}
		
	}
</style>


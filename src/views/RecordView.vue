<template>
	<div class="record">
	
	</div>
</template>

<script>
export default {
	data(){
		return {
		
		}
	}
	
}
</script>

<style lang="scss" scoped>

	.record{
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
	}
	
</style>
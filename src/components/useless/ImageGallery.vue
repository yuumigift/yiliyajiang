<template>
	<div class="gallery">
		<div class="active-photo" :style="'background-image: url('+photos[activePhoto]+');'">
			<button type="button" aria-label="Previous Photo" class="previous" @click="previousPhoto()">
				◀
			</button>
			<button type="button" aria-label="Next Photo" class="next" @click="nextPhoto()">
				▶
			</button>
		</div>
		<div class="thumbnails">
			<div
				v-for="(photo, index) in photos"
				:src="photo"
				:key="index"
				@click="activePhoto = index"
				:class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ImageGallery",
	data(){
		return{
			activePhoto: null,
			photos: [
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-01-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-02-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-03-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-04-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-05-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-06-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-07-min.jpg',
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/lordea-home-08-min.jpg'
			]
		}
	},
	mounted () {
		this.activePhoto = 0
		document.addEventListener("keydown", (event) => {
			if (event.which === 37)
				this.previousPhoto()
			if (event.which === 39)
				this.nextPhoto()
		})
	},
	methods: {
		nextPhoto () {
			this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
		},
		previousPhoto () {
			this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
		}
	}
}
</script>

<style scoped lang="scss">

* {
	outline: none;
	box-sizing: border-box;
}

$brand: #5c4084;

.gallery {
	width: 100%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 6px 10px 10px 6px;
	border-radius: 8px;
	
	.active-photo {
		width: 100%;
		margin-bottom: 5px;
		padding-bottom: 65%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border: 2px solid #fff;
		position: relative;
		
		button {
			border: none;
			background-color: transparent;
			font-size: 32px;
			color: #fff;
			opacity: 0.5;
			position: absolute;
			outline: none;
			height: 100%;
			
			&:hover {
				opacity: 1;
			}
			&.previous {
				padding: 0 1em 0 0.7em;
				left: 0;
				background: -moz-linear-gradient(left,  rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
				background: -webkit-linear-gradient(left,  rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%);
				background: linear-gradient(to right,  rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=1 );
			}
			&.next {
				padding: 0 0.7em 0 1em;
				right: 0;
				background: -moz-linear-gradient(left,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
				background: -webkit-linear-gradient(left,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%);
				background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%);
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=1 );
			}
		}
	}
	.thumbnails {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		grid-gap: 10px;
		
		div {
			width: 100%;
			border: 2px solid #fff;
			outline: 2px solid #fff;
			cursor: pointer;
			padding-bottom: 65%;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			opacity: 1;
			
			&:hover {
				opacity: 0.6;
			}
			&.active {
				outline-color: $brand;
				opacity: 1;
			}
		}
	}
}


</style>
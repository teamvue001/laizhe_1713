<template>
	<div>
		<index-pictureSwiper :swiperImg="swiperImg"/>
		
	</div>
</template>

<script>
	import pictureSwiper from './components/pictureSwiper.vue';
	import axios from "axios";
	
	export default {
		components:{
		  	"index-pictureSwiper" : pictureSwiper,
		},
		data() {
			return {
				swiperImg: []
			}
		},
		mounted() {
			axios.get('/static/pictureSwiper/index.json').then((res) => {
				this.swiperImg = res.data.data.swiperImg;
			})
		}
	}
</script>

<style>
</style>
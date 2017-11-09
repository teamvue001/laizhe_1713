<template>
	<div class="page">
		<details-headfigure />
		<details-baseInfo />
		<details-recommend />
		<details-partItem />
		<details-userComment />
		<details-spotRecommend />
		<details-footer />
	</div>
</template>

<script>
	import headfigure from './components/headfigure.vue';
	import baseInfo from './components/baseInfo.vue';
	import recommend from './components/recommend.vue';
	import partItem from "./components/partItem.vue";
	import userComment from "./components/userComment.vue";
	import spotRecommend from "./components/spotRecommend.vue";
	import footer from "./components/footer.vue";
	export default {
		components:{
		  	"details-headfigure" : headfigure,
		  	"details-baseInfo" : baseInfo,
		  	"details-recommend" : recommend,
		  	"details-partItem" : partItem,
		  	"details-userComment" : userComment,
		  	"details-spotRecommend" : spotRecommend,
		  	"details-footer" : footer,
		}
	}
</script>

<style scoped>
	.page{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		min-height:100%;
		background:#f5f5f5;
	}
</style>
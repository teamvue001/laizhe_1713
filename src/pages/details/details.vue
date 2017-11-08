<template>
	<div class="page">
		<details-headfigure />
		<details-baseInfo />
		<details-recommend />
		<details-userComment />
	</div>
</template>

<script>
	import headfigure from './components/headfigure.vue';
	import baseInfo from './components/baseInfo.vue';
	import recommend from './components/recommend.vue';
	import userComment from "./components/userComment.vue";
	export default {
		components:{
		  	"details-headfigure" : headfigure,
		  	"details-baseInfo" : baseInfo,
		  	"details-recommend" : recommend,
		  	"details-userComment" : userComment,
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
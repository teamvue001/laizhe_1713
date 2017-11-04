<template>
	<div id="root">
    <index-header ></index-header>
    <index-position-adverted ></index-position-adverted>
	</div>
</template>

<script>
	import header from "./header.vue";
	import positionAdvert from "../position/position_advert.vue";

	export default {
	  components:{
	  	"index-header" : header,
	  	"index-position-adverted" : positionAdvert
	  }
	}
</script>

<style scoped>
  #root{
    background: #f5f5f5;
  }
</style>

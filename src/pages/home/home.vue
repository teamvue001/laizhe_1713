<template>
	<div id="root">
    <index-header ></index-header>
    <index-activity-adverted ></index-activity-adverted>
	</div>
</template>

<script>
	import header from "./header.vue";
	import activityAdvert from "../activity/activity.vue";

	export default {
	  components:{
	  	"index-header" : header,
	  	"index-activity-adverted" : activityAdvert
	  }
	}
</script>

<style scoped>

</style>

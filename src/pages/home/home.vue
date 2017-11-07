<template>
	<div>
		<index-header />
		<index-footer />
	</div>
</template>

<script>
	
	import footer from "./footer.vue";
	import header from "./header.vue";
	
	export default {
	  components:{
	  	"index-header": header,
	  	"index-footer": footer
	  }
	}
</script>

<style scoped>

</style>

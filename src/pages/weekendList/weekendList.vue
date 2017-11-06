<template>
	<div>
		<index-header />
		<index-main />
	</div>
</template>

<script>
	import header from './components/header.vue';
	import main from './components/main.vue';
	
	export default {
		components:{
		  	"index-header" : header,
		  	"index-main" : main,
		}
	}
</script>

<style scoped>
	
</style>
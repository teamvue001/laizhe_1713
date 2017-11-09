<template>
	<div>
		<index-header />
		<index-main :weekendList="weekendList" />
	</div>
</template>

<script>
	import header from './components/header.vue';
	import main from './components/main.vue';
	import axios from 'axios';
	
	
	
	export default {
		components:{
		  	"index-header" : header,
		  	"index-main" : main,
		},
		data() {
			return {
				weekendList: []
			}
		},
		mounted() {
			this.getHomeDate();
		},
		methods: {
			getHomeDate() {
				axios.get('/static/weekendList/index.json?city=北京')
					.then(this.handleGetDataSucc.bind(this))
					.catch(this.handleGetDataError.bind(this));
			},
			handleGetDataSucc(response) {
				const res = response.data;
				const data = res.data;
				this.weekendList = data.weekendList;
				this.category = data.category;
			},
			handleGetDataError(err) {

			}
		}
	}
</script>

<style scoped>
</style>
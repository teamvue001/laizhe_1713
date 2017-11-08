<template>
	<div>
		<div class="header">
			<router-link to="/weekendList" class="header-left iconfont icon-huise"></router-link>
			<h1 class="header-title">寻找北京的皇城范儿</h1>
		</div>		
	</div>
</template>

<script>
</script>

<style scoped>
	.header{
		position:relative;
		background:#00BCD4;
		z-index:91;
		height:.88rem;
	}
	.header-left{
		position:absolute;
		left:0;
		top:0;
		z-index:100;
		line-height:.88rem;
		width:.8rem;
		height:.88rem;
		font-size:.36rem;
		color:#fff;
		text-align:center;
	}
	.header-title{
		overflow:hidden;
		margin:0 1rem;
		line-height:.88rem;
		white-space:nowrap;
		text-overflow:ellipsis;
		font-size:.32rem;
		text-align:center;
		color:#fff;
	}
</style>
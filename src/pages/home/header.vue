<template>
	  <div>
		  	<header class="header">
		  			<a class="header-left">
			    		<i class="iconfont icon-qunawanxianjiantouzuo"></i>
			    	</a>
			    	<div class="header-title">
			    		<i class="iconfont icon-fangdajing1"></i>	
			    		<span class="single-line">输入城市/景点/游玩主题</span>
			    	</div>
			    	<div class="header-right">
			    			<a>
			    				<span>北京
			    					<i class="iconfont icon-f11-copy"></i>
			    				</span>
			    			</a>
			    	</div>
		  	</header>
	    	
	  </div>
</template>

<script>
	export default {
	  
	}
</script>

<style scoped>
		.header{
			position:relative;
			width:100%;
			height:0.88rem;
			background:#00bcd4;
			text-align:center;
			color:#fff;
		}
		.header-left{
			display:inline-block;
			float:left;
			width:0.4rem;
			line-height:0.88rem;
			padding:0 .2rem;
			color:#fff;
			font-size:.36rem;
			text-align:left;
		}
		.header-title{
			position: absolute;
	    top: .14rem;
	    left: .8rem;
	    right: 1.28rem;
	    height:0.6rem;
	    line-height: .6rem;
	    background: #fff;
	    color: #e4e7ea;
	    border-radius: .06rem;
	    padding-left: .15rem;
	    text-align: left;
		}
		.header-title i{
			position:absolute;
			left:0.1rem;
			top:0.04rem;
			font-size:0.8rem;
		}
		.single-line{
			position:absolute;
			left:0.7rem;
		}
		.header-right{
			float: right;
			width: 1.28rem;
			line-height: .88rem;
			text-align: left;
		}
		.header-right a span {
			margin-left:.2rem;
			color:#fff;
			display:inline-block;
		}
		.header-right a span i{
			font-size:0.5rem;
			position:absolute;
			top:.01rem;
			right:0.12rem;
		}
</style>

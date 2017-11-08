<template>
	<div class="main">
		<router-link to="/pictureSwiper">
			<div class="headfigure">
				<div class="headfigure-wrap">
					<img class="headfigure-img" src="http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_600x330_371120bc.jpg" alt="" />
				</div>
				<div class="headfeagure-info">
					<div class="headfeagure-title">天安门广场</div>
					<div class="imgswipeicon">
						<i class="iconfont icon-zhaopian"></i>
						<em class="imgswipeicon-number">9</em>
					</div>
				</div>
			</div>
		</router-link>
		<router-link class="header-back" to="/weekendList">
			<span class="headerback-bg"></span>
			<i class="headerback-icon iconfont icon-huise"></i>
		</router-link>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.header-back{
		position:absolute;
		left:.1rem;
		top:.1rem;
		font-size:.36rem;
		color:#fff;
		text-align:center;
		width:.72rem;
		height:.72rem;
		line-height:.72rem;
	}
	.headerback-bg{
		display:block;
		width:.72rem;
		height:.72rem;
		background:#000;
		opacity:.5;
		border-radius:.36rem;
	}
	.headerback-icon{
		position:absolute;
		left:-0.05rem;
		top:0;
		display:block;
		width:.72rem;
		line-height:.72rem;
		text-align:left;
		text-indent:.24rem;
	}
	.headfigure{
		position:relative;
	}
	.headfigure-wrap{
		overflow:hidden;
		height:0;
		width:100%;
		padding-bottom:55%;
	}
	.headfigure-img{
		width:100%;
		vertical-align:top;
	}
	.headfeagure-info{
		position:absolute;
		right:.2rem;
		bottom:.26rem;
		left:.2rem;
		min-height:.4rem;
	}
	.headfeagure-title{
		position:relative;
		z-index:10;
		margin-right:1.4rem;
		line-height:.4rem;
		color:#fff;
		font-size:.32rem;
		text-shadow:0 1px 2px rgba(0,0,0,0.70);
	}
	.imgswipeicon{
		position:absolute;
		right:0;
		top:0;
		background:rgba(0,0,0,.5);
		border-radius:.24rem;
		width:1.2rem;
		height:.4rem;
		font-size:.24rem;
		color:#fff;
		line-height:.4rem;
		text-align:center;
	}
	.imgswipeicon i{
		position:relative;
		top:.02rem;
	}
	.imgswipeicon em{
		margin-left:.1rem;
	}
</style>
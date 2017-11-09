<template>
	<div id="wrapper">
		<div id="scroller">
			<ul>
				<div class="main">
					<div class="product-item" v-for="item in weekendList" :key="item.id"> 
						<div class="productimg-wrapper">
							<img :src="item.src" alt="" />
						</div>
						<div class="product-info">
							<p class="product-name">{{item.name}}</p>
							<p class="product-desc">{{item.desc}}</p>
							<div class="product-price">
								<span class="product-qunarprice">
									¥
									<em>{{item.price}}</em>
									<span class="product-pricestart">起</span>
								</span>
							</div>
						</div>
						<router-link to="/details" class="fulllink"></router-link>
					</div>
				</div>
				<div class="more">
					<span><img src="http://img.zcool.cn/community/017027589992c1a801219c774452bb.gif" alt="" /></span>
				</div>
			</ul>
		</div>
	</div>
</template>
<script>
//	var IScroll = require("../../../utils/iscroll-probe.js")
	import IScroll from "../../../utils/iscroll-probe.js"
	
	export default {
		mounted() {
			this.createIscroll();
		},
		methods: {
			createIscroll() {
				this.myScroll = new IScroll('#wrapper',{probeType: 3,mouseWheel: true});
				this.myScroll.on('scroll', this.handleScroll.bind(this));
			},
			handleScroll() {
				console.log(this.myScroll.y);
			}
		},
		
		updated() {
			this.myScroll.refresh()
		},
		
		props: ['weekendList']
	}
</script>
<style scoped>
	#wrapper{
		overflow:hidden;
		background:#E0E0E0;
		height:13rem;
	}
	 
	.product-item{
		background:#fff;
		position:relative;
		margin-bottom:.2rem;
		border-bottom:.15rem solid #E3E3E3;
	}
	.productimg-wrapper{
		overflow:hidden;
		padding-bottom:43.37%;
		height:0;
		width:100%;
	}
	.productimg-wrapper img{
		width:100%;
	}
	.product-info{
		position:relative;
		padding:.14rem .2rem .24rem .2rem;
	}
	.fulllink{
		position:absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
	}
	.product-name{
		overflow:hidden;
		padding-right:2.2rem;
		line-height:.54rem;
		white-space:nowrap;
		text-overflow:ellipsis;
		color:#212121;
		font-size:.36rem;
	}
	.product-desc{
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		line-height:.45rem;
		color:#616161;
		font-size:.26rem;
	}
	.product-price{
		position:absolute;
		top:.25rem;
		right:.2rem;
	}
	.product-qunarprice{
		color:#FF8300;
		font-size:.18rem;
	}
	.product-qunarprice em{
		font-size:.4rem;
		margin-left:.04rem;
		font-weight:bold;
	}
	.product-pricestart{
		color:#616161;
		font-size:.22rem;
	}
	.more{
		margin:0 auto;
		text-align:center;
		color:#fff;
		width:3rem;
		height:1.5rem;
	}
	.more span img{
		border-radius:50%;
		width:100%;
		height:100%;
	}
</style>
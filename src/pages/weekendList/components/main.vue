<template>
	<div>
		<div class="main">
			<div class="product-item" v-for="list in lists" :key="list.id"> 
				<div class="productimg-wrapper">
					<img :src="list.src" alt="" />
				</div>
				<div class="product-info">
					<p class="product-name">{{list.name}}</p>
					<p class="product-desc">{{list.desc}}</p>
					<div class="product-price">
						<span class="product-qunarprice">
							¥
							<em>{{list.price}}</em>
							<span class="product-pricestart">起</span>
						</span>
					</div>
					
				</div>
				<router-link to="/particulars" class="fulllink"></router-link>
				
			</div>
		</div>
		<div class="more">
			<span><img src="http://img.zcool.cn/community/017027589992c1a801219c774452bb.gif" alt="" /></span>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
		  	return {
		  		lists:[{
		  			id:1,
		  			src: "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_640x276_267de9bb.jpg",
		  			name: "天安门广场",
		  			desc: "世界上最大的城市中心广场，北京的心脏",
		  			price: "20"
		  		},{
		  			id:2,
		  			src: "http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_640x276_078119ce.jpg",
		  			name: "天坛公园",
		  			desc: "探寻古代皇帝祭天仪式的奥秘",
		  			price: "50"
		  		},{
		  			id:3,
		  			src: "http://img1.qunarzz.com/sight/p0/1507/d2/971ee817d45301a6bb86295899b5e332.water.jpg_640x276_a8b377a1.jpg",
		  			name: "北海公园",
		  			desc: "让我们荡起双桨，小船儿推开波浪",
		  			price: "0.5"
		  		},{
		  			id:4,
		  			src: "http://img1.qunarzz.com/wugc/p228/201306/06/a76e59531c0e556193835fbb.jpg_640x276_821f01b0.jpg",
		  			name: "钟鼓楼",
		  			desc: "晨钟暮鼓，钟声悠扬，鼓声清脆",
		  			price: "8"
		  		},{
		  			id:5,
		  			src: "http://img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_640x276_7143792f.jpg",
		  			name: "景山公园",
		  			desc: "俯看故宫的最佳地点",
		  			price: "0.9"
		  		},{
		  			id:6,
		  			src: "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_640x276_91cd6a4f.jpg",
		  			name: "圆明园",
		  			desc: "追忆昔日万园之园，勿忘国耻",
		  			price: "25"
		  		},{
		  			id:7,
		  			src: "http://img1.qunarzz.com/sight/p0/201403/07/d43a150292bca04bf13c59d24e096530.jpg_640x276_73613eb0.jpg",
		  			name: "明十三陵",
		  			desc: "体系完整、气势磅礴的皇室陵寝建筑群",
		  			price: "73.8"
		  		},{
		  			id:8,
		  			src: "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_640x276_f784a0e8.jpg",
		  			name: "恭王府",
		  			desc: "一起去看看和珅家",
		  			price: "18.1"
		  		}]
		  	}
		}
	}
</script>
<style scoped>
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
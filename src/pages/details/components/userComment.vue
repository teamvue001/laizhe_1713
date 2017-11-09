<template>
	<div class="comment-container">
		<h3 class="comment-title">用户评论</h3>
		<div class="comment-list">
			<div class="comment-item">
				<div class="comment-stardate">
					<span class="starlevel">
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
					</span>
					<span class="comment-date">蓝*饼  2017-10-26</span>
				</div>
				<p class="comment-content" ref="content">
					超级无敌好，一定要跟黑导的团，这个叔叔特别好，正宗北京老炮儿（不是贬义不是贬义）讲解风趣幽默，看了太多导游照本宣科，讲解完赶紧走，这个叔叔规矩、民俗、故事、历史、诗句信手拈来融会贯通通俗易懂～最最难得的是进出这么多次故宫颐和园，叔叔还会对里面的东西保有热情，还会对不明白的东西去问工作人员，相信叔叔是真的热爱这个土地这份工作～果断第二天又跟着叔叔去了长城定陵～慈禧水道、长城缆车这些项目建议大家买上，不会吃亏的～
最后谢谢叔叔给我的游玩攻略～继续在北京浪起来～
				</p>
				<div @click="handleOff" class="iconfont comment-foldbtn icon-xia" ></div>
				<router-link to="/pictureSwiper">
					<div class="comment-imgs">
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1710/11/186b2502e33c0702.jpg_228x168_dbefec52.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1710/17/bb53a7b3d5a2b802.jpg_228x168_b849e012.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1710/97/c712c5414a2db002.jpg_228x168_3483c9d6.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1710/20/f3bf4c2ad5064f02.jpg_228x168_4b7d4393.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1710/41/d7f0463a58b0dc02.jpg_228x168_17008d99.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1710/f7/2f220e8047834202.jpg_228x168_d50c1808.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgnumtag">
							<span class="commenttag-bg"></span>
							<span class="comment-tagnum">共9张</span>
						</div>
					</div>
				</router-link>
			</div>
			<div class="comment-item">
				<div class="comment-stardate">
					<span class="starlevel">
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
						<i class="iconfont icon-xing starlevel-gain"></i>
					</span>
					<span class="comment-date">女*且  2017-08-27</span>
				</div>
				<p class="comment-content" ref="content">
					从天安门进的故宫 安检的人特别多 进去的时候排队的人群还是非常有次序的进入 在去哪儿买票直接刷身份证就进去了 避免了排队买票 故宫里面太漂亮了 走得脚疼还只是走马观花的大概看了下 故宫不愧是皇帝的家 珍宝太多了
				</p>
				<router-link to="/pictureSwiper">
					<div class="comment-imgs">
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1708/f6/ddfbf4cd678f7902.jpg_228x168_097392c1.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1708/36/7c0bffc284f53102.jpg_228x168_662de924.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1708/c3/1aed9a7528b9f602.jpg_228x168_e952cfd7.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1708/17/f2c5053fda49902.jpg_228x168_4d6ed221.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1708/9c/3104378babe2b402.jpg_228x168_40c757da.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgouter">
							<div class="comment-imginner">
								<img class="comment-img" src="http://img1.qunarzz.com/piao/fusion/1708/bd/0aa969d78f01eb02.jpg_228x168_bf4d77d8.jpg" alt="" />
							</div>
						</div>
						<div class="comment-imgnumtag">
							<span class="commenttag-bg"></span>
							<span class="comment-tagnum">共9张</span>
						</div>
					</div>
				</router-link>
			</div>
			<div class="more-refresh">
				查看全部评论
				<i class="iconfont icon-you"></i>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		methods:{
			handleOff: function(){
				if(this.$refs.content.style.height=='auto'){
					this.$refs.content.style.height='105px';
					this.$refs.content.style.overflow='hidden';
				}else{
					this.$refs.content.style.height='auto';
					this.$refs.content.style.overflow='auto';
				}
			}
		}
	}
</script>

<style scoped>
	.comment-container{
		margin-top:.2rem;
		position:relative;
	}
	.comment-title{
		padding:0 .2rem;
		background:#fff;
		height:.88rem;
		color:#333;
		font-size:.3rem;
		line-height:.88rem;
		text-indent:.2rem;
	}
	.comment-title::after{
		content:"";
		position:absolute;
		top:.33rem;
		left:.2rem;
		width:.06rem;
		height:.25rem;
		background:#1ba9ba;
		border-radius:.04rem;
	}
	.comment-list{
		background:#fff;
	}
	.comment-item{
		padding:.1rem .2rem .3rem .2rem;
	}
	.comment-stardate{
		margin-top:.1rem;
		line-height:1rem;
	}
	.starlevel{
		vertical-align:middle;
		display:inline-block;
		position:relative;
		height:.28rem;
		line-height:.6rem;
	}
	.starlevel-gain{
		overflow:hidden;
		width:100.0%;
		z-index:2;
		color:#00BCD4;
		line-height:1;
	}
	.comment-date{
		position:relative;
		float:right;
		top:.16rem;
		margin-left:.2rem;
		font-size:.24rem;
		vertical-align:middle;
		color:#212121;
	}
	.comment-content{
		word-break:break-all;
		word-wrap:break-word;
		line-height:.42rem;
		font-size:.26rem;
		color:#616161;
		overflow:hidden;
		height:105px;
	}
	.comment-foldbtn{
		height:.48rem;
		line-height:.48rem;
		text-align:center;
		font-size:.26rem;
		color:#9E9E9E;
	}
	.comment-imgs{
		margin:.2rem 0 .1rem 0;
		position:relative;
		zoom:1;
		overflow:hidden;
	}
	.comment-imgouter{
		float:left;
		width:33.33%;
		margin-bottom:.1rem;
	}
	.comment-imginner{
		margin-left:.07rem;
		margin-right:.07rem;
	}
	.comment-img{
		width:100%;
		background-size:contain;
		background:url(//s.qunarzz.com/piao_topic/image/common/default/140x140.png);
	}
	.comment-imgnumtag{
		position:absolute;
		bottom:.8rem;
		right:0;
	}
	.commenttag-bg{
		position:absolute;
		right:.07rem;
		display:inline-block;
		background:#000;
		opacity:.5;
		height:.4rem;
		width:.94rem;
		border-top-left-radius:.2rem;
		border-bottom-left-radius:.2rem;
	}
	.comment-tagnum{
		position:absolute;
		right:.07rem;
		height:.4rem;
		width:.94rem;
		line-height:.4rem;
		font-size:.28rem;
		color:#fff;
		text-align:right;
		padding-right:.05rem;
	}
	.more-refresh{
		position:relative;
		margin-top:-.02rem;
		height:.8rem;
		background:#fff;
		color:#616161;
		line-height:.8rem;
		text-align:center;
		z-index:2;
	}
	.more-refresh::before{
		border-top:1px dashed #dadada;
		border-color:#DADADA;
	}
	.more-refresh i{
		margin-left:.1rem;
		color:#616161;
		font-size:.2rem;
		line-height:1;
	}
</style>
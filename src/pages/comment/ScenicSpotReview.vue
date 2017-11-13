<template>
    <div>
    	<div class="mp-header">
    		<a mp-role="left" class="mp-header-left icon-fanhui iconfont"></a>
    		<h1 mp-role="title" class="mp-header-title">评论</h1>
    		<a class="mp-header-right  icon-comment-pen iconfont" mp-role="right" href=""></a>
    	</div>
    	<div class="mp-main" mp-role="mainContent">
    		<div class="mpm-comment-head">
    			<div class="mpm-comment-total">155625个评论</div>
    			<ul class="mpf-tagbar">
    				<li class="mpf-tag .mpf-tag-actived" mp-role="commentTagItem" data-tagtype="0" v-for="(item, index) in comment"  v-bind:key="item.id" v-if="item.id" :index="index" @click="handleTagClick(index)"  
                    :class="{ 'mpf-tag-actived':index === isActive }">{{item.value}}</li>
    		    </ul>
            </div>
            <div class="mpm-comment-list" v-for="item in commentList" v-bind:key="item.id">
                <div class="mpm-comment-item">
                    <div class="mpm-comment-info-outer">
                        <!-- <span class="mpm-comment-info">{{}}</span> -->
                        <span class="mpm-comment-info">{{item.nickname}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</span>
                        <span class="mpf-starlevel">
                            <i class="mpg-iconfont mpf-starlevel-gain iconfont icon-star" ></i>
                            <i class="mpg-iconfont mpf-starlevel-gain iconfont icon-star"></i>
                            <i class="mpg-iconfont mpf-starlevel-gain iconfont icon-star"></i>
                            <i class="mpg-iconfont mpf-starlevel-gain iconfont icon-star"></i>
                            <i class="mpg-iconfont mpf-starlevel-gain iconfont icon-star"></i>
                        </span>
                    </div>
                    <p class="mpm-comment-detail">{{item.words}}</p>
                    <p class="mpm-comment-info-outer">
                        <span class="mpm-comment-info">{{item.outer}}</span>
                    </p>
                    <div class="mpm-comment-show">
                        <img class="mpm-comment-img" :src="item.imgsrc">
                    </div>
                </div>
            </div>
            <div class="mpw-more-refresh">       
                    显示更多
                    <span class="mpg-iconfont iconfont icon-jiankuohaoxixia"></span>
            </div>
            <div class="mp-addcomment mp-border-top">
                <a href="javascript:">
                    <div class="mp-addcomment-btn">写点评</div>
                </a>
            </div>
    	</div>

    </div>
</template>

<script>
    export default {
        name : "comment",
        props : ['comment','commentList'],
       
        data() {
            return {
                 isActive:0,
            }
        },
        methods:{

            handleTagClick (index) {
                    this.isActive = index;
                }
        }
    }
</script>

<style scoped>
@import url(http://at.alicdn.com/t/font_461215_91bfwn6llk3s1yvi.css);
.mp-header {
    position: fixed;
    top:0;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    z-index: 91;
}
.mp-header-title {
    overflow: hidden;
    margin: 0 1rem;
    line-height: .88rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    text-align: center;
    color: #fff;
}
.mp-header-left {
    left: 0;
    top: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;
}
.mpg-iconfont {
    font-family: 'mpiconfont';
    speak: none;
    font-size:.28rem!important;
    color:#00bcd4;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.mp-header-right {
    font-size: .4rem;
}
.mp-header-right {
    position: absolute;
    top: 0;
    right: 0;
    width: .8rem;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    font-size: .32rem;
    color: #fff;
}
.mp-main {
    margin-top: .88rem;
}
.mpm-comment-total {
    height: .6rem;
    line-height: .6rem;
    margin-bottom: .16rem;
    text-align: left;
}
.mpm-comment-head {
    padding: .2rem;
    background: #fff;
}
.mpm-comment-total {
    height: .6rem;
    line-height: .6rem;
    margin-bottom: .16rem;
}
.mpm-comment-head .mpf-tagbar {
    margin-left: -.05rem;
}
.mpf-tagbar {
    zoom: 1;
    overflow: hidden;
}
.mpf-tag-actived {
    background: #00bcd4!important;
    color: #fff;
}
.mpf-tag {
    float: left;
    padding: .18rem .12rem;
    border: .02rem solid #cfdddf;
    margin: 0 .05rem .16rem;
    background: #fff;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
}
.mpm-comment-list {
    padding: 0 .24rem;
    background-color: #fff;
}
.mpm-comment-item {
    position: relative;
    line-height: .4rem;
    padding: .24rem 0;
}
.mpm-comment-info-outer {
    position: relative;
    color: #616161;
}
.mpm-comment-info {
    margin-right: .1rem;
    font-size: .24rem;
}
.mpm-comment-info-outer .mpf-starlevel {
    position: absolute;
    top: .06rem;
    right: 0;
}
.mpf-starlevel {
    display: inline-block;
    position: relative;
   
    height: .28rem;
}
.mpm-comment-detail {
    font-size: .28rem;
    line-height: .40rem;
    text-align:left
}
.mpm-comment-info-outer {
    position: relative;
    color: #616161;
    text-align:left;
}
.mpm-comment-info {
    margin-right: .1rem;
    font-size: .24rem;
}
.mpm-comment-show {
    zoom: 1;
    overflow: hidden;
}
.mpm-comment-img {
    float: left;
    width: 1rem;
    height: 1rem;
    margin-right: .2rem;
    margin-top: .2rem;
}
.mpw-more-refresh {
    position: relative;
    margin-bottom: 1.04rem;
    margin-top: -.02rem;
    height: .8rem;
    background: #fff;
    color: #22222d;
    line-height: .8rem;
    text-align: center;
    margin-left: .1rem;
    color: #666;
    font-size: .2rem;
    border-top: 0.01rem #ccc solid;
}
.mp-addcomment {
    z-index: 3;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.04rem;
    background: #fff;
}
.mp-addcomment-btn {
    margin: .16rem .2rem 0 .16rem;
    line-height: .72rem;
    background: #00bcd4;
    border-radius: .04rem;
    text-align: center;
    color: #fff;
}
</style>

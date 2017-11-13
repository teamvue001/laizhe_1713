<template>
    <div>
        <ul class="palace-ul">
            <li class="palace-li" v-for="item in hereList" :key="item.id">
                <div class="palace-li-pic">
                    <img class="palace-li-pic-img" :src="item.src">
                    <span class="palace-li-pic-background">
                        <strong class="palace-li-pic-txt">{{item.name}}</strong>
                    </span>
                </div>
                <div class="palace-li-con">
                    <h3 class="palace-li-con-tit">{{item.tittle}}</h3>
                    <p class="palace-li-con-txt">{{item.content}}</p>
                </div>
                <div class="palace-li-foo">
                    <div class="palace-li-foo-price">
                        <span class="palace-li-foo-price-symbol">&yen;</span>
                        <em class="palace-li-foo-price-num">{{item.price}}</em>
                    </div>
                    <p class="palace-li-foo-buying">立即抢购</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "",
        props : ['hereList']
    }
</script>

<style scoped>
    .palace-li{
        position: relative;
        width: 100%;
        height: 2.6rem;
        background: #fff;
        margin-bottom: .2rem;
    }
    .palace-li-pic{
        position: relative;
        float: left;
        height: 100%;
    }
    .palace-li-pic-img{
        width: 2.86rem;
        height: 100%;
    }
    .palace-li-pic-background{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        background: rgba(0, 0, 0, .6);
    }
    .palace-li-pic-txt{
        color: #fff;
        margin-left: .1rem;
    }
    .palace-li-con{
        float: left;
        width: 4.8rem;
        height: 1.7rem;
        margin-left: .1rem;
    }
    .palace-li-con-tit{
        padding: 4px 0;
        font-size: 14px;
        line-height: 18px;
        color: #333;
    }
    .palace-li-con-txt{
        margin-top: 2px;
        padding-bottom: 40px;
        color: #666;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .24rem;
    }
    .palace-li-foo{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 4.9rem;
        height: .6rem;
    }
    .palace-li-foo-price{
        position: absolute;
        bottom: -.1rem;
        width: 4.9rem;
        height: .6rem;
    }
    .palace-li-foo-price-symbol{
        position: absolute;
        font-size: .3rem;
        color: #ff433e;
        margin-top: .03rem;
    }
    .palace-li-foo-price-num{
        position: absolute;
        left: .2rem;
        font-size: .36rem;
        color: #ff433e;
    }
    .palace-li-foo-buying{
        position: absolute;
        right: 0;
        width: 1.6rem;
        height: .6rem;
        background: #ff433e;
    }
    .palace-li-foo-buying{
        line-height: .6rem;
        text-align: center;
        color: #fff;
    }
</style>

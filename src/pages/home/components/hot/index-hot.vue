<template>
    <div >
        <h2 class="hot-title">热门推荐</h2>
        <ul class="hot-container">
            <li class="hot-item" v-for="item in dataList" :key="item.id">
                <a :href="item.path">
                    <div class="hot-imgContainer"><img :src="item.imgSrc" alt="img"></div>
                    <div class="hot-details">
                        <h3 class="details-title">{{item.detailsTitle}}</h3>
                        <p class="details-content">{{item.detailsContent}}</p>
                        <p class="details-price">
                            ¥<em class="price-number">{{item.priceNumber}}</em>
                            <span class="price-text">起</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
        <a href="javascript:;" class="hot-checkAll">
            查看所有产品
        </a>
    </div>
</template>

<script>
    export default {
        name: "hot",
        props: ['dataList']
    }
</script>

<style>
    .hot-title{
        padding-left: .26rem;
        background: #f5f5f5;
        height: .8rem;
        line-height: .8rem;
        text-align: left;
        color: #212121;

    }
    .hot-item{
        position: relative;
        overflow: hidden;
        height: 1.4rem;
        padding: .24rem;
        border-bottom: 1px solid #e0e0e0;
    }
    .hot-item .hot-imgContainer{
        width: 1.4rem;
        height: 1.4rem;
        float: left;
    }
    .hot-item .hot-details{
        float: left;
        margin-left: .15rem;
        width: 6.2rem;
        height: 1.4rem;
        text-align: left;
    }
    .details-title {
        margin-top: .04rem;
        margin-bottom: .1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #212121;
        font-size: .3rem;
    }
    .details-content{
        overflow: hidden;
        margin-bottom: .1rem;
        height: .4rem;
        line-height: .4rem;
        color: #9e9e9e;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .details-price{
        color: #ff8300;
    }
    .price-number{
        font-size: .36rem;
        padding: 0 .04rem;
    }
    .price-text{
        color: #9e9e9e;
        font-size: .24rem;
        margin-left: -.078rem;
    }
    .hot-item .hot-imgContainer img{
        width: 100%;
    }
    .hot-checkAll{
        display: block;
        color: #00afc7;
        line-height: .88rem;
        text-align: center;
    }

</style>

<li >
    <a >
        <div class="mp-hotlist-img image-ready"><img ></div>
        <div class="mp-hotlist-infos">
            <div class="mp-hotlist-title">故宫</div>
            <div class="mp-hotlist-desc">东方宫殿建筑代表，世界宫殿建筑典范</div>
        </div>
        <div class="mp-price mp-hotlist-price">
            ¥<em class="mp-price-num">40</em>
            <span class="mp-price-text">起</span>
        </div>
    </a>
</li>

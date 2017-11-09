<template>
    <div>
        <div class="weekend-trip">
            <h2 class="mp-modtitle">周末去哪儿</h2>
            <router-link to="/weekendList">
	            <ul>
	                <li class="mp-product-item" v-for="item in weekendList" v-bind:key="item.id" v-if="item.id<9">
	                    <a class="mp-fulllink" href="">
	                        <div class="product-imgcontainer image-ready">
	                            <img :src="item.imgSrc" :alt="item.productName">
	
	                        </div>
	                        <div class="mp-product-info">
	                            <p class="product-name">{{item.productName}}</p>
	                            <p class="product-desc">{{item.productDesc}}</p>
	                        </div>
	                    </a>
	                </li>
	            </ul>
            </router-link>
        </div>
        <div class="mp-price-notes">
            <span class="mp-price-desc-icon iconfont icon-tanhao"></span>
            <div class="mp-price-desc-info">
                <span class="mp-price-desc-highlight">票面价</span>
                是指通过景区指定窗口售卖的纸质门票上标注的价格
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name : "weekend",
        props : ['weekendList'],
        data() {
            return {


            }
        }
    }

</script>

<style scoped>
    .weekend-trip {
        overflow: hidden;
    }
    .mp-modtitle {
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        color: #212121;
        text-align: left;
    }
    .mp-product-item {
        position: relative;
        margin-bottom: .1rem;
        background: #fff;
    }
    .mp-fulllink {
        display: block;
        width: 100%;
        height: 100%;
    }
    .mp-product-item .product-imgcontainer {
        overflow: hidden;
        height: 0;
        padding-bottom: 37.4375%;
    }
    .image-ready img {
        opacity: 1;
    }
    .mp-product-item img {
        width: 100%;
    }
    .mp-product-item .mp-product-info {
        position: relative;
        padding: .14rem .2rem .2rem .2rem;
    }
    .mp-product-item .product-name {
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-product-item .product-desc {
        overflow: hidden;
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-price-notes {
        overflow: hidden;
        margin-top: .1rem;
        padding: .14rem .1rem;
        font-size: .24rem;
        line-height: .32rem;
        background: #fff;
        color: #616161;
    }
    .mp-price-desc-icon {
        width: .24rem;
        float: left;
        line-height: .32rem;
    }
    .mp-price-desc-info {
        float: left;
        margin-left: .1rem;
    }
    .mp-price-desc-highlight {
        font-weight: bold;
        text-align: left;
    }
</style>

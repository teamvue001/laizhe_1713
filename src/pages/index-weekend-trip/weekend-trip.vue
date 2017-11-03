<template>
    <div>
        <div class="weekend-trip">
            <h2 class="mp-modtitle">周末去哪儿</h2>
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
        </div>
        <div class="mp-price-notes">
            <span class="mp-price-desc-icon"></span>
            <div class="mp-price-desc-info">
                <span class="mp-price-desc-highlight">票面价</span>
                是指通过景区指定窗口售卖的纸质门票上标注的价格
            </div>
        </div>
    </div>
</template>

<script>

    import axios from "axios";


    export default {

        data() {
            return {
                "weekendList" : [{
                    "id" : "1",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                    "productName" : "北京温泉排行榜",
                    "productDesc" : "细数北京温泉，温暖你的冬天"
                },{
                    "id" : "2",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
                    "productName" : "寻找北京的皇城范儿",
                    "productDesc" : "数百年的宫廷庙宇，至今依旧威严霸气"
                },{
                    "id" : "3",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                    "productName" : "北京温泉排行榜",
                    "productDesc" : "细数北京温泉，温暖你的冬天"
                },{
                    "id" : "4",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
                    "productName" : "寻找北京的皇城范儿",
                    "productDesc" : "数百年的宫廷庙宇，至今依旧威严霸气"
                },{
                    "id" : "5",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                    "productName" : "北京温泉排行榜",
                    "productDesc" : "细数北京温泉，温暖你的冬天"
                },{
                    "id" : "6",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
                    "productName" : "寻找北京的皇城范儿",
                    "productDesc" : "数百年的宫廷庙宇，至今依旧威严霸气"
                },{
                    "id" : "7",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                    "productName" : "北京温泉排行榜",
                    "productDesc" : "细数北京温泉，温暖你的冬天"
                },{
                    "id" : "8",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
                    "productName" : "寻找北京的皇城范儿",
                    "productDesc" : "数百年的宫廷庙宇，至今依旧威严霸气"
                },{
                    "id" : "9",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
                    "productName" : "北京温泉排行榜",
                    "productDesc" : "细数北京温泉，温暖你的冬天"
                },{
                    "id" : "10",
                    "imgSrc" : "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
                    "productName" : "寻找北京的皇城范儿",
                    "productDesc" : "数百年的宫廷庙宇，至今依旧威严霸气"
                }]

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
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-product-item .product-desc {
        overflow: hidden;
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-price-notes {
        margin-top: .1rem;
        padding: .14rem .1rem;
        font-size: .24rem;
        line-height: .32rem;
        background: #fff;
        color: #616161;
    }
    .mp-price-desc-icon {
        width: .24rem;
        display: block;
        float: left;
        line-height: .32rem;
    }
    .mp-price-desc-info {
        margin-left: .3rem;
    }
    .mp-price-desc-highlight {
        font-weight: bold;
    }
</style>

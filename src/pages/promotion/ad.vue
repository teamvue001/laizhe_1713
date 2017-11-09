<template>
    <div class="control">
        <img class="info-img" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" alt="">
        <div class="ad-Info">
            <h2 class="ad-Info-h2">去哪儿旅行</h2>
            <p class="info-content">超过<span class="mark">4.6亿</span>人的聪明选择</p>
        </div>
        <div class="info-button">下载客户端</div>
        <em class="close iconfont"></em>
    </div>
</template>

<script>

    export default {

        name: 'ad',
        data() {
            return {}
        },
        computed: {},
        components: {}
    }

</script>

<style>
    .control {
        position: absolute;
        top: 0;
        left: 0;
        padding: .2rem 0;
        width: 7.5rem;
        height: .8rem;
        background-color: #000;

    }
    .info-img {
        margin: 0 .2rem;
        float: left;
        width: .8rem;
        height: .8rem;
    }
    .ad-Info {
        float: left;
        text-align: left;
    }
    .ad-Info-h2 {
        font-size: .44rem;
        color: #25A4BB;
        font-weight: bold;
        line-height: .44rem;
    }
    .info-content {
        font-size: .28rem;
        color: #c4c4c4;;
        line-height: .4rem;

    }
    .mark {
        font-size: .28rem;
        color: #fab400;
        line-height: .4rem;
    }
    .info-button {
        margin-top: 0.08rem;
        margin-right: .9rem;
        float: right;
        width: 1.6rem;
        height: .66rem;
        background-color: #f4b000;
        font-size: .28rem;
        text-align: center;
        border-radius: 0.1rem;
        color: #fff;
        line-height: .66rem;
        font-weight: bold;
    }
</style>

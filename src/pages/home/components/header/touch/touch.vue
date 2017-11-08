<template>
    <div>
        <header class="header">
            <a class="header-back">
                <i class="iconfont icon-huise"></i>
            </a>
            <input  data-search="keyword" type="text" autofocus="autofocus"  autocomplete="off" placeholder="输入城市或景点" class="header-input" @blur="hideCity" @focus="showCity">

            <div class="header-city">
            <span class="header-Choose-city">
               <em class="nav-city">搜索</em>
            </span>
            </div>
        </header>
        <div class="correlationSearch" v-show="showList">
            <div class="searchbg">
                <div class="city-history">
                    <span class="history-title">搜索历史</span>
                    <span class="history-deloption">
                    <span class="text-icon mp-history-delicon"></span>
                    <span class="history-deltext">清除</span>
               </span>
                </div>
                <div class="history-conouter">
                    <div class="history-coninner">
                        <div class="history-item">青海湖二郎剑</div>
                        <div class="history-item" >青海湖二郎剑</div>
                        <div class="history-item">青海湖二郎剑</div>
                        <div class="history-item" >青海湖二郎剑</div>
                    </div>
                </div>
            </div>
            <div >
                <div class="hot-City-head">
                    <span class="hot-search">热门搜索</span>
                    <span class="hot-search-refreshoption">
                    <span class="iconfont icon-shuaxin3"></span>
                    <span class="">换一批</span>
               </span>
                </div>
                <div class="hotsearch">
                    <div class="hotsearchScenic">
                        <div class="ScenicPic">
                            <img class="ScenicImg" src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" alt="">
                        </div>
                        <ul class="Scenic">
                            <li class="scenicitem" href="">青龙湖二龙湖浩浩</li>
                            <li class="scenicitem" href="">青龙湖</li>
                            <li class="scenicitem" href="">青龙湖</li>
                            <li class="scenicitem" href="">青龙湖</li>
                            <li class="scenicitem" href="">青龙湖</li>
                            <li class="scenicitem" href="">青龙湖</li>
                        </ul>
                    </div>
                    <div class="hotsearchCity">
                        <div class="CityPic">
                            <img class="CityImg" src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" alt="">
                        </div>
                        <div class="city">
                            <a class="scenicitem" href="">青龙湖</a>
                            <a class="scenicitem" href="">青龙湖</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-nearbycon">
                <div class="search-nearbybtn">搜索身边的景点</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                showList: false
            }
        },
        methods: {
            showCity: function () {
                this.showList = !this.showList
            },
            hideCity: function () {
                this.showList = !this.showList
            }
        }
    }

</script>

<style scoped>
    .header{
        position: relative;
        width: 100%;
        height: .88rem;
        background: #00bcd4;
        text-align: center;
        color: #fff;
    }
    .header-back{
        float: left;
        width: .4rem;
        height: .88rem;
        line-height: .88rem;
        padding: 0 .2rem;
        font-size: .36rem;
        text-align: left;
        color: #fff;
    }
    .header-input{
        position: absolute;
        padding-left: .3rem;
        width: 73%;
        height: .6rem;
        top: .14rem;
        left: .8rem;
        right: 1.28rem;
        line-height: .6rem;
        background: #fff;
        border: none;
        border-radius: .06rem;
        font-size: 0.3rem;
        color: #ccc;
    }
    .header-city{
        float: right;
        width: 1.6rem;
        line-height: .87rem;
    }
    .header-Choose-city{
        display: block;
        padding-left: .18rem;
        margin-right: 0!important;
        margin-left: 0.5rem;
        height: .87rem;
    }
    .nav-city{
        float: left;
        width: .85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .correlationSearch{
        display: bone;
    }
    .searchbg{
        width: 100%;
        min-height: 100%;
        background-color: #f5f5f5;
    }
    .city-history{
        height: .64rem;
        line-height: .64rem;
        padding: 0 .2rem;
        background-color: #f0f5f6;
    }
    .history-title{
        font-size: .26rem;
        color: #888;
    }
    .history-deloption{
        float: right;
        font-size: .26rem;
        color: #00afc7;
    }
    .history-deltext{
        float: right;
        font-size: .26rem;
        color: #00afc7
    }
    .history-conouter{
        height: 1.24rem;
        overflow-y: auto;
        background-color: #fff;
        border-top: 1px solid #dce5e7;
        border-bottom: 1px solid #dce5e7;
    }
    .history-coninner{
        margin-top: .3rem;
        width: 10rem;
        white-space: nowrap;
        overflow-y: auto;
    }
    .history-item{
        float: left;
        max-width: 2.89rem;
        height: .6rem;
        font-size: .26rem;
        color: #333;
        background-color: #fff;
        line-height: .6rem;
        padding: 0 .15rem;
        text-align: center;
        margin-left: .2rem;
        border: 1px solid #c9cccd;
        border-radius: 3px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .hot-City-head{
        height: .64rem;
        line-height: .64rem;
        padding: 0 .2rem;
        background-color: #f0f5f6;
    }
    .hot-search{
        font-size: .26rem;
        color: #888;
    }
    .hot-search-refreshoption{
        float: right;
        font-size: .26rem;
        color: #00afc7;
    }
    .hotsearch{
        position: relative;
        height: 1.8rem;
    }
    .hotsearchScenic{
        position: relative;
        left: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
        line-height: 100%;
        text-align: center;
    }
    .ScenicPic{
        position: absolute;
        overflow: hidden;
        width: .72rem;
        height: 70%;
        top: 15%;
        border-right: 1px solid #dce5e7;
    }
    .ScenicImg{
        width: .3rem;
        height: .3rem;
        position: relative;
        top: 50%;
        margin-top: -.15rem;
    }
    .Scenic{
        margin-left: .72rem;
        max-height: 1.8rem;
    }
    .scenicitem{
        display: block;
        float: left;
        height: .36rem;
        max-width: 2.89rem;
        line-height: .36rem;
        text-align: center;
        display: block;
        padding-left: .3rem;
        padding-right: .3rem;
        border-right: 1px dashed #c9cccd;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: .25rem;
        margin-bottom: .25rem;
    }
    .hotsearchCity{
        position: relative;
        height: .9rem;
        background-color: #fff;
        border-top: 1px solid #dce5e7;
        border-bottom: 1px solid #dce5e7;
    }
    .CityPic{
        position: absolute;
        width: .72rem;
        height: 70%;
        top: 15%;
        border-right: 1px solid #dce5e7;
    }
    .CityImg{
        width: .3rem;
        height: .3rem;
        position: relative;
        top: 50%;
        left:50%;
        margin-top: -.15rem;
        margin-left: -.15rem;
    }
    .city{
        margin-left: .72rem;
    }
    .search-nearbycon{
        padding: .2rem;
        margin-top: 0.8rem;
    }
    .search-nearbybtn{
        height: .72rem;
        line-height: .72rem;
        background-color: #fff;
        text-align: center;
        font-size: .26rem;
        color: #333;
        border: 1px solid #dde1e3;
        border-radius: 2px;
    }
</style>

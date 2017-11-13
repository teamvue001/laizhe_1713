<template>
    <div>
        <div id="header-box">
            <router-link to="/">
                <i class="iconfont icon-huise"></i>
            </router-link>
            <h1 class="header-tittle">
                我在故宫等你
            </h1>
            <router-link to="/">
                <span class="iconfont icon-jingdian"></span>
                <p class="toindex">首页</p>
            </router-link>
        </div>
        <div id="banner">
            <img class="banner" src="http://img1.qunarzz.com/piao/fusion/1703/3f/16238f1c3a743d02.png">
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
    #header-box{
        width: 100%;
        height: .88rem;
        background: #1BA9BA;
    }
    .iconfont{
        float: left;
        width: .88rem;
        text-align: center;
        color: #fff;
    }
    .icon-huise{
        height: 100%;
        line-height: .88rem;
        font-size: .4rem;
    }
    .icon-jingdian{
        float: right;
        width: .88rem;
        height: .58rem;
        line-height: .58rem;
        color: #fff;
    }
    .toindex{
        float: right;
        width: .88rem;
        text-align: center;
        font-size: .24rem;
        color: #fff;
    }
    .header-tittle{
        float: left;
        width: 6.52rem;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .32rem;
        color: #fff;
    }
    #banner{
        border-bottom: 1px solid red;
    }
    .banner{
        width: 100%;
        vertical-align: top;
        border: 0;
    }
</style>

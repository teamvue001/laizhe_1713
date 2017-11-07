<template>
    <header class="header">
        <a class="header-back">
            <i class="iconfont icon-huise"></i>
        </a>
        <div class="header-input">
            <i class="iconfont icon-sousuo"></i>
            <span class="header-where">输入城市/景点/游玩主题</span>
        </div>
        <div class="header-city">
            <span class="header-Choose-city">
               <em class="nav-city">北京</em>
               <i class="iconfont icon-up"></i>
            </span>
        </div>
    </header>
</template>

<script>
    export default {
        name : "header"
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
        width: 71%;
        height: .6rem;
        top: .14rem;
        left: .8rem;
        right: 1.28rem;
        line-height: .6rem;
        background: #fff;
        border-radius: .06rem;
        color: #ccc;
    }
    .header-where{
        position: absolute;
        left: .3rem;
        top: .01rem;
        width: 3.6rem;
        color: #e4e7ea;
        font-size: 0.3rem;
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
        height: .87rem;
    }
    .nav-city{
        float: left;
        width: .85rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .icon-up{
        float: left;
        font-size: 0.3rem!important;
    }
    .icon-sousuo{
        position: absolute;
        left: 0.15rem;
        top: 0.01rem;
        font-size: 0.25rem;
        color: #e4e7ea;
    }
</style>

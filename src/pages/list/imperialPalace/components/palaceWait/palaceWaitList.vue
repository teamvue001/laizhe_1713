<template>
    <div>
        <ul class="waitList">
            <li class="wait-list-li" v-for="item in ListAll" :key="item.id">
                <a class="wait-list-li-box" :href="item.path">
                    <img class="wait-list-li-img" :src="item.src">
                    <span class="palace-li-pic-background">
                        <strong class="palace-li-pic-txt">{{item.name}}</strong>
                    </span>
                    <h3 class="wait-list-li-txt">{{item.text}}</h3>
                    <div class="wait-list-li-foot">
                        <span class="wait-list-li-foot-code"> &yen; </span>
                        <em class="wait-list-li-foot-num">{{item.price}}</em>
                        <i class="wait-list-li-foot-buy"> 抢购 </i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "",
        props : ["ListAll"]
    }
</script>

<style scoped>
    .waitList{
        display: block;
        width: 8.08rem;
        min-height: 2rem;
        margin-right: -.2rem;
        background: #fbdea3;
    }
    .waitList::after{
        content: '\0020';
        clear: both;
        display: block;
        overflow: hidden;
        height: 0;
        visibility: hidden;
    }
    .wait-list-li{
        position: relative;
        float: left;
        display: list-item;
        width: 50%;
        height: 3.9rem;
        margin-top: .2rem;

    }
    .wait-list-li-box{
        position: relative;
        display: block;
        width: 3.84rem;
        height: 3.86rem;
        background: #fff;
    }
    .wait-list-li-img{
        width: 3.84rem;
        margin-right: .2rem;
    }
    .palace-li-pic-background{
        position: absolute;
        left: 0;
        bottom: 1.45rem;
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        background: rgba(0, 0, 0, .6);
    }
    .palace-li-pic-txt{
        color: #fff;
        margin-left: .1rem;
    }
    .wait-list-li-txt{
        overflow: hidden;
        margin: 8px 5px 10px;
        height: 28px;
        color: #333;
        font-size: 12px;
        line-height: 14px;
    }
    .wait-list-li-foot{
        position: relative;
        bottom: .07rem;
        width: 100%;
        height: .6rem;
    }
    .wait-list-li-foot-code{
        line-height: .6rem;
        margin-left: 5px;
        color: #f44;
    }
    .wait-list-li-foot-num{
        font-size: .36rem;
        line-height: .6rem;
        color: #f44;
    }
    .wait-list-li-foot-buy{
        position: absolute;
        right: 0;
        bottom: 0;
        width: .8rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        background-color: #ff4444;
        color: #ffffff;
    }
</style>

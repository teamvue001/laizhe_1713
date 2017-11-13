<template>
    <div class="activityAll">
        <ul class="activity">
            <li class="activityAddress activityLi">
                <p class="posiText">
                    <i class="iconfont icon-dizhi"></i>
                    附近
                </p>
            </li>
            <li class="activityPrice activityLi">
                <p class="posiText">
                    <i class="iconfont icon-duoyuyan"></i>
                    5折泡温泉
                </p>
            </li>
        </ul>
        <ul class="advert">
            <router-link to="/home">
                <li class="advertPrice advertLi">
                    <p class="advertLeftName">精选温泉</p>
                    <p class="advertLeftPrice">5折开泡</p>
                    <img class="advertLeftImg" :src="require('../../../../../static/img/11.png')">
                </li>
            </router-link>
            <router-link to="/home">
                <li class="advertTicket advertLi">
                    <p class="advertRightName">金秋大促</p>
                    <p class="advertRightPrice">门票1元起</p>
                    <img class="advertRightImg" :src="require('../../../../../static/img/22.png')">
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
    .activityAll{
        background: #f5f5f5;
    }
    .activity{
        width: 100%;
        height: 1rem;
        border: 0;
        border-top: 1px solid #eee;
        margin-bottom: 0.2rem;
        background: #fff;
    }
    .activityLi{
        float: left;
        width: 50%;
        height: 1rem;
        margin: 0;
        padding: 0;
        text-align: center;
        line-height: 1rem;
    }
    .activityAddress{
        width: 49.6%;
        border-right: 1px solid #eee;
    }
    .posiText{
        float: left;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
    }
    .advert{
        width: 100%;
        height: 1.4rem;
        background: #fff;
        border: 0;
    }
    .advertLi{
        position: relative;
        float: left;
        width: 50%;
        height: 1.4rem;
    }
    .advertLeftImg,.advertRightImg{
        position: absolute;
        right: 5%;
        top: 8%;
        width: 1.5rem;
        height: 1rem;
    }
    .advertLeftName,.advertRightName{
        margin-top: .35rem;
        margin-bottom: .1rem;
        color: red;
    }
    .advertLeftPrice,.advertRightPrice{
        color: #333;
    }
    .advertLeftName,.advertRightName,.advertLeftPrice,.advertRightPrice{
        width: 50%;
        margin-left: .2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
        margin-bottom: .2rem;
    }
    .advertPrice{
        width: 49.6%;
        border-right: 1px solid #eee;
    }
</style>

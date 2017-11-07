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
                    <a class="advertLeft" href="javascript:;">
                        <p class="advertLeftName">精选温泉</p>
                        <p class="advertLeftPrice">5折开泡</p>
                    </a>
                </li>
            </router-link>
            <router-link to="/home">
                <li class="advertTicket advertLi">
                    <a class="advertRight" href="javascript:;">
                        <p class="advertRightName">金秋大促</p>
                        <p class="advertRightPrice">门票1元起</p>
                    </a>
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
    .advertLeft{
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        background: #fff;
    }
    .advertRight{
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        background: #fff;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
    }
    .advertPrice{
        width: 49.6%;
        border-right: 1px solid #eee;
        background: url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;background-size:auto 100%;
    }
    .advertTicket{
        background: url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;background-size:auto 100%;
    }
</style>

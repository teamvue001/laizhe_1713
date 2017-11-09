<template>
    <div class="box">
        <div @click="clickItem" class="itemLiFir">
            <p class="timer">上午场</p>
            <i class="statement">凭身份证入园</i>
            <em class="price">￥20起 ∨</em>
        </div>
        <transition name="fade">
            <ul v-show="hideli" class="itemlist">
                <li class="itemfir">
                    <h5 class="itemfirTitle">去哪直销</h5>
                    <div class="firleft">
                        <p class="firleftTest">【下午场】故宫成人票凭身份证入园</p>
                        <p class="firleftTime">可定 11月9日</p>
                        <i class="firleftBack">条件退</i>
                    </div>
                    <div class="firRight">
                        <h6 class="reservePrice">￥20</h6>
                        <p class="reserve">预定</p>
                    </div>
                </li>
                <li class="itemsec">
                    <h5 class="itemfirTitle">去哪直销</h5>
                    <div class="firleft">
                        <p class="firleftTest">【下午场】故宫成人票凭身份证入园</p>
                        <p class="firleftTime">可定 11月9日</p>
                        <i class="firleftBack">条件退</i>
                    </div>
                    <div class="firRight">
                        <h6 class="reservePrice">￥20</h6>
                        <p class="reserve">预定</p>
                    </div>
                </li>
            </ul>
        </transition>


    </div>
</template>

<script>
    export default {
        name: "partItem",
        data() {
            return {
                hideli: false
            }
        },
        methods: {
            clickItem: function() {
                this.hideli = !this.hideli
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0
    }
    .itemLiFir{
        height: .88rem;
    }
    .timer{
        float: left;
        line-height: .88rem;
        font-size: .32rem;
        margin: 0 .2rem;
    }
    .statement{
        line-height: .88rem;
        font-size: .18rem;
        color: #666;
    }
    .price{
        float: right;
        line-height: .88rem;
        margin-right: .3rem;
        font-size: .36rem;
        color: #ff9800;
    }
    .itemlist{
        height: 3.6rem;
        background: #f5f5f5;
    }
    .itemfir,.itemsec{
        height: 1.6rem;
        padding: .1rem .2rem;
    }
    .itemfirTitle{
        margin-left: .2rem;
        font-size: .32rem;
        padding: .08rem 0;
        color: #333;
        line-height: .36rem;
        margin-bottom: .1rem;
    }
    .firleft{
        float: left;
    }
    .firRight{
        float: right;
        margin-right: .3rem;
        margin-top: -.3rem;
    }
    .firleftTest{
        padding-top: 0;
        color: #888;
        font-size: .24rem;
        line-height: .36rem;
        margin-bottom: .1rem;
    }
    .firleftTime{
        display: inline-block;
        color: #616161;
        font-size: .24rem;
        line-height: .32rem;
        white-space: nowrap;
        margin-right: .24rem;
        margin-left: .2rem;
        margin-bottom: .1rem;
    }
    .firleftBack{
        display: inline-block;
        color: #616161;
        font-size: .24rem;
        line-height: .32rem;
        white-space: nowrap;
    }
    .reservePrice{
        text-align: center;
        margin-left: .04rem;
        font-size: .32rem;
    }
    .reserve{
        width: 1.5rem;
        height: .6rem;
        text-align: center;
        background: #ff9800;
        color: #fff;
        font-size: .28rem;
        line-height: .6rem;
        border-radius: .06rem;
    }
</style>

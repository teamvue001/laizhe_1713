<template>
	<div class="test">
        <h2 class="title">
            <img class="ticketPic" :src="require('./img/ticket.png')">
            故宫成人票
        </h2>
        <ul class="list">
            <li class="itemLi">
                <listPartItem></listPartItem>
            </li>
            <li class="itemLi">
                <listPartItem></listPartItem>
            </li>
            <li class="more">
                <h3 @click="handleLi" v-if="show" class="moreText">查看剩余产品∨</h3>
                <div class="itemLi moreList" v-show="apearli">
                    <listPartItem></listPartItem>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import partItem from "./partItem.vue";
    export default {
        name: "partItem",
        components: {
            listPartItem: partItem
        },
        data() {
            return{
                show: true,
                apearli: false
            }
        },
        methods: {
            handleLi: function() {
                    this.show = false;
                    this.apearli = !this.apearli;
            }
        }
    }
</script>

<style scoped>
    .test{
        width:100%;
    }
    .title{
        width: 100%;
        height: .88rem;
        margin-left: .5rem;
        line-height: .88rem;
        font-size: .34rem;
    }
    .ticketPic{
        width: .3rem;
        height: .3rem;
        margin-right: .1rem;
    }
    .more{
        width: 100%;
        margin-bottom: .3rem;
    }
    .moreText{
        height: .8rem;
        background: #fff;
        text-align: center;
        line-height: .8rem;
        font-size: .32rem;
    }
</style>

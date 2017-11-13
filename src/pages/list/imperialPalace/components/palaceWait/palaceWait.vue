<template>
    <div class="wait-list">
        <div class="wait-head">
            <div class="arrow arrow-left"></div>
            <h2 class="wait-head-text">等你来</h2>
            <div class="arrow arrow-right"></div>
        </div>
        <ul class="waitItemBox">
            <li @click="clickPlay" class="waitItem wait-item-play" v-bind:class="{ active: isActivePlay }">
                <h3 class="wait-item-txt wait-item-txt-play">玩转故宫</h3>
            </li>
            <li @click="clickHot" class="waitItem wait-item-hot" v-bind:class="{ active: isActiveHot }">
                <h3 class="wait-item-txt wait-item-txt-hot">热销套票</h3>
            </li>
            <li @click="clickAround" class="waitItem wait-item-around" v-bind:class="{ active: isActiveAround }">
                <h3 class="wait-item-txt wait-item-txt-around">周边必游</h3>
            </li>
        </ul>
        <ul class="wait-item-list">
            <transition name="component-fade" mode="out-in">
                <palaceWaitList v-show="play" :ListAll="waitListAll[0]"></palaceWaitList>
            </transition>
            <transition name="component-fade" mode="out-in">
                <palaceWaitList v-show="hot" :ListAll="waitListAll[1]"></palaceWaitList>
            </transition>
            <transition name="component-fade" mode="out-in">
                <palaceWaitList v-show="around" :ListAll="waitListAll[2]"></palaceWaitList>
            </transition>
        </ul>
    </div>
</template>

<script>
    import waitList from "./palaceWaitList.vue";

    export default {
        name: "waitList",
        props : ["waitListAll","ListAll"],
        components: {
            palaceWaitList: waitList,
            'v-a': {
                template: '<div>Component A</div>'
            },
            'v-b': {
                template: '<div>Component B</div>'
            },
            'v-C': {
                template: '<div>Component C</div>'
            }
        },
        data() {
            return{
                play: true,
                hot: false,
                around: false,
                isActivePlay: true,
                isActiveHot: false,
                isActiveAround: false,
                view: 'v-a'
            }
        },
        methods: {
            clickPlay: function() {
                this.play = true;
                this.hot = false;
                this.around = false;
                this.isActivePlay = true;
                this.isActiveHot = false;
                this.isActiveAround = false;
            },
            clickHot: function() {
                this.hot = true;
                this.play = false;
                this.around = false;
                this.isActivePlay = false;
                this.isActiveHot = true;
                this.isActiveAround = false;
            },
            clickAround: function() {
                this.around = true;
                this.play = false;
                this.hot = false;
                this.isActivePlay = false;
                this.isActiveHot = false;
                this.isActiveAround = true;
            }

        }
    }
</script>

<style scoped>
    .wait-list{
        margin-top: .2rem;
    }
    .wait-head{
        position: relative;
        width: 100%;
        height: .7rem;
        background-color: #e0ae66;
        margin-bottom: .2rem;
    }
    .wait-head-text{
        position: absolute;
        top: 0;
        left: 33%;
        width: 2.6rem;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        background: #f5d17a;
        color: #ec7b28;
        font-size: .36rem;
        font-weight: 900;
    }
    .arrow{
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        overflow: hidden;
        border-width: 0 8px 35px;
        border-style: solid;
        border-color: transparent;
    }
    .arrow-left{
        left: 29%;
        border-right-color: #f5d17a;
    }
    .arrow-right{
        right: 30%;
        border-left-color: #f5d17a;
    }
    .waitItemBox{
        width: 100%;
        height: .7rem;
    }
    .waitItem{
        float: left;
        width: 2.6rem;
        height: .6rem;
        background: #e5c584;
        color: #fff;
    }
    .wait-item-hot{
        height: .6rem;
        margin: 0 .04rem;
    }
    .wait-item-txt{
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        font-size: .32rem;
    }
    .active{
        background: #e3a653;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .5s;
    }
    .component-fade-enter, .component-fade-leave-to{
        transition: .3s;
        opacity: 0;
    }
</style>

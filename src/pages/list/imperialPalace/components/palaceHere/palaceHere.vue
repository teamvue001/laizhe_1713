<template>
    <div class="here-list">
        <div class="here-head">
            <div class="arrow arrow-left"></div>
            <h2 class="here-head-text">我在这里</h2>
            <div class="arrow arrow-right"></div>
        </div>
        <palacehereItem :hereList="hereList"></palacehereItem>
    </div>
</template>

<script>
    import hereItem from "./palaceHereItem.vue";

    export default {
        name: "palaceHere",
        props: ["hereList"],
        components: {
            palacehereItem: hereItem
        }
    }
</script>

<style scoped>
    .here-list{
        margin-top: .2rem;
    }
    .here-head{
        position: relative;
        width: 100%;
        height: .7rem;
        background-color: #e0ae66;
        margin-bottom: .2rem;
    }
    .here-head-text{
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
</style>

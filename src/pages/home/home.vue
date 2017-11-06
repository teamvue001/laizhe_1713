<template>
    <div>
        <indexHeader></indexHeader>
        <indexSwiper :srcList="srcList"></indexSwiper>
        <indexScenicSwiper :DataList="dataList"></indexScenicSwiper>
        <indexHot :dataList="hotList"></indexHot>
    </div>
</template>

<script>
    import header from "./components/header/header.vue";
    import swiper from "./components/banner/index-swiper.vue";
    import scenic from "./components/scenicSpot/index-scenic-controller.vue";
    import hot from "./components/hot/index-hot.vue";
    import axios from "axios";

    export default{
        name : "Home",
        components: {
            indexHeader: header,
            indexSwiper: swiper,
            indexScenicSwiper: scenic,
            indexHot: hot
        },
        data() {
            return {
                srcList : [],
                dataList : [],
                hotList : [],

            }
        },
        mounted () {
            axios.get("/static/index.json").then((res) => {
                console.log(res.data.data);
                this.srcList = res.data.data.srcList;
                this.dataList = res.data.data.dataList;
                this.hotList = res.data.data.hotList;
            })
        }
    }
</script>

<style>

</style>

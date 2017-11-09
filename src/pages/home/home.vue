<template>

    <div>
        <indexHeader></indexHeader>
        <indexSwiper :srcList="srcList"></indexSwiper>
        <indexScenicSwiper :DataList="dataList"></indexScenicSwiper>
        <indexActivity></indexActivity>
        <indexHot :dataList="hotList"></indexHot>
        <indexweekendTrip :weekendList="weekendList"></indexweekendTrip>
        <indexFooter />
    </div>
</template>

<script>
    import header from "./components/header/header.vue";
    import swiper from "./components/banner/index-swiper.vue";
    import scenic from "./components/scenicSpot/index-scenic-controller.vue";
    import hot from "./components/hot/index-hot.vue";
    import axios from "axios";
    import activity from"./components/activity/activity"
    import weekendTrip from"./components/weekendTrip/weekend-trip"
    import footer from "./components/footer/footer.vue";


    export default{
        name : "Home",
        components: {
            indexHeader: header,
            indexSwiper: swiper,
            indexScenicSwiper: scenic,
            indexHot: hot,
            indexActivity: activity,
            indexweekendTrip: weekendTrip,
            indexFooter: footer
        },
        data() {
            return {
                srcList : [],
                dataList : [],
                hotList : [],
                weekendList : []
            }
        },
        mounted () {
            axios.get("/static/home/index.json").then((res) => {
                this.srcList = res.data.data.srcList;
                this.dataList = res.data.data.dataList;
                this.hotList = res.data.data.hotList;
                this.weekendList = res.data.data.weekendList;
            })
        }
    }

</script>

<style>


</style>

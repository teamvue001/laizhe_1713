<template>
    <div>
        <indexHeader></indexHeader>
        <indexSwiper></indexSwiper>
        <indexActivity></indexActivity>
        <indexScenicSwiper></indexScenicSwiper>
        <indexHot></indexHot>
    </div>
</template>

<script>
    import header from "./header/header.vue";
    import swiper from "./banner/index-swiper.vue";
    import scenic from "./scenicSpot/index-scenic-controller.vue";
    import hot from "./hot/index-hot.vue";
    import positionAdvert from "./activity/activity.vue"
    export default{
        name : "Home",
        components: {
            indexHeader: header,
            indexSwiper: swiper,
            indexScenicSwiper: scenic,
            indexHot: hot,
            indexActivity: activity
        }
    }
</script>

<style>

</style>

<template>
    <div>
        <indexHeader></indexHeader>
        <indexSwiper></indexSwiper>
        <indexScenicSwiper></indexScenicSwiper>
        <indexHot></indexHot>
        <indexWeekendTrip></indexWeekendTrip>
    </div>
</template>

<script>
    import header from "./header/header.vue";
    import swiper from "./banner/index-swiper.vue";
    import scenic from "./scenicSpot/index-scenic-controller.vue";
    import hot from "./hot/index-hot.vue";
    import weekend from "./weekendTrip/weekend-trip.vue";
    export default{
        name : "Home",
        components: {
            indexHeader: header,
            indexSwiper: swiper,
            indexScenicSwiper: scenic,
            indexHot: hot,
            indexWeekendTrip : weekend
        }
    }
</script>

<style scoped>


</style>

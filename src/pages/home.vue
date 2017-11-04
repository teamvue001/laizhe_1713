<template>
    <div>
        <indexSwiper></indexSwiper>
        <indexScenicSwiper></indexScenicSwiper>
        <indexHot></indexHot>
    </div>
</template>

<script>
    import swiper from "./index-swiper.vue";
    import scenic from "./scenicSpot/index-scenic-controller.vue";
    import hot from "./hot/index-hot.vue";
    export default{
        name : "Home",
        components: {
            indexSwiper: swiper,
            indexScenicSwiper: scenic,
            indexHot: hot
        }
    }
</script>

<style>

</style>

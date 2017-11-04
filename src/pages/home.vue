<template>
    <div>
        <indexHeader></indexHeader>
        <indexSwiper></indexSwiper>
        <indexScenicSwiper></indexScenicSwiper>
        <indexHot></indexHot>
    </div>
</template>

<script>
    import header from "./header/header.vue";
    import swiper from "./index-swiper.vue";
    import scenic from "./scenicSpot/index-scenic-controller.vue";
    import hot from "./hot/index-hot.vue";
    export default{
        name : "Home",
        components: {
            indexHeader: header,
            indexSwiper: swiper,
            indexScenicSwiper: scenic,
            indexHot: hot
        }
    }
</script>

<style>

</style>

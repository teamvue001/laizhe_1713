<template>
    <ul>
        <li class="scenicItem" v-for="item in dataList" :key="item.id">
            <img :src="item.src" alt="image">
        </li>
    </ul>
</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    var id = 1;


    export default {
        name: "",
        props : ["dataList"],
        data() {return ({})}

    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/dist/css/swiper.css";
    .scenicItem{
        width : 11.11%;
        height: 11.11%;
        float: left;
        margin-left: 11.11%;
        margin-top: 9%;
    }
    .scenicItem img{
        width:100%;
    }
</style>

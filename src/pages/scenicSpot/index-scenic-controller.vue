<template>
    <swiper :options="swiperOption" >
        <swiper-slide v-for=" item in scenicList" :key="item.id">
            <Scenic :dataList="item.item" ></Scenic>   <!--注意这里要绑定数据-->
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import Scenic from './index-scenic.vue';
    import axios from "axios";

    export default {
        name: 'scenicControl',
        components: {
            swiper,
            swiperSlide,
            Scenic
        },
        data() {
            return {
                swiperOption: {
                    direction: 'horizontal',
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    observeParents: true
                },
                scenicList : []
            }
        },
        mounted () {
            
        }
    }

</script>

<style>
    @import "../../../node_modules/swiper/dist/css/swiper.css";
</style>

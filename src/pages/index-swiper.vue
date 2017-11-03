<template>
    <div>
        <swiper :options="swiperOption" >

            <!-- slides -->
            <swiper-slide v-for="item in srcList" :key="item.index">
                <img class="swiper-item" :src="item.src" alt="img1">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
        <ScenicController></ScenicController>

    </div>

</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import ScenicController from './scenicSpot/index-scenic-controller.vue';
    import axios from "axios";




    var id = 1;
    export default {
        name: 'carrousel',
        components: {
            swiper,
            swiperSlide,
            ScenicController
        },
        data() {
            return {
                swiperOption: {
                  // swiper options 所有的配置同swiper官方api配置
                  autoplay: 3000,
                  direction: 'horizontal',
                  autoHeight: true,
                  pagination: '.swiper-pagination',
                  observeParents: true,

                },

                srcList : []

            }
        },
        mounted () {
            axios.get("http://localhost:8080/swiper").then((res) => {
                this.srcList = res.data.data.srcList; //这里没有问题
            })
        },

        computed: {

        }

  }
</script>

<style>
    @import "../../node_modules/swiper/dist/css/swiper.css";
    .swiper-item{
        width:100%;
    }
</style>



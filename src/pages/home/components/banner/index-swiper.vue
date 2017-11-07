<template>
    <div>
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item in srcList" :key="item.index">
                <div class="imgWrap">
                    <img class="swiper-item" :src="item.src" alt="img1">
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    var id = 1;
    export default {
        name: 'banner',
        components: {
            swiper,
            swiperSlide
        },
        props: ["srcList"],
        data() {
            return {
                swiperOption: {
                  // swiper options 所有的配置同swiper官方api配置
                  autoplay: 3000,
                  direction: 'horizontal',
                  autoHeight: true,
                  pagination: '.swiper-pagination',
                  observeParents: true,
                }
            }
        }
  }
</script>

<style>
    @import "../../../../../node_modules/swiper/dist/css/swiper.css";
    .imgWrap{
        width: 100%;
        height: 0;
        padding-bottom: 31.25%;
    }
    .swiper-item{
        width:100%;
    }
</style>



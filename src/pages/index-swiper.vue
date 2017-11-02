<template>
  <swiper :options="swiperOption" >

    <!-- slides -->
    <swiper-slide v-for="item in srcList" :key="item.index">
      <img class="swiper-item" :src="item.src" alt="img1">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  export default {
    name: 'carrousel',
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
        srcList : [{
          src :  "http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg",
          index : 1
        },{
          src : "http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg",
          index : 2
        },{
          src : "http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg",
          index : 3
        },{
          src : "http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg",
          index : 2
        },{
          src : "http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg",
          index : 3
        }]
      }
    },

    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style>
    @import "../../node_modules/swiper/dist/css/swiper.css";
    .swiper-item{
        width:100%;
    }
</style>

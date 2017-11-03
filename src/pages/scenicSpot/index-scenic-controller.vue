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
        name: '',
        components: {
            swiper,
            swiperSlide,
            Scenic
        },
        data() {
            return {
                swiperOption: {
                    // swiper options 所有的配置同swiper官方api配置
//                    autoplay: 3000,
                    direction: 'horizontal',
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    observeParents: true
                },
                scenicList : []
            }
        },
        mounted () {
            axios.get("http://localhost:8080/swiper").then((res) => {

                const length = res.data.data.dataList.length;
                const number = Math.ceil(length/8);


                let list = res.data.data.dataList;

                for(var i=0; i<number; i++) {
                    if(i !== number-1){
                        this.scenicList.push({
                            item : list.splice(0, 8),
                            id : i
                        });
                    }else{
                        this.scenicList.push({
                            item : list.splice(0, list.length),
                            id : i
                        });
                    }
                }

                console.log(this.scenicList);

            })
        }



    }


</script>


<style>
    @import "../../../node_modules/swiper/dist/css/swiper.css";

</style>

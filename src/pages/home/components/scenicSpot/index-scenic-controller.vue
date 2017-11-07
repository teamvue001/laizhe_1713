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

    export default {
        name: 'scenicControl',
        props: ['DataList'],
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
                }
            }
        },
        computed : {
            scenicList : function() {
                let list = this.$props.DataList;
                const length = list.length;
                const number = Math.ceil(length/8);
                let tempList = [];
                for(var i=0; i<number; i++) {
                    if(i !== number-1){
                        tempList.push({
                            item : list.splice(0, 8),
                            id : i
                        });
                    }else{
                        tempList.push({
                            item : list.splice(0, list.length),
                            id : i
                        });
                    }
                }
                return tempList;
            }
        }
    }

</script>

<style>
    @import "../../../../../node_modules/swiper/dist/css/swiper.css";
</style>

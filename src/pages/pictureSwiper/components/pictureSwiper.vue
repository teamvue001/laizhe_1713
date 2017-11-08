<template>
	<!--<swiper :options="swiperOption" >
	    <swiper-slide v-for="item in swiperImg" :key="item.id">
	    	<router-link :to="item.link">
		        <div class="imgswiper">
		        		<div class="swiper-top"></div>
		        		<div class="imgswiper-show">
		        				<img class="swiper-item" alt="img1" 

:src="item.src" />
		        		</div>
		        		<div class="swiper-bottom"></div>
		        </div>
	       	</router-link>
	       <div class="imgswiper-bar">
    			<div class="imgswiper-note">
    				<span>{{item.pagination}}</span>
    			</div>
    		</div>
	    </swiper-slide>
	    
	</swiper>-->
	<div id="demo">
  		<button v-on:click="show = !show">
    		Toggle
  		</button>
  		<transition name="fade">
    		<p v-if="show">hello</p>
  		</transition>
	</div>
	
	
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: ["swiperImg"],
        data() {
            return {
                swiperOption: {
                  direction: 'horizontal',
                  autoHeight: true,
                  pagination: '.swiper-pagination',
                  observeParents: true,
                },
                "show" : true
            }
        }
        
  }
</script>

<style scoped>
  @import "../../../../node_modules/swiper/dist/css/swiper.css";
  
  	/*.fade-enter-active, .fade-leave-active {
  		transition: opacity .5s
	}
	.fade-enter, .fade-leave-to {
	  	opacity: 0
	}*/
	
	.fade-enter{
		color : red;
	}
	.fade-enter-active{
		transition : 1s;
		color: #F0F5F8;
	}
	
	
	
  
	.imgswiper{
	  	width:100%;
	  	height:100%;
	}
	.swiper-top{
		width:100%;
		height:3rem;
		background:#000;
	}
	.swiper-bottom{
		width:100%;
		height:3rem;
		background:#000;
	}
	.imgswiper-show{
		width:100%;
		height:9rem;
	}
	.swiper-item{
		width:100%;
		height:100%;
	}
	.imgswiper-bar{
		position:absolute;
		z-index:9;
		right:0;
		bottom:.4rem;
		left:0;
		color:#fff;
	}
	.imgswiper-note{
		height:.8rem;
		font-size:.34rem;
		line-height:.8rem;
		text-align:center;
	}
</style>
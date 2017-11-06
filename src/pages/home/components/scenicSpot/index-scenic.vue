<template>
	<router-link to="/page"></router-link>
    <ul class="scenicContainer">
        <li class="scenicItem" v-for="item in dataList" :key="item.id">
            <img :src="item.src" alt="image">
        </li>
    </ul>
</template>

<script>

    export default {
        name: "",
        props : ["dataList"],
        data() {return({})}
    }
</script>

<style scoped>
    @import "../../../../../node_modules/swiper/dist/css/swiper.css";
    .scenicContainer{
        height: 3.7rem;
    }
    .scenicItem{
        float: left;
        width: 25%;
        height: 1.3rem;
        padding-top: .3rem;
        text-align: center;
    }
    .scenicItem img{

        border-radius: 20px;
        width: .66rem;
        height: .66rem;
    }
</style>

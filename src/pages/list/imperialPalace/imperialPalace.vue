<template>
    <div id="place">
        <palaceHeader></palaceHeader>
        <div class="palace-list">
            <palaceHere :hereList="hereList"></palaceHere>
            <palaceWait :waitListAll="waitListAll"></palaceWait>
        </div>
    </div>
</template>

<script>

    import header from "./components/palaceHeader/palaceHeader.vue";
    import here from "./components/palaceHere/palaceHere.vue";
    import wait from "./components/palaceWait/palaceWait.vue";
    import axios from "axios";

    export default {
        name: "palace",
        components: {
            palaceHeader: header,
            palaceHere: here,
            palaceWait: wait
        },
        data() {
            return {
                hereList: [],
                waitList: [],
                waitHotList: [],
                waitAroundList: [],
                waitListAll: []
            }
        },
        mounted () {
            axios.get("/static/index.json").then((res) => {
                this.hereList = res.data.data.hereList;
                this.waitList = res.data.data.waitList;
                this.waitHotList = res.data.data.waitHotList;
                this.waitAroundList = res.data.data.waitAroundList;
                this.waitListAll = [this.waitList,this.waitHotList,this.waitAroundList]
            })
        }
    }
</script>

<style scoped>
    #place{
        text-align: start;
        background-color: #fbdea3;
    }
    .palace-list{
        position: relative;
        margin: 0 10px;
        padding-bottom: 10px;
        color: #333;
    }

</style>

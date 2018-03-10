<template>
    <div class="day-wrap">
        <ul class="liContainer">
            <li v-for="item in list" >
                <img v-lazy="item" alt="">
                {{item}}
            </li>
        </ul>
        <div class="pageCon">
            <div class="mp-pagination">
                <div :class="{mpBtn: !pre, btnDisable: pre}" @click="handlePreClick">上一页</div>
                <span class="mp-page-num">{{currentPage}} / {{totalPage}}</span>
                <div :class="{mpBtn:!next , btnDisable: next}" @click="handleNextClick">下一页</div>
            </div>
            <div class="mp-page-text">去哪儿门票</div>
        </div>
    </div>
</template>

<script>

    import {mapActions, mapState, mapGetters} from 'vuex';
    export default {
        name : "day",
        data : function() {
            return {
                currentPage : 1,
                pre : true,
                next : false,
                list : []
            }
        },
        computed : {
            ...mapGetters({
                totalPage : 'mDay/totalPage',
                dataList : "mDay/currentList"
            })
        },
        mounted() {
            this.getData().then(( function(){
                this.list = this.dataList(this.currentPage);
                console.log(this.list)
            }.bind(this)));
        },
        methods: {
            ...mapActions({
                getData : 'mDay/getData'
            }),
            handlePreClick : function(){
                if(this.currentPage > 1){
                    if(this.currentPage === this.totalPage) {
                        this.next = !this.next;
                    }
                    this.currentPage -- ;
                    if(this.currentPage === 1){
                        this.pre = !this.pre;
                    }
                    this.list = this.dataList(this.currentPage);
                    document.documentElement.scrollTop = document.body.scrollTop = 500;
                }
            },
            handleNextClick : function(){
                if(this.currentPage < this.totalPage){
                    if(this.currentPage === 1){
                        this.pre = !this.pre;
                    }
                    this.currentPage ++
                    if(this.currentPage === this.totalPage) {
                        this.next = !this.next;
                    }
                    this.list = this.dataList(this.currentPage);
                    document.documentElement.scrollTop = 0;
                }
            }
        }
    }
</script>

<style lang="less">
    @import "./day.less";
    html,body{
        height: 1000px;
        background: orangered;
    }
    .liContainer{
        overflow: hidden;
    }
</style>

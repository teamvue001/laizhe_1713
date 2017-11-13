<template>

    <div>
      <indexHeader :comment="comment" :commentList="commentList"></indexHeader>
    </div>
</template>

<script>
    import axios from "axios";
    import Comment from "./ScenicSpotReview.vue";

    export default{
        name : "Comment",
        components: {
            indexHeader: Comment,
        },
        data() {
            return {
                comment :[],
                commentList : []
            }
        },
        mounted () {
            axios.get("/static/index.json").then((res) => {
               this.comment = res.data.data.comment;
               this.commentList = res.data.data.commentList;
            })
        }
    }

</script>

<style>


</style>

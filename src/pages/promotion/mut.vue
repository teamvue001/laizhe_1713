<template>
	<div>
	<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  		<router-link to="/" slot="left">
    	<mt-button icon="back">返回</mt-button>
  		</router-link>
 		 <mt-button icon="more" slot="right"></mt-button>
	</mt-header>

	<mt-navbar >
	  <mt-tab-item id="1">选项一</mt-tab-item>
	  <mt-tab-item id="2">选项二</mt-tab-item>
	  <mt-tab-item id="3">选项三</mt-tab-item>
	</mt-navbar>

	<!-- tab-container -->
	<mt-tab-container>
	  <mt-tab-container-item id="1">
	    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
	    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="3">
	    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
	  </mt-tab-container-item>
	</mt-tab-container>
	</div>

</template>

<script>

   
    export default {
        name : "day"
    }
</script>

<style >

</style>

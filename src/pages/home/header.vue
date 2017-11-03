<template>
  <header class="header">
      <a class="header-left">
        <i class="iconfont icon-qunawanxianjiantouzuo"></i>
      </a>
      <div class="header-title">
          <i class="iconfont icon-fangdajing1"></i>
          <span class="header-where">输入城市/景点/游玩主题</span>
      </div>
      <div class="header-right">
        <span class="header-Choose-city">
          <em class="nav-city">北京</em>
          <i class="iconfont icon-f11-copy"></i>
        </span>
      </div>
  </header>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .header {
      position: relative;
      width: 100%;
      height: .88rem;
      background: #00bcd4;
      text-align: center;
      color: #fff;
  }
  .header-left {
      float: left;
      width: .4rem;
      height: .88rem;
      line-height: .88rem;
      padding: 0 .2rem;
      font-size: .36rem;
      text-align: left;
      color: #fff;
  }
  .header-title{
      position: absolute;
      width: 68%;
      top: .14rem;
      left: .8rem;
      right: 1.28rem;
      line-height: .6rem;
      background: #fff;
      border-radius: .06rem;
      color: #ccc;
  }
  .header-right{
      float: right;
      width: 1.6rem;
      line-height: .87rem ;
  }
  .header-Choose-city{
      display: block;
      padding-left: .18rem;
      margin-right: 0!important;
      height: .87rem;
  }
  .nav-city{
      float: left;
      width: .85rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .icon-f11-copy{
        float: left;
        font-size: 0.5rem!important;
  }
  .icon-fangdajing1{
      position:absolute;
      left:0.1rem;
      top:0.04rem;
      font-size:0.8rem;
  }

</style>

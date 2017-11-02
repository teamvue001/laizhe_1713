<template>
  <div class="header">
    <a href="javascript:;" class="header-left"><</a>
    <div class="header-input">
      <a href="javascript:;" class="input-linkArea, link-area">
        <span class="placeholder">输入城市/景点/游玩主题</span>
      </a>
    </div>
    <div class="header-right">
      <a href="javascript:;" class="link-area">
        <span class="city">北京<i class="downarrow"></i></span>

      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head'
  }
</script>

<style scoped>
  @import "./reset.css";
  .header{
    position: relative;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    width: 100%;
    height: .88rem;
    background: #00bcd4;
    text-align: center;
    color: #fff;
  }
  .header .header-left{
    display: inline-block;
    width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .36rem;
    text-align: left;
  }
  .header .header-input{
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    position: relative;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
  }
  .header .input-linkArea, .link-area{
    display: block;
    height: 100%;
    color: #e4e7ea;
    text-decoration: none;

  }
  .placeholder{
    display: inline-block;
    overflow: hidden;
    position: absolute;
    left: .3rem;
    top: 0;
    width: 3.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header-right {
    height: 100%;
  }
  .header-right .link-area{
    display: inline-block;
    line-height: .88rem;
    margin-right: .04rem;
    color: #fff;
  }
  .header-right .city{
    padding: 0 .22rem;
  }

  .downarrow{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid white;

  }
</style>

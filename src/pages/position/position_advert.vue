<template>
	<div>
      <ul class="position">
        <li class="positionAddress positionLi">
          <p class="posiText">
            <i class="iconfont icon-dizhi"></i>
            附近</p>
        </li>
        <li class="positionPrice positionLi">
          <p class="posiText">
            <i class="iconfont icon-duoyuyan"></i>
            5折泡温泉</p>
        </li>
      </ul>
      <ul class="advert">
        <li class="advertPrice advertLi">
          <a href="#"></a>
        </li>
        <li class="advertTicket advertLi"></li>
      </ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
  .position{
    width: 100%;
    height: 1rem;
    border:0;
    border-top: 1px solid #eee;
    margin-bottom: 0.2rem;
    background: #fff;
  }
  .positionLi{
    float: left;
    width: 50%;
    height: 1rem;
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 1rem;
  }
  .positionAddress{
    width: 49.6%;
    border-right: 1px solid #eee;
  }
  .posiText{
    float: left;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.28rem;
  }
  .advert{
    width: 100%;
    height: 1.4rem;
    background: #fff;
    border:0;
  }
  .advertLi{
    float:left;
    width:50%;
    height:1.4rem;
  }
  .advertPrice{
    width:49.6%;
    border-right: 1px solid #eee;
    background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;background-size:auto 100%;
  }
  .advertTicket{
    background:url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;background-size:auto 100%;
  }
</style>

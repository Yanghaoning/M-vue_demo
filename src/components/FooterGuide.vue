<template>
  <div class="container">
    <van-tabbar route active-color="#1abd9c" inactive-color="#adadad">
      <van-tabbar-item replace to="/" icon="wap-home">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopCart" icon="shopping-cart">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/myWorld" icon="friends">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "FooterGuide"
  }
</script>

<style lang="less" scoped>
.container{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
  /deep/.van-tabbar-item__icon{
    font-size: 0.65rem;
  }
  /deep/.van-tabbar{
    box-shadow: -1px -1px 3px 0px rgba(0, 0, 0, 0.05);
  }
</style>

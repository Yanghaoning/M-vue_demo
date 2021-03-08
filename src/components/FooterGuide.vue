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
</style>

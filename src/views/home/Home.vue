<template>
  <div class="home">
    <xg-video></xg-video>
  </div>
</template>

<script>

  import VideoContent from "../../components/videos";
  import XgVideo from "../../components/xgVideo";
  export default {
    name: 'home',
    components: {XgVideo, VideoContent},
  }
</script>
<style lang="less">

</style>

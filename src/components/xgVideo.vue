<template>
  <div id="mse"></div>
</template>

<script>
import Player from 'xgplayer';
export default {
  name: "xgVideo",
  mounted() {
    this.$nextTick(() => {
      let player =  new Player({
        id: 'mse',
        url: 'https://shujutong.oss-cn-north-2.unicloudsrv.com/20220602/359868f29e8448929280d02f090d07df.mp4',
        'x5-video-orientation': 'portraint',
        'x5-video-player-fullscreen': false,
        rotateFullscreen: true,
        width: '100%',
        height:'211px',
        playbackRate: [0.5, 0.75, 1, 1.5, 2],//倍速
        videoInit: true,
        definitionActive: 'click'
      });
      player.emit('resourceReady', [{name: '高清', url: 'url1'}, {name: '超清', url: 'url2'}]);
    })
  }
}
</script>

<style scoped>
#mse{
  z-index: 10000;
}
</style>

<template>
  <div class="video-content">
    <div class="video-player-content">

      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    id="video_content"
                    :playsinline="true"
                    :options="playerOptions">
      </video-player>

    </div>
  </div>
</template>

<script>
//main.js 与 组件中都要引用
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: "VideoContent",
  props:{
    //播放源地址参数
    url:{
      type:String,
      default:'',
    },
  },
  data() {
    return {
      //播放器相关参数
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          src: 'https://shujutong.oss-cn-north-2.unicloudsrv.com/20220602/359868f29e8448929280d02f090d07df.mp4' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  components:{
    videoPlayer,
  },
  mounted() {

  },
  methods:{
    //响应式改变播放源地址
    // changeVideoSrc(){
    //   this.playerOptions.sources[0]['src'] = 'https://www.liujie006.cn/'+this.url
    // }
  },
}
</script>

<style  lang="less">
.video_content{
  transform: rotate(90deg) !important;
}
.video-js.vjs-fluid{
  height: 100%;
  .vjs-tech{
    object-fit: cover;
  }
}
.dark_cover{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: -1;
}
</style>

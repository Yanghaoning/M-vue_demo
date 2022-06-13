import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/reset.css'
import 'lib-flexible'
import './vant/index'
import http from './utils/request';
//播放器相关
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)
//播放器相关

Vue.config.productionTip = false
Vue.prototype.$http = http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

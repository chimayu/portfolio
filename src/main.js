import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// FontAwesome ここから
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive, faPen, faCat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(
  faCoffee,
  faChild,
  faTwitter,
  faCircle,
  faArchive,
  faComment,
  faGithub,
  faFacebook,
  faPen,
  faCat
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
// FontAwesome ここまで

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
// import VueAxios from 'vue-axios'

// register the plugin on vue
import Toasted from 'vue-toasted';
 
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUser,faRectangleList,faEye,faEyeSlash,faSearch,faPlus,faCirclePlus)


Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

var toastOptions = {
  'duration' : 3000,
  'position' : 'bottom-right'
}
Vue.use(Toasted,toastOptions)

Vue.use({
  install (Vue) {
    Vue.prototype.axios = axios.create({
      // baseURL: 'http://localhost:8000/api/'
      baseURL: 'https://cdaapi.000webhostapp.com/api/'
    })
  }
})



new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

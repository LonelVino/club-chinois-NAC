// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.less'
import '@/styles/index.scss' // global css
import { i18n } from '@/utils/i18n.js'
import { Trans } from '@/utils/Translation.js'

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import ModalWizard from 'vue-modal-wizard'
import ImageShadow from 'vue-image-shadow'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(SequentialEntrance);
Vue.use(ModalWizard)
Vue.component('image-shadow', ImageShadow)
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { 
    App,
  },
  template: '<App/>',
  store
})

import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  UserList: [111,222,333], //lsit of users
  themeObj: 0, //Theme
  aboutmeObj:'',//Information
  host:"http://"+window.location.host+"/port/",// the api route
  keywords:'',// key words
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') +'"'
}

export default new Vuex.Store({
    state,
})

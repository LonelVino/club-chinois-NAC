import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    UserList: [111,222,333], //lsit of users
    themeObj: 0, //Theme
    aboutmeObj:'',//Information
    host:"http://"+window.location.host+"/port/",// the api route
    keywords:'',// key words
    errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') +'"',
    form: {}
  },
  getters: {
  
  },
  mutations: {
    SET_FORM(s, val) {
      s.form = val
    }
  },
  actions: {
    setform({commit}) {
      commit('SET_FORM')
    }
  }
})
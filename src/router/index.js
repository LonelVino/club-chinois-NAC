import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		if (savePosition) {
			return savePosition;
		} else {
            var top;
            if (window.innerWidth >= 700) {
                 top = 0
            } else {
                 top = 0
            }
			return {
				x: 0,
				y: top
			}
		}
	},
	routes: [{
			path: '/',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {auth: true},
			name: 'Home'
		}, //首页
		{
			path: '/Home',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {auth: true},
			name: 'Home'
		}, //首页
		{
			path: '/event_1',
			component: resolve => require(['@/pages/Activities/NouvelAn/event_1.vue'], resolve),
			meta: {auth: true},
			name: 'Event_1'
		},
		{
			path: '/Zodiac',
			component: resolve => require(['@/pages/Zodiac/index.vue'], resolve),
			meta: {auth: true},
			name: 'Zodiac'			
		}
		// {
		// 	path: '/world-week',
		// 	component: resolve => require(['../pages/Activities/WorldWeek/index.vue'], resolve),
		// 	meta: {auth: true},
		// 	name: 'WorldWeek'
		// },
		// {
		// 	path: '/Message',
		// 	component: resolve => require(['../pages/Message.vue'], resolve),
		// 	meta: {auth: true},
		// 	name: 'Message'
		// }, //留言板
		// {
		// 	path: '/Aboutme',
		// 	component: resolve => require(['../pages/Aboutme.vue'], resolve),
		// 	meta: {auth: true},
		// 	name: 'Aboutme'
		// }, //关于
		// {
		// 	path: '/Login',
		// 	component: resolve => require(['../pages/Login.vue'], resolve),
		// 	meta: {auth: false},
		// 	name: 'Login'
		// }, //注册登录
		// {
		// 	path: '/UserInfo',
		// 	component: resolve => require(['../pages/UserInfo.vue'], resolve),
		// 	meta: {auth: true},
		// 	name: 'UserInfo'
		// }, //用户个人中心
		
	]
})

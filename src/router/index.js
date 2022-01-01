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
			name: 'Zodiac',	
		},
		{
			path: '/Zodiac/Rat',
			component: resolve => require(['@/pages/Zodiac/Animals/Rat.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacRat',	
		},
		{
			path: '/Zodiac/Ox',
			component: resolve => require(['@/pages/Zodiac/Animals/Ox.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacOx',	
		},
		{
			path: '/Zodiac/Tiger',
			component: resolve => require(['@/pages/Zodiac/Animals/Tiger.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacTiger',	
		},
		{
			path: '/Zodiac/Rabbit',
			component: resolve => require(['@/pages/Zodiac/Animals/Rabbit.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacRabbit',	
		},
		{
			path: '/Zodiac/Dragon',
			component: resolve => require(['@/pages/Zodiac/Animals/Dragon.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacDragon',	
		},
		{
			path: '/Zodiac/Snake',
			component: resolve => require(['@/pages/Zodiac/Animals/Snake.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacSnake',	
		},
		{
			path: '/Zodiac/Horse',
			component: resolve => require(['@/pages/Zodiac/Animals/Horse.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacHorse',	
		},
		{
			path: '/Zodiac/Goat',
			component: resolve => require(['@/pages/Zodiac/Animals/Goat.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacGoat',	
		},
		{
			path: '/Zodiac/Monkey',
			component: resolve => require(['@/pages/Zodiac/Animals/Monkey.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacMonkey',	
		},

		{
			path: '/Zodiac/Rooster',
			component: resolve => require(['@/pages/Zodiac/Animals/Rooster.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacRooster',	
		},
		{
			path: '/Zodiac/Dog',
			component: resolve => require(['@/pages/Zodiac/Animals/Dog.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacDog',	
		},
		{
			path: '/Zodiac/Pig',
			component: resolve => require(['@/pages/Zodiac/Animals/Pig.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacPig',	
		},

		
	]
})

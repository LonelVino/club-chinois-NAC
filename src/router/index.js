import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import { Trans } from '@/utils/Translation'


export const constRoutes = [
	{
	path: '/:lang',
    component: {
      	template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
	children: [
		{
			path: '',
			component: resolve => require(['../pages/Home/Home.vue'], resolve),
			meta: {auth: true},
			name: 'Home'
		}, //首页
		{
			path: 'Home',
			component: resolve => require(['../pages/Home/Home.vue'], resolve),
			meta: {auth: true},
			name: 'Home'
		}, //首页
		{
			path: 'Zodiac',
			component: resolve => require(['@/pages/Zodiac/index.vue'], resolve),
			meta: {auth: true},
			name: 'Zodiac',	
		}, // Zodiac
		{
			path: 'Calendar',
			component: resolve => require(['@/pages/Calendar.vue'], resolve),
			meta: {auth: true},
			name: 'Calendar',	
		}, // Calendar

		// ----------------------- Events ----------------------- 
		{
			path: 'event_1',
			component: resolve => require(['@/pages/Activities/NouvelAn/events/event_1.vue'], resolve),
			meta: {auth: true},
			name: 'Event_1'
		},
		{
			path: 'event_2',
			component: resolve => require(['@/pages/Activities/NouvelAn/events/event_2.vue'], resolve),
			meta: {auth: true},
			name: 'Event_2'
		},
		{
			path: 'event_3',
			component: resolve => require(['@/pages/Activities/NouvelAn/events/event_3.vue'], resolve),
			meta: {auth: true},
			name: 'Event_3'
		},
		{
			path: 'event_4',
			component: resolve => require(['@/pages/Activities/NouvelAn/events/event_4.vue'], resolve),
			meta: {auth: true},
			name: 'Event_4'
		},
		{
			path: 'event_5',
			component: resolve => require(['@/pages/Activities/NouvelAn/events/event_5.vue'], resolve),
			meta: {auth: true},
			name: 'Event_5'
		},

		// ----------------------- Traditions -----------------------

		{
			path: 'Greetings',
			component: resolve => require(['@/pages/Traditions/Greetings.vue'], resolve),
			meta: {auth: true},
			name: 'Greetings'
		},
		{
			path: 'Taboos',
			component: resolve => require(['@/pages/Traditions/Taboos.vue'], resolve),
			meta: {auth: true},
			name: 'Taboos'
		},

		{
			path: 'Decorations',
			component: resolve => require(['@/pages/Traditions/Decorations.vue'], resolve),
			meta: {auth: true},
			name: 'Decorations'
		},
		{
			path: 'Food',
			component: resolve => require(['@/pages/Traditions/Food.vue'], resolve),
			meta: {auth: true},
			name: 'Food'
		},
		{
			path: 'Snacks',
			component: resolve => require(['@/pages/Traditions/Snacks.vue'], resolve),
			meta: {auth: true},
			name: 'Snacks'
		},
		{
			path: 'Desserts',
			component: resolve => require(['@/pages/Traditions/Desserts.vue'], resolve),
			meta: {auth: true},
			name: 'Desserts'
		},
		{
			path: 'lantern-festival',
			component: resolve => require(['@/pages/Traditions/LanternFestival.vue'], resolve),
			meta: {auth: true},
			name: 'LanternFestival'
		},

		// ----------------------- Zodiac Animals ----------------------- 
		{
			path: 'Zodiac/Rat',
			component: resolve => require(['@/pages/Zodiac/Animals/Rat.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacRat',	
		},
		{
			path: 'Zodiac/Ox',
			component: resolve => require(['@/pages/Zodiac/Animals/Ox.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacOx',	
		},
		{
			path: 'Zodiac/Tiger',
			component: resolve => require(['@/pages/Zodiac/Animals/Tiger.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacTiger',	
		},
		{
			path: 'Zodiac/Rabbit',
			component: resolve => require(['@/pages/Zodiac/Animals/Rabbit.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacRabbit',	
		},
		{
			path: 'Zodiac/Dragon',
			component: resolve => require(['@/pages/Zodiac/Animals/Dragon.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacDragon',	
		},
		{
			path: 'Zodiac/Snake',
			component: resolve => require(['@/pages/Zodiac/Animals/Snake.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacSnake',	
		},
		{
			path: 'Zodiac/Horse',
			component: resolve => require(['@/pages/Zodiac/Animals/Horse.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacHorse',	
		},
		{
			path: 'Zodiac/Goat',
			component: resolve => require(['@/pages/Zodiac/Animals/Goat.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacGoat',	
		},
		{
			path: 'Zodiac/Monkey',
			component: resolve => require(['@/pages/Zodiac/Animals/Monkey.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacMonkey',	
		},

		{
			path: 'Zodiac/Rooster',
			component: resolve => require(['@/pages/Zodiac/Animals/Rooster.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacRooster',	
		},
		{
			path: 'Zodiac/Dog',
			component: resolve => require(['@/pages/Zodiac/Animals/Dog.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacDog',	
		},
		{
			path: 'Zodiac/Pig',
			component: resolve => require(['@/pages/Zodiac/Animals/Pig.vue'], resolve),
			meta: {auth: true},
			name: 'ZodiacPig',	
		}
	]
	},
	{
		// Redirect user to supported lang version.
		path: '*',
		redirect (to) {
		return Trans.getUserSupportedLang()
		}
  	}
]

export default new Router({
	mode: 'history',
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
	
	routes: constRoutes
})

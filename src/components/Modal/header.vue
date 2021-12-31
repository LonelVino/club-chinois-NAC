<!-- 头部公用 -->
<template>
<div class="header">
	<div class="headBack">
		<header-nav/>
	</div>
	<header-img/>
</div>
</template>
<script>
import { Typeit } from '@/utils/plug.js'

import HeaderNav from './headerWidgets/headerNav'
import HeaderImg from './headerWidgets/headerImg.vue'

export default {
	data() { //选项 / 数据
		return {

		}
	},
	components: { //定义组件
		HeaderImg,
		HeaderNav,
	},
	watch: {

	},
	
	watch: {

	},
	created() { //生命周期函数

	},
	mounted() { //页面元素加载完成

	},
	methods: { //事件处理器

	},
}
</script>



<style>

/*********头部导航栏********/

/*头部导航栏盒子*/
.header {
	width: 100%;
	margin-bottom: 2.5vh;
}
.headBack {
	width: 100%;
	background: rgba(40, 42, 44, 0.6);
	/*margin-bottom:30px;*/
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 100;
}

.headBox li.is-active {
	/*background: #48456C;*/
	background: rgba(73, 69, 107, 0.7);
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
	border-bottom: none!important;
}

</style>

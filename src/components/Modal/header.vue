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



<style lang='scss' scoped>
@import "@/styles/index.scss";

.headBox li.is-active {
	/*background: #48456C;*/
	background: transparent;
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
	border-bottom: none!important;
}

</style>

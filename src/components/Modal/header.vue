<!-- 头部公用 -->
<template>
<div class="header">
	<div class="headBack">
		<header-nav/>
		<div class="lang-btn">
			<lang-btn></lang-btn>
		</div>
	</div>
	<header-img/>
</div>
</template>
<script>
import { Typeit } from '@/utils/plug.js'

import langBtn from '@/components/Modal/langBtn.vue'
import HeaderNav from './headerWidgets/headerNav'
import HeaderImg from './headerWidgets/headerImg.vue'

export default {
	
	components: { //定义组件
		HeaderImg,
		HeaderNav,
		'lang-btn': langBtn
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
.lang-btn {
	display: flex;
	justify-content: flex-end;
	background: transparent;
}
.headBox li.is-active {
	/*background: #48456C;*/
	background: transparent;
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
	border-bottom: none!important;
}

</style>

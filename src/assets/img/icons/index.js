// 全局引入 svgIcon 组件
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

Vue.component('svg-icon', SvgIcon)

// 让 icons/svg下面的图片自动导入，而不是每次手动导入
const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
<!-- 留言板 -->
<template>
<div>
	<wbc-nav></wbc-nav>
	<div class="container">
		<el-row :gutter="30">
			<el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
				<div class="tMSGbox tcommonBox">
					<header>
						<h1>
							<a href="#/DetailShare" target="_blank">留言板</a>
						</h1>
					</header>
				</div>
				<wbc-message></wbc-message>
			</el-col>
			<el-col :sm="24" :md="8">
				<wbc-rightlist></wbc-rightlist>
			</el-col>
		</el-row>
	</div>
	<wbc-footer></wbc-footer>
</div>
</template>

<script>
import header from '../components/Modal/header.vue'
import footer from '../components/Modal/footer.vue'
import temRightlist from '../components/Modal/temRightlist.vue'
import temMessage from '../components/temMessage.vue'

export default {
	name: 'Message',
	data() { //选项 / 数据
		return {

		}
	},
	methods: { //事件处理器

	},
	components: { //定义组件
		'wbc-nav': header,
		'wbc-message': temMessage,
		'wbc-rightlist': temRightlist,
		'wbc-footer': footer
	},
	created() { //生命周期函数

	}
}
</script>

<style>
.tcommonBox header section{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.tMSGbox section h2{
	font-weight: bold;
	line-height: 24px;
}
.tMSGbox section div{
	margin:15px 0;
}
@media screen and (max-width: 800px) {
	.tMSGbox {
		transition: 3s;
		transform: scale(0.9);
	}
	.container{
		margin-left: -5vw;
	}
}
@media screen and (max-width: 600px) {
	.tMSGbox {
		transition: 3s;
		transform: scale(0.9);
	}
	.container{
		margin-left: 4vw;
	}
}
</style>

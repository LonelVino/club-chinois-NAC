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
							<a href="#/DetailShare" target="_blank">
								留言板
							</a>
						</h1>
					</header>
					<section>
						<h2>走过路过不要错过！交流、咨询、吐槽、感叹、勾搭都在这里，尽情畅谈！</h2>
						<div class="">
							<img src="static/img/timg.jpg" class="maxW"  alt="">
						</div>
					</section>
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
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temRightlist from '../components/temRightlist.vue'
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
.tMSGbox section h2{
	font-weight: bold;
	line-height: 24px;
}
.tMSGbox section div{
	margin:15px 0;
}
</style>

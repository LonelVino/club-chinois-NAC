<template>
  <div class="cards">
    <div class="header">
		<div class="headBack">
			<wbc-nav></wbc-nav>
		</div>
	</div>
	<div class="card_container">
		<div id="card">
			<div class="activity-details">  
				<h1>Activity 1</h1>
				<ul>
					<li>
						<i class="el-icon-location" aria-hidden="true"></i>
						<p>Location</p>
					</li>
					<li>
						<i class="el-icon-date" aria-hidden="true"></i>
						<p>Date</p>
					</li>
					<li>
						<i class="el-icon-alarm-clock" aria-hidden="true"></i>
						<p>Time</p>
					</li>
					<li>
						<i class="el-icon-school" aria-hidden="true"></i>
						<p>Organization</p>
					</li>
				</ul>
				<p class="information">"Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas."</p>

				<div class="control">
					<button class="btn">
						<span class="price">Join</span>
						<span class="shopping-cart"><i class="el-icon-circle-plus" aria-hidden="true"></i></span>
						<span class="buy">Shot Gun</span>
					</button>
				</div>
			</div>
				
			<div class="product-image">
				<img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
				<div class="info">
				<h2> Details</h2>
				<p>Details</p>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Home',
    data() { //选项 / 数据
      return {
		  
      }
    },
    created() {
      
    },
    methods: { //事件处理器
        
    },
    components: { //定义组件
        'wbc-nav':header,
    },
    created() { //生命周期函数

    }
}
</script>

<style lang="scss" scoped>

@import "@/styles/index.scss";
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap');
@import '@/styles/event-detail.scss'
</style>
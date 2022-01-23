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
				<div class="header">
					<div class="intro">
						<h1>{{$t('Events.Film.title')}}</h1>
						<ul>
							<li>
								<i class="el-icon-location" aria-hidden="true"></i>
								<p><span v-html="$t('Events.Film.pos')"></span></p>
							</li>
							<li>
								<i class="el-icon-date" aria-hidden="true"></i>
								<p>{{$t('Events.Film.date')}}</p>
							</li>
							<li>
								<i class="el-icon-alarm-clock" aria-hidden="true"></i>
								<p>{{$t('Events.Film.time')}}</p>
							</li>
							<!-- <li>
								<i class="el-icon-school" aria-hidden="true"></i>
								<p>Organisé par <a herf='https://linkcs.fr/association/club-chinois-61'>Club Chinois</a></p>
							</li> -->
							<li>
								<i class="el-icon-help" aria-hidden="true"></i>
								<p>{{$t('Events.Film.feature')}}</p>
							</li>
						</ul>
					</div>
					<div class="product-image">
						<img src="https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/film.jpg'" alt="">
					</div>
				</div>
				
				<div class="text">
					<p class="information"><span v-html="$t('Events.Film.info_1')"></span></p>
					<p class="information">{{$t('Events.Film.info_2')}}</p>
				</div>
				<!-- <div class="control">
					<button class="btn" @contextmenu="handler($event)"
					onclick="window.location.href='https://forms.viarezo.fr/paps/s2gpgq'">
						<span class="price">Join</span>
						<span class="shopping-cart"><i class="el-icon-circle-plus" aria-hidden="true"></i></span>
						<span class="buy">Shot Gun</span>
					</button>
				</div> -->
				<div class="mobile-image">
					<img src="https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/film.jpg'" alt="">
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
        handler: function(e) {
			//do stuff
			e.preventDefault();
		}
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
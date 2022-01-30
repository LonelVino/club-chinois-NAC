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
						<h1>{{$t('Events.Ceremony.title')}}</h1>
						<ul>
							<li>
								<i class="el-icon-location" aria-hidden="true"></i>
								<p><span v-html="$t('Events.Ceremony.pos')"></span></p>
							</li>
							<li>
								<i class="el-icon-date" aria-hidden="true"></i>
								<p>{{$t('Events.Ceremony.date')}}</p>
							</li>
							<li>
								<i class="el-icon-alarm-clock" aria-hidden="true"></i>
								<p>{{$t('Events.Ceremony.time')}}</p>
							</li>
							<!-- <li>
								<i class="el-icon-school" aria-hidden="true"></i>
								<p>Organisé par <a herf='https://linkcs.fr/association/club-chinois-61'>Club Chinois</a></p>
							</li> -->
							<li>
								<i class="el-icon-help" aria-hidden="true"></i>
								<p>{{$t('Events.Ceremony.feature')}}</p>
							</li>
							<div class="control">
								<button class="btn" @contextmenu="handler($event)"
								onclick="window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeJOYMi2hXicoI8zbmIonrimq-uGruC-8r1s1rWz8fAZC8oSQ/viewform?usp=sf_link'">
									<span class="shopping-cart"><i class="el-icon-circle-plus" aria-hidden="true"></i></span>
									<span class="buy">Questionnaire</span>
								</button>
							</div>
						</ul>
					</div>
					<div class="product-image">
						<img src="https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/ceremony.jpg" alt="">
					</div>
				</div>
				
				
				<div class="text">
					<p class="information"><span style='font-weight: bold' v-html="$t('Events.Ceremony.info_1')"></span></p>
					<p class="information">{{$t('Events.Ceremony.info_2')}}</p>
				</div>
			
				<div class='ceremony-details'>
					<img src="https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2.3/ClubChinois/ceremony_details.jpg" alt="">
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
					<img src="https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/ceremony.jpg" alt="">
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
@import '@/styles/event-detail.scss';


.ceremony-details {
	margin: 2em;
	margin-right: 3em;
}

@media (max-width: 600px) {
	.ceremony-details {
		margin: 0em;
		margin-top: 1em;
	}
}
</style>
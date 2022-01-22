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
						<h1>[NAC] Barspé Ravioli Chinois</h1>
						<ul>
							<li>
								<i class="el-icon-location" aria-hidden="true"></i>
								<p>Terrasse Michelin</p>
							</li>
							<li>
								<i class="el-icon-date" aria-hidden="true"></i>
								<p>Lundi 31 Janvier 2022</p>
							</li>
							<li>
								<i class="el-icon-alarm-clock" aria-hidden="true"></i>
								<p>19h00 - 21h00</p>
							</li>
							<!-- <li>
								<i class="el-icon-school" aria-hidden="true"></i>
								<p>Organisé par <a herf='https://linkcs.fr/association/club-chinois-61'>Club Chinois</a></p>
							</li> -->
							<li>
								<i class="el-icon-help" aria-hidden="true"></i>
								<p>Festival, Repas | Culinaire, Festif, International</p>
							</li>
						</ul>
					</div>
					<div class="product-image">
						<img src="https://cdn-pop.viarezo.fr/static/linkcs/images/d116392f5530a035201dff4e7fc5a65ce387c4d71fb90517ecbf1228ef5ef4b7.jpeg" alt="">
						<div class="info">
						<h2> Details</h2>
						<p>Details</p>
						</div>
					</div>
				</div>
				
				<div class="text">
					<p class="information">Le Nouvel An Chinois(NAC) est la fête la plus importante pour tous les Chinois. Le ClubChinois vous invite à vivre ensemble les célébrations traditionnelles, avec 7 événements pour vous apporter un voyage culturel!</p>
					<p class="information"><a href="https://forms.viarezo.fr/paps/s2gpgq">Shotgun</a> dès ce dimanche, masque obligatoire.</p>
					<p class="information">Le ravioli est un plat que les Chinois doivent manger à la veille du Nouvel An. Le ClubChinois vous présente un barspé de ravioli pour vous faire gôuter cette gastronomie les raviolis chinois. C'est une bonne occasion de découvrir cette spécialité! Dans ce barspé, nous vous proposons un choix de ravioli viande (bœuf et carotte) ou ravioli végétarien (œuf et courgette). Chaque plat contient 10 raviolis pour seulement 3 euros ! La place sera limitée à 56 personnes. Allez vite au <a href="https://forms.viarezo.fr/paps/s2gpgq">shotgun</a> qui commence dès ce dimanche. Après la réservation, veuillez retirer vos raviolis à la Terrase Michelin le soir du 31/1 à l'heure de votre choix. N'oubliez pas d'apporter votre lunch box!</p>
				</div>
				<div class="control">
					<button class="btn" @contextmenu="handler($event)"
					onclick="window.location.href='https://forms.viarezo.fr/paps/s2gpgq'">
						<span class="price">Join</span>
						<span class="shopping-cart"><i class="el-icon-circle-plus" aria-hidden="true"></i></span>
						<span class="buy">Shot Gun</span>
					</button>
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
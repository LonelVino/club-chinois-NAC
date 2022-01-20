<template>
  <div class="headImgBox">
		<div class="scene">
			<div><span id="luke"></span></div>
		</div>
		<candle class='candle'/>
	</div>
</template>

<script>
import Candle from '@/components/Modal/headerWidgets/candle.vue'
export default {
    name: 'headerImg',
	components: {
		Candle
	},
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
/******** The header texts *********/
</style>

<style lang="scss" scoped>

/*头部背景图*/
$lightsOnBg: #f8a538;
$lightsOutBg: #fd4141;

.headImgBox {
	height: 50vh;
	position: relative;
	width: 100%;
	background-color:$lightsOnBg;
  	animation:change-background 3s infinite linear;

	.scene {
		width: 100%;
		/*height:300px;*/
		text-align: center;
		font-size: 100px;
		font-weight: 200;
		color: #fff;
		position: absolute;
		left: 0;
		margin-top: 10vh;
		font-family: 'Sigmar One', Arial;
		text-shadow: 0 2px 2px #47456d;
	}
	.scene span {
		transform: matrix(1, 0, 0, 1, 0, 0);
		-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
		text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
	}
}

@media screen and (max-width: 540px)  {
	.headImgBox {
		height: 20vh;
		.scene { 
			margin-top: -5vh;
		}
		.candle {
			margin-top: -20vh;
			transform: scale(0.8);
		}
	}
}
</style>
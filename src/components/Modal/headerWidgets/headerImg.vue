<template>
    <div class="headImgBox">
		<div class="scene">
			<div><span id="luke"></span></div>
		</div>
		<candle class='candle'/>
		<div class="h-information">
			<a href="#/Aboutme">
				<img :src="this.$store.state.themeObj.head_portrait ? this.$store.state.themeObj.head_portrait : 'static/img/avatar_1.jpg'" alt="">
            </a>
			<h2 class="h-description" style="font-size: 35px">
				<ul class= 'check-texts'>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>C</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>L</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>U</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>B</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>C</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>H</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>I</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>N</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>O</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>I</div>
					</li>
					<li>
						<input type="checkbox" />
						<div class='sub-header'>S</div>
					</li>
				</ul>
			</h2>
		</div>
	</div>
</template>

<script>
import Candle from '@/components/Modal/headerWidgets/candle.vue'
export default {
    name: 'headerImg',
	components: {
		Candle
	}
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
/******** The header texts *********/

.check-texts {
  position: relative;
  display: flex;
  flex-direction: row;
}

.check-texts  li {
  list-style: none;
}

label {
  position: relative;
}

.check-texts  input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 80px;
  width: 80px;
  z-index: 100;
}

.sub-header {
  position: relative;
  height: 80px;
  width: 80px;
  background: #18191f;
  color: #555;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 20px;
  box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.05),
    4px 4px 6px rgba(0, 0, 0, 0.2),
    inset -1px -1px 4px rgba(255, 255, 255, 0.05),
    inset 1px 1px 1px rgba(0, 0, 0, 0.1);
}

/* div:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 75px;
  height: 38px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
} */

input[type="checkbox"]:checked ~ .sub-header {
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.05),
    inset 4px 4px 6px rgba(0, 0, 0, 0.2);
  color: yellow;
  text-shadow: 0 0 15px yellow, 0 0 25px yellow;
  animation: glow 5s linear infinite;
}

@keyframes glow {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>

<style lang="scss" scoped>

/*头部背景图*/
$lightsOnBg: #FEF4AD;
$lightsOutBg: #F8AE39;
.headImgBox {
	height: 650px;
	position: relative;
	width: 100%;
	background-color:$lightsOnBg;
  	animation:change-background 3s infinite linear;
	margin-bottom: 90px;
	.scene {
		width: 100%;
		/*height:300px;*/
		text-align: center;
		font-size: 100px;
		font-weight: 200;
		color: #fff;
		position: absolute;
		left: 0;
		top: 160px;
		font-family: 'Sigmar One', Arial;
		text-shadow: 0 2px 2px #47456d;
	}
	.scene span {
		transform: matrix(1, 0, 0, 1, 0, 0);
		-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
		text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
	}
}


.h-information {
	align-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	margin: auto;
	position: relative;
	top: 480px;
	padding: 40px 0;
	font-size: 16px;
	opacity: 0.98;
	background: rgba(230, 244, 249, 0.8);
	border-radius: 5px;
	z-index: 1;
	animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out;
}

.h-description {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	align-items: center;
}
/* @-webkit-keyframes b {
	0% {
		-webkit-transform: translateY(90px);
		transform: translateY(90px);
	}
	80% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}
	90% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
} */

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes b {
	0% {
		-webkit-transform: translateY(90px);
		transform: translateY(90px);
	}
	80% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}
	90% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}

.h-information img {
	width: 100px;
	height: 100px;
	border-radius: 100%;
	transition: all 1s ease-in-out;
	-webkit-transition: all 1s ease-in-out;
	object-fit: cover;
	animation: rotation 5s infinite ease-in-out;
}

.h-information img:hover {
	/* transform: translateY(20); */
}

.h-information h2 {
	margin-top: 20px;
	font-size: 18px;
	font-weight: 700;
	/*font-family: 'Sigmar One';*/
}
.h-information h2  a{
	background: linear-gradient(to right, #DF2050, #48456D);
	-webkit-background-clip: text;
	color: transparent;
}

.saying:after {
	content: "|";
	font-family: Arial, sans-serif;
	font-size: 1em;
	/*line-height: 0;*/
	display: inline-block;
	vertical-align: baseline;
	opacity: 1;
	text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
	animation: caret 500ms infinite;
}

@keyframes caret {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}
@keyframes change-background
{
  0%,59%,98%,100%{
    background:$lightsOnBg;
  }
  61%,97%
  {
    background:$lightsOutBg;
  }
 
}
</style>
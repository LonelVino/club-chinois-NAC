<template>
  <div class="snow-btn">
		<div class="btn">
      <div class="shop-now">Shot Gun</div>
      <div class="snowflake-grid to-left">
        <div class="snowflake-item border-bottom border-right">
          <div class="sub-items border-right border-bottom pull-down">
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-bottom border-left">
          <div
          class="sub-items border-right border-bottom r-90 pull-down-right"
          >
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-right">
          <div class="sub-items border-right border-bottom r-270 pull-right">
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-left">
          <div class="sub-items border-right border-bottom r-180 pull-left">
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
      </div>
      <div class="snowflake-grid to-right">
        <div class="snowflake-item border-bottom border-right">
          <div class="sub-items border-right border-bottom pull-down">
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-bottom border-left">
          <div
          class="sub-items border-right border-bottom r-90 pull-down-right"
          >
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-right">
          <div class="sub-items border-right border-bottom r-270 pull-right">
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
        <div class="snowflake-item border-top border-left">
          <div class="sub-items border-right border-bottom r-180 pull-left">
          <div class="m-w-15 m-h-15 border-right border-bottom m-3"></div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>


<style lang="scss" scoped>
$lightsOnBg: #f8a538;
$lightsOutBg: #fd4141;
.snow-btn {
  display: flex;
  flex-direction: row;
	align-items: center;
  justify-content: center;
	width: 100%;
	margin: auto;
	position: relative;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 220px;
  height: 60px;
  
  background-color: #b80000;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
  color: rgba(245, 246, 247, 0.945);
  transition: all 0.3s;
  position: relative;

  text-align: center;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 0 6px 30px -10px rgba(#CCCCCC, 1);
  
  &:hover {
    transform: translateX(5px) translateY(-7px);
  }
}

.shop-now {
  position: relative;
  .santa-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    top: -17px;
    right: -20px;
    transform: rotate(14deg);
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.snowflake-grid {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50px;
  gap: 5px;

  width: 100px;
  transform: scale(0.4);
  div {
    border-radius: 5px;
  }
  
  .snowflake-item {
    position: relative;
  }
}

.to-left {
  position: absolute;
  top: -4px;
  left: -35px;
  animation: swing 3s infinite;
  div {
    animation: flash 3s infinite;
  }
}

.to-right {
  position: absolute;
  top: -25px;
  right: -35px;
  animation: swing 2.5s infinite;
  div {
    animation: flash 2.5s infinite;
  }
}

.border-left {
  border-left: 4px solid #e6dada;
  
}

.border-right {
  border-right: 4px solid #e6dada;
}

.border-bottom {
  border-bottom: 4px solid #e6dada;
}

.border-top {
  border-top: 4px solid #e6dada;
}

.sub-items {
  height: 28px;
  width: 28px;
}

.m-w-15 {
  width: 15px;
}

.m-h-15 {
  height: 15px;
}

.r-270 {
  transform: rotate(270deg);
}

.r-180 {
  transform: rotate(180deg);
}

.r-90 {
  transform: rotate(90deg);
}

.pull-down {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.pull-down-right {
  position: absolute;
  bottom: 5px;
  left: 5px;
}

.pull-right {
  position: absolute;
  right: 5px;
  top: 5px;
}

.pull-left {
  position: absolute;
  left: 5px;
  top: 5px;
}

.m-3 {
  margin: 3px;
}

@keyframes swing {
  50% {
    transform: rotateZ(10deg) scale(0.4);
  }
}

@keyframes flash {
  50% {
    border-color: #485563; 
  }
}


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

</style>
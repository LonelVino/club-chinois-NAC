<template>
    <div class="container-wave">
        <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgTop">
              <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
            </div>
            <div class="waveWrapperInner bgMiddle">
              <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
            </div>
            <div class="waveWrapperInner bgBottom">
              <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Wave-bg'
}
</script>

<style lang="scss" scoped>

@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}
.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    z-index: -100;
    transform: scaleY(2.5);
}
.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -20px;
    background-image: linear-gradient(to top, #864438 20%, #182202 80%);
    padding-bottom: 10px;
}
.bgTop {
    z-index: 15;
    opacity: 0.5;
}
.bgMiddle {
    z-index: 10;
    opacity: 0.75;
}
.bgBottom {
    z-index: 5;
}

.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}
.waveTop {
    background-size: 50% 12vw;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}
.waveMiddle {
    background-size: 50% 13vw;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
    background-size: 50% 20vw;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}

@media screen and (max-width: 1250px) {
    .waveWrapper {
        transition: 3s;
        transform: scaleY(2.2)
    }
}
@media screen and (max-width: 800px) {
    .waveWrapper {
        transform: scaleY(2.2)
    }
}
@media screen and (max-width: 600px) {
    .waveWrapper {
        transform: scaleY(2)
    }
}
@media screen and (max-width: 375px) {
    .waveWrapper {
        transform: scaleY(1.85)
    }
}
@media screen and (max-width: 322px) {
    .waveWrapper {
        transform: scaleY(1.95)
    }
}
</style>
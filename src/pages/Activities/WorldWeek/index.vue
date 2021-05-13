<!-- 首页 -->
<template>
    <div id='ww-app' class="stripe"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false">
        <!-- <wbc-nav></wbc-nav> -->
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
        <div class="container">
            <el-row :gutter="24" style="margin:0">
                <!-- <div class="grid">
                  <div class='txt-btn' v-for="(v, i) of config" :key="i" :class="getCls(i)">
                     <button
                      class='btn'
                      v-if="!v.visible && !v.animating"
                      @click="toggle(i)"
                      style="position: absolute; top: 1em; right: 1em; background: rgb(50, 186, 250); color: rgb(255, 255, 255); border: 0px; border-radius: 4px; font-size: 1em; padding: 0.7em 1.2em; cursor: pointer; outline: none;"
                    >
                    Reset
                  </button>
                    <Test
                      class='txt-btn-2'
                      :animating.sync="config[i].animating"
                      :visible.sync="config[i].visible"
                      :ref="getRef(i)"
                      :options="v"
                    >
                      <span>{{ v.label }}</span>
                    </Test>
                  </div>
               
              </div> -->
                <el-col :sm="15" :md="15" style="transition:all .5s ease-out;margin-bottom:30px;">
                  
                  <flipbook  class="flipbook"
                  :pages="pages"
                  :startPage="pageNum"
                  v-slot="flipbook"
                  ref="flipbook"
                  @flip-left-start="onFlipLeftStart"
                  @flip-left-end="onFlipLeftEnd"
                  @flip-right-start="onFlipRightStart"
                  @flip-right-end="onFlipRightEnd"
                  @zoom-start="onZoomStart"
                  @zoom-end="onZoomEnd">
  
                  <div class="action-bar">
                    <i class='el-icon-caret-left btn left'
                    :class="{ disabled: !flipbook.canFlipLeft }"
                    @click="flipbook.flipLeft"></i>
                    <i class='el-icon-zoom-out btn plus' 
                    :class="{ disabled: !flipbook.canZoomIn }"
                    @click="flipbook.zoomIn"></i>
                    <span class="page-num">
                      Page {{ flipbook.page }} of {{ flipbook.numPages }}
                    </span>
                    <i class='el-icon-zoom-in btn minus' 
                    :class="{ disabled: !flipbook.canZoomOut }"
                    @click="flipbook.zoomOut"></i>  
                    <i class="el-icon-caret-right btn right"
                    :class="{ disabled: !flipbook.canFlipRight }"
                    @click="flipbook.flipRight"></i>
                  </div>
                  </flipbook>
                </el-col>
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>


<script>
import demoArr_1 from '@/utils/btns.js'
const demoArr = [
    {
      label: "WORLD WEEK"
    }]
import header from '@/components/Modal/header.vue'
import footer from '@/components/Modal/footer.vue'
import temRightlist from '@/components/Modal/temRightlist.vue'

import Flipbook from 'flipbook-vue'

import ParticleEffectButton from "vue-particle-effect-buttons"

export default {
    name:'Home',
    data() { //选项 / 数据
      return {
        pages: [],
        hasMouse: true,
        pageNum: null,
        cur_page: 0,

        btnOps: {
          type: "triangle",
          easing: "easeOutQuart",
          size: 6,
          particlesAmountCoefficient: 4,
          oscillationCoefficient: 2,
          color: function () {
            return Math.random() < 0.5 ? "#000000" : "#ffffff";
          },
          onComplete: () => {
            console.log("complete");
          },
          onBegin: () => {
            console.log("begin");
          },
          visible: true,
          animating: true
        },

        config: []
      }
    },
    mounted() {
      window.addEventListener('keydown', ev => {
          var flipbook;
          flipbook = this.$refs.flipbook;
          if (!flipbook) {
            return;
          }
          if (ev.keyCode === 37 && flipbook.canFlipLeft) {
            flipbook.flipLeft();
          }
          if (ev.keyCode === 39 && flipbook.canFlipRight) {
            return flipbook.flipRight();
          }
      });
      setTimeout(() => {
          this.pages = [null, '../../../static/img/filpImg/WW_Wallpaper.jpg',
           '../../../static/img/filpImg/Volant.jpg', 
           '../../../static/img/filpImg/AneRouge.jpg', 
           '../../../static/img/filpImg/WW_Wallpaper.jpg'];
      }, 1);
      window.addEventListener('hashchange', this.setPageFromHash);
      this.setPageFromHash();

      demoArr.forEach((v, i) => {
        this.$set(this.config, i, {
          ...v,
          complete: () => {
            this.config[i].animating = false;
          },
          visible: i % 2 == 0,
          animating: false
        });
    });
    },
    methods: { //事件处理器
      onFlipLeftStart(page) {
        console.log('filp-left-start', page)
      },
      onFlipLeftEnd(page) {
        console.log('flip-left-end', page)
        this.cur_page = page
      },
      onFlipRightStart: function (page) {
        console.log('filp-right-start', page)
      },
      onFlipRightEnd: function (page) {
        console.log('flip-right-end', page)
        this.cur_page = page
      },
      onZoomStart:function (zoom) {
        console.log('zoom-start', zoom)
      },
      onZoomEnd:function (zoom) {
        console.log('zoom-end', zoom)   
      },
      setPageFromHash: function() {
        var n;
        n = parseInt(window.location.hash.slice(1), 10);
        if (isFinite(n)) {
          return this.pageNum = n;
        }
      },

      toggle(index) {
        this.$set(this.config, index, {
          ...this.config[index],
          visible: !this.config[index].visible
        });
      },
      getCls(i) {
        const name = `theme-${i + 1}`;
        return {
          grid__item: true,
          [name]: true
        };
      },
      getRef(i) {
        const name = `p${i}`;
        return name;
      }
    },
    components: { //定义组件
        'wbc-nav':header,
        'wbc-rightlist':temRightlist,
        'wbc-footer':footer,
        Flipbook,
        Test: ParticleEffectButton
    },
    created() { //生命周期函数

    }
}
</script>


<style lang="scss">
.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}
</style>

<style lang='scss' scoped>

#ww-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #192a3b;
  margin-top: 30px;
}

a {
  color: coral;
}
.container {
  width: 100%;
  height: 100%;
  margin-left: 2.5vw;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  transform: scaleY(0.95);
  margin-bottom: 100px;
}
.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-bar .btn {
  font-size: 30px;
  color: #999;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #ccc;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #666;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}
.flipbook {
  width: 90vw;
  height: 90vh;
  margin-top: 50px;

}

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
    transform: scaleY(1.1);
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
    background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}
.waveMiddle {
    background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
    background-size: 50% 100px;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}

.grid {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  .txt-btn-2 {
    width: 1350px;
    font-size: 50px;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>

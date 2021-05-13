<template>
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
            @click="flipbook.zoomOut"></i>
            <span class="page-num">
                Page {{ flipbook.page }} of {{ flipbook.numPages }}
            </span>
            <i class='el-icon-zoom-in btn minus' 
            :class="{ disabled: !flipbook.canZoomOut }"
            @click="flipbook.zoomIn"></i>  
            <i class="el-icon-caret-right btn right"
            :class="{ disabled: !flipbook.canFlipRight }"
            @click="flipbook.flipRight"></i>
        </div>
    </flipbook>
</template>

<script>
import Flipbook from 'flipbook-vue'
export default {
    name: 'FlipBooks',
    data() {
        return {
            pages: [],
            hasMouse: true,
            pageNum: null,
            cur_page: 0,
        }
    },
    components: {
        Flipbook,
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
    },
    methods: {
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
    },
}
</script>

<style lang="scss">
.flipbook .viewport {
  width: 90vw;
  height: calc(100vh - 50px - 40px);
  margin-top: 0.5vw;
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

@media screen and (max-width: 940px) {
  .flipbook .viewport {
   margin-top: 0vw;
  }
}
</style>

<style lang="scss" scoped>
.flipbook {
  width: 90vw;
  height: 90vh;
  margin-top: 50px;
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

.page-num {
  color: wheat;
  font-size: 2vw !important;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bolder;
}
</style>
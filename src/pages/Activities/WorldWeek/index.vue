<!-- 首页 -->
<template>
    <div id='ww-app' class="stripe"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false">
        <!-- <wbc-nav></wbc-nav> -->
        <wave/>
        <div class="container">
            <el-row :gutter="24" style="margin:0">
              
                <el-col :sm="15" :md="15" style="transition:all .5s ease-out;margin-bottom:30px;">
                  <!-- <div class="titles">
                    <div class="title">
                      <Roller class="roller" :charList="['W', 'K', 'L', 'O', 'E', 'R']" :transition="1" text="WORLD WEEK"/>
                    </div>
                    <div class="sub-title">
                        <Roller class="roller" :charList="['C', 'U', 'L', 'O', 'N', 'S']" :transition="1" text="-- Club Chinois"/>
                    </div>
                  </div> -->
                  <flip-book/>
                  
                </el-col>
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>


<script>

import header from '@/components/Modal/header.vue'
import footer from '@/components/Modal/footer.vue'
import temRightlist from '@/components/Modal/temRightlist.vue'

import Wave from './components/Wave'
import FlipBook from './components/FlipBook.vue'
import Roller from "vue-roller";

export default {
    name:'Home',
    data() { //选项 / 数据
      return {

      }
    },
    components: { //定义组件
        'wbc-nav':header,
        'wbc-rightlist':temRightlist,
        'wbc-footer':footer,
        FlipBook,
        Wave,
        Roller,
    },
    mounted() {
      
    },
    methods: { //事件处理器
      
    },
    created() { //生命周期函数

    }
}
</script>




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
.titles {
  display: flex;
  flex-direction: row;
}
.title .sub-title {
  z-index: 100;
}
.roller {
    font-family: Serat;
    margin: 10px 20px;
    color: #fff;
    font-weight: bolder;
  }
.title {
  .roller {
    font-size: 40px;
  }
}
.sub-title {
  .roller {
    font-size: 30px;
  }
}

</style>

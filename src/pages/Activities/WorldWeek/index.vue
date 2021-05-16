<!-- 首页 -->
<template>
    <div id='ww-app' class="stripe"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false">
        <wbc-nav class='ww-nav'/>
        <wave/>
        <div class="container">
            <div class="txt_btn">
              <div class="titles">
                <div class="title">
                  <Roller :wordWrap="20" class="roller" :charList="['W', 'K', 'L', 'O', 'E', 'R']" :transition="1" text="WORLD"/>
                  <Roller :wordWrap="20" class="roller" :charList="['W', 'K', 'L', 'O', 'E', 'R']" :transition="1" text="WEEK"/>
                </div>
                <div class="sub-title">
                    <Roller :wordWrap="20" class="roller" :charList="['C', 'U', 'L', 'O', 'N', 'S']" :transition="1" text="-- Club"/>
                    <Roller :wordWrap="20" class="roller" :charList="['C', 'U', 'L', 'O', 'N', 'S']" :transition="1" text="   Chinois"/>
                </div>
              </div>
              <div class="buttons">
                <buttons v-on:buttonOpen="openModal()"/>
              </div>
            </div>  
            <el-row :gutter="24" style="margin:0; display:flex; flex-direction: column; align-item: center;">
              <el-col :sm="15" :md="15" style="transition:all .5s ease-out;margin-bottom:30px;">
                <flip-book/>
              </el-col>
            </el-row>
            
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>


<script>

import footer from '@/components/Modal/footer.vue'
import headerNav from '@/components/Modal/headerWidgets/headerNav.vue'

import ModalWizard from 'vue-modal-wizard'
import LoginModal from '@/components/Modal/OpenModal.vue'

import Wave from './components/Wave'
import FlipBook from './components/FlipBook.vue'
import Buttons from './components/Buttons'

import Roller from "vue-roller";



export default {
    name:'Home',
    data() { //选项 / 数据
      return {
        hasMouse: true,
      }
    },
    components: { //定义组件
        'wbc-nav': headerNav,
        'wbc-footer':footer,

        FlipBook,
        Wave,
        Roller,
        Buttons,
    },
    mounted() {
      console.log('this.$store.state.form:', this.$store.state.form)
    },
    methods: { //事件处理器
      openModal:function () {
        console.log('Event has been listened!')
        setTimeout(() => {
          ModalWizard.open(LoginModal)        
        }, 1000);
      }
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
.ww-nav {
  margin-top: -2vw;
}
a {
  color: coral;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  transform: scaleY(0.95);
  margin-bottom: 100px;
}

.txt_btn {
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.titles {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

.roller {
    font-family: Serat;
    margin: 10px 20px;
    color: #fff;
    font-weight: bolder;
  }
.title {
  display: flex;
  flex-direction: column;
  .sub-title {
    z-index: 100;
  }
  .roller {
    font-size: 4.5vw;
  }
}
.buttons {
  margin-top: 3vw;
}
.sub-title {
  display: flex;
  flex-direction: column;
  margin-top: 1.5vw;
  .roller {
    font-size: 2.5vw;
  }
}
  
@media screen and (max-width: 800px) {
  .titles {flex-direction: column;}
  .title {
    flex-direction: row;
    .roller {
      font-size: 6.5vw;
    }
  }
  .sub-title {
    flex-direction: row;
    justify-content: center;
    margin-top: 1.5vw;
    .roller {
      font-size: 3.5vw;
    }
  }  
}

@media screen and (max-width: 550px) {


.title {
  .roller {
    font-size: 8.5vw;
  }
}
.sub-title {
  margin-top: 1.5vw;
  .roller {
    margin: 0;
    font-size: 4.5vw ;
  }
}  
}

</style>

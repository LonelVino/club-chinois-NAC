<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="18" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <sequential-entrance>
                        <!-- <articles/> -->
                        <Activities/>
                    </sequential-entrance>
                </el-col>
                <el-col :sm="24"  :md="6" >
                    <wbc-rightlist></wbc-rightlist>
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
import temCard from '@/components/temCard.vue'

export default {
    name:'Home',
    data() { //选项 / 数据
      return {
      }
    },
    created() {
      
    },
    methods: { //事件处理器
        
    },
    components: { //定义组件
        'wbc-nav':header,
        'wbc-rightlist':temRightlist,
        'wbc-footer':footer,
        'Activities': temCard
    },
    created() { //生命周期函数

    }
}
</script>



<style lang='scss' scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: coral;
}
#app > span {
  display: flex;
  justify-content: center;
}
.box {
  border-radius: 10px;
  background-color: coral;
  width: 100px;
  height: 100px;
  margin: 1rem;
}
@media screen and (max-width:800px) {
  .caroulse {
    display: none;
  }
  
}
</style>

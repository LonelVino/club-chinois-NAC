<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <sequential-entrance>
                        <image-shadow :width="200" :src="this.src1"></image-shadow>
                    </sequential-entrance>
                    <wbc-sharelist>
                    </wbc-sharelist>
                </el-col>
                <el-col :sm="24"  :md="8" >
                    <wbc-rightlist></wbc-rightlist>
                </el-col>
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import temSharelist from '../components/temSharelist.vue'
import temRightlist from '../components/temRightlist.vue'

import ModalWizard from 'vue-modal-wizard'
import LoginModal from '../components/OpenModal.vue'

    export default {
        name:'Home',
        data() { //选项 / 数据
            return {
                src1: "static/img/avatar_1.jpg"
            }
        },
        methods: { //事件处理器
            open:function () {
                ModalWizard.open(LoginModal)
            }
        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-sharelist':temSharelist,
            'wbc-rightlist':temRightlist,
            'wbc-footer':footer
        },
        created() { //生命周期函数

        }
    }
</script>

<style>
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
</style>

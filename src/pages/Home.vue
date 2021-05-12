<!-- 首页 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <sequential-entrance>
                        <div class="self-pres">
                            <h2 class="title" >Members</h2>
                            <div class="chensheng">
                                <Roller class="roller" :charList="['C', 'h', 'e', 'u']" :transition="1" text="Chensheng Luo"/>
                                <image-shadow :width="300" :src="this.src1">
                                    <el-button @click="open()"/>
                                </image-shadow>
                            </div>
                            <div class="xuwen">
                                <Roller class="roller" :charList="['C', 'w', 'e', 'u']" :transition="1" text="Xuwen Chen"/>
                                <image-shadow :width="300" :src="this.src2"></image-shadow>
                            </div>
                            <div class="kaiao">
                                <Roller class="roller" :charList="['K', 'w', 'e', 'a']" :transition="1" text="Kaiao Wen"/>
                                <image-shadow :width="300" :src="this.src3"></image-shadow>
                            </div>
                            <div class="align">
                                <Roller class="roller" :charList="['L', 'h', 'n', 'a']" :transition="1" text="Haonan Lin"/>
                                <div class="haonan-img">
                                    <image-shadow :width="320" :src="this.src4_1"></image-shadow>
                                    <image-shadow :width="180" :src="this.src4_2"></image-shadow>
                                </div>
                            </div>
                        </div>
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

import Roller from "vue-roller";

    export default {
        name:'Home',
        data() { //选项 / 数据
            return {
                src1: "static/img/Members/Chensheng.png",
                src2: "static/img/Members/Xuwen.png",
                src3: "static/img/Members/Kaiao.png",
                src4_1: "static/img/Members/Haonan_1.png",
                src4_2: "static/img/Members/Haonan_2.png",
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
            'wbc-footer':footer,
            Roller
        },
        created() { //生命周期函数

        }
    }
</script>

<style lang='scss' scoped>
@font-face {
  font-family: Serat;
  src: url('../assets/font/SeratUltra-1GE24.ttf');
}
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


.self-pres {
    margin: 10px;
    margin-bottom: 50px;
}
.vue-image-shadow + .vue-image-shadow {
  margin-left: 30px;
}
.align {
    display: flex;
    flex-direction: column;
    .haonan-img {
        display: flex;
        flex-direction: row;
    }
}

.title {
    font-family: Serat;
    margin: 35px;
    font-size: 50px;
}
.roller {
    font-family: Serat;
    margin: 10px 20px;
    font-size: 30px;
}
</style>

<template>
    <div class="self-pres">
        <h2 class="title" >Members</h2>
        <div class="pre-card"  id='chensheng'>
            <div class="name">
                <Roller class="roller" :charList="['C', 'h', 'e', 'u']" :transition="1" text="Chensheng Luo 罗宸晟"/>
            </div>
            <div class="pre-main">
            <div class="img-pre">
                <image-shadow :width="300" :src="this.src1"></image-shadow>
            </div>
            <div class="pre-txt">
                <div class="pre-txt">
                <sequential-entrance>
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class='card-header-txt'>President</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div class="card-content">
                        <p>大家好！我是罗宸晟。老家四川，来自北航。喜欢火车，热爱定向（越野），较为喜欢户外，可约布依格后小树林散/跑步或萨克雷周边骑行，作为烹饪新手偶尔也喜欢探索各种美食做法。</p>
                        <br/>
                        <p>混迹于Raid 但根本不参加soiree，比较害羞但对待社团活动认真负责。欢迎大家在未来的一年里积极参与Club Chinois 的各项活动，在萨克雷/雷恩/梅兹玩好，吃好，生活好， 学习好。</p>
                    </div>
                    </el-card>
                </sequential-entrance>
                </div>
            </div>
            </div>
        </div>
        <div class="pre-card"  id='xuwen'>
            <div class="name">
                <Roller class="roller" :charList="['C', 'w', 'e', 'u']" :transition="1" text="Xuwen Chen 陈旭文"/>
            </div>
            <div class="pre-main">
                <div class="img-pre">
                    <image-shadow :width="300" :src="this.src2"></image-shadow>
                </div>
                <div class="pre-txt">
                    <sequential-entrance>
                        <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class='card-header-txt'>Événement</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="card-content">
                            <p>我是陈旭文，爱吃辣的湖南人一枚；平时喜欢听音乐，爱好唱歌和运动（羽毛球和定向越野），钢琴、吉他偶尔能露一手。另外对各种桌游都感兴趣，欢迎随时约局！</p>
                            <br/>
                            <p>在新的一届Bureau 里主管Club Chinois 的策划工作，希望今后能给大家带来一些不一样的活动和收获</p>
                        </div>
                        </el-card>
                    </sequential-entrance>
                </div>
            </div>
            
            
        </div>
        <div class="pre-card" id="kaiao">
            <div class="name">
                <Roller class="roller" :charList="['K', 'w', 'e', 'a']" :transition="1" text="Kaiao Wen 温凯奥"/>
            </div>
            <div class="pre-main">
                <div class="img-pre">
                    <image-shadow :width="300" :src="this.src3"></image-shadow>
                </div>
                <div class="pre-txt">
                    <sequential-entrance>
                        <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class='card-header-txt'>Trésorier</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="card-content">
                            <p>大家好！我是温凯奥，今年将作为club chinois 财务部分的负责人与大家相识。</p>
                            <br/>
                            <p>我性格随和，可能开始时会觉得我的话不多，但熟起来后会发现我几乎不会让你的话掉在地上。爱旅游、爱追剧、爱电影……一切和玩有关的我似乎都有兴趣，期待有人能向我安利。</p>
                            <br/> 
                            <p>这里的社团让我的一年级丰富多彩，而今，我期待着我们能带给你不一样的生活。</p>
                        </div>
                        </el-card>
                    </sequential-entrance>
                </div>
            </div>
        </div>
                <div class="pre-card" id="xiwen">
            <div class="name">
                <Roller class="roller" :charList="['C', 'w', 'i', 'x']" :transition="1" text="Xiwen Cui 崔曦文"/>
            </div>
            <div class="pre-main">
                <div class="img-pre">
                    <image-shadow :width="300" :src="this.src5"></image-shadow>
                </div>                                
                <div class="pre-txt">
                    <sequential-entrance>
                        <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class='card-header-txt'>Comm Interne</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="card-content">
                            <p>可颂十级爱好者。</p>
                            <p>但是最爱中餐。</p>
                            <p>孤独的巴黎热心游客。擅长做旅行攻略。</p>
                            <p>但是因为疫情被迫成为长在césal的蘑菇。</p>
                            <p>今天也好想出去玩。</p>
                            <p>宣传小白但是在社团负责宣传部。</p>
                            <p>从今天开始就是后台小编了。</p>
                            <p>未完待续</p>
                        </div>
                        </el-card>
                    </sequential-entrance>
                </div>
            </div>
        </div>

        <div class="pre-card" id="roberta">
            <div class="name">
                <Roller class="roller" :charList="['L', 'a', 'R', 'b']" :transition="1" text="Roberta Liu"/>
            </div>
            <div class="pre-main">
                <div class="pre-txt">
                    <sequential-entrance>
                        <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class='card-header-txt'>Comm Externe</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="card-content">
                            <p>大家好</p>
                            <p>我是刘 Roberta;</p>
                            <p>平时喜欢和朋友聚餐和散步。</p>
                            <p>在 CS 打排球，所以也喜欢去沙滩排球场打球。</p>
                            <p>希望可以让中国学生更加融入 CS 的国际环境。</p>
                        </div>
                        </el-card>
                    </sequential-entrance>
                </div>
            </div>
        </div>
        
        <div class="pre-card" id='haonan'>
            <div class="name">
                <Roller class="roller" :charList="['L', 'h', 'n', 'a']" :transition="1" text="Haonan Lin 林浩南"/>
            </div>
            <div class="pre-main haonan">
                <div class="img-pre">
                    <div class="align">
                    <div class="haonan-img">
                        <image-shadow :width="320" :src="this.src4_1"></image-shadow>
                        <image-shadow :width="180" :src="this.src4_2"></image-shadow>
                    </div>
                    </div>
                </div>                                
                <div class="pre-txt">
                    <sequential-entrance>
                        <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span class='card-header-txt'>Logstique</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="card-content haonan-content">
                            <p>👷林浩南，😆➡️©️©️🇨🇳，👷🏃🥟➕🛒🛍️，</p>
                            <p>🈶🆕🉑📲👷. 3️⃣3️⃣7️⃣8️⃣5️⃣4️⃣9️⃣5️⃣8️⃣3️⃣1️⃣. 🧏📖🆔: Haonan Lin. </p>
                            <br/>
                            <p>😀(翻译：我叫林浩南，很高兴能够加入Club Chinois;</p>
                            <p>一个打工人，负责跑腿买饺子和采购其他物品，有需要采购的物品可以联系我</p>
                            <p>Tel: +33 (0)785495831, Facebook ID: Haonan Lin)</p>
                        </div>
                        </el-card>
                    </sequential-entrance>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

import ModalWizard from 'vue-modal-wizard'
import LoginModal from '../components/OpenModal.vue'

import Roller from "vue-roller";
export default {
    name: 'Presentation',
    components: {
        Roller,
    },
    data() {
        return {
            src1: "static/img/Members/Chensheng.png",
            src2: "static/img/Members/Xuwen.png",
            src3: "static/img/Members/Kaiao.png",
            src4_1: "static/img/Members/Haonan_1.png",
            src4_2: "static/img/Members/Haonan_2.png",
            src5: "static/img/Members/Xiwen.png"
        }
    },
    methods: {
        open:function () {
            ModalWizard.open(LoginModal)
        }
    },
}
</script>

<style lang="scss">
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 30vw;
  margin: 0 20px;
}
@media screen and (max-width: 800px) { 
    .box-card{
        width: 70vw;
        margin: 2vw 0
    }
}

</style>

<style lang="scss" scoped>
* {
line-height: 1.2em;
}
@font-face {
  font-family: Serat;
  src: url('../assets/font/SeratUltra-1GE24.ttf');
}
.self-pres {
    margin: 10px;
    margin-bottom: 30px;
}

.box {
  border-radius: 10px;
  background-color: coral;
  width: 100px;
  height: 100px;
  margin: 1rem;
}

.pre-main {
    display: flex;
    flex-direction: row;
}
.pre-card {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.card-header-txt {
    font-size: 2em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
}
.card-content p {
    line-height: 1.5em;
    font-family: SimHei;
    font-weight: 600;
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
    margin: 25px;
    font-size: 50px;
}
.roller {
    font-family: Serat;
    margin: 10px 20px;
    font-size: 30px;
}
@media screen and (max-width: 800px) { 
    .pre-main {
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
    .pre-card {
        align-content: center;
        align-items: center;
    }
    .title {
        font-size: 6vw;
        margin-left: 10px;
    }
    .self-pres {
        margin: 0px
    }
    .roller {
        font-size: 4vw;
    }
}
</style>
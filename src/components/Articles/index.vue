<template>
    <div class="articles">
        <el-collapse v-model="activeNames" @change="handleChange">
            <header class='title'>Activities</header>
            <el-collapse-item title="World Week!" name="1">
                <div>Salut !🤩🌎❤️</div>
                <div>大家好，明天开始就是我们CentraleSupelec的WorldWeek了，除了我们社团周四举行的活动之外</div>
                <div>其他国家的社团也组织的有精彩有趣的游戏、美食以及World Cup 和  Forum International。</div>
                <div>大家感兴趣可以积极参与、游玩，还可以给为中国队赢的积分(不过玩得开心才是最重要的)。</div>
                <br/>
                <div>World Week的其他活动也欢迎大家积极参与</div>
                <div>Facebook装扮网址</div>
                <el-link type="info" href="www.facebook.com/profilepicframes/?selected_overlay_id=261644622163355">www.facebook.com/profilepicframes/?selected_overlay_id=261644622163355</el-link>
            </el-collapse-item>
            <el-collapse-item title="World Week周四Staffeur招募中" name="2">
                <div>欢迎志愿者加入WhatsApp:</div>
                <el-link href="https://chat.whatsapp.com/IH2O0d7d0bvCHbjSr3Kd7b" type="success">https://chat.whatsapp.com/IH2O0d7d0bvCHbjSr3Kd7b</el-link>
                <div>或者微信群聊</div>
                <img src="static/img/qr-code/ww-wechat.jpg" alt="" width="200">
            </el-collapse-item>
            <el-collapse-item title="饺子! 粽子!" name="3">
                <div>新一轮饺子开始了，还有熟菜、粽子等好物，<b>ddl周二!</b></div>
                <div>订饺子地址:</div>
                <el-link type="info" href="https://cs-clubchinois-raviolis.herokuapp.com">https://cs-clubchinois-raviolis.herokuapp.com</el-link>
                <div>本期优惠、新品:</div>
                <div><p>🌹凉皮5欧一盒，<br/>
                    🌹韭菜盒4个一盒6欧<br/>
                    🌹荠菜虾皮大馅儿饼2个6欧4个10欧，<br/>
                    🌹猪肉辣椒馅儿饼4个8欧4个起订。<br/>
                    🌹红烧肉10欧一盒<br/>
                    🌹酱牛肉10欧一盒<br/>
                    🌹麻辣牛肉10欧<br/>
                    🌹麻辣牛蹄筋10欧<br/>
                    🌹（麻辣）卤牛肚，卤鸡胗，卤鸡心，卤猪耳，卤鸡翅，卤鸭脖,卤豆腐皮6欧<br/>
                    🌹茶蛋5个6欧<br/>
                    🌹香煎带鱼10欧<br/>
                    🌹红烧鱼块10欧<br/>
                    🌹麻辣香锅10欧<br/>
                    🌹呛拌大头菜4欧一盒<br/>
                    🌹粽子1.5欧的5个6欧总，5个起订，不分品种。<br/>
                    🌹粽子2.5欧的5个10欧，5个起订，不分品种<br/>
                    🌹粽子3.5欧的3个10欧，3个起订，不分品种。<br/>
                    🌹水饺和馄饨每100个随机赠送10，每200个赠送30个，300个赠送50个。<br/>
                    🌹小笼包30个20欧</p></div>
            </el-collapse-item>
            <el-collapse-item title="期末欢送会意向问卷" name="4">
                <div>大家好✨随着期末临近，许多学长学姐也即将结束在法国学习的时光；</div>
                <div>Club Chinois计划举办一场欢送会。为了更好的筹备活动，了解大家意向，以及协调时间，请积极填写以下问卷👇</div>
                <el-link type="info" href="https://forms.gle/HHNgxTykM4qpppnK9">https://forms.gle/HHNgxTykM4qpppnK9</el-link>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'articles',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style lang="scss"> 
.el-collapse {
    font-weight: bold !important;
    .el-collapse-item {
        .el-collapse-item__header {
            font-weight: bold !important;
            padding: 5px !important;
            font-size: 1.5vw;
        }
        .el-collapse-item__wrap {
            padding: 0 1vw  !important;
        }
    }
}
@media screen and (max-width: 500px) {
    .el-collapse {
        .el-collapse-item {
            .el-collapse-item__header {
                 font-size: 2vw;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.articles {
    margin: 1vw 0;
    .title {
        font-weight: bolder;
        font-size: 3vw;
    }
}
@media screen and (max-width: 500px) {
    .articles {
        margin: 1vw 0;
        margin-top: 3vw;
        .title {
            font-weight: bolder;
            font-size: 5vw;
        }
    }
}
</style>
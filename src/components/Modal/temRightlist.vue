<!-- 右侧固定导航栏 -->
<template>
    <div class="rightlistBox">
        <el-divider></el-divider>
        <section >
            <div class="r1-head">
                <h1 v-if="this.$store.state.themeObj.user_start!=0">
                    {{$t('sides.Links')}}
                </h1>
            </div>
            <div class="r1-body">
                <div class="catch-me" >
                    <el-tooltip class="item" effect="dark" content="Facebook" placement="top">
                        <a :href="catchMeObj[isAimee].facebook" target="_blank">
                            <img :src="catchMeObj[isAimee].fb_img" width="40" height="40">
                        </a>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Ins" placement="top">
                        <a :href="catchMeObj[isAimee].ins" target="_blank">
                            <img :src="catchMeObj[isAimee].ins_img" width="40" height="40">
                        </a>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Bilibili" placement="top">
                        <a :href="catchMeObj[isAimee].bilibili" target="_blank">
                            <img :src="catchMeObj[isAimee].bilibili_img" width="40" height="40">
                        </a>
                    </el-tooltip>
                </div>
            </div>
        </section>
        <section >
            <div class="r1-head">
                <h1 class='Partenaires' v-if="this.$store.state.themeObj.user_start!=0">
                    {{$t('sides.Partners')}}
                </h1>
            </div>
            <div class="r1-body">
                <div class="catch-me">
                    <div class="part_block" v-for="pat in partners" :key="pat"> 
                        <a :href="pat.web_url">
                        <el-image
                            class='part_icon'
                            :src="pat.img_url"
                            fit="fill">
                        </el-image>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- 右侧上滑小图片 -->
        <div  v-if="this.$store.state.themeObj.user_start!=0" :class="gotoTop?'toTop hidden':'toTop goTop hidden'" @click="toTopfun">
            <!-- <img :src="this.$store.state.themeObj.right_img?this.$store.state.themeObj.right_img:'static/img/scroll_fu.png'" alt=""> -->
        </div>
        <div else :class="gotoTop?'back2Top goTophui':'back2Top hidden'" @click="toTopfun">
            <img :src="this.$store.state.themeObj.right_img?this.$store.state.themeObj.right_img:'static/img/scroll_fu.png'" alt="">
        </div>
    </div>
</template>


<script>

export default {
    data() { //选项 / 数据
        return {
            fixDo:false,
            loveme:false,
            gotoTop:false,//返回顶部
            going:false,//是否正在执行上滑动作
            catchMeObj:{// 个人信息
                Aimee:{
                    facebook: 'https://www.facebook.com/ClubChinois',
                    ins: 'https://www.instagram.com/club_chinois_centralesupelec/',
                    bilibili: 'https://space.bilibili.com/1229755888/',
                    fb_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png',
                    ins_img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png',
                    bilibili_img: 'https://cdn.iconscout.com/icon/free/png-256/bilibili-3244512-2701884.png'
                }
            },
            isAimee:this.$store.state.themeObj.user_start!=0?"Aimee":"Aimee",//判断是哪个website
            partners: [
                {
                    'img_url': 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Logo_CentraleSup%C3%A9lec.svg/1200px-Logo_CentraleSup%C3%A9lec.svg.png',
                    'web_url': 'https://www.centralesupelec.fr/'
                },
                {
                    'img_url': 'https://e7.pngegg.com/pngimages/209/419/png-clipart-bnp-paribas-fortis-computer-icons-bank-bank-bnp-paribas-computer-icons-thumbnail.png',
                    'web_url': 'https://mabanque.bnpparibas/'
                },
                {
                    'img_url': 'https://www.univ-orleans.fr/upload/public/styles/univ_wysiwyg_small/public/2021-11/CVEC1_finance_par_rvb%20web%20univ.png?h=d7f97092&itok=ri37xLPK',
                    'web_url': 'https://cvec.etudiant.gouv.fr/'
                },
                {
                    'img_url': 'https://pbs.twimg.com/profile_images/1066804809838280704/HBjKfpa-_400x400.jpg',
                    'web_url': 'https://bde-cs.fr/'
                },
                {
                    'img_url': 'https://scontent-cdt1-1.xx.fbcdn.net/v/t31.18172-8/12621997_772123712891475_8600574980844174568_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=WxTuK-ZfM48AX98wyXP&_nc_ht=scontent-cdt1-1.xx&oh=00_AT-Q0gZkASzV9iX6XbAjvGZSmJf5hGhzmcuaRyQGaD8YdA&oe=61FB7518',
                    'web_url': 'https://bdi.cs-campus.fr/presentation/'
                },
                {
                    'img_url': 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/159314480_200291148381081_9193454809572634499_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Vs53g9OgIGkAX8-TDzS&_nc_ht=scontent-cdg2-1.xx&oh=00_AT97e9kbof4SlPdcCt8yR2qnWSmnNDgZGAgFUueBwIE-Tg&oe=621CDF68',
                    'web_url': 'https://galerie.pics/'
                },
                {
                    'img_url': 'data:image/jpeg;base64,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',
                    'web_url': 'https://www.instagram.com/musics.cs/'
                },
                {
                    'img_url': 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/196003299_172813721516245_5479862419403837671_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LUnFRaq779QAX-w94kO&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-H8k0v6TRqrTVZgZSaKS17nEzlR9uvo_AgTbteC6vUIw&oe=61F9D4D0',
                    'web_url': 'https://www.facebook.com/LyricsCentraleSupelec'
                },
                {
                    'img_url': 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.18169-9/28378418_1758470410884502_5141690599409433106_n.png?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=4zLaNwzzpe4AX-M5UWB&_nc_ht=scontent-cdt1-1.xx&oh=00_AT_luPR30SARMTjw_9WdxB8l1gIOJ2Kju_hz3jyR-wDtEg&oe=61FAB029',
                    'web_url': 'https://www.facebook.com/litdecamp/'
                }
                
            ],
        }
    },
    components: {
    },
    methods: { //事件处理器
        toTopfun:function(e){
            var that = this;
            this.gotoTop = false;
            this.going = true;
            var timer = setInterval(function(){
                //获取滚动条距离顶部高度
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                var ispeed = Math.floor(-osTop / 7);
                document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
                //到达顶部，清除定时器
                if (osTop == 0) {
                    that.going = false;
                clearInterval(timer);
                timer = null;
                };
            },30);
        },
    },
    components: { //定义组件

    },
    created() { //生命周期函数
        var that = this;
        window.onscroll = function(){
            var t = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

            if(!that.going){
                if(t>600){
                    that.gotoTop = true;
                    console.log(t, that.gotoTop);
                    
                }else{
                    that.gotoTop = false;
                }
            }
            if(t>1200){
                that.fixDo = true;
            }else{
                that.fixDo = false;
            }

        }
    }
}
</script>



<style lang="less">
.rightlistBox{
    position: relative;
}
.rightlistBox section {
    transition: all 0.2s linear;
    position: relative;
    background: transparent;
    padding:15px;
    margin-bottom: 3vh;
    border-radius: 0.375rem;
    box-shadow:0 5px 15px rgba(0,0,0,.01);
}
.rightlistBox section:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}

.rightlistBox .r1-head{
    text-align: center;
    border-radius: 4px 4px 0 0 ;
    text-align: center;
    position: relative;
    margin-top: 2vh;
    /*box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);*/
}
.rightlistBox .r1-head img{
    width:100%;
    min-height: 100px;
}
.rightlistBox .r1-head h1{
    position: absolute;
    bottom: 15px;
    margin:0 0 0 -68px;
    font-size: 28px;
    font-family: 'RabbidHighwaySignIVRegular';
    letter-spacing:0.5px;
    color:rgb(255, 255, 255);
    text-shadow: 2px 2px 2px rgba(139, 9, 9, 0.7);
    font-weight: 800;
    width:130px;
    left:50%;
}
.rightlistBox .r1-head h1 span{
    opacity: 0.3;
}
.rightlistBox .r1-body p{
    font-size: 14px;
    margin:5px 0 8px 0;
    font-weight: 700;
    text-align: center;
}
.rightlistBox .r1-body .catch-me{
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .part_block {
        width: 6em;
        height: 6em;
        margin: 1.2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .part_icon {
            object-fit: cover;
        }
    }
}
.rightlistBox .r1-body .catch-me a{
    display: inline-block;
    margin-bottom: 7px;
    position: relative;
    text-decoration: none;
}
.rightlistBox .r1-body .catch-me a:hover i{
    color:#fff;
    background: #F4692C;
}
.rightlistBox .r1-body .catch-me a i{
    display: inline-block;
    font-size: 18px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}


/*回到顶部*/
/*返回到顶部*/
.toTop{
    position: fixed;
    right:40px;
    top:-150px;
    z-index: 99;
    width:70px;
    height:900px;
    transition: all .5s 0.3s ease-in-out;
    cursor: pointer;
}
.goTop{
    top:-950px;
}
.toTop img,.back2Top img{
    width:100%;
    height:auto;
}
.back2Top{
    position: fixed;
    right:10px;
    bottom:60px;
    z-index: 99;
    width:80px;
    height:30px;
    transition: all .3s .7s ease-in-out;
    cursor: pointer;
    animation: toflow 2s ease-in-out infinite;
}
.hidden {bottom: 5000px;}
@keyframes toflow {
    0%{
        /*top:400px;*/
        transform: scale(0.95) translate(0,10px);
    }
    50%{
        /*top:410px;*/
        transform:scale(1) translate(0,0px);
    }
    100%{
        /*top:400px;*/
        transform:scale(0.95) translate(0,10px);
    }
}
.goTophui{
    bottom:120vh;
}


@media (max-width: 1516px) {
    .rightlistBox .r1-body .catch-me{
        .part_block {
            width: 6em;
            height: 6em;
            // flex: 1 0 15%;
            margin: 0.8em;
        }
    }
}

@media (max-width: 1016px) {
    .rightlistBox .r1-body .catch-me{
        .part_block {
            width: 8em;
            height: 8em;
            margin: 0.5em;
        }
    }
}

@media (max-width: 600px) {
    .rightlistBox {
        margin-top: -2em;
        transform: scale(0.9);
        .r1-body .catch-me {
            .part_block {
                margin: 0.5em;
                width: 3.3em;
                height: 3.3em;
            }
        }
    }
    .rightlistBox section:first-child {
        margin-bottom: 5vh;
    }
    .back2Top{
        display: none;
    }
}

</style>


<style lang="scss" scoped>

@mixin transition($args...) {
    transition: $args;
}
.rightlistBox .r1-body .catch-me{
    @include transition(all 0.3s ease);
    .part_block {
        @include transition(all 0.3s ease);
    }
}
</style>
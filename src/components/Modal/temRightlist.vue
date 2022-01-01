<!-- 右侧固定导航栏 -->
<template>
    <div class="rightlistBox">
        <section >
            <div class="r1-head">
                <!-- <svg-icon icon-class="github" /> -->
                <h1 v-if="this.$store.state.themeObj.user_start!=0">
                    Liens
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
                        <a :href="catchMeObj[isAimee].bilbili" target="_blank">
                            <img :src="catchMeObj[isAimee].bilibili_img" width="40" height="40">
                        </a>
                    </el-tooltip>
                </div>
            </div>
        </section>

        <section >
            <div class="r1-head">
                <!-- <svg-icon icon-class="github" /> -->
                <h1 class='Partenaires' v-if="this.$store.state.themeObj.user_start!=0">
                    Partenaires
                </h1>
            </div>
            <div class="r1-body">
                <div class="catch-me">
                    <div class="block" v-for="url in urls" :key="url">
                        <el-image
                        style="width: 5rem; height: 5em"
                        :src="url"
                        fit="fill"></el-image>
                    </div>
                </div>
            </div>
        </section>
    
        <!-- 右侧上滑小图片 -->
        <div  v-if="this.$store.state.themeObj.user_start!=0" :class="gotoTop?'toTop hidden':'toTop goTop hidden'" @click="toTopfun">
            <img :src="this.$store.state.themeObj.right_img?this.$store.state.themeObj.right_img:'static/img/scroll.png'" alt="">
        </div>
        <div v-else :class="gotoTop?'back2Top hidden':'back2Top goTophui hidden'" @click="toTopfun">
            <img :src="this.$store.state.themeObj.right_img?this.$store.state.themeObj.right_img:'static/img/scroll.png'" alt="">
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
                    bilibili_img: 'https://yt3.ggpht.com/ytc/AKedOLRzN0znMBzhHspW9K5lnKN6-NYanaRjMBIhIQKj=s900-c-k-c0x00ffffff-no-rj'
                }
            },
            isAimee:this.$store.state.themeObj.user_start!=0?"Aimee":"Aimee",//判断是哪个website
            urls: [
                'https://i0.wp.com/www-scee.rennes.supelec.fr/wp/wp-content/uploads/2017/05/cropped-LOGO-1.png?fit=512%2C512',
                'https://www.minalogic.com/wp-content/uploads/2020/07/minalogic-member-fr-bnp-paribas.png',
                'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.6435-9/159314480_200291148381081_9193454809572634499_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-DA2KeO6o1gAX-TgeCn&_nc_ht=scontent-mrs2-1.xx&oh=00_AT8frdnRz83jMhksdOhNg9rAev6fayn6sqVlLw_pjPmSdw&oe=61F55268',
                'https://pbs.twimg.com/profile_images/1066804809838280704/HBjKfpa-_400x400.jpg',
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
                var t = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(t);
            if(!that.going){
                if(t>600){
                    that.gotoTop = true;
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
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
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
    /*box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);*/
}
.rightlistBox .r1-head img{
    width:100%;
    min-height: 100px;
}
.rightlistBox .r1-head h1{
    position: absolute;
    bottom:5px;
    margin:0 0 0 -65px;
    font-size: 20px;
    letter-spacing:0.5px;
    color:#fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.7);
    font-weight: 700;
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

.rightlistBox .r1-head .Partenaires {
    font-size: 2em;
    margin:0 0 0 -75px
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
    bottom:80px;
    z-index: 99;
    width:120px;
    height:120px;
    transition: all .5s 0.3s ease-in-out;
    cursor: pointer;
    animation: toflow 2s ease-in-out infinite;
}
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
</style>

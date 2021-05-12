<!-- 登录注册 -->
<template>
    <div>
        <div class="container">
            <el-button @click=jump2Home()> Home </el-button>
            <h1 class="loginTitle">
                <a href="#/">{{this.$store.state.themeObj.user_start!=0?"ClubChinois":"ClubChinois(The function is not avalible now)"}}</a>
            </h1>
            <h3 class="noteTitle">The function is currently unavailable, this site is only used for display.</h3>
            <!-- 登录注册 -->
            <div v-show="!err2005" class="">
                <div v-if="login==1" class="loginBox">
                    <div class="lr-title">
                        <h1>Login</h1>
                        <p>
                            New account?<a href="#/Login?login=0" class="tcolors"> Register</a>
                        </p>
                    </div>
                    <el-alert
                        v-show="loginErr"
                        :title="loginTitle"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <el-input
                        type="email"
                        placeholder="Email"
                        v-model="email">
                    </el-input>
                    <el-alert
                        v-show="emailErr"
                        title="Input your email"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <el-input
                            type="pzassword"
                          placeholder="Password"
                           @keyup.enter.native="loginEnterFun"
                          v-model="password">
                    </el-input>
                    <el-alert
                        v-show="passwordErr"
                        title="Input your password"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <h3><a href="">Forget the password？</a></h3>
                    <div class="lr-btn tcolors-bg" @click="go2Home">登录</div>
                    <div class="otherLogin" >
                        <a href="javascript:void(0)"><i class="fa fa-fw fa-wechat"></i></a>
                        <a href="javascript:void(0)"><i class="fa fa-fw fa-qq"></i></a>
                        <a href="javascript:void(0)"><i class="fa fa-fw fa-weibo"></i></a>
                    </div>
                </div>


                <div v-else class="registerBox">
                    <div class="lr-title">
                        <h1>Register</h1>
                        <p>
                            Already signed up? <a href="#/Login?login=1" class="tcolors">Login</a>
                        </p>
                    </div>
                    <el-alert
                        v-show="registerErr"
                        :title="registerTitle"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <el-input
                        type="text"
                        placeholder="Account"
                        v-model="nusername">
                    </el-input>
                    <el-alert
                        v-show="nusernameErr"
                        title="Incorrect Account"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <el-input
                        type="email"
                        placeholder="Email"
                        v-model="nemail">
                    </el-input>
                    <el-alert
                        v-show="nemailErr"
                        title="Incorrect email"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <el-input
                          type="password"
                          placeholder="Password: 6-12 digits in letters, numbers, underscores"
                          v-model="npassword">
                    </el-input>
                    <el-alert
                        v-show="npasswordErr"
                        title="Incorrect password"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <el-input
                            type="password"
                          placeholder="Verify the password"
                           @keyup.enter.native="registerEnterFun"
                          v-model="npassword2">
                    </el-input>
                    <el-alert
                        v-show="npassword2Err"
                        title="Different from the first one"
                        type="error"
                        show-icon  :closable="false">
                    </el-alert>
                    <div class="lr-btn tcolors-bg" @click="newRegister" v-loading.fullscreen.lock="fullscreenLoading"  element-loading-text="Loading">Register</div>
                </div>
            </div>
            <!-- 注册进度状态 -->
            <div v-show="err2005" class="registerSuc">
                <div class="sucIcon">
                    <el-steps :space="100" :active="step" finish-status="success">
                      <el-step title="Register"></el-step>
                      <el-step title="Verify"></el-step>
                      <el-step title="Login"></el-step>
                    </el-steps>
                </div>
                <div v-show="urlstate==0" class="sucContent">
                    The account activation link has been sent to your email：{{nemail}}
                    <p>Please log in to your mailbox within 24 hours and follow the instructions in the email to complete the account activation operation</p>
                </div>
                <div v-show="urlstate=='urlInvalid'" class="sucContent">
                    The account has been activated, now log in &nbsp;&nbsp;<span class="tcolors-bg lastbtn" @click="goLogin">Login</span>
                </div>
                <div v-show="urlstate=='urlErr'" class="sucContent">
                    The mailbox activation address has timed out, the verification failed, please re-register &nbsp;&nbsp;<span class="tcolors-bg lastbtn" @click="goRegister">Register</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getRegister,UserLogin} from '../utils/server.js'
    export default {
        name: 'Login',
        data() { //选项 / 数据
            return {
                username: '',//用户名
                email: '',//邮箱
                password: '',//密码
                nusername: '',//新用户注册名
                nemail: '',//新用户注册邮箱
                npassword: '',//新用户注册密码
                npassword2: '',//新用户注册重复密码
                login: 0,//是否已经登录
                emailErr: false,//登录邮箱错误
                passwordErr: false,//的轮毂密码错误
                loginErr: false,//登录错误
                loginTitle:'用户名或密码错误',
                nusernameErr:false,//新用户注册用户名错误
                nemailErr: false,//新用户注册邮箱错误
                npasswordErr: false,//新用户注册密码错误
                npassword2Err: false,//新用户注册重复密码错误
                registerErr: false,//已注册错误
                registerTitle: '该邮箱已注册',
                err2005: false,//是否展示注册进度条状态
                step: 1,//注册进度
                fullscreenLoading: false,//全屏loading
                urlstate: 0,//重新注册
            }
        },
        methods: { //事件处理器
            jump2Home:function() {
                this.$router.push({path: '/'})
            },
            routeChange:function(){
                var that = this;
                that.login = that.$route.query.login==undefined?1:parseInt(that.$route.query.login);//获取传参的login
                that.urlstate = that.$route.query.urlstate==undefined?0:that.$route.query.urlstate;//获取传参的usrlstate状态码
                // console.log(that.login,that.urlstate);
                if(that.urlstate==0){
                    that.err2005 = false;
                    that.step = 1;
                }else if(that.urlstate=='urlInvalid'){
                    that.err2005 = true;
                    that.step = 2
                }else if(that.urlstate=='urlErr'){
                    that.err2005 = true;
                    that.step = 1;
                }
            },
            loginEnterFun: function(e){
                var keyCode = window.event? e.keyCode:e.which;
                // console.log('回车登录',keyCode,e);
                if(keyCode == 13 ){
                    this.go2Home();
                }
            },
            go2Home:function(){//用户登录
                var that = this;
                var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
                var preg = /^(\w){6,12}$/;
                if(reg.test(that.email)){
                    that.emailErr = false;
                }else{
                    that.emailErr = true;
                }
                if(that.password&&preg.test(that.password)){
                    that.passwordErr = false;
                }else{
                    that.passwordErr = true;
                }
                if(!that.emailErr&&!that.passwordErr){
                    if(localStorage.getItem('logUrl')){
                        that.$router.push({path:localStorage.getItem('logUrl')});
                    }else{
                        that.$router.push({path:'/'});
                    }
                
                //     UserLogin(that.email,that.password,function(msg){
                //         // console.log(msg);
                //         if(msg.code==1010){//登录成功
                //              localStorage.setItem('userInfo',JSON.stringify(msg.data));
                //              localStorage.setItem('accessToken',msg.token);
                //              if(localStorage.getItem('logUrl')){
                //                  that.$router.push({path:localStorage.getItem('logUrl')});
                //              }else{
                //                  that.$router.push({path:'/'});
                //              }

                //         }else if(msg.code==2008||msg.code==2007){//邮箱或密码错误
                //             that.loginErr = true;
                //             that.loginTitle = '邮箱或密码错误';
                //         }else if(msg.code==2009){//邮箱注册码未激活
                //             that.loginErr = true;
                //             that.loginTitle = '该邮箱注册码未激活，请前往邮箱激活';
                //         }else if(msg.code==2005){//邮箱注册码未激活已超时
                //             // that.loginErr = true;
                //             that.err2005 = true;
                //             // that.loginTitle = '该邮箱激活地址已超时，已发送新链接，请前往邮箱激活';
                //         }else{
                //             that.loginErr = true;
                //             that.loginTitle = '登录失败';
                //         }
                //     })
                }
            },
            registerEnterFun: function(e){
                var keyCode = window.event? e.keyCode:e.which;
                // console.log('回车注册',keyCode,e);
                if(keyCode == 13 ){
                    this.newRegister();
                }
            },
            newRegister:function(){//注册提交
                var that = this;
                var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
                var preg = /^(\w){6,12}$/;
                if(that.nusername){
                    that.nusernameErr = false;
                }else{
                    that.nusernameErr = true;
                }
                if(reg.test(that.nemail)){
                    that.nemailErr = false;
                }else{
                    that.nemailErr = true;
                }
                if(that.npassword&&preg.test(that.npassword)){
                    that.npasswordErr = false;
                    if(that.npassword==that.npassword2){
                        that.npassword2Err = false;
                    }else{
                        that.npassword2Err = true;
                    }
                }else{
                    that.npasswordErr = true;
                }
                if(!that.nusernameErr&&!that.nemailErr&&!that.npasswordErr){
                    that.fullscreenLoading = true;
                    var timer = setTimeout(function(){//注册中
                        that.fullscreenLoading = false;
                        that.err2005 = true;
                        that.step = 1;
                        clearTimeout(timer);
                    },3000)
                    // getRegister(that.nusername,that.npassword,that.nemail,function(msg){
                    //     if(msg.code==1010){//注册成功
                    //         var timer = setTimeout(function(){//注册中
                    //             that.fullscreenLoading = false;
                    //             that.err2005 = true;
                    //             that.step = 1;
                    //             clearTimeout(timer);
                    //         },3000)
                    //     }else if(msg.code==2002){//该邮箱已注册
                    //         that.fullscreenLoading = false;
                    //         that.registerErr = true;
                    //         that.registerTitle = '该邮箱已注册,可直接登录';
                    //     }else{
                    //         that.fullscreenLoading = false;
                    //         that.registerErr = true;
                    //         that.registerTitle = '注册失败';
                    //     }
                    // })
                }
            },
            goLogin:function(){//邮箱验证成功,去登陆
                this.err2005 = false;
                this.$router.push({path:'/Login?login=1'});
            },
            goRegister: function(){//去注册
                this.err2005 = false;
                this.$router.push({path:'/Login?login=0'});
            }

        },
        components: { //定义组件

        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           '$route':'routeChange'
         },
        created() { //生命周期函数
            var that = this;
            that.routeChange();
        }
    }
</script>

<style>
/*登录注册标题*/
.loginTitle{
    text-align: center;
    font-size: 26px;
    padding-top:50px;
    margin-bottom: 20px;
}
.noteTitle{
    text-align: center;
    font-size: 20px;
    padding-top:50px;
    margin-bottom: 20px;
}
.loginBox ,.registerBox{
    background: #fff;
    padding:40px;
    max-width:320px;
    margin:0 auto;
}
.loginBox{
    padding-bottom:0;
}
.lr-title{
    position: relative;
    height:32px;
    line-height: 32px;
    margin-bottom: 20px;
}
.lr-title h1{
    font-size: 24px;
    color:#666;
    font-weight: bold;
    /*width:50%;*/
}
.lr-title p{
    font-size: 12px;
    color:#999;
    position: absolute;
    right:0;
    top:0;
}
.lr-btn{
    color:#fff;
    text-align: center;
    letter-spacing: 5px;
    padding:8px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
}
.loginBox .el-input,.registerBox .el-input{
    margin-bottom: 20px;
}
.loginBox .el-alert ,.registerBox .el-alert{
    top:-18px;
    background-color: #888;
}
.loginBox .el-input input,.registerBox .el-input input{
    border-radius: 4px;
}
.loginBox h3,.registerBox h3{
    text-align: right;
    margin-bottom: 20px;
}
.loginBox h3 a,.registerBox h3 a{
    font-size: 13px;
    color:#999;
}
.loginBox .otherLogin{
    max-width:320px;
    padding:30px 40px;
    background: #ddd;
    text-align: center;
    margin-left:-40px;
    margin-right: -40px;
    visibility: hidden;
}
.loginBox .otherLogin p{
    margin-bottom:20px;
    font-size: 16px;
}
.loginBox .otherLogin a i{
    display: inline-block;
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    border-radius: 50%;
    color:#fff;
    margin: 0 10px;
}
.loginBox .otherLogin a i.fa-wechat{
    background: #7bc549;
}
.loginBox .otherLogin a i.fa-qq{
    background: #56b6e7;
}
.loginBox .otherLogin a i.fa-weibo{
    background: #ff763b;
}

/*登录成功*/
.registerSuc{
    padding: 40px;
    margin: 0 auto;
}
.registerSuc .sucIcon{
    text-align: center;
    margin-bottom: 30px;
    padding-left:60px;
}
.registerSuc .sucContent{
    line-height: 1.5;
    font-size: 15px;
    text-align: center;
}
.registerSuc .sucContent p{
    margin-top: 10px;
    font-size: 13px;
    color: #999;
}
.registerSuc .sucContent .lastbtn{
    display: inline-block;
    font-size: 14px;
    padding: 3px 10px;
    border-radius: 5px;
    color:#fff;
    cursor: pointer;
}
.registerSuc .sucContent  .el-icon-close{
    fong-size: 13px;
}
</style>

<template>
    <header>
        <div class="headBox">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
                <el-menu-item :index="$i18nRoute({ name: 'Home'})"><img class='nav-logo' src="@/assets/img/avatar_1.jpg" alt="logo"></el-menu-item>
				<el-menu-item :index="$i18nRoute({ name: 'Home'})"><i class="fa fa-wa fa-home"></i> Accueil </el-menu-item>
                <el-submenu>
                    <template slot="title">Événements</template>
						<el-menu-item :index="$i18nRoute({ name: 'event_1'})" disabled>Activity 1</el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'event_2'})" disabled>Activity 2</el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'event_3'})" disabled>Activity 3</el-menu-item>
                </el-submenu>
				<el-menu-item :index="$i18nRoute({ name: 'Zodiac'})"><i class="fa fa-wa fa-home"></i> Zodiac </el-menu-item>
				<el-menu-item :index="$i18nRoute({ name: 'Calendar'})"><i class="fa fa-wa fa-home"></i> Calendar </el-menu-item>
				<el-menu-item :index="$i18nRoute({ name: 'Greetings'})"><i class="fa fa-wa fa-home"></i> Greetings </el-menu-item>
				<el-menu-item :index="$i18nRoute({ name: 'Taboos'})"><i class="fa fa-wa fa-home"></i> Taboos </el-menu-item>
				<el-submenu :index="$i18nRoute({ name: 'Food'})">
                    <template slot="title">Traditions</template>
						<el-menu-item :index="$i18nRoute({ name: 'Food'})">Food</el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'Snacks'})">Snacks</el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'Desserts'})">Desserts</el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'LanternFestival'})">Lantern Festival</el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'Decorations'})">Decorations</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <!-- 移动端导航 -->
        <div class="mobileBox">
            <div class="hideMenu">
                <i @click="pMenu=!pMenu" class="el-icon-menu"></i> 
				<div class="logo mobile-logo">
					<img class='nav-logo' src="static/img/avatar_1.jpg" alt="logo">		
					<span>Club Chinois</span>
				</div>
				<el-collapse-transition>
                    <el-menu :default-active="activeIndex" class="mlistmenu" v-show="!pMenu" theme="dark" @open="handleOpen" @close="handleClose" :unique-opened="true" :router="true">
                        <el-menu-item :index="$i18nRoute({ name: 'Home'})"><i class="fa fa-wa fa-home"></i>  Accueil</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">Événements</template>
                            <el-menu-item index="Activity-1" disabled>Activity 1</el-menu-item>
                            <el-menu-item index="Activity-2" disabled>Activity 2</el-menu-item>
                            <el-menu-item index="Activity-3" disabled>Activity 3</el-menu-item>
                        </el-submenu>
						<el-menu-item :index="$i18nRoute({ name: 'Zodiac'})"><i class="fa fa-wa fa-home"></i> Zodiac </el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'Calendar'})"><i class="fa fa-wa fa-home"></i> Calendar </el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'Greetings'})"><i class="fa fa-wa fa-home"></i> Greetings </el-menu-item>
						<el-menu-item :index="$i18nRoute({ name: 'Taboos'})"><i class="fa fa-wa fa-home"></i> Taboos </el-menu-item>
						<el-submenu :index="$i18nRoute({ name: 'Food'})">
							<template slot="title">Traditions</template>
								<el-menu-item :index="$i18nRoute({ name: 'Food'})">Food</el-menu-item>
								<el-menu-item :index="$i18nRoute({ name: 'Snacks'})">Snacks</el-menu-item>
								<el-menu-item :index="$i18nRoute({ name: 'Desserts'})">Desserts</el-menu-item>						
								<el-menu-item :index="$i18nRoute({ name: 'LanternFestival'})">Lantern Festival</el-menu-item>
								<el-menu-item :index="$i18nRoute({ name: 'Decorations'})">Decorations</el-menu-item>
						</el-submenu>
					</el-menu>
                </el-collapse-transition>
            </div>
        </div>
    </header>
</template>

<script>
import { Typeit } from '@/utils/plug.js'

export default {
    name: 'header-nav',
    data() {
        return {
            userInfo: '', //用户信息
			haslogin: false, //是否已登录
			activeIndex: '/', //当前选择的路由模块
			state: '', //icon点击状态
			pMenu: true, //手机端菜单打开
			// path:'',//当前打开页面的路径
			input: '', //input输入内容
        }
    },
    components: {
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
		'$route': 'routeChange'
    },
    created() {
        //判断当前页面是否被隐藏
		var that = this;
		var hiddenProperty = 'hidden' in document ? 'hidden' :
			'webkitHidden' in document ? 'webkitHidden' :
			'mozHidden' in document ? 'mozHidden' :
			null;
		var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
		var onVisibilityChange = function() {
			if (document[hiddenProperty]) { //被隐藏
				document.title = 'Club Chinois';
			} else {
				document.title = 'Bonne Année'; //当前窗口打开
				if (that.$route.path != '/DetailShare') {
					if (localStorage.getItem('userInfo')) {
						that.haslogin = true;
					} else {
						that.haslogin = false;
					}
				}
			}
		}
		document.addEventListener(visibilityChangeEvent, onVisibilityChange);
		this.routeChange();
    },
    mounted() {
        // console.log('是否是慧慧',this.$store.state.themeObj.user_start);
		var that = this;
		var timer = setTimeout(function() {
			Typeit(that.$store.state.themeObj.user_start, "#luke"); //打字机效果
			clearTimeout(timer);
		}, 500);
    },
    methods: {
        searchChangeFun(e) { //input change 事件
			// console.log(e)
			if (this.input == '') {
				this.$store.state.keywords = '';
				this.$router.push({path:'/'});
			}
		},
		searchEnterFun: function(e) { //input 输入 enter
			 var keyCode = window.event? e.keyCode:e.which;
			// console.log('CLICK', this.input, keyCode)
            //  console.log('回车搜索',keyCode,e);
             if(this.input){
				 this.$store.state.keywords = this.input;
                 this.$router.push({path:'/Share?keywords='+this.input});
             }
		},
		logoinFun: function(msg) { //用户登录和注册跳转
			// console.log(msg);
			localStorage.setItem('logUrl', this.$route.fullPath);
			// console.log(666,this.$router.currentRoute.fullPath);
			if (msg == 0) {
				this.$router.push({ path: '/Login?login=0' });
			} else {
				this.$router.push({ path: '/Login?login=1' });
			}
		},
		// 用户退出登录
		userlogout: function() {
			var that = this;
			this.$confirm('是否确认退出?', '退出提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				// console.log(that.$route.path);
				if (localStorage.getItem('userInfo')) {
					localStorage.removeItem('userInfo');
					that.haslogin = false;
					//    that.$router.replace({path:that.$route.fullPath});
					window.location.reload();
					that.$message({
						type: 'success',
						message: '退出成功!'
					});
				}
				if (that.$route.path == '/UserInfo') {
					that.$router.push({ path: '/' });
				}
			}).catch(() => {
				//
			});

		},
		routeChange: function() {
			var that = this;
			that.pMenu = true
			this.activeIndex = this.$route.path == '/' ? '/Home' : this.$route.path;
			if (localStorage.getItem('userInfo')) { //存储用户信息
				that.haslogin = true;
				that.userInfo = JSON.parse(localStorage.getItem('userInfo'));
				// console.log(that.userInfo);
			} else {
				that.haslogin = false;
			}
			if ((this.$route.name == "Share" || this.$route.name == "Home") && this.$store.state.keywords) {
				this.input = this.$store.state.keywords;
			} else {
				this.input = '';
				this.$store.state.keywords = '';
			}
		},
		handleOpen() {
		},
		handleSelect() {
		},
		handleClose() {
		},
		
	},
    
}
</script>


<style>

</style>

<style lang="scss">
.headBox .el-menu {
	background: rgb(202, 6, 6);
	border-bottom: none!important;
}

.headBox .el-menu-demo li.el-menu-item,
.headBox .el-menu--horizontal .el-submenu .el-submenu__title {
	height: 38px;
	line-height: 38px;
	border-bottom: none!important;
}

.headBox li .fa-wa {
	vertical-align: baseline;
}

.headBox ul li.el-menu-item,
.headBox ul li.el-menu-item.is-active,
.headBox ul li.el-menu-item:hover,
.headBox .el-submenu div.el-submenu__title,
.headBox .el-submenu__title i.el-submenu__icon-arrow {
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
}

.headBox .el-menu--horizontal .el-submenu>.el-menu {
	top: 38px;
	border: none;
	padding: 0;
}

.headBox>ul li.el-menu-item:hover,
.headBox>ul li.el-submenu:hover .el-submenu__title {
	background: #48456C;
	border-bottom: none;
	color: white
}

.headBox>ul li.is-active {
	background: #fff;
	border-bottom: none;
	color: black !important; 
}

.headBox>ul .el-submenu .el-menu,
.headBox>ul .el-submenu .el-menu .el-menu-item {
	background: #48456C;
}

.headBox>ul .el-submenu .el-menu .el-menu-item {
	min-width: 0;
}

.headBox>ul .el-submenu .el-menu .el-menu-item:hover {
	background: #cccbdf;
}

.headBox .el-input__inner {
	height: 30px;
	border: none;
	background: #fff;
	/*border: 1px solid #333;*/
	border-radius: 2px;
	padding-right: 10px;
}

.headBox .userInfo {
	height: 100%;
	line-height: 38px;
	position: absolute;
	right: 30px;
	top: 0;
	color: #fff;
}

.headBox .userInfo a {
	color: #fff;
	font-size: 13px;
	transition: all 0.2s ease-out;
}

.headBox .userInfo a:hover {
	color: #48456C;
}

.headBox .nologin {
	text-align: right;
}

.headBox .haslogin {
	text-align: right;
	position: relative;
	min-width: 80px;
	cursor: pointer;
}

.headBox .haslogin:hover ul {
	visibility: visible;
	opacity: 1;
}

.headBox .haslogin ul {
	background: rgba(40, 42, 44, 0.6);
	padding: 5px 10px;
	position: absolute;
	right: 0;
	visibility: hidden;
	opacity: 0;
	transition: all 0.3s ease-out;
}

.headBox .haslogin ul li {
	border-bottom: 1px solid #48456C;
}

.headBox .haslogin ul li:last-child {
	border-bottom: 1px solid transparent;
}

/*******移动端*******/

.mobileBox {
	position: relative;
	height: 38px;
	line-height: 38px;
	color: #fff;
}
.nav-logo {
	height: 30px;
	line-height: 30px;
}
.hideMenu {
	position: relative;
	width: 100%;
	height: 100%;
	line-height: 38px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: rgb(202, 6, 6);
	.logo {
		display: flex;
		flex-direction: row;
		margin: 1vh 0 0.5vh 10vw;
		align-content: center;
		.nav-logo {
			margin-top: 0.2vh;
		}
		span {
			margin-left: 2vw;
			font-weight: bold;
		}
	}
}
.hideMenu ul.mlistmenu {
	width: 100%;
	position: absolute;
	left: 0;
	top: 100%;
	box-sizing: border-box;
	z-index: 999;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12), 0 0 8px 0 rgba(0, 0, 0, .04);
	background: #48456C;
	color: #fff;
	border-right: none;
}

.hideMenu .el-submenu .el-menu {
	background: #64609E;
}

.hideMenu .el-menu-item,
.hideMenu .el-submenu__title {
	color: #fff;
}

.hideMenu>i {
	position: absolute;
	left: 10px;
	top: 12px;
	width: 30px;
	height: 30px;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
}

.hideMenu .el-menu-item,
.el-submenu__title {
	height: 40px;
	line-height: 40px;
}

.mobileBox .searchBox {
	padding-left: 40px;
	width: 100%;
	box-sizing: border-box;
}

.mobileBox .searchBox .el-input__inner {
	display: block;
	border-radius: 2px;
	border: none;
	height: 25px;
}

.hideMenu ul.mlistmenu.pshow {
	display: block;
}

.hideMenu ul.mlistmenu .el-submenu__icon-arrow,
.mobileBox li.el-menu-item a {
	color: #fff;
}

.hideMenu>ul li.el-menu-item:hover,
.hideMenu>ul li.el-menu-item.is-active {
	background: #48576a;
}

@media (max-width: 770px) {
	.headBox .el-menu-demo li.el-menu-item,
	.headBox .el-menu-demo li.el-submenu .el-submenu__title {
		font-size: 90%;
	}
}
</style>
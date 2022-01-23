<!-- 底部公用 -->
<template>
    <div v-if="this.$store.state.themeObj.user_start!=0" class="footBack footBackQian">
        <div class="fcontainer">
			<div class="address">
				<div class="title"> Addresse</div>
				<p>1 rue Joliot Curie <br> 91190 Gif-Sur-Yvette</p>
			</div>
			<div class="desc">
				<p>
					This website has already been around for <span v-html='longTime'>{{longTime}}</span>
				</p>
				<p>
					<a href="https://www.aliyun.com/?spm=a2c49.11131515.0.0.5Z9AkR" target="_blank">AliCloud</a> Provide static file cloud storage service. 
				</p>
				<p>
					© 2022 <a href="#">Club Chinois</a>.powered by  <a href="https://cn.vuejs.org/" target="_blank">Vue</a> 
				</p>
				<p>
					<span>Made by Club Chinois</span>
				</p>
			</div>
            <div class="contact">
				<div class="title"> Contact</div>
				<p><a href="mailto:clubchinois.cs@gmail.com">clubchinois.cs@gmail.com</a></p>
			</div>
        </div>
    </div>

</template>

<script>
    export default {
        data() { //选项 / 数据
            return {

                longTime:'',
            }
        },
        methods: { //事件处理器
            runTime:function(){//运行倒计时
                var that = this;
                var oldTime =new Date('2021/12/21 00:00:00');
                var timer = setInterval(function(){
                    var nowTime = new Date();
                    var longTime = nowTime - oldTime;
                    var days = parseInt(longTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
                      var hours = parseInt(longTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
                      var minutes = parseInt(longTime / 1000 / 60 % 60, 10);//计算剩余的分钟
                      var seconds = parseInt(longTime / 1000 % 60, 10);//计算剩余的秒数
                      that.longTime = days+" days " + hours+" hours " + minutes+" mins "+seconds+" secs ";
                },1000)
            }
        },
        components: { //定义组件

        },
        created() { //生命周期函数
            //替换底部图片
            var that = this;
            that.runTime();
        }
    }
</script>

<style>
.footBack{
    color:#888;
    margin-top: -10px;
    font-size: 12px;
    line-height: 1.5;
    text-align: center;
    width:100%;
    min-height: 50px;
    margin-top:-25px;
    /*position: relative;*/
    position: absolute;
    /*min-height: 368px;*/
}
.footBack .fcontainer{
	display: flex;
	flex-direction: row;
	justify-content: space-around;
    width:100%;
    background: #232323;
    /*top:294px;*/
    /*left:0;*/
    /*position: absolute;*/
    padding:15px 10px 10px 10px;
    box-sizing: border-box;
    /*z-index: 1;*/
    width: 100%!important;
	
}
.address .title,
.contact .title{
	font-size: 20px;
	font-weight: bold;
}
.address p,
.contact p{
	font-size: 14px;
}

.footBack p{
    margin:5px 0;
    z-index: 3;
}
.footBack a{
    color:#795548;
    z-index: 3;
}
.footBack a:hover{
    color:#000;
}
@media (max-width: 600px)  {
	.desc {display: none} 
}

</style>

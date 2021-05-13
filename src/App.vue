<template>
  <div id="app">
      
      <keep-alive :include="['Aboutme', 'Message', 'FriendsLink', 'Reward']">
          <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">

// 原博客主提色
@tcolors:#791b2b;//按钮和标签颜色
@tcolorm:#e20b3a;//分类的选中的颜色
@tcolord:#e4be6d;//按钮hover 的颜色

// /***** 粉红色主题****/
// @tcolors:#97dffd;//按钮和标签颜色
// @tcolorm:#64609E;//分类的选中的颜色
// @tcolord:#48456D;//按钮hover 的颜色
//
// /******淡黄色主题*****/
// @tcolors:#97dffd;//按钮和标签颜色
// @tcolorm:#64609E;//分类的选中的颜色
// @tcolord:#48456D;//按钮hover 的颜色
//
// /****** 淡紫色主题 ****/
// @tcolors:#97dffd;//按钮和标签颜色
// @tcolorm:#64609E;//分类的选中的颜色
// @tcolord:#48456D;//按钮hover 的颜色


/*************其他内容*************/


//时间和标题
.s-round-date{
  position: absolute;
  top:-20px;
  left:-35px;
  height:60px;
  width:70px;
  padding-top:10px;
  border-radius: 100px;
  color:#fff;
  background: @tcolors;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.s-round-date span{
  text-align: center;
  display: block;
}
.s-round-date .day{
  font-size: 30px;
  font-weight: 700;
}

.tcolors{
    color:@tcolors;
}
.tcolorm{
    color:@tcolorm;
}
.tcolord{
    color:@tcolord;
}
.tcolors-bg{
    background: @tcolors;
    transition: all .3s ease-in-out;
}
.tcolord-bg{
    background: @tcolord;
}
.tcolors-bg:hover{
    background: @tcolord;
}

.paginationBox li.active{
    background: @tcolorm;
}
.paginationBox li:hover{
    color:@tcolord;
}
.el-pagination button:hover{
    color:@tcolord;
}


//公共标签
.ui.label{
    border-color:@tcolors;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    background-color: #97dffd;
    margin:5px 0 15px 2px;
    font-size: 14px;
    position: relative;
    left:-32px;
    border-radius: 0 4px 4px 0;
    padding:7px 11.2px 7px 32px;
    display: inline-block;
    color:#fff;
}
.ui.label::after{
    position: absolute;
    content: '';
    top:100%;
    left:0;
    border-top: 0 solid transparent;
    border-right-width:1em;
    border-right-color:@tcolord;
    border-right-style:solid;
    border-bottom: 1em solid transparent;
    border-left: 0 solid transparent;
    width:0;
    height:0;
}
.ui.label a{
    color:#fff;
    line-height: 100%;
}

</style>

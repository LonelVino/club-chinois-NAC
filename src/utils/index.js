import Vue from 'vue'
import axios from 'axios'
//公共路径
// let portUrl = "http://www.mangoya.cn/port/";
let portUrl = "http://"+window.location.host+"/port/";

//初始化时间
const initDate = (oldDate,full) => {
    var odate = new Date(oldDate);
    var year =  odate.getFullYear();
    var month = odate.getMonth()<9? '0' + (odate.getMonth()+1) : odate.getMonth()+1;
    var date = odate.getDate()<10? '0'+odate.getDate() : odate.getDate();
    if(full=='all'){
        var t = oldDate.split(" ")[0];
        // console.log(oldDate,t.split('-')[0],t.split('-')[1],t.split('-')[2]);
        return t.split('-')[0]+'年'+t.split('-')[1]+'月'+t.split('-')[2]+'日';
    }else if(full=='year'){
        return year
    }else if(full== 'month'){
        return odate.getMonth()+1
    }else if(full == 'date'){
        return date
    }else if(full== 'newDate'){
        return year+'年'+month+'月'+date+'日';
    }
}


export {
        //注册
        //登录
        //退出登录
        //分类
        //导航信息
        //查询文章列表
        //文章详情
        //流量多的文章
        //评论最多的文章
        //文章评论列表
        //其他评论列表
        //设置文章评论
        //设置其他评论
        //do you like me
        //设置 do you like me
        //文章收藏 文章点赞
        //赞赏数据
        //用户信息查询
        //修改用户信息
        initDate,//设置时间
        //获取主题信息
    }

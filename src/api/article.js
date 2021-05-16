//文章分类查询
const ArtClassData = (callback) => {
    if(sessionStorage.getItem('classList')){
        var data = JSON.parse(sessionStorage.getItem('classList'));
        callback && callback(data)
    }else{
        let url = portUrl + 'article/ArtClassData';
        // axios.get(url).then(num => {
        //     // console.log(num);
        //     if(num.data.code==1001){
        //         sessionStorage.setItem('classList',JSON.stringify(num.data.data));
        //         callback && callback(num.data.data)
        //     }else{
        //         alert("查询失败")
        //     }
        // })
    }
}
//查询文章列表
const ShowArticleAll = (artId,cateId,articleName,level,callback) =>{
    if(level == 1){
        var url = portUrl + 'nav/ActiveClassAllData?art_id='+artId+'&cate_id='+cateId+'&article_name='+articleName;
    }else{
        var url = portUrl + 'article/ShowArticleAll?art_id='+artId+'&cate_id='+cateId+'&article_name='+articleName;
    }
    // axios.get(url).then(num => {
    //         callback && callback(num.data);
    // })
}

//查询文章详情
const getArticleInfo = (artId,userId,callback) =>{
    let url = portUrl + 'article/getArticleInfo?art_id='+artId+'&user_id='+userId;
    // axios.get(url).then(num => {
    //     if(num.data.code==1001){
    //         callback && callback(num.data.data);
    //     }else{
    //         alert("查询失败");
    //     }
    // })
}


//查询文章评论数据
const ArticleComment = (artId,commentId,callback) =>{
    let url = portUrl + 'comment/ArticleComment?art_id='+artId+'&comment_id='+commentId;
    axios.get(url).then(num => {
            callback && callback(num.data);
    })
}


//文章评论
const setArticleComment = (content,user_id,article_id,leave_pid,pid,callback) =>{
    let url = portUrl + 'comment/setArticleComment?content='+content+'&user_id='+user_id+'&article_id='+article_id+'&leave_pid='+leave_pid+'&pid='+pid;
    // axios.get(url).then(num => {
    //         callback && callback(num.data);
    // })
}
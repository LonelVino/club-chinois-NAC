
//查询其他评论数据
const OtherComment = (leaveId,commentId,callback) =>{//分类类型ID（1：赞赏 2：友情链接 3：留言板 4：关于我）
    let url = portUrl + 'comment/OtherComment?leave_id='+leaveId+'&comment_id='+commentId;
    // axios.get(url).then(num => {
    //     callback && callback(num.data);
    // })
}



//其他评论
const setOuthComment = (content,user_id,article_id,leave_id,leave_pid,pid,callback) =>{
    let url = portUrl + 'comment/setOuthComment?content='+content+'&user_id='+user_id+'&article_id='+article_id+'&leave_id='+leave_id+'&leave_pid='+leave_pid+'&pid='+pid;
    // axios.get(url).then(num => {
    //         callback && callback(num.data);
    // })
}
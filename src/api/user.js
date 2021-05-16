
//查询用户信息
const getUserInfo = (userId,callback)=>{
    let url = portUrl + 'Userinfo/getUserInfo?user_id='+userId;
    axios.get(url).then(num => {
        if(num.data.code==1001){
            callback && callback(num.data);
        }else{
            alert("查询失败");
        }
    })
}

//修改用户信息
const UserInfoSave = (obj,callback) =>{
    let url = portUrl + 'Userinfo/UserInfoSave';
    var data = {
        'username':obj.username,
        'user_img':obj.avatar,
        'email':obj.email,
        'sex':obj.sex,
        'friend_start':obj.state,
        'user_id':obj.user_id,
        'frie_name':obj.name,
        'frie_url':obj.url,
        'frie_description':obj.description,
        'friend_img':obj.image,
        'label':obj.label,
        'head_start':obj.head_start,
        'logo_start':obj.logo_start
    };
    // console.log(data);
    axios.get(url,{params:data}).then(num => {
        if(num.data.code==1001){
            callback && callback(num.data.msg);
        }else{
            alert("保存失败");
        }
    })
}
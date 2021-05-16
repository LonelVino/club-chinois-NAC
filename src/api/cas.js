
//用户注册
const getRegister = (username,password,email,callback) =>{
    let url = portUrl+'login/getRegister?username='+username+'&email='+email+'&password='+password;
    // axios.get(url).then(num => {
    //         callback && callback(num.data)
    // })
}

//用户登录
const UserLogin =  (email,password,callback) =>{
    let url = portUrl + 'login/UserLogin?email='+email+'&password='+password;
    // axios.get(url).then(num => {
            // callback && callback(num.data);
    // })
}
//用户退出
const LoginOut = (token,callback) =>{
    let url = portUrl + 'login/LoginOut?token='+token;
    // axios.get(url).then(num => {
    //         callback && callback(num.data);
    // })
}

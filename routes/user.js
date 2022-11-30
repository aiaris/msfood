//引入第三方模块
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//3.创建路由对象
const router = express.Router();
//用户注册接口
router.post('/register', (req, res) => {
  //console.log(md5('12345678'));
  // 获取用户名和密码信息
  let username = req.body.username;
  let password = req.body.password;
  //以username为条件进行查找操作，以保证用户名的唯一性
  let sql = 'SELECT COUNT(uid) AS count FROM mstx_user WHERE username=?';
  pool.query(sql, [username], (error, results) => {
    if (error) throw error;
    let count = results[0].count;
    if (count == 0) {
      // 将用户的相关信息插入到数据表
      sql = 'INSERT mstx_user(username,password) VALUES(?,?)';
      pool.query(sql, [username, password], (error, results) => {
        if (error) throw error;
        res.send({ message: 'ok', code: 200 });
      })
    } else {
      res.send({ message: 'user exists', code: 201 });
    }
  });
});

//(2)用户登录
//请求方式：post
//路由地址: /user/login
//接收传参的方法：req.body
router.post('/login',(req,res,next)=>{
  //查看前台传值是否已到
  let obj = req.body;
  // console.log(obj);
  //执行sql查询
  pool.query('select * from mstx_user where username=? and password=?',[obj.username,obj.password],(err,data)=>{
    //排错,处理错误
    if(err){next(err);
      return;}
    //查看数据库是否返回查询结果
    // console.log(data);
    //判断是否查询到数据
    if(data.length == 0){
      //没查到数据
      res.send({
        "code":0,
        "msg":"该用户未注册"
      });
    }else {
      res.send({
        "code":1,
        "msg":"登录成功"
      })
    }
  })

})

//忘记密码路由
//先根据用户输入的用户名，找到用户id:SELECT uid FROM `mstx_user` WHERE username="胖胖"
//http://127.0.0.1:3000/user/userId?username=胖胖
router.get("/userId",(req,res,next)=>{
let obj=req.query
pool.query('SELECT uid FROM mstx_user WHERE username=?',[obj.username],(err,data)=>{
if(err){next(err);return;}
if(data.length!=0){
res.send({
"code":200,
"msg":"查询成功",
data
})
}else{
res.send({
"code":201,
"msg":"查询错误"
})
}
})
})

//根据用户id修改用户密码
//UPDATE `mstx_user` SET  password="123456" WHERE uid=8
//http://127.0.0.1:3000/user/updateUser
router.post("/updateUser", (req, res, next) => {
  let obj = req.body
  //console.log(obj)
  pool.query('UPDATE mstx_user SET  password=? WHERE uid=?', [obj.password, obj.uid], (err, data) => {
    if (err) { next(err); return; }
    if (data.affectedRows == 1) {
      res.send({
        "code": 1,
        "msg": "修改成功"
      })
    } else {
      res.send({
        "code": 0,
        "msg": "修改失败"
      })
    }
  })
})




//导出路由对象
module.exports=router;
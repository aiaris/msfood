//引入第三方express
const express = require('express');
//引入cors跨域解决模块
const cors = require("cors");
const multer = require('multer')

const uuid = require('uuid')
//引入咨询路由
const newsRouter=require("./routes/news.js")
const foodRouter=require("./routes/food.js")
const menuRouter=require("./routes/menu.js")
const createRouter=require("./routes/create.js")
const userRouter=require("./routes/user.js")
const sharRouter=require("./routes/shar.js")
//支持history路由模式，需要安装模块：npm i connect-history-api-fallback
const history=require("connect-history-api-fallback")

//创建web服务器
const app = express();
//cors解决跨域
app.use(cors())

app.use(history())


// 静态资源托管upload目录
app.use(express.static('upload'))
app.use(express.static('dist'))
//设置端口
app.listen(3000,()=>{
console.log("服务器启动了")
})
//解析url-encoded数据格式
app.use(express.urlencoded({ extended: false}));//post请求
//挂载路由
app.use('/news',newsRouter);
app.use('/food',foodRouter);
app.use('/menu',menuRouter);
app.use('/create',createRouter);
app.use('/user',userRouter);
app.use('/shar',sharRouter);
//处理错误中间件
app.use((err, req, res, next) => {
  //查看错误信息
  console.log(err);
  //响应500,返回相关信息
  res.status(500).send({
    code:500,
    msg:'服务器错误'
  });
});
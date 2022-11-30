//引入第三方模块
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//3.创建路由对象
const router = express.Router();

//(1)资讯列表展示
//请求地址：http://127.0.0.1:3000/news/list?htype=
//请求方式:GET
router.get("/list",(req,res,next)=>{
let obj=req.query
pool.query('SELECT hid,httile, subtitle, htime, himg FROM mstx_heal WHERE htype=?',[obj.htype],(err,data)=>{
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
//资讯详情页展示
//SELECT hid, httile, htime, hdetail, himg FROM mstx_heal WHERE hid=1
//请求地址：http://127.0.0.1:3000/news/detail?hid=
//请求方式:GET
router.get("/detail",(req,res,next)=>{
let obj=req.query
pool.query('SELECT hid,htype, httile, htime, hdetail, himg FROM mstx_heal WHERE hid=?',[obj.hid],(err,data)=>{
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

//资讯详情页下面的连接列表
//SELECT `hid`, `httile`, `subtitle`, `htype` FROM `mstx_heal` WHERE hid!=1 AND htype="最新发布"
//请求地址：http://127.0.0.1:3000/news/link?hid=1&htype=最新推荐
//请求方式:GET
router.get("/link",(req,res,next)=>{
let obj=req.query
pool.query('SELECT hid, httile, subtitle FROM mstx_heal WHERE hid!=?',[obj.hid],(err,data)=>{
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

//(4)根据输入框输入的内容，模糊查询对应的文章列表
//SELECT hid,httile, subtitle, htime, himg FROM mstx_heal WHERE httile LIKE "%宿便%"
//请求地址：http://127.0.0.1:3000/news/search?httile=宿便
//请求方式:GET
router.get("/search",(req,res,next)=>{
let obj=req.query
var mz="%"+obj.httile+"%"
pool.query('SELECT hid,httile, subtitle, htime, himg FROM mstx_heal WHERE httile LIKE ?',[mz],(err,data)=>{
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
"msg":"没有相关信息"
})
}
})
})



//导出路由对象
module.exports=router;
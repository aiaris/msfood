//菜单以及菜谱详情接口
//引入第三方模块
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//3.创建路由对象
const router = express.Router();

//(1)所有菜单页展示
//请求地址：http://127.0.0.1:3000/menu/list
//请求方式:GET
router.get("/list",(req,res,next)=>{
  pool.query('SELECT mid, mname, finished_img,username FROM mstx_menu,mstx_user where mstx_menu.uid=mstx_user.uid',(err,data)=>{
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
  
//2.根据食材id找到菜单列表接口
//select mid, mname, finished_img,fname from mstx_ingredients,mstx_menu where mstx_ingredients.fid=mstx_menu.fid and mstx_ingredients.fid=1
//请求地址：http://127.0.0.1:3000/menu/food_list?fid=1
//请求方式:GET
router.get("/food_list",(req,res,next)=>{
  let obj=req.query
  pool.query('select mid, mname, finished_img,fname from mstx_ingredients,mstx_menu where mstx_ingredients.fid=mstx_menu.fid && mstx_ingredients.fid=?',[obj.fid],(err,data)=>{
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

//3.根据菜谱菜单id找到菜单做法步骤接口
//select * from mstx_menu,mstx_step where mstx_step.mid=mstx_menu.mid && mstx_menu.mid=?
//请求地址：http://127.0.0.1:3000/menu/step?mid=?
//请求方式:GET
router.get("/step",(req,res,next)=>{
  let obj=req.query
  pool.query('select * from mstx_menu,mstx_step where mstx_step.mid=mstx_menu.mid && mstx_menu.mid=?',[obj.mid],(err,data)=>{
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

  //(4)首页展示前32条菜单数据
//请求地址：http://127.0.0.1:3000/menu/listTop
//请求方式:GET
router.get("/listTop",(req,res,next)=>{
  pool.query('SELECT mid, mname, finished_img,username FROM mstx_menu,mstx_user where mstx_menu.uid=mstx_user.uid limit 32',(err,data)=>{
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

  //（5）根据关键字在搜索框模糊查询菜单
//SELECT mid, mname, finished_img FROM mstx_menu WHERE mname LIKE "%虾%"
//请求地址：http://127.0.0.1:3000/menu/search?mname=虾
//请求方式:GET
router.get("/search",(req,res,next)=>{
  let obj=req.query
  var mz="%"+obj.mname+"%"
  pool.query('select mid, mname, finished_img,username FROM mstx_menu,mstx_user where mstx_menu.uid=mstx_user.uid && mname LIKE ?',[mz],(err,data)=>{
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
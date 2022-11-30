// 食材列表接口
//引入第三方模块
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//3.创建路由对象
const router = express.Router();

//食材列表展示
//请求地址：http://127.0.0.1:3000/food/list
//请求方式:GET
router.get("/list",(req,res,next)=>{
  pool.query('SELECT * FROM mstx_ingredients ',(err,data)=>{
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

//首页展示12条食材列表展示
//请求地址：http://127.0.0.1:3000/food/listTop
//请求方式:GET
router.get("/listTop",(req,res,next)=>{
  pool.query('SELECT * FROM mstx_ingredients limit 12',(err,data)=>{
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


  //导出路由对象
module.exports=router;
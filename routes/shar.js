// 引入第三方模块、
const express = require('express');
// 引入链接池模块
const pool = require('../pool.js')
// 3.创建如有对象
const router = express.Router();

// 笔记展示
// 请求地址：http://127.0.0.1:3000/shar/noteList?id=1
// 请求方式 GET
router.get('/noteList', (req, res, next) => {
  let obj = req.query;
  let sql = `SELECT m.id,m.shar_time,m.shar_img,m.shar_title,m.uid,m.big_img,u.username,u.avatar_image FROM mstx_shar  m
  left join mstx_user u
  on m.uid = u.uid
  `;

  let con="where  m.id = ?";
  if(obj.id){
    sql+=con;
    pool.query(sql, [obj.id], (err, data) => {
      wan(err,data,res,next)
      
    })
  }else{
    pool.query(sql,  (err, data) => {
      wan(err,data,res,next)
      
    })
  }
  
})
function wan(err,data,res,next){
  if (err) { next(err); return; }
    if (data.length != 0) {
      res.send({
        "code": 200,
        "msg": "查询成功",
        data
      })
    } else {
      res.send({
        "code": 201,
        "msg": "查询错误"
      })
    }
}



//导出路由对象
module.exports = router;
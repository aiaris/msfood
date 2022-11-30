//引入第三方模块
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//3.创建路由对象
const router = express.Router();

//配置multer中间件
const uuid = require('uuid')
const multer = require('multer')
obj = multer.diskStorage({
  destination: function (req, file, cb) { //指定目录
    cb(null, 'upload')
  },
  filename: function (req, file, cb) { // 指定文件名
    let name = file.originalname
    // name:  abcd.jpg    xxxdfdd.zip
    let ext = name.substr(name.lastIndexOf('.'))
    cb(null, uuid.v4() + ext)
  }
})
const uploadTools = multer({
  storage: obj
})

//(1)服务器存储照片接口
//接口地址：http://127.0.0.1:3000/create/upload(需要传参：uploadFile)
//请求方式:POST
router.post('/upload',
  uploadTools.array('uploadFile'), (req, res) => {
    console.log(req.files)
    let urls = []
    req.files.forEach(item => {
      urls.push(`http://localhost:3000/${item.filename}`)
      return `http://localhost:3000/${item.filename}`
    })
    res.send({ code: 200, msg: 'ok', urls })
  })

//（2）存储照片信息的接口
//接口地址：接口地址：http://127.0.0.1:3000/create/store(需要传参：cname,cdetail,cimg)
//请求方式:POST

router.post("/store", (req, res, next) => {
  let obj = req.body
  console.log(obj)
  pool.query('select uid from mstx_user where username=?', [obj.username], (err, result) => {
    if (err) { next(err); return; }
    if (result.length == 1) {
      let uid = result[0].uid
      console.log(uid)
      pool.query('insert into mstx_createM( cname, cdetail, cimg,ctime,uid) value(?,?,?,?,?)', [obj.cname, obj.cdetail, obj.cimg, obj.ctime, uid], (err, data) => {
        if (err) { next(err); return; }
        if (data.affectedRows == 1) {
          res.send({
            "code": 1,
            "msg": "插入成功"
          })
        } else {
          res.send({
            "code": 0,
            "msg": "插入失败"
          })
        }
      })
    }
  })
})
// 用户信息修改
router.post("/setuser", (req, res, next) => {
  let obj = req.body
  console.log(obj)
  pool.query('Update  mstx_user  set  sex=?,email=?,avatar_image=?,signature=?  where  username=?', [obj.sex, obj.email, obj.avatar_img, obj.signature, obj.username], (err, data) => {
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
router.post("/setpwd", (req, res, next) => {
  let obj = req.body
  console.log(obj)
  pool.query("select * from mstx_user where password=? and username=?", [obj.upwd, obj.username], (err, data) => {
    if (err) { next(err); return; }
    if (data.length == 1) {

      pool.query('Update  mstx_user  set  password=?  where  username=?', [obj.repwd, obj.username], (err, data) => {
        if (err) { next(err); return; }
        if (data.affectedRows == 1) {
          res.send({
            "code": 1,
            "msg": "修改成功"
          })
        } 
      })
    }else {
      res.send({
        "code": 0,
        "msg": "修改失败"
      })
    }
  })
})
//（4）根据菜单id删除菜单
//http://127.0.0.1:3000/create/del(参数cid)
////请求方式:POST
router.post("/del", (req, res, next) => {
  let obj = req.body
  console.log(obj)
  pool.query('DELETE FROM `mstx_createm` WHERE cid=?', [obj.cid], (err, data) => {
    if (err) { next(err); return; }
    if (data.affectedRows == 1) {
      res.send({
        "code": 1,
        "msg": "删除成功"
      })
    } else {
      res.send({
        "code": 0,
        "msg": "删除失败"
      })
    }
  })
})


//用户插入菜单展示
//请求地址：http://127.0.0.1:3000/create/list
//请求方式:GET
router.get("/list", (req, res, next) => {
  let obj = req.query
  console.log(obj.username)
  pool.query('select uid from mstx_user where username=?', [obj.username], (err, result) => {
    if (err) { next(err); return; }
    if (result.length == 1) {
      let uid = result[0].uid
      pool.query('SELECT * FROM mstx_createM where uid=?', [uid], (err, data) => {
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
      })
    }
  })
})

//用户信息展示
//请求地址：http://127.0.0.1:3000/create/user?username=?
//请求方式:GET
router.get("/user", (req, res, next) => {
  let obj = req.query
  console.log(obj.username)
  pool.query('SELECT * FROM mstx_user where username=?', [obj.username], (err, data) => {
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
  })
})
// 用户菜谱展示
router.get("/menu", (req, res, next) => {
  let obj = req.query
  console.log(obj.username)
  pool.query('select uid from mstx_user where username=?', [obj.username], (err, result) => {
    if (err) { next(err); return; }
    if (result.length == 1) {
      let uid = result[0].uid
      pool.query('SELECT mid,mname,finished_img,materials FROM mstx_menu where uid=?', [uid], (err, data) => {
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
      })
    }
  })
})

//导出路由对象
module.exports = router;
//引入mysql模块
const mysql = require('mysql');
//创建连接池对象
const pool = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'mstx',
  connectionLimit:15
});
//3.导出(暴露)对象
module.exports = pool;
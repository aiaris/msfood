<template>
  <div class="for-get">
    <div>
      <img src="/1.png" alt="" />
      <span>|</span>
      <span>找回密码</span>
    </div>
    <el-form :rules="rules" ref="form" :model="form" label-width="100px" >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" class="w">下一步</el-button>
      </el-form-item>
    </el-form>
    <div>如有疑问，请发送邮件联系客服 help@meishichina.com</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        username: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
       //console.log(this.form.username);
      this.axios.get(`/user/userId?username=${this.form.username}`).then(res=>{
        //console.log(res);
        //console.log(res.data.data[0].uid);
        if(res.data.code==201){
          this.$notify.error({
          title: '错误',
          message: '未查询到该用户信息'
        });
          return
        }
        this.$router.push(`/get_pwd/${res.data.data[0].uid}`)
      })
  },
  }
};
</script>

<style  scoped src="../assets/css/getfor.css">
</style>

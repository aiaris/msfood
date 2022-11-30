<template>
  <div class="for-get">
    <div>
      <img src="/1.png" alt="" />
      <span>|</span>
      <span>找回密码</span>
    </div>
    <el-form :rules="rules" ref="form" :model="form" label-width="100px">
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="form.pwd" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" :disabled="!form.pwd"
          class="w">提交并修改密码</el-button
        >
      </el-form-item>
    </el-form>
    <div>如有疑问，请发送邮件联系客服 help@meishichina.com</div>
  </div>
</template>

<script>
export default {
  props: ["uid"],
  data() {
    return {
      form: {
        pwd: "",
      },
      rules: {
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 6, message: "密码长度6位数字", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    submitForm() {
      const params = `uid=${this.uid}&password=${this.form.pwd}`
      this.axios.post("/user/updateUser", params).then(res => {
        //console.log(res);
        if (res.data.code == 1) {
          this.$router.push("/login")
          this.$message({
            message: "修改成功!请登录",
            type: "success",
          })
        } else {
          this.$message.error("密码修改失败")
        }
      })
    },
  },
}
</script>

<style scoped src="../assets/css/getfor.css"></style>

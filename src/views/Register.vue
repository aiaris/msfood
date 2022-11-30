<template>
  <div class="login">
    <div class="sel" v-if="sel && al">请认真阅读用户协议，并勾选</div>
    <div class="loginbox">
      <div class="loginbox_h">
        <a href="javascript:;" class="on">注册</a>
        <router-link to="/login">登录</router-link>
      </div>
      <div class="loginbox_c" style="clear: both; height: 285px">
        <div class="loginbox_l">
          <ul>
            <li>
              <label for="uname"></label>
              <input
                v-model="username"
                required
                minlength="3"
                maxlength="12"
                type="text"
                name="username"
                placeholder="请输入用户名"
                id="uname"
                @blur="checkName"
              />
              <span v-show="show" class="user">用户名不能为空</span>
            </li>
            <li style="border: 0">
              <label for="password"></label>
              <input
                v-model="password"
                minlength="6"
                maxlength="12"
                type="password"
                name="password"
                placeholder="请输入密码"
                id="password"
                @blur="al = true"
                @focus="checkPwd"
              />
              <span v-show="showed" class="user">密码必须6位数字</span>
            </li>
          </ul>
          <label>
            <input type="checkbox" @click="checkbox" />
            注册即代表你同意美食天下《
            <router-link to="/yhxy">用户协议</router-link> 》和《
            <router-link to="/yszc">隐私政策</router-link> 》
          </label>
          <el-button
            @click="login"
            type="primary"
            id="loginbtn"
            class="loginbtn"
            :disabled="sel"
          >
          注  册
          </el-button>
        </div>
        <div class="loginbox_r">
          <img
            width="110"
            style="margin: 50px 0 0"
            src="../assets/ewm.png"
            alt=""
          />
          <p style="padding-bottom: 10px">扫描二维码下载客户端</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      sel: true,
      al: false,
      show: false,
      showed: false,
    }
  },
  methods: {
    checkPwd() {
      if (this.password && /^\d{6}$/.test(this.password)) {
        this.showed = false
      } else {
        this.showed = true
      }
    },
    checkName() {
      this.show = !this.username
    },
    login() {
      const { username, password } = this
      console.log(username, password)
      const url = "http://39.103.66.129:3001/user/register"
      const params = `username=${username}&password=${password}`
      console.log(url, params)

      this.axios.post(url, params).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.$router.push("/login")
           this.$message({
            message: "注册成功!请登录",
            type: "success",
          })
        } else this.$message.error("注册失败");
      })
    },
    checkbox(e) {
      //console.log(e.target.checked);
      this.sel = !e.target.checked
    },
  },
}
</script>

<style src="../assets/css/login.css" scoped></style>

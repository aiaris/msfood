<template>
  <div class="login">
    <div class="sel"  v-if="sel && al">
      请认真阅读用户协议，并勾选
    </div>
    <div class="loginbox">
      <div class="loginbox_h">
        <router-link to="/register">注册</router-link>
        <a href="javascript:;" class="on">登录</a>
      </div>
      <div class="loginbox_c" style="clear: both; height: 285px">
        <div class="loginbox_l">
          <ul>
            <li>
              <label for="username"></label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="手机号/昵称:"
                v-model="username"
                @blur="checkName"
              />
              <span v-show="show" class="user">用户名不能为空</span>
            </li>
            <li style="border: 0">
              <label for="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="密码："
                v-model="password"
                @blur="al=true"
                @focus="checkPwd"
              />
              <span v-show="showed" class="user">密码必须6位数字</span>
            </li>
          </ul>
          <p class="clear">
            <router-link class="right" to="/for_get">忘记密码？</router-link>
          </p>
          <label>
             <!-- <i class=" el-icon-mouse" style="color:red" v-if="sel && al"></i>  -->
            <input type="checkbox" @click="checkbox" />
            登录即代表你同意美食天下《
            <router-link to="/yhxy">用户协议</router-link> 》和《 <router-link to="/yszc">隐私政策</router-link> 》
          </label>
          <el-button
            id="loginbtn"
            class="loginbtn"
            @click="login"
            :disabled="sel"
             type="primary"
            >
            登录
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
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      sel: true,
      al:false,
      show:false,
      showed:false
    };
  },
  methods: {
    ...mapMutations(["updataUsername"]),
    checkPwd(){
      if(this.password && /^\d{6}$/.test(this.password)){
        this.showed=false
      }else{
        this.showed=true
      }
    },
    checkName(){
      this.show=!this.username
    },
    login() {
      const { username, password } = this;
      console.log(username, password);
      const url = "/user/login";
      const params = `username=${username}&password=${password}`;
     // console.log(url, params);

      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          const url = `/create/user?username=${username}`;
          this.axios.get(url).then((res) => {
            console.log(res.data.data[0].avatar_image);
            this.updataUsername({
              name: this.username,
              avatar: res.data.data[0].avatar_image,
            });
            this.$router.push("/");
            this.$message({
            message: "登陆成功！！",
            type: "success",
          })
          });
        } else this.$message.error("用户名或密码有误");
      });
    },
    checkbox(e) {
      //console.log(e.target.checked);
      this.sel = !e.target.checked;
    },
  },
};
</script>

<style src="../assets/css/login.css" scoped>
</style>
<style>
.el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover{
  background-color: #ff6767;
  border-color: #ff6767;
}
</style>

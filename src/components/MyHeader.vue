<template>
  <div v-if="!$route.meta.hideHead">
    <div class="ntop">
      <!-- 导航条 -->
      <div class="nav">
        <!-- 导航条左侧列表 -->
        <ul class="navlist">
          <li class="btli bt1">
            <router-link :to="'/'"><i class="bi">美食天下</i>首页</router-link>
          </li>
          <li class="btli"><router-link to="/menu">菜谱</router-link></li>
          <li class="btli"><router-link to="/food">食材</router-link></li>
          <li class="btli"><router-link to="/health">健康</router-link></li>
          <li class="btli"><router-link to="/shar">笔记</router-link></li>
          <li class="btli"><a href="/health_search">搜索</a></li>
          <li class="btli bt2"></li>
          <li class="btli bt2"></li>
        </ul>
        <!-- 导航条右侧 -->
        <div class="rightbbtn">
          <div>
            <div class="rbtn" v-if="!this.$store.state.username">
              <router-link :to="'/login'" class="bttn">登录/注册</router-link>
            </div>
            <div class="user_avatar" v-else>
              <router-link to="/center"
                ><img :src="imgBase+this.$store.state.useravatar" alt=""
              /></router-link>
              <span @click="quit">退出</span>
            </div>
          </div>
          <ul class="navright">
            <li class="btri btr2 nr1">
              发布
              <ul class="rightlist">
                <li><router-link to="/center">发菜谱</router-link></li>
                <li><router-link to="/center">发笔记</router-link></li>
              </ul>
            </li>
            <li class="btri nr3">
              <router-link to="/mobile">客户端</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["imgBase"]),
  },
  methods: {
    quit() {
      this.$confirm("确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.commit("updataUsername", {})
          this.$router.push("/login")
          sessionStorage.removeItem("name")
          this.$message({
            type: "success",
            message: "退出成功!",
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          })
        })
    },
  },
}
</script>

<style src="../assets/index.css"></style>

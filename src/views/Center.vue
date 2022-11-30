<template>
  <div>
    <el-container>
      <el-aside width="110px">
        <ul class="menu">
          <li @click="id = 'member'" :class="{ active: id == 'member' }">
            会员<br />中心
          </li>
          <li @click="id = 'recipe'" :class="{ active: id == 'recipe' }">
            菜谱
          </li>
          <li @click="id = 'myblog'" :class="{ active: id == 'myblog' }">
            日志
          </li>
          <li @click="id = 'mycollect'" :class="{ active: id == 'mycollect' }">
            菜单
          </li>
          <li @click="id = 'myfav'" :class="{ active: id == 'myfav' }">收藏</li>
          <li @click="id = 'myset'" :class="{ active: id == 'myset' }">
            账户<br />设置
          </li>
        </ul>
      </el-aside>
      <el-main style="height:100vh,overflow: visible;">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.path.split("/").pop(),
    }
  },
  watch: {
    id(newValue, oldValue) {
      this.$router.push(`/center/${newValue}`)
    },
  },
}
</script>

<style src="@/assets/center/center.css" scoped></style>
>

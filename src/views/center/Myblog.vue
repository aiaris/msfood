<template>
  <div class="recipe">
    <!-- 标头 -->
    <el-tabs v-model="activeName"  class="tab">
      <el-tab-pane label="我的日志" name="1">
        <div class="no_data">
          <p>您还没有发布日志噢，快点击这里<a href="#">发布新日志</a>吧!</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="2"
        ><div class="no_data"><p>您没有处于待审核的日志!</p></div></el-tab-pane
      >
      <el-tab-pane label="草稿箱" name="4"
        ><div class="no_data">
          <p>您没有未提交审核的日志!</p>
        </div></el-tab-pane
      >
    </el-tabs>
    <!-- 按钮 -->
    <router-link class="recipe-btn" to="#">发布新日志</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>
<style>
.el-tabs__item.is-active{
  color:#F56C6C;
}
.el-tabs__item:hover{
  color:#F56C6C;
}
.el-tabs__active-bar{
  background-color: #F56C6C;
}
</style>
<style src="@/assets/center/recipe.css" scoped>

</style>
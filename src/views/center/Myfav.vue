<template>
  <div class="recipe">
    <!-- 标头 -->
    <el-tabs v-model="activeName"  class="tab">
      <el-tab-pane label="我收藏的菜谱" name="1">
        <div class="no_data">
          <p>您还没有收藏任何菜谱!</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="话题" name="2"
        ><div class="no_data"><p>您还没有收藏任何话题!</p></div></el-tab-pane
      >
      <el-tab-pane label="草稿箱" name="3"
        ><div class="no_data" >
          <p>您还没有收藏任何日志!</p>
        </div></el-tab-pane
      >
      <el-tab-pane label="草稿箱" name="4"
        ><div class="no_data" >
          <p>您还没有收藏任何菜单!</p>
        </div></el-tab-pane
      >
      <el-tab-pane label="草稿箱" name="5"
        ><div class="no_data" >
          <p>您还没有收藏任何专题!</p>
        </div></el-tab-pane
      >
    </el-tabs>
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
<template>
  <div class="recipe">
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="我的菜谱" name="1">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder="搜索我发布的菜品"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>搜索</el-button>
          </el-form-item>
        </el-form>
        <!-- 无信息 -->
        <div>
          <div class="no_data" v-if="!menudata">
            <p>您还没有发布新菜谱噢，快点击这里<a href="#">发布新菜谱</a>吧!</p>
          </div>
          <div
            class="create-detail"
            v-else
            v-for="(d, i) in menudata.data"
            :key="i"
          >
            <div class="create-item">
              <img :src="imgBase + d.finished_img" alt="" />
              <div>
                <h3>{{ d.mname }}</h3>
                <div v-html="d.materials"></div>
              </div>
            </div>

            <div>
              <el-button type="danger" plain size="medium">编辑</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="2"
        ><div class="no_data"><p>您没有处于待审核的菜谱!</p></div></el-tab-pane
      >
      <el-tab-pane label="退稿箱" name="3"
        ><div class="no_data"><p>您没有审核未通过的菜谱!</p></div></el-tab-pane
      >
      <el-tab-pane label="草稿箱" name="4"
        ><div class="no_data">
          <p>您没有未提交审核的菜谱!</p>
        </div></el-tab-pane
      >
    </el-tabs>
    <router-link class="recipe-btn" to="#">发布新菜谱</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["imgBase"]),
  },
  data() {
    return {
      activeName: "1",
      menudata: null,
    }
  },
  mounted() {
    this.getmenu()
  },
  methods: {
    getmenu() {
      const url = `/create/menu?username=${this.$store.state.username}`
      this.axios.get(url).then(res => {
        console.log(res)
        this.menudata = res.data
      })
    },
  },
}
</script>

<style>
.el-tabs__item.is-active {
  color: #f56c6c;
}
.el-tabs__item:hover {
  color: #f56c6c;
}
.el-tabs__active-bar {
  background-color: #f56c6c;
}
</style>
<style src="@/assets/center/recipe.css" scoped></style>

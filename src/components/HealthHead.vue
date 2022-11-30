<template>
  <div class="health-head">
    <!-- logo 搜索框一楼 -->
    <div class="f1">
      <div>
        <img src="../assets/1.jpg" alt="" />
        <el-button type="danger">{{ title }}</el-button>
      </div>

      <div style="width: 350px">
        <el-input placeholder="请输入内容" v-model="input" @keyup.enter.native="goSearch">
          <el-button slot="append" icon="el-icon-search" @click.native.capture="goSearch"
            >搜索</el-button
          >
        </el-input>
      </div>
    </div>
    <!-- 一楼结束 -->
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      input: null,
    };
  },
  methods: {
    goSearch() {
      const path = `/menu_search/${this.input}`;
      if (!this.input) {
        if(this.$route.path!=`/menu`){
          this.$router.push(`/menu`);
          this.input = "";
        }      
      } else {
        if (this.$route.path != path) {
          this.$router.push(path);
          this.input = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.health-head {
  margin: 30px auto 0;
  width: 1000px;
}
.f1 {
  display: flex;
  justify-content: space-between;
}
.f1 > div:first-child {
  display: inline-flex;
}
.f1 > div:first-child > button {
  height: 50px;
  margin-left: 50px;
  font-size: 18px;
}
</style>
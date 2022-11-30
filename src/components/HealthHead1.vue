<template>
  <div class="health-head">
     <!-- logo 搜索框一楼 -->
    <div class="f1">
      <div>
        <img src="../assets/1.jpg" alt="" />
        <el-button type="danger">{{title}}</el-button>
      </div>
      
      <div style="width: 350px">
        <el-input placeholder="请输入内容" v-model="search" @keyup.enter.native="goSearch">
          <el-button
            slot="append"
            icon="el-icon-search"
            >
            <router-link :to="`/health_search/${search}`">
            搜索
            </router-link>
            </el-button
          >
        </el-input>
      </div>
    </div>
    <!-- 一楼结束 -->
  </div>
</template>

<script>
export default {
 props:["title"],
 data() {
   return {
     search: ""
   }
 },
 methods: {
   goSearch() {
     const path=`/health_search/${this.search}`
     if(! this.search){return}
     if(this.$route.path!=path){
       this.$router.push(path)
       this.search=""
     }
     
   }
 },
}
</script>

<style scoped>
.health-head{
  margin: 30px auto 0;
  width: 1000px;
}
.f1{
  display: flex;
  justify-content: space-between;
}
.f1>div:first-child{
  display:inline-flex;
}
.f1>div:first-child>button{
 height: 50px;
 margin-left: 50px;
 font-size: 18px;
}
a{
  text-decoration: none;
  color:#999;
}
</style>
<template v-if="data">
  <div class="health-detail">
    <div v-for="d in data.data" :key="d.hid">
      <!-- logo 搜索框一楼 -->
      <!-- <health-head title="饮食健康" /> -->
      <health-head-1 title="饮食健康"/>
      <!-- 一楼结束 -->
      <!-- 二楼开始 -->
      <div class="mbx">
        <span>您的位置：</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">美食天下</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/health' }"
            >饮食健康</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ d.htype }}</el-breadcrumb-item>
          <el-breadcrumb-item>正文</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 二楼结束 -->
      <!-- 正文开始 -->
      <template>
        <div class="zw">
          <h2>{{ d.httile }}</h2>
          <div>{{ moment(d.htime).format("YYYY年MM月DD日 HH:mm:ss") }}</div>
          <div v-html="d.hdetail"></div>
        </div>
      </template>
    </div>
    <!-- 正文结束 -->
    <!-- 推荐链接开始 -->

    <div class="health_tjlj" v-if="ListData">
      <h2>为你推荐（健康专栏）</h2>
      <div v-for="l in ListData.data" :key="l.hid">
        <h4 @click="$router.push(`/health_detail/${l.hid}`)">{{ l.httile }}</h4>
        <p>
          {{ l.subtitle }}
        </p>
      </div>
    </div>

    <!-- 推荐链接结束 -->
  </div>
</template>

<script>
import HealthHead1 from '@/components/HealthHead1.vue'
// import HealthHead from "@/components/HealthHead.vue"
export default {
  components: { HealthHead1 },
  // components: { HealthHead },
  props: ["hid"],
  watch: {
    hid(to, from) {
      this.getData()
      this.getListData()
      window.scrollTo(0, 0)
    },
  },
  data() {
    return {
      data: "",
      ListData: "",
    }
  },
  methods: {
    getData() {
      this.axios(`/news/detail?hid=${this.hid}`).then(res => {
        //console.log(res)
        this.data = res.data
      })
    },
    getListData() {
      this.axios.get(`/news/link?hid=${this.hid}`).then(res => {
        //console.log(res)
        this.ListData = res.data
      })
    },
  },
  mounted() {
    this.getData()
    this.getListData()
  },
}
</script>

<style scoped src="../assets/health1.css"></style>
<style>
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #666;
  font-weight: 400;
}
.el-breadcrumb__inner a:hover,
.el-breadcrumb__inner.is-link:hover {
  color: #f56c6c;
}
</style>

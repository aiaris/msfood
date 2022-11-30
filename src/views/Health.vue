<template>
  <div class="health">
    <!-- logo 搜索框一楼 -->
   <health-head-1 title="饮食健康"/>
    <!-- 一楼结束 -->
    <!-- 导航2楼开始 -->
    <template>
      <!-- @tab-click="handleClick" -->
      <el-tabs v-model="activeName" v-if="data" @tab-click="handleClick">
        <el-tab-pane label="最新推荐" name="最新推荐">
          <health-cell
            :HealthData="list"
            v-for="list in data.data"
            :key="list.hid"
          />
        </el-tab-pane>
        <el-tab-pane label="最新发布" name="最新发布">
          <health-cell
            :HealthData="list"
            v-for="list in data.data"
            :key="list.hid"
          />
        </el-tab-pane>
        <el-tab-pane label="饮食常识" name="饮食常识">
          <health-cell
            :HealthData="list"
            v-for="list in data.data"
            :key="list.hid"
          />
        </el-tab-pane>
        <el-tab-pane label="瘦身美容" name="瘦身美容">
          <health-cell
            :HealthData="list"
            v-for="list in data.data"
            :key="list.hid"
          />
        </el-tab-pane>
        <el-tab-pane label="母婴饮食" name="母婴饮食">
          <health-cell
            :HealthData="list"
            v-for="list in data.data"
            :key="list.hid"
          />
        </el-tab-pane>
        <el-tab-pane label="食疗食补" name="食疗食补">
          <health-cell
            :HealthData="list"
            v-for="list in data.data"
            :key="list.hid"
          />
        </el-tab-pane>
      </el-tabs>
    </template>
    <!-- 2楼结束 -->
  </div>
</template>

<script>
import HealthCell from "@/components/HealthCell.vue"
import HealthHead1 from '@/components/HealthHead1.vue'
// import HealthHead from "@/components/HealthHead.vue" HealthHead
export default {
  components: { HealthCell, HealthHead1 },
  data() {
    return {
      activeName: "最新推荐",
      data: "",
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      // console.log(this.activeName);
      this.getData()
    },
    getData() {
      this.axios.get(`/news/list?htype=${this.activeName}`).then(res => {
        // console.log(res);
        this.data = res.data
      })
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style src="../assets/health1.css" scoped></style>

<template>
  <div class="slindex">
    <!-- 健康食疗 -->
    <div class="jksl">
      <div class="jkslnav">
        <router-link :to="'/health'">健康</router-link>
        <router-link :to="'/health'" class="jknar3">健康首页</router-link>
      </div>
      <router-link :to="'/health_detail/26'">
        <img src="/zjt/7.jpg" class="jkslt" />
      </router-link>
      <div class="jsdinr">
        <ul v-for="health in health" :key="health.hid">
          <li>
            <router-link :to="`/health_detail/${health.hid}`"
              ><i class="el-icon-fork-spoon"></i
              >{{ health.httile }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- 烘焙 -->
    <div class="jksl">
      <div class="jkslnav">
        <router-link :to="'/health'">烘焙</router-link>
        <router-link :to="'/health'" class="jknar3">烘焙专区</router-link>
      </div>
      <router-link :to="'/health_detail/20'">
        <img src="/zjt/8.jpg" class="jkslt" />
      </router-link>
      <div class="jsdinr">
        <ul v-for="hnews in hnews" :key="hnews.hid">
          <li>
            <router-link :to="`/health_detail/${hnews.hid}`"
              ><i class="el-icon-tableware"></i>{{ hnews.httile }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- 为您推荐 -->
    <div class="jksl">
      <div class="jkslnav">
        <router-link :to="'/health'">为您推荐</router-link>
        <router-link :to="'/health'" class="jknar4">我的收藏</router-link>
      </div>
      <router-link :to="'/health_detail/18'">
        <img src="/zjt/9.jpg" class="jkslt" />
      </router-link>
      <div class="jsdinr">
        <ul v-for="hpush in hpush" :key="hpush.hid">
          <li>
            <router-link :to="`/health_detail/${hpush.hid}`"
              ><i class="el-icon-potato-strips"></i
              >{{ hpush.httile }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      health: [],
      hnews: [],
      hpush: [],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getHealth()
    this.getHnews()
    this.getHpush()
  },
  methods: {
    getHealth() {
      const url = "/news/list?htype=最新发布"
      this.axios.get(url).then(res => {
        // console.log(res);
        this.health = res.data.data
      })
    },
    getHnews() {
      const url = "/news/list?htype=最新推荐"
      this.axios.get(url).then(res => {
        // console.log(res);
        this.hnews = res.data.data
      })
    },
    getHpush() {
      const url = "/news/list?htype=饮食常识"
      this.axios.get(url).then(res => {
        // console.log(res);
        this.hpush = res.data.data
      })
    },
  },
}
</script>

<style scoped src="../assets/health.css"></style>

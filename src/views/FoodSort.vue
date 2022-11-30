<template>
  <div>
    <health-head title="食材" />
    <div class="box" v-if="info">
      <div>
        <h2>{{ info[0].fname }}</h2>
      </div>
      <div>
        <h3>{{ info[0].fname }}的做法</h3>
        <div v-for="site in info" :key="site.mid">
          <router-link :to="'food-detail/' + site.mid">
            <div>
              <img :src="/images/ + site.finished_img" />
            </div>
            <p>{{ site.mname }}</p>
            <!-- <span>__</span> -->
          </router-link>
          <a href="#">__</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import HealthHead from "@/components/HealthHead.vue"
export default {
  components: { HealthHead },
  data() {
    return {
      info: null,
    }
  },
  mounted() {
    axios
      .get(`/menu/food_list${location.search}`)
      .then(response => (this.info = response.data.data))
      .catch(function (error) {
        console.log(error)
      })
    console.log(this.info)
  },
}
</script>

<style lang="scss" scoped>
.box {
  margin: 0 auto 0;
  width: 1000px;
}

.box > div:first-child > h2 {
  font-size: 32px;
  padding: 20px 0 10px 0;
}
.box > div:last-child > h3 {
  width: 100%;
  font-size: 20px;
  color: #ff6767;
  text-align: left;
  padding: 10px 0 10px 0;
}
.box > div:last-child {
  width: 1000px;
  padding-bottom: 300px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.box > div:last-child > div {
  width: 220px;
  height: 275px;
  display: block;
  margin-right: 40px;
}
.box > div:last-child > div:nth-child(4n + 1) {
  margin-right: 0;
}
.box > div:last-child > div > a {
  text-decoration: none;
}
.box > div:last-child > div > a:first-child > div {
  width: 220px;
  height: 220px;
  overflow: hidden;
}
.box > div:last-child > div > a:first-child > div > img {
  width: 220px;
  height: 220px;
  transition: all 0.5s;
}
.box > div:last-child > div > a:first-child > div > img:hover {
  transform: scale(1.2);
}
.box > div:last-child > div > a:first-child > p {
  font-size: 20px;
  color: #333;
}
.box > div:last-child > div > a:first-child:hover > p {
  color: red;
}
.box > div:last-child > div > a:last-child {
  font-size: 15px;
  color: #999;
}
.box > div:last-child > div > a:last-child:hover {
  color: red;
}
</style>

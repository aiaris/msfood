<template>
  <div>
    <health-head title="菜谱"/>
    <div class="m-menu">
      <div class="m-title">
        <div class="r-title">
          <a>新秀菜谱</a>
          <a>一周热门</a>
          <a>最受欢迎的家常菜</a>
        </div>
        <div class="l-title">
          <a>热菜</a>
          <a>凉菜</a>
          <a>主食</a>
          <a>小吃</a>
          <a>饮品</a>
          <a>家常菜谱</a>
          <a>菜谱首页</a>
        </div>
      </div>
      <div class="m-food">
        <div class="food-cell" v-if="data">
    <div v-for="{ mid, mname,finished_img,username } in data" :key="mid" class="food">
      <router-link :to="`/food-detail/${mid}`">
        <div class="f-box"> 
          <img :src='/images/+finished_img'>
        </div>
      </router-link>
      <span>{{mname}}</span>
      <p>{{username}}</p>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script>

import HealthHead from '@/components/HealthHead.vue';
// import FoodDetail from './FoodDetail.vue';

export default {
  components: {  HealthHead },
  props:["mname"],
  data() {
    return {
      data: null
    }
  },
  methods: {
    getData() {
      this.axios.get(`/menu/search?mname=${this.mname}`).then(res=>{
        //console.log(res);
        this.data=res.data.data
      })
    }
  },
  mounted () {
    this.getData();
  },
  watch: {
    mname(newValue, oldValue) {
      this.getData();
    }
  },
};
</script>
<style src="../assets/css/FoodCell.css" scoped></style>
<style src="../assets/css/MyMenu.css" scoped></style>

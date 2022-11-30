<template>
  <div>
      <!-- 首页logo搜索 -->
    <health-head title="首页"/>
    <!-- 轮播图 -->
    
    <el-carousel height="360px" :interval="3000" arrow="always">
      <el-carousel-item>
        <router-link to="food-detail/24"><img src="/lbt/1.jpg" alt="" /></router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="food-detail/25"><img src="/lbt/2.jpg" alt="" /></router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="food-detail/26"><img src="/lbt/3.jpg" alt="" /></router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="food-detail/27"><img src="/lbt/4.jpg" alt="" /></router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="food-detail/28"><img src="/lbt/5.jpg" alt="" /></router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="food-detail/29"><img src="/lbt/6.jpg" alt="" /></router-link>
      </el-carousel-item>
    </el-carousel>
    <!-- 菜谱 -->
    <my-menu/>
    <!-- 时令食材 -->
    <food-ingredients/>
    <!-- 食材文章 -->
    <hea-lth />
  </div>
</template>
<script>
import HeaLth from "@/components/HeaLth.vue";
import MyMenu from '@/components/MyMenu.vue';
import FoodIngredients from '@/components/FoodIngredients.vue';
import HealthHead from '@/components/HealthHead.vue';

export default {
  components: { HeaLth, MyMenu, FoodIngredients, HealthHead },
  
};
</script>
<style>
.el-carousel--horizontal {
  width: 1000px;
  margin: 0 auto;
}
.el-carousel__item img {
  line-height: 360px;
  width: 100%;
}
</style>
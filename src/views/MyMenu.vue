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
        <food-cell />
      </div>
    </div>
  </div>
</template>

<script>
import FoodCell from "@/components/FoodCell.vue";
import HealthHead from '@/components/HealthHead.vue';

export default {
  components: { FoodCell, HealthHead },
};
</script>

<style src="../assets/css/MyMenu.css" scoped></style>

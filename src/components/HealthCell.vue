<template>
  <div>
    <div class="health-cell" @click="$router.push(`/health_detail/${HealthData.hid}`)">
      <img :src="`/images/${HealthData.himg}`" alt="" />
      <div>
        <h3>{{ HealthData.httile }}</h3>
        <div>{{ moment(HealthData.htime).format("YYYY年MM月DD日 HH:mm:ss") }}</div>
        <p>
          {{ HealthData.subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["HealthData"],
  
};
</script>

<style src="../assets/health1.css" scoped>
</style>
<style >
.el-tabs__item.is-active{
  color:#F56C6C;
}
.el-tabs__item:hover{
  color:#F56C6C;
}
.el-tabs__active-bar{
  background-color: #F56C6C;
}
</style>
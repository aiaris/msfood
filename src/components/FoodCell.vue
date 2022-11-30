<template>
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
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getData() {
      const url = "/menu/list";
      this.axios.get(url).then((res) => {
        //console.log(res.data);
        this.data = res.data.data;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style src="../assets/css/FoodCell.css" scoped></style>

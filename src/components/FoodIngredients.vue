<template>
  <!-- 时令食材 -->
  <div class="finav">
    <!-- 1搂 -->
    <div class="finar1">
      <div class="finar2">
        <h2 class="on">
          <router-link :to="'/food'">时令食材</router-link>
        </h2>
        <div class="finar3">
          <router-link :to="'/food'">食材首页</router-link>
          <a href="#">米面豆乳</a>
          <a href="#">蔬菜</a>
          <a href="#">水产品</a>
          <a href="#">肉禽蛋</a>
          <a href="#">食疗食补</a>
          
        </div>
      </div>
    </div>
    <hr />
    <!-- 食材区 -->
    <div class="finav2" v-if="foods">
      <ul v-for="foods in foods" :key="foods.fid">
        <li>
          <router-link :to="`/foodsort?fid=${foods.fid}`" class="nra">
            <div class="finard"> 
              <img :src="`/images/${foods.fimg}`">
            </div>
            {{foods.fname}}
          </router-link>
          <p>{{foods.fdescribe}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: []
    }
  },
  mounted(){
    window.scrollTo(0,0)
    this.getFoods()
  },
  methods: {
    getFoods() {
    const url='/food/listTop'
      this.axios.get(url).then((res)=>{
        console.log(res);
        this.foods=res.data.data
      })
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  user-select: none;
}
.finav {
  width: 1000px;
  margin: 0 auto;
}
.finar2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.finar2 .on a {
  color: #ff6767;
}

.finar3 a {
  color: #666;
  margin: 10px;
  font-size: 16px;
}
.finar3 a:hover {
  color: #ff6767;
}
.finav2 {
  height: 385px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}
.finard {
  width: 148px;
  height: 148px;
  overflow: hidden;
}
.finard img{
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  transition: 0.3s;
}
.finard img:hover{
  transform: scale(1.1);
}

.finav2 ul li .nra{
  color: #666;
}
.finav2 ul li .nra:hover{
  color: #ff6767;
}

</style>
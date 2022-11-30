<template>
  <div>
    <div class="menunav">
      <a href="#" class="menunr1">新秀菜谱</a>
      <hr />
      <div class="menudetil" v-if="menu">
        <ul class="menul" v-for="menu in menu" :key="menu.mid">
          <li>
            <router-link :to="`/food-detail/${menu.mid}`" class="menraa">
              <div class="menr2">
                <img :src="`/images/${menu.finished_img}`" />
              </div>
              <p>{{ menu.mname }}</p>
            </router-link>
            <a href="#">{{ menu.username }}</a>
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
      menu: [],
    };
  },
  mounted() {
    window.scrollTo(0,0)
    this.getMenu();
  },
  methods: {
    getMenu() {
      const url = "/menu/listTop";
      this.axios.get(url).then((res) => {
        // console.log(res);
        this.menu = res.data.data;
      });
    },
  },
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
.menunav {
  width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
}
.menunav .menunr1 {
  color: #ff6767;
  font-size: 20px;
}
.menunav .menudetil {
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.menunav .menudetil ul li {
  width: 230px;
  height: 305px;
  text-align: center;
  overflow: hidden;
}
.menunav .menudetil .menr2 {
  width: 230px;
  height: 230px;
  overflow: hidden;
}
.menunav .menudetil img {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  transition: 0.3s;
}
.menunav .menudetil .menr2 img:hover {
  transform: scale(1.1);
}
.menunav .menudetil ul li a:last-child {
  color: #666;
  font-size: 13px;
}
.menunav .menudetil ul li a:last-child:hover {
  color: #ff6767;
}
.menunav .menudetil ul li .menraa {
  font-size: 18px;
  color: #666;
}
.menunav .menudetil ul li .menraa:hover {
  color: #ff6767;
}
</style>
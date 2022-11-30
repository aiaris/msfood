<template>
  <div id="app">
    <!-- 网页头组件 -->
    <my-header />

    <!--身体组件  -->
    <keepAlive>
      <router-view v-if="$route.meta.keepAlive" />
    </keepAlive>

    <router-view v-if="!$route.meta.keepAlive" />
    <!-- 回到顶部 -->
    <img
      src="/images/goTop.png"
      alt=""
      class="top"
      v-if="showBtn"
      @click="gotop"
      style="position: fixed; bottom: 100px; right: 100px"
    />

    <!-- 网页尾组件 -->
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue"
import MyHeader from "./components/MyHeader.vue"
export default {
  components: { MyHeader, MyFooter },
  data() {
    return {
      showBtn: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showbtn, true)
  },
  methods: {
    showbtn() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      if (scrollTop > 300) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
    },
    gotop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
}
div {
  display: block;
}
</style>

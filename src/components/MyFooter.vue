<template>
  <div v-if="!$route.meta.hideFooter">
    <!-- 首页尾部 -->
    <div class="botm">
      <!-- 左侧 -->
      <div class="bomleft">
        <a href="#" class="nar1">美食天下-让吃更美好</a>
        <!-- 2搂 -->
        <div class="bomnar1">
          <a href="#">关于我们</a>
          <a href="#">联系我们</a>
          <a href="#">加入我们</a>
          <a href="#">服务声明</a>
          <a href="#">友情链接</a>
          <a href="#">网站地图</a>
          <a href="#">移动应用</a>
        </div>
        <!-- 3搂 -->
        <div class="bomnar2">
          <span style="font-weight: bold; font-size: 13px">友情链接：</span>
          <a href="#">愉悦妈妈</a>
          <a href="#">自由乐</a>
          <a href="#">爱奇艺生活</a>
          <a href="#">中华美食网</a>
          <a href="#">太平洋亲子网</a>
          <a href="#">红餐网</a>
          <a href="#">妈妈网</a>
          <a href="#">亲宝网</a>
          <a href="#">中国地图</a>
          <a href="#">民福康健康</a>
          <a href="#">波奇网</a>
          <a href="#">企业服务平台</a>
          <a href="#">餐饮杰</a>
        </div>
        <!-- 3搂 -->
        <div class="bomnar3">
          <span>版权所有 © 2004-2022</span>
          <a href="#">美食天下</a>
          <span> 保留所有权利 -</span>
          <img height="14" src="//static.meishichina.com/v6/img/beian.png" />
          <a href="#">京公安网备&nbsp;11010502031041号</a>
          <i>/</i>
          <span>京ICP证090244号</span>
          <i>/</i>
          <a href="#">京IC备10020153号</a>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="bomright">
        <img
          class="imgLoad"
          width="250"
          height="100"
          src="https://static.meishichina.com/v6/img/mobile.png"
          title="美食天下移动版"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style src="../assets/footer.css">
</style>
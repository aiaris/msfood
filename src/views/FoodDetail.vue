<template>
  <div class="food" v-if="data">
    <!-- 左侧 -->
    <div>
      <div class="food-detail">
        <!-- 图片文字描述部分 -->
        <div class="t-img">
          <h2>{{ data[0].mname }}</h2>
          <img :src="/images/ + data[0].finished_img" />
          <span>
            <span></span>
            {{ data[0].mdescribe }}
          </span>
          <!-- 菜品的用料 -->
        </div>
        <!-- 用料部分 -->
        <div class="t-data">
          <!-- 标题 -->
          <span>
            <img src="../assets/xiaoyuanquan.png" />
            食材明细
          </span>
          <!-- 食材，... -->
          <div class="t-datas">
            <!-- 主料 -->
            <div v-html="data[0].materials"></div>
            <!-- 辅料 -->
            <div v-html="data[0].accessories"></div>
            <!-- 其他 -->
            <div v-if="data[0].ingredients"></div>
            <!-- 工艺 -->
            <div>
              <span>
                <a>口味：</a>
                {{ data[0].flavor }}
              </span>
              <span>
                <a>工艺：</a>
                {{ data[0].workmanship }}
              </span>
              <span>
                <a>时间：</a>
                {{ data[0].mtime }}
              </span>
              <span>
                <a>难度：</a>
                {{ data[0].difficulty }}
              </span>
            </div>
          </div>
        </div>
        <!-- 步骤部分 -->
        <div class="t-steps">
          <span>
            <img src="../assets/xiaoyuanquan.png" />
            方法步骤</span
          >
          <div class="t-step" v-for="i in data" :key="i.sid">
            <img :src="/images/ + i.simg" alt="" />
            <div class="t-text">
              <span>{{ i.sort }}</span>
              <p>{{ i.explain }}</p>
            </div>
          </div>
        </div>
        <!-- 方法窍门 -->
        <div class="t-tips">
          <div v-if="data[0].tips">
            <img src="../assets/xiaoyuanquan.png"/>
            <span>小窍门</span>
            <p v-html="data[0].tips" class="tips"></p>
          </div>
          
          <p class="kitchenware">使用的厨具：{{ data[0].kitchenware }}</p>
        </div>
        <div
          class="imgdiv"
          onclick="window.scrollTo(0,0)"
          ref="imgdiv"
          style="display: none"
        >
          <img src="/gotop.png" class="img" />
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="hotfood">
      <div class="title">
        <a>热门专题</a>
        <span>更多</span>
      </div>
      <ul>
        <li>拍黄瓜</li>
        <li>草莓慕斯蛋糕</li>
        <li>圣诞姜饼屋</li>
        <li>香辣豆腐</li>
        <li>圣诞树面包</li>
        <li>紫薯包</li>
        <li>灯笼茄子</li>
        <li>青椒炒豆干</li>
        <li>红枣银耳汤</li>
        <li>可可海绵豆干</li>
        <li>咖啡曲奇</li>
        <li>奶香绿豆糕</li>
        <li>炒南瓜</li>
        <li>沙拉三明治</li>
        <li>家常炒饼</li>
      </ul>
      <div class="title">
        <a>最受欢迎的家常菜</a>
        <span>更多</span>
      </div>
      <ul>
        <li>红烧肉</li>
        <li>红烧茄子</li>
        <li>红烧鱼</li>
        <li>鱼香肉丝</li>
        <li>可乐鸡翅</li>
        <li>红烧排骨</li>
        <li>糖醋排骨</li>
        <li>水煮肉片</li>
        <li>佛跳墙</li>
        <li>麻婆豆腐</li>
        <li>麻辣香锅</li>
        <li>年夜饭</li>
        <li>大闸蟹</li>
        <li>秋葵</li>
        <li>大盘鸡</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mid"],
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "/menu/step?mid=" + this.mid;
      this.axios.get(url).then((res) => {
        //console.log(res.data.data);
        this.data = res.data.data;
      });
    },
    imgdiv() {
      onscoll = function () {
        const y = document.documentElement.scrollTop || document.body.scrollTop;

        imgdiv.style.display = y > 4000 ? "" : "none";
      };
    },
  },
};
</script>

<style src="../assets/css/FoodDetail.css" scoped></style>

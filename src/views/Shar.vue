<template>
  <div class="shar">
    <!-- <div class="shar-top">
      <h2>笔记</h2>
      <a href="#" rel="nofollow">精华</a>
      <a href="#" rel="nofollow">热门</a>
      <a href="#" rel="nofollow">最新</a>
      <a href="#" rel="nofollow">全部</a>
    </div> -->
    <health-head title="社区" />
    <div class="shar-botton">
      <ul>
        <li v-for="i in data" :key="i.id">
          <div class="u">
            <div class="us">
              <router-link :to="'/notelist?id=' + i.id">
                <!-- <router-link :to="{path:'/notelist/',query:{id:i.id}}"> -->
                <img :src="imgBase + i.avatar_image" alt="" />
              </router-link>
            </div>
            <div class="t">
              <router-link :to="'/notelist?id=' + i.id">{{
                i.username
              }}</router-link>
              <p>{{moment(i.shar_time).format("YYYY-MM-DD HH:mm:ss")  }}</p>
            </div>
          </div>
          <div class="pp">
            <router-link :to="'/notelist?id=' + i.id">{{
              i.shar_title
            }}</router-link>
          </div>
          <div class="m">
            <a v-for="(img, i) in i.shar_img" href="#" :key="i">
              <img :src="'/images/' + img" alt="" />
            </a>
          </div>
        </li>
      </ul>
    </div>
    <!-- <el-pagination
    style="float:right;margin:10px "
  background
  layout="prev, pager, next"
  :total="10"
  >
</el-pagination> -->
  </div>
</template>

<script>
import HealthHead from "@/components/HealthHead.vue"
import { mapState } from 'vuex'
export default {
  components: { HealthHead },
computed: {
 ...mapState(["imgBase"])
},
  mounted() {
    this.getData()
  },
  data() {
    return {
      data: [],
    }
  },
  methods: {
    getData() {
      const url = "/shar/noteList"
      this.axios.get(url).then(res => {
        //console.log(res.data)
        this.data = res.data.data.map(e => {
          e.shar_img = e.shar_img.split(",")
          return e
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.shar {
  width: 1000px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #111;
  }
  .shar-top > h2 {
    display: inline-block;
  }
  .shar-top > h2:hover {
    color: #ff6767;
  }
  .shar-top {
    padding: 15px;
  }
  .shar-top > a {
    float: right;
    padding: 10px;
    font-size: 16px;
  }
  .shar-top > a:hover {
    color: #ff6767;
  }

  .shar-botton > ul {
    list-style: none;
    margin-top: 15px;
    .u {
      display: flex;

      padding: 0;
      clear: both;
      .us > a > img {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 10px 0 0 0;
      }

      .t {
        padding: 10px;
        a {
          font-size: 14px;
        }
        p {
          font-size: 10px;
          color: #666;
        }
      }
    }
    .pp > a {
      font-size: 16px;
      overflow: hidden;
      max-height: 45px;
      margin: 15px 47px;
    }

    .m {
      margin: 20px 47px;
      a > img {
        margin: 10px 0 5px 5px;
      }
    }
  }
}
</style>

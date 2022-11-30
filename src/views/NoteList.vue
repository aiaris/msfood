<template>
  <div class="note-list">
    <health-head title="笔记" />
    <div class="n-top">
      <div class="u">
        <a href="#">
          <img :src="imgBase + data.avatar_image" alt="" />
        </a>
      </div>

      <div class="us">
        <a href="#">{{ data.username }}</a>
        <p>{{ moment(data.shar_time).format("YYYY-MM-DD HH:mm:ss") }}</p>
      </div>
    </div>
    <div class="pp">
      <p>{{ data.shar_title }}</p>
    </div>

    <div class="m">
      <img
        v-for="(img, id) in data.big_img"
        :src="'/images/' + img"
        :key="id"
        alt=""
      />
    </div>
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
  data() {
    return {
      data: {},
    }
  },

  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url =
        "/shar/notelist?id=" + this.$route.query.id
      this.axios.get(url).then(res => {
        let arr = res.data.data.map(e => {
          e.big_img = e.big_img.split(",")
          return e
        })
        console.log(arr.length)
        if (arr.length > 0) {
          this.data = arr[0]
          console.log(this.data)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.note-list {
  width: 1000px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #000;
  }
  .n-top {
    display: flex;
    margin-top: 15px;

    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border-radius: 50%;
      margin: 10px 0 0 0;
    }
    .us {
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
  .pp {
    font-size: 16px;
    font-weight: 800;
    margin: 15px 47px;
  }
  .m {
    margin: 10px 40px;
    // width: 580px;
    img {
      display: inline-block;
      // width: 100%;
      // height: 344px;
      margin: 10px;
    }
  }
}
</style>

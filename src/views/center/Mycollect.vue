<template>
  <div class="recipe">
    <!-- 标头 -->
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane label="我的菜单" name="1">
        <div class="no_data" v-if="!data">
          <p>
            您还没有发布菜单噢，快点击这里<span
              style="font-size: 20px; color: black; cursor: pointer"
              @click="goCreate"
              >发布新菜单</span
            >吧!
            <!-- to="/center/create"  $store.state.username-->
          </p>
        </div>

        <div class="create-detail" v-else v-for="d in data" :key="d.cid">
          <div class="create-item">
            <img :src="imgBase+d.cimg" alt="" />
            <div>
              <h3>{{ d.cname }}</h3>
              <p><span>0</span><span>篇菜谱</span></p>
              <p>
                {{ d.cdetail }}
              </p>
              <p>
                <span>{{
                  moment.unix(d.ctime).format("YYYY-MM-DD HH:mm:ss")
                }}</span
                ><span>更新</span>
              </p>
            </div>
          </div>

          <div>
            <el-button type="danger" plain size="medium">编辑</el-button>
            <el-button
              type="info"
              plain
              size="medium"
              @click="del_detail(d.cid)"
              >删除</el-button
            >
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 按钮 -->
    <router-link class="recipe-btn" to="/center/create">发布新菜单</router-link>
  </div>
</template>

<script>
import moment from "moment"
import { mapState } from 'vuex'

export default {
  computed: {
   ...mapState(["imgBase"])
  },
  data() {
    return {
      activeName: "1",
      data: null,
      moment: moment,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    goCreate() {
      if (this.$store.state.username) {
        this.$router.push("/center/create")
      } else {
        this.$confirm("您还没有登录，是否现在登录?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        }).then(() => {
          this.$router.push("/login")
        })
      }
    },
    del_detail(id) {
      //console.log(id);
      this.$confirm("确认删除菜单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.axios.post("/create/del", `cid=${id}`).then(res => {
            //console.log(res);
            if (res.data.code == 1) {
              this.getData()
              this.$message({
                type: "success",
                message: "删除成功!",
              })
            } else {
              this.$message({
                type: "error",
                message: "删除失败!",
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          })
        })
    },
    getData() {
      const url = `/create/list?username=${this.$store.state.username}`
      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data.data
      })
    },
  },
}
</script>

<style>
.el-tabs__item.is-active {
  color: #f56c6c;
}
.el-tabs__item:hover {
  color: #f56c6c;
}
.el-tabs__active-bar {
  background-color: #f56c6c;
}
</style>
<style src="@/assets/center/mycollect.css" scoped></style>

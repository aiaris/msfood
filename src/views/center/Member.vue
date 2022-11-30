<template>
  <div>
    <!-- 正文 -->
    <div class="main">
      <!-- 信息栏 -->
      <div class="mod-up">
        <!-- 信息栏左侧 -->
        <div class="m-left" v-if="userData">
          <router-link to="#">
            <img :src="imgBase+this.$store.state.useravatar" alt="" />
          </router-link>
          <div class="detail">
            <em>
              <i class="el-icon-user-solid"></i>
              {{userData.username}}</em>
            <ul>
              <li>{{userData.grow}}<br />成长值</li>
              <li>{{userData.lucky}}<br />幸运草</li>
              <li>{{userData.meili}}<br />美粒</li>
              <li>{{userData.follow}}<br />关注</li>
              <li>{{userData.fans}}<br />粉丝</li>
              <li>{{userData.collection}}<br />赞与收藏</li>
            </ul>
            <div class="btn">
              <router-link to="#">通知</router-link>
              <router-link to="#">私信</router-link>
              <router-link to="#">福利活动</router-link>
            </div>
          </div>
        </div>
        <!-- 信息栏右侧搜索框 -->
        <div class="m-right">
          <el-form :inline="true" >
            <el-form-item>
              <el-input  placeholder="搜索"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button >搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 动态栏 -->
      <div class="mod-down">
        <!-- 左侧 -->
        <div class="d-left">
          <el-tabs v-model="activeName"  class="tab">
            <el-tab-pane label="我关注的动态" name="1">
                <div class="no_data">
                <p>没有数据</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="所有动态" name="2"
              ><div class="no_data">
                <p>没有数据</p>
              </div></el-tab-pane>
            <el-tab-pane label="我的动态" name="3"
              ><div class="no_data">
                <p>没有数据</p>
              </div></el-tab-pane>
          </el-tabs>
        </div>
        <!-- 右侧 -->
        <div class="d-right">
            <img src="@/assets/appc1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
   ...mapState(["imgBase"])
  },
    data() {
        return {
            activeName: "1",
            userData:null,
        }
    },
    mounted(){
      //console.log(this.$store.state.username)
      this.getuserData()
    },
    methods: {
      getuserData() {
          if(!this.$store.state.username){return}
        const url=`create/user?username=${this.$store.state.username}`
        this.axios.get(url).then(res=>{
          console.log(res)
          this.userData=res.data.data[0]
        })
      }
    },
};
</script>
<style>
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

<style src="@/assets/center/member.css" scoped>

</style>
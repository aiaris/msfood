<template>
    <div class="create-detail">
      <div >
        <img
          :src="d.cimg"
          alt=""
        />
      </div>
      <div>
        <h3>{{d.cname}}</h3>
        <p><span>0</span><span>菜谱</span></p>
        <p>
         {{d.cdetail}}
        </p>
          <p><span>{{ }}</span
        ><span>更新</span></p>
        
      </div>
      <div>
        <el-button type="danger" plain size="medium">编辑</el-button>
        <el-button type="info" plain size="medium" @click="del_detail(d.cid)">删除</el-button>
      </div>

  </div>
</template>

<script>
export default {
props:['d'],
methods: {

 
},

};
</script>

<style lang="scss" scoped>


</style>
<template>
<div>
  <div class="health-search" v-if="data">
<!-- <health-head /> -->
<health-head-1 title="热门搜索"/>
<div class="search">
  <span>{{httile}}</span>
  <span>约{{data.data!=null?data.data.length:0}}条结果</span>
</div>
 <div class="health-cell" v-for="d in data.data" :key="d.hid">
      <img :src="`/images/${d.himg}`" alt="" />
      <div>
        <h3 v-html="reg(d.httile,httile)" @click="$router.push(`/health_detail/${d.hid}`)"></h3>
       
        <div>{{ moment(d.htime).format("YYYY年MM月DD日 HH:mm:ss") }}</div>
        <p>
         {{d.subtitle}}
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import HealthHead1 from '@/components/HealthHead1.vue';
// import HealthHead from '@/components/HealthHead.vue'
  export default {
  components: { HealthHead1 },
  // components: { HealthHead },
    props:["httile"],
  
    data() {
      return {
        data: null
      }
    },
    watch: {
      httile(newValue, oldValue) {
        this.getData();
      }
    },
    methods: {
      getData() {
        //console.log(this.httile);
        this.axios.get(`/news/search?httile=${this.httile}`).then((res)=>{
          console.log(res);
          this.data=res.data
        })
      },
      reg(val,key){
        if(val){
         let regStr=`(${key})`
         let reg=new RegExp(regStr,"g")
         return val.replace(reg,`<span style="color:#F56C6C">${key}</span>`)
        }
      }
    },
    mounted () {
      this.getData();
    },
  }
</script>

<style src="../assets/health1.css" scoped></style>

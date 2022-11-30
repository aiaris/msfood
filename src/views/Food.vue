<template>
    <div>
        <!-- 引入healthhead -->
        <health-head title="食材"/>
        <div class="box" v-if="rou">
            <div class="rou">
                <div>
                    <h2>肉禽类</h2>
                </div>   
                <div>
                    <router-link :to="'foodsort?fid='+site.fid" v-for="site in rou" :key="site.fid">{{site.fname}}</router-link>
                </div>
            </div>
            <div class="shui">
                <div>
                    <h2>水产类</h2>
                </div>   
                <div>
                    <router-link :to="'foodsort?fid='+site.fid" v-for="site in shui" :key="site.fid">{{site.fname}}</router-link>
                </div>
            </div>
            <div class="cai">
                <div>
                    <h2>蔬菜类</h2>
                </div>   
                <div>
                    <router-link :to="'foodsort?fid='+site.fid" v-for="site in cai" :key="site.fid">{{site.fname}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HealthHead from '@/components/HealthHead.vue'
    export default {
  components: { HealthHead },
        data(){
            return{
                rou:[
                    {fid:1,fname:'鸡肉'},{fid:2,fname:'猪肉'},{fid:3,fname:'牛肉'},{fid:4,fname:'鸡蛋'},{fid:5,fname:'香肠'},
                    {fid:6,fname:'里脊'},{fid:7,fname:'五花肉'},{fid:8,fname:'猪蹄'},{fid:9,fname:'牛排'},{fid:10,fname:'肥牛'},
                    {fname:'羊肉'},{fname:'猪肝'},{fname:'猪肘'},{fname:'火腿'},{fname:'排骨'},
                    {fname:'培根'},{fname:'腊肉'},{fname:'肉松'},{fname:'整鸡'},{fname:'鸡翅'},
                    {fname:'鸡腿'},{fname:'乌鸦'},{fname:'鸭肉'},{fname:'乳鸽'},{fname:'肋排'},
                    {fname:'鸭蛋'},{fname:'鸭脖'},{fname:'鹅肝'},{fname:'鹌鹑'},
                ],
                shui:[
                    {fid:11,fname:'草鱼'},{fid:12,fname:'鲤鱼'},{fid:13,fname:'鲫鱼'},{fid:14,fname:'带鱼'},{fid:15,fname:'虾'},
                    {fid:16,fname:'黄花鱼'},{fid:17,fname:'鳕鱼'},{fid:18,fname:'三文鱼'},{fid:19,fname:'鲳鱼'},{fid:20,fname:'鳗鱼'},
                    {fname:'鲅鱼'},{fname:'胖头鱼'},{fname:'罗非鱼'},{fname:'秋刀鱼'},{fname:'多宝鱼'},
                    {fname:'鱼籽'},{fname:'鱼尾'},{fname:'鱼丸'},{fname:'小龙虾'},{fname:'鲈鱼'},
                    {fname:'龙虾'},{fname:'螃蟹'},{fname:'大闸蟹'},{fname:'皮皮虾'},{fname:'牡蛎'},
                    {fname:'扇贝'},{fname:'生蚝'},{fname:'蛤蜊'},{fname:'蛏子'},{fname:'鲍鱼'},
                

                ],
                cai:[
                    {fid:21,fname:'娃娃菜'},{fid:22,fname:'山药'},{fid:23,fname:'西红柿'},{fid:24,fname:'白菜'},{fid:25,fname:'油菜'},
                    {fid:26,fname:'韭菜'},{fid:27,fname:'大白菜'},{fid:28,fname:'芦蒿'},{fid:29,fname:'莴笋'},{fid:30,fname:'芹菜'},
                    {fname:'油麦菜'},{fname:'芦笋'},{fname:'土豆'},{fname:'红薯'},{fname:'芋头'},
                    {fname:'洋葱'},{fname:'萝卜'},{fname:'藕'},{fname:'菠菜'},{fname:'青菜'},
                    {fname:'豆角'},{fname:'茄子'},{fname:'青椒'},{fname:'菜花'},{fname:'豇豆'},
                    {fname:'秋葵'},{fname:'毛豆'},{fname:'四季豆'},{fname:'黄瓜'},{fname:'冬瓜'}
                ]    
            }
        }
    }
</script>

<style lang="scss" scoped>
.box{
    margin: 0 auto 0;
    width: 1000px;

}
.box>div{
    display:flex;
    justify-content: flex-start;
    border-bottom:1px solid #EAEAEA;
    border-top:1px solid #EAEAEA;
    margin-bottom: 30px;
}
.box>div>div>h2{
    display: inline-block;
    width: 186px;
    text-align: center;
    border-left:1px solid #EAEAEA;
    background-color: #EAEAEA;
    color:#666;
    height: 355px;
    line-height:355px;
}
.box>div>div:last-child{
    width: 804px;
    display:flex;
    flex-wrap:wrap;
    text-align: center;
}
.box>div>div>a{
    width: 133px;
    height: 70px;
    line-height:70px;
    border-bottom:1px solid #EAEAEA;
    border-left:1px solid #EAEAEA;
    text-decoration:none;
    color: #333;
    font-size: 16px;
}
.box>div>div>a:hover{
    background-color: #EAEAEA;
}



</style>
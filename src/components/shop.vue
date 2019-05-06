<!--  -->
<template>
<div class='shop'>
  <div class="itembox" v-for="item in goodslist" :key="item.id" @click="goinfo(item.id)">
    <img :src="item.imgur" alt="">
    <h1 class="title">{{item.title}}</h1>
    <div class="infobox">
      <p class="prs">
        <span class="now">￥{{item.newprs}}</span>
        <span class="old">￥{{item.oldprs}}</span>
      </p>
      <p class="sell">
        <span>热销</span>
        <span>剩{{item.cont}}件</span>
      </p>
    </div>
  </div>
</div>
</template>

<script>
//例：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  pageindex:1,
  goodslist:[
      {
      id:1,
      imgur:"../../static/imgs/good/goods1_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:7888,
      oldprs:8666,
      cont:892,
    },
    {
      id:2,
      imgur:"../../static/imgs/good/goods2_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:3999,
      oldprs:4677,
      cont:896,
    },
    {
      id:3,
      imgur:"../../static/imgs/good/goods3_big.png",
      title:"戴尔DELL游匣G3烈焰版 15.6英寸英特尔酷睿i5游戏",
      newprs:2888,
      oldprs:2666,
      cont:898,
    },
    {
      id:4,
      imgur:"../../static/imgs/good/goods4_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
    },
  
    {
      id:5,
      imgur:"../../static/imgs/good/goods5_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
    },
       {
      id:6,
      imgur:"../../static/imgs/good/goods6_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
    },
       {
      id:7,
      imgur:"../../static/imgs/good/goods7_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
    },
       {
      id:8,
      imgur:"../../static/imgs/good/goods8_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
    },
  ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  goinfo(id){
    this.$router.push('/goodinfo/'+id)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style>
.shop{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.shop .itembox{
  padding:2px;
  width: 49%;
  min-height: 250px;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin:3px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shop .itembox img{
  width: 100%
}
.title{
  font-size: 14px
}
.infobox{
 background-color: #f7f7f7;
}

.infobox p{
  margin-bottom: 0px;
  padding: 5px
}
.infobox .now{
  color: red;
  font-size: 15px;
  margin-right: 10px
}

.infobox .old{
  font-size: 13px;
  text-decoration: line-through
}
.sell{
  display: flex;
  justify-content: space-between;
}
</style>
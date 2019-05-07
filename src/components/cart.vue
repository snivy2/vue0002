<!--  -->
<template>
<div class=''>
 <div class="shopcar-container">
    
    <div class="goods-list">

      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goods-item">
            <img :src="goodin.imgur" alt="" class="tupian">
            <div class="info">
              <h1 class="biaoti">{{goodin.title}}</h1>
              <br><br>
              <div class="goods-info">
                <span class="money">￥{{goodin.newprs}}</span>    &nbsp;
            
                <span class="shuliang">数量：{{this.$store.state.cart[0].count}}</span>
                <a href="#" class="shanchu">删除</a>
              </div>
            </div>
					</div>
				</div>
			</div>
    </div>
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="left">
              <br>
              <p class="wenzi"><span>总计:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="money">￥{{zongji}}</span><span></span></p>
            </div>

            <mt-button type="danger" class="jiesuan">去结算</mt-button>
					</div>
				</div>
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
  id: 1,
  zongji:"0",
goodin: {

  }
  ,
  goodArr: [
    {
      id:'1',
      imgur:"../../static/imgs/good/goods1_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:7888,
      oldprs:8666,
      cont:892,
      no:5248778,
      houdu:"厚度：15.1mm—18.0mm",
      chicun:"屏幕尺寸：14.0英寸"
    },
    {
      id:'2',
      imgur:"../../static/imgs/good/goods2_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:3999,
      oldprs:4677,
      cont:896,
      no:5248776,
      houdu:"厚度：15.1mm—18.0mm",
      chicun:"屏幕尺寸：14.0英寸"
    },
    {
      id:'3',
      imgur:"../../static/imgs/good/goods3_big.png",
      title:"戴尔DELL游匣G3烈焰版 15.6英寸英特尔酷睿i5游戏",
      newprs:2888,
      oldprs:2666,
      cont:898,
      no:5248779,
      houdu:"厚度：15.1mm—18.0mm",
      chicun:"屏幕尺寸：14.0英寸"
    },
    {
      id:'4',
      imgur:"../../static/imgs/good/goods4_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
      no:5248773,
      houdu:"厚度：15.1mm—18.0mm",
      chicun:"屏幕尺寸：14.0英寸"
    },
  
    {
      id:'5',
      imgur:"../../static/imgs/good/goods5_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
      no:5248772,
      houdu:"厚度：15.1mm—18.0mm",
      chicun:"屏幕尺寸：14.0英寸"
    },
       {
      id:'6',
      imgur:"../../static/imgs/good/goods6_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
      no:5248778,
      chicun:"屏幕尺寸：14.0英寸",
      houdu:"厚度：15.1mm—18.0mm"
    },
       {
      id:'7',
      imgur:"../../static/imgs/good/goods7_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
      no:5248778,
      chicun:"屏幕尺寸：14.0英寸",
      houdu:"厚度：15.1mm—18.0mm"
    },
       {
      id:'8',
      imgur:"../../static/imgs/good/goods8_big.png",
      title:"戴尔（DELL） 灵越5570-1525S 15.6英寸8代酷睿影音轻",
      newprs:5888,
      oldprs:6666,
      cont:896,
      no:5248778,
      chicun:"屏幕尺寸：14.0英寸",
      houdu:"厚度：15.1mm—18.0mm"
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
  zongjisuan(){
      this.zongji = parseInt(this.$store.state.cart[0].newprs)*parseInt(this.$store.state.cart[0].count)
  },
  getinfo(){
    this.id = this.$store.state.cart[0].id;
      for(var i=0;i<this.goodArr.length;i++){
      if(this.goodArr[i].id=this.id){
        // 直接用对象的assign方法也可以 this.goodin = Object.assign({}, this.goodArr[i])
          for (var key in this.goodArr[i]) {
            this.goodin[key] = this.goodArr[i][key];
    }
    }   
  }
  }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 this.getinfo()
 this.zongjisuan()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style>
.money{
  font-size: 20px;
  font-weight: 700;
  color:red
}
.jiesuan{
  position:absolute;
  left: 250px;
  top:20px
}
.mui-card-content-inner{
  position: relative;
}
.info h1{
  font-size: 14px
}
.tupian{
  height: 70px!important;
  width: 70px!important;
  float: left;
  margin-right: 50px
}
.biaoti{
  display: inline-block;
  width:60%
}
.shanchu{
  position: absolute;
  left:280px;
  font-size: 15px;
}
</style>
<template>
<div class='goodinfo'>

<!-- 图片 -->
  <div class="mui-card">
  	<div class="mui-card-content">
  		<div class="mui-card-content-inner">
  			<img :src="goodin.imgur" alt="">
  		</div>
  	</div>
  </div>

  <!-- 购买区域 -->
  <div class="mui-card">
  	<div class="mui-card-header">{{goodin.title}}</div>
  		<div class="mui-card-content">
  			<div class="mui-card-content-inner">
  				<p class="price">
            <span class="new">惊爆价：<span class="red">￥{{goodin.newprs}}</span></span>&nbsp;&nbsp;
           [ <span class="old">￥{{goodin.oldprs}}</span> ]
          </p>
          <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number"  v-model="count"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				  </div>
          <button type="button" class="mui-btn mui-btn-danger"  @click="flash()">
	           加入购物车
	        </button>
  			</div>
  		</div>
  </div>
  
  <!-- 详细 -->
  <div class="mui-card">
		<div class="mui-card-header">商品详情</div>
		  <div class="mui-card-content">
			  <div class="mui-card-content-inner">
					<p>商品编号 ：{{goodin.no}}</p>
          <p>商品库存 ：{{goodin.cont}} 件</p>
          <p> {{goodin.houdu}}</p>
          <P> {{goodin.chicun}}</P>
				</div>
			</div>
		<div class="mui-card-footer">
      <mt-button type="danger" size="large" plain @click="gopinglun(id)">查看评论</mt-button>
    </div>
	</div>

  <!-- 购物车动画 -->
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
  <div class="ball" v-show="flag">
  </div>
  </transition>

</div>
</template>

<script>
//例：import 《组件名称》 from '《组件路径》';
import mui from '../../static/mui/js/mui.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  id: this.$route.params.id,
  flag:false,
  count:1,
  goodin: {

  }
  ,
  goodArr: [
    {
      id:1,
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
      id:2,
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
      id:3,
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
      id:4,
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
      id:5,
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
      id:6,
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
      id:7,
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
      id:8,
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
  getgood(){
    for(var i=0;i<this.goodArr.length;i++){
      if(this.goodArr[i].id=this.id){
        // 直接用对象的assign方法也可以 this.goodin = Object.assign({}, this.goodArr[i])
          for (var key in this.goodArr[i]) {
            this.goodin[key] = this.goodArr[i][key];
    }

    }   
  }
},
  gopinglun(id){
    this.$router.push({name:'pinglun',params:{id}});
  },
  flash(){
    this.flag = !this.flag;
    var goods = {
      id: this.id,
      count: this.count,
      price: this.goodin.newprs,
      select: true
    }
    // 用vuex里面的方法
    this.$store.commit("addtocar",goods);
  },
  beforeEnter(el){
     el.style.transform = "translate(0,0)";
  },
  enter(el, done){
     el.offsetWidth;
     el.style.transform = "translate(157px,332px)";
     el.style.transition="all 1s ease"
     done()
  },
  afterEnter(el){
     this.flag=!this.flag
  },
  gocart(){

  }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.getgood()
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    mui(".mui-numbox").numbox()//mui的numbox初始化必须代码，详情见官方api
},
}
</script>
<style>
.mui-card-content-inner img{
height: 330px;
width: 100%
}
.red{
  color:red;
  font-size: 18px;
  font-weight: 700
}
.old{
  text-decoration: line-through
}
.goodinfo{
  margin-bottom: 70px
}
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color:red;
  position: absolute;
  z-index:1000;
  top:505px;
  left: 80px
}
</style>
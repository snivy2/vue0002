<template>
  <div class="hello">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <!-- 导航格 -->
    <div class="nav">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../../static/imgs/nav1.png">
		      <div class="mui-media-body">超市生鲜</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../../static/imgs/nav2.png">
		      <div class="mui-media-body">全球购</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../../static/imgs/nav3.png">
		      <div class="mui-media-body">服装服饰</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../../static/imgs/nav4.png">
		      <div class="mui-media-body">大牌特惠</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../../static/imgs/nav5.png">
		      <div class="mui-media-body">母婴产品</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		      <img src="../../static/imgs/nav6.png">
		      <div class="mui-media-body">数码产品</div></a></li>
		  </ul> 
      		
			<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../../static/imgs/logo.png" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>
				</div>
				<div class="mui-card-content" >
					<img src="../../static/imgs/yuantiao.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>

    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  margin-top: 15px
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: 0
}
.mui-grid-view.mui-grid-9 img{
  width: 60px;
  height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0
}
.headbox{
  background-color: rgba(0,0,0,0.3)
}
.mint-swipe{
  height:200px;
}
.mui-media-body{
 font-size: 14px
}
.mint-swipe-item:nth-child(1){
  background: url(/static/imgs/lunbo1.jpg) no-repeat 0 0 / 100% 200px
}
.mint-swipe-item:nth-child(2){
  background: url(/static/imgs/lunbo2.jpg) no-repeat 0 0 / 100% 200px
}
.mint-swipe-item:nth-child(3){
  background: url(/static/imgs/lunbo3.jpg) no-repeat 0 0 / 100% 200px
}
</style>

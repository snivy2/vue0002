<template>
  <div id="app">

    <transition>
    <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">商品列表</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mycenter">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  overflow-x: hidden
}
.v-enter,{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease
}
</style>

<!--  -->
<template>
<div class=''>
  <textarea placeholder="请输入评论" v-model="shuru">
     
  </textarea>
  <input type="text" placeholder="名字" v-model="shururen">

  <button type="submit" @click="fabiao()">发表评论</button>
  <div class='pinglun'>
  <ul v-for="item in pinglun" :key="item.index">
    <li>{{item.neirong}}-------------{{item.user}}</li>
  </ul>
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
  shuru:'',
  shururen:'',
  pinglun:[
    {
    user:'xujianhua',
    neirong: '第一个移动web项目快完啦！！！！！！！！激动！！！！！！'
    },
    {
    user:'shuaishuaihua',
    neirong: '第一个移动web项目快完啦！！！！！！！！激动！！！！！！'
    },
    {
    user:'shuaihua',
    neirong: '第一个移动web项目快完啦！！！！！！！！激动！！！！！！,重要的事说三遍'
    }
  ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  fabiao(){
     var obj={
       user:this.shururen,
       neirong:this.shuru
     }
     this.pinglun.push(obj)
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
li{
  list-style-type: none;
}
</style>
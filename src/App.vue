<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/Appointment">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data(){
    return{
      active:0,
    }
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 0.16rem;
}
* {
  margin: 0;
  padding: 0;
}
</style>

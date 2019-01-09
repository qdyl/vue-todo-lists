<!--项目入口文件，（这里就是显示的全部内容，相当于在页面外套了一层 div）-->
<template>
  <div id="app">
  <!--  <img src="./assets/logo.png">-->
    <!--<router-link to="/c"></router-link>
    <router-link to="/t"></router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    h2{
      font-size: 50px;
      color: #e9d6d6;
    }
}
</style>

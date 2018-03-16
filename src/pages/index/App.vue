<template>
  <div id="app">
    <header>
      <img src="@/assets/logo_white.png" id="logo" width="50px">
      <h1>会议室预订系统</h1>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  padding: 0;
  margin: 0; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
}

header{
  margin: 0px;
  height: 90px;
  width: 100%;
  background-color: #0385d3;
}
#logo,h1{
  float: left;
  font-family: '微软雅黑'
}
#logo{
  margin: 18px 20px 0 100px;
}
h1{
  margin-top: 20px;
}
</style>

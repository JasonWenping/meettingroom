<template>
  <div id="app">
    <header>
      <img src="@/assets/logo_white.png" id="logo" width="50px">
      <h1>会议室预订系统</h1>
      <span class="logout" @click="logout">Logout</span>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App',
  methods:{
    logout(){
      alert('退出系统！');
      location.href='/login.html';
    }
  }
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
.logout{
  float: right;
  margin-right: 50px;
  display: block;
  height: 90px;
  line-height: 90px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.logout:hover{
  color: coral;
}
</style>

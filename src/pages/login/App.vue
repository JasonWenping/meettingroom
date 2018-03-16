<template>
  <div id="app">
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
      text-align: center;
      background: url(assets/meettingroom_bg.jpg);
      background-size: cover;
    }
    a{
      text-decoration: none;
      color: blue;
    }
</style>
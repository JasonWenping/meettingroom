<template>
  <div id="app">
      <div id="box" class="confirm_box">
          <h2>预 约</h2>
          <form method="GET" action>
            <div class="order_time">
                <span>预订时间：</span>
                <input type="date"  required>
                <input type="date" required>
            </div>
            <div class="order_forwhat">
                <span>预订事由：</span>
                <textarea name='' cols="40" rows="10" required></textarea>
            </div>
            <button @click="hidePanel">提 交</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'confirm',
  data:function(){
      return {
          isHides:false
      }
  },
  methods:{
      hidePanel(){
          this.$emit('hide-this',this.isHides)
      }
      /*
      getDate(){
              let date = new Date();
              let year = date.getFullYear();
              let month = date.getMonth();
              let day = date.getDate();
              let h = date.getHours();
              let m = date.getMinutes();
              if(month < 10){
                  month = '0' + month;
              }
              if(day < 10){
                  day = '0' + day;
              }
              return (year + '-'  + month + '-' + day + " " +  h + ":" + m);
      }
      */
  }
}
</script>


<style scoped>
#app{
    position: fixed;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
}
h2,span,input,textarea,button{
    font-family: '微软雅黑';
}
h2{
    background-color: #0385d3;
    text-indent: 2ch;
    margin: 0px 0 10px 0;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: normal;
}
.confirm_box{
    width: 500px;
    height: 400px;
    margin: 100px auto;
    background-color: #fff;
    border: #666 1px solid;
    border-radius: 5px;
    color: #000;
}
textarea,input[type='date']{
    border: 1px #aaa solid;
    border-radius: 3px;
}
input[type='date']{
    height: 30px;
    text-align: left;
}
button{
    width: 300px;
    height: 35px;
    border: none;
    background-color: #0385d3;
    border-radius: 5px;
    margin-left: 100px;
    color: #fff;
    font-size: 16px;
}
button:hover{
    background-color: red;
    cursor: pointer;
}
span,textarea{
    float: left;
}
span{
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: right;
}
.order_forwhat,.order_time{
    margin: 20px 0;
}
.order_forwhat:after{
    clear: both;
    display: block;
    height: 0;
    content: '\0020';
}
</style>




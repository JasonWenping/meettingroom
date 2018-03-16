<template>
  <div id="app">
    <form action="POST" id="logForm" data-url="">
        <img src="@/assets/logo.png">
        <h1>会议室预订系统</h1>
        <div id="usr">
            <span>用户名：</span>
            <input type="text" name="uername" placeholder="用户名/手机号" v-model="username" required>
        </div>
        <div id="psw">
            <span>密码：</span>
            <input type="password" name="password" placeholder="密码" v-model="password" required>
        </div>
        <button v-on:click="printThis($event)">登 录</button>
        <div>
        <a><router-link to="/register">没有账号，去注册 —></router-link></a>
        </div>
    </form>
    </div>
</template>


<script>

export default {
  name: 'Login',
  data(){
      return {
          username:'',
          password:'',
          usersData: []
      }
  },
  mounted(){
      this.getData();
  },
  methods:{
      getData(){
          this.$http.get('/api/seller').then(response => {
              const users = response.body;
              this.usersData = users.data.user;
        }, response => {
            // error callback
            console.log('加载失败')
        });
      },
      printThis(e){
          e.preventDefault();
          let usr = [],
              usrName = document.getElementById('usr'),
              pasWord = document.getElementById('psw'),
              nodeP1 = usrName.getElementsByTagName('p'),
              nodeP2 = pasWord.getElementsByTagName('p'),              
              node = document.createElement('p');
          if(nodeP1.length != 0){
              usrName.removeChild(nodeP1[0]);
          }   
          if(nodeP2.length != 0){
              pasWord.removeChild(nodeP2[0]);
          }              
          for(let i in this.usersData)
          {
              usr.push(this.usersData[i].username);
          }

          if(this.username == '')
          {
              var text1 = document.createTextNode('请输入用户名');
              usrName.appendChild(node);
              node.appendChild(text1);
              return false;
          }
          if(this.password == ''){
              var text2 = document.createTextNode('请输入密码');
              pasWord.appendChild(node);
              node.appendChild(text2);
              return false;
          }
          
              let a = usr.indexOf(this.username);
              //console.log(a);
              if(a != -1){
                  if(this.password === this.usersData[a].password){
                      alert('登录成功！');
                      //this.submit;
                      location.href = '/';
                  }else{
                    var text2 = document.createTextNode('密码错误');
                    pasWord.appendChild(node);
                    node.appendChild(text2);
                  }
              }else{
                    var text1 = document.createTextNode('用户名不存在');
                    usrName.appendChild(node);
                    node.appendChild(text1);
              }
      }      
  }
}
</script>

<style>
    #app{
        padding-top: 50px;
        width: 100%;
    }
    #logForm,button,input,p{        
        font-family: '微软雅黑';
        font-size: 14px;
    }
    a,button{
        cursor: pointer;
    }
    #logForm{
        width: 400px;
        height: 550px;
        background-color: rgba(255, 255, 255, 0.9);
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 1px 1px 10px #999;
    }
    #usr,#psw{
        margin-top: 30px;
        text-align: left;
        height: 30px;
    }
    img{
        width: 100px;
        margin-top: 60px;
    }
    input{
        height: 30px;
        width: 200px;
        background: transparent;
        border: 1px solid #AAA;
        border-radius: 3px;
    }
    span{
        width: 70px;
        height: 30px;
        display: block;
        text-align: right;
        line-height: 35px;
        float: left;
        margin-left: 40px;
        font-weight: bold;
        font-size: 14px;
    }
    button{
        width: 230px;
        height: 35px;
        border: none;
        background-color: #0385d3;
        border-radius: 100px;
        margin: 40px 0 20px 0;
        color: #fff;
    }
    button:hover{
        background-color: #90c223;
    }
    p{
        color: #f00;
        margin: 0 0 0 110px;
    }
</style>
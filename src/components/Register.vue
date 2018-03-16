<template>
  <div id="app">
    <form action="POST" id="logForm" data-url="">
        <h1>注册</h1>
        <div id="usr">
            <span>用户名：</span>
            <input type="text" name="uername" placeholder="用户名" required>
        </div>
        <div id="psw">
            <span>姓名：</span>
            <input type="password" name="password" placeholder="姓名" required>
        </div>
        <div id="psw2">
            <span>部门：</span>
            <input type="password" name="password" placeholder="部门" required>
        </div>
        <div id="psw3">
            <span>工号：</span>
            <input type="password" name="password" placeholder="工号" required>
        </div>
        <div id="psw4">
            <span>手机号：</span>
            <input type="password" name="password" placeholder="手机号" required>
        </div>
        <div id="psw5">
            <span>密码：</span>
            <input type="password" name="password" placeholder="密码" required>
        </div>
        <button>注  册</button>
        <div>
        <a><router-link to="login">已有账号，去登录 —></router-link></a>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
    #app{
        padding-top: 50px;
        width: 100%;
    }
    h1{
        margin: 0;
        height: 90px;
        line-height: 90px;
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
    #usr,#psw,#psw2,#psw3,#psw4,#psw5{
        margin-top: 15px;
        text-align: left;
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
        margin: 20px 0;
        color: #fff;
    }
    button:hover{
        background-color: #90c223;
    }
</style>



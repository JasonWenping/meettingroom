<template>
<div id="app">
  <div class="tag">
    <span>日期：</span>
    <input type="date" :value="getDatetime()">
  </div>

  <div class="tableList">
    <table>
      <thead>
        <td>时间</td>
        <td>格物</td>
        <td>智联</td>
        <td>云网</td>
      </thead>
      <tr v-for="(t,index) in times" :key="index">
        <td style="width:20%; background:#0385d3; color:#fff;">{{ t.begin }} - {{ t.end }}</td>
        <td @click="cindex.indexOf(index)==-1 && show()" name="格物" :class="{orderd:cindex.indexOf(index)!=-1,hover:cindex.indexOf(index)==-1}" ></td>
        <td @click="bindex.indexOf(index)==-1 && show()" name="智联" :class="{orderd:bindex.indexOf(index)!=-1,hover:bindex.indexOf(index)==-1}"></td>
        <td @click="dindex.indexOf(index)==-1 && show()" name="云网" :class="{orderd:dindex.indexOf(index)!=-1,hover:dindex.indexOf(index)==-1}"></td>
      </tr>
    </table>
  </div>
  <my-confirm v-if="isHide" @hide-this="reciveData"></my-confirm>
</div>
</template>

<script>
import Confirm from '@/components/ConfirmPanel'
export default {
  name: "Default",
  components:{
        'my-confirm':Confirm
  },
  data() {
    return {
      times:[],
      isHide:false,
      orderList:[],
      orderTime:[],
      line:true,
      bindex:[],
      cindex:[],
      dindex:[]
    };
  },
  computed:{

  },
  mounted(){
    this.getData();
  },
  methods:{
    //时间下拉框的预设值
    getDatetime(){
      var date = new Date();
      var day = date.getDate();
      if(date.getMonth()<10){
        var mouth = '0' + (date.getMonth()+1);
      }
      if(date.getDate()<10){
        day = '0' + day ;
      }
      var newday =  date.getFullYear() +'-' + mouth + '-' + day;
      return newday;
    },

    //显示/隐藏弹窗
    show(){
          this.isHide=true;
    },

    //获取子组件emit的数据
    reciveData(isHides){
          this.isHide = isHides;
    },

    //获取本地json数据
    getData(){
          this.$http.get('/api/seller').then(response => {
              const order = response.body;
              this.orderList = order.data.order;
              this.times = order.data.time;
              //console.log(this.times);
              this.showOrderList();
        }, response => {
            // error callback
            console.log('加载失败')
        });
    },
    //ordershow
    showOrderList(){
      const begin = [],
            end = [],
            order_begin = [],
            order_end = [],
            room = [];
      for(let i in this.orderList)
      {
        //alert("dd");
        this.orderTime.push(this.orderList[i].ordertime);
        room.push(this.orderList[i].room);
      }
      for(let i in this.times){
        //alert("dd");
        begin.push(this.times[i].begin);
        end.push(this.times[i].end)
      } 
      for(let j in this.orderTime){
        order_begin.push(this.orderTime[j].begin);
        order_end.push(this.orderTime[j].endding);
      }
      for(let i in room){
        if(room[i] == '智联'){
          let bindex = begin.indexOf(order_begin[i]);
          let eindex = end.indexOf(order_end[i]);
          for(let j=bindex;j<=eindex;j++){
            this.bindex.push(j);
          }
        }else if(room[i] == '格物'){
          let bindex = begin.indexOf(order_begin[i]);
          let eindex = end.indexOf(order_end[i]);
          for(let j=bindex;j<=eindex;j++){
            this.cindex.push(j);
          }
        }else{
          let bindex = begin.indexOf(order_begin[i]);
          let eindex = end.indexOf(order_end[i]);
          for(let j=bindex;j<=eindex;j++){
            this.dindex.push(j);
          }
        }
      }
    },

    checked(){
      alert('hh');
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
  margin: 0px;
}
#app,h1,table,input[type="date"],select,span{        
  font-family: '微软雅黑';
  font-size: 14px;
  color: black;
}

.tag{
  width: 1000px;
  height: 40px;
  margin: 20px auto;
  border-bottom: 1px solid #999;
}

table{
  text-align: center;
  width:1000px;
  height: 600px;
  color: black;
  border-spacing: 0;
  margin: 10px auto;
  border-collapse: collapse;
}
thead{
  font-size: 16px;
  background: #aaa;
}
thead td{
  height: 30px;
}
td{
  width: 100px;
  border: #ddd 1px solid;
}

.hover:hover{
  background-color:powderblue;
  cursor: pointer;
}

input[type='date'],select{
  height: 30px;
  border-radius: 3px;
  border: 1px solid #999;
}


input[type='date']::-webkit-calendar-picker-indicator{
  color: #999;
  width: 10px;
  background: transparent;
}
input[type='date']::-webkit-clear-button,
input[type='date']::-webkit-inner-spin-button{
  display: none;
}
.orderd{
  background-color: #999;
  border: none;
}

</style>

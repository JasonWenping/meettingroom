<template>
  <div id="app">
      <h2>填写预订信息</h2>
      <div id="orderForm">
          <span>预订时间</span>
          <select name="begin" id="begin">
              <option value="hour"></option>
          </select>
          <select name="end" id="end">
              <option value="hour"></option>
          </select>
          <br>
          <input type="textarea" cols="30" rows="10">
          <br>
          <button @click="show">申请</button>
          <my-confirm v-if="isHide" @hide-this="reciveData"></my-confirm>
      </div>
  </div>
</template>

<script>
import Confirm from '@/components/ConfirmPanel'
export default {
    name:'Order',
    components:{
        'my-confirm':Confirm
    },
    data(){
        return{
            isHide:false
        }
    },
    methods:{
        show(){
            this.isHide=true;
            console.log(this.isHide);
        },
        reciveData(isHides){
            this.isHide = isHides;
        }
    }
}
</script>

<style scoped>
#app{
    font-family: Arial, Helvetica, sans-serif;
    color: #000000;
}
#orderForm{
    width:300px;
    height: 400px;
    margin: 50px auto;
}
</style>


<template>
<div>
  <input type="button" value="点击抽奖" @click="update()">
  <p>奖金{{myData}}</p>
  <p>抽奖次数:{{size}}</p> 
</div>
</template>
<script>
export default {
  name: 'hello',

  data () {
    return {
      now:0,
      myData:new Set(),
      ran:0,
      msg:'',
      size:0
  }
},

  methods:{
    update(){
      if (this.now<9) {
      do{
      this.ran=Math.floor(Math.random()*9)+1;
    }while(this.myData.has(this.ran));
      this.myData.add(this.ran)
      this.size=this.myData.size
      this.now++
        }
        else {
          this.myData='超过9次不能抽奖'
        }
    }
    }
  }
</script>
<style>

</style>
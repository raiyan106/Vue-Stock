<template>
<div class="centered">
  <div class="card">
  <div class="card-header">
    {{company}} <small>(Price: {{price}})</small>
  </div>
  <div class="card-body">

  <div class="form-row align-items-center">
    <div class="my-1 col-md-6">
      <input type="number" class="form-control" v-model="amountToBuy" placeholder="amount to buy...">
    </div>
    <div class="col-sm-6 col-auto my-1">
      <button 
      type="submit" 
      class="btn btn-success float-right" 
      @click="buyStock({company: company, amount: parseInt(amountToBuy)})"
      :disabled="amountToBuy<=0 || !isInt(amountToBuy)">Buy</button>
    </div>
  </div>
   
  </div>
  </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex';
export default{
  data(){
    return{
      amountToBuy: 0,
    }
  },
  props:['price','company'],
  methods:{
    
    ...mapMutations([
      'buyStock'
    ]),
    isInt(n) {
      return n % 1 === 0;
    }   
  },

  }



</script>

<style scoped>

.card-header{
    background-color: lightgreen;
    color: #006400;
    font-weight: bold;
}
.card{
  padding: 10px;
}
.centered{
  padding:20px;
}
</style>
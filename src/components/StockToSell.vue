<template>
<div class="centered">
  <div class="card">
  <div class="card-header">
    {{stock.company}} <small>(Price: {{stock.price}} | Quantity: {{stock.amount}})</small>
  </div>
  <div class="card-body">

  <div class="form-row align-items-center">
    <div class="my-1 col-md-5">
      <input type="text" class="form-control" placeholder="amount..." v-model="amountToSell">
    </div>
    <div class="col-sm-7 col-auto my-1">
      <button type="submit" class="btn btn-danger float-right" @click="sellStock({company: stock.company, amount: parseInt(amountToSell)})">Sell</button>
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
          amountToSell: null
      }
  },
  props:['stock'],
    methods:{
      ...mapMutations([
        'sellStock'
      ]),
    }
}

</script>

<style scoped>

.card-header{
    background-color: lightblue;
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
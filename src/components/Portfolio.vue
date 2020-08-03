<template>
    <div>
        <h1>The Portfolio</h1>
        <div class="row">
            <stock-to-sell :class="['col-sm-6']" v-for="stock in getMyStocks" v-if="checkStock(stock)"
            :stock="stock"></stock-to-sell>
        </div>

    </div>
</template>


<script>
import StockToSell from './StockToSell.vue';
import {mapGetters} from 'vuex';
export default{
    components:{
        stockToSell: StockToSell
    },
    computed:{
     ...mapGetters([
         'getMyStocks'
     ]),

    },
    methods:{
        checkStock(stockObj){
            return stockObj.amount!=0 && typeof stockObj.amount!='undefined';
        }
    }
}
</script>

<style>
</style>
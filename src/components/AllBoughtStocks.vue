<template>
    <div>
    <h2>List of all the Stocks</h2>
    <div class="row">
    <bought-stock v-for="stock in getStocks" :price="stock.price" :company="stock.company" :class="['col-md-6', 'col-sm-12']"></bought-stock>

    </div>
    </div>
</template>


<script>
import BoughtStock from './BoughtStock.vue';
import {mapGetters} from 'vuex';
export default{
    components:{
        boughtStock: BoughtStock,
    },
    computed:{
        ...mapGetters([
            'getStocks',
        ])
    }
}
</script>

<style>
</style>
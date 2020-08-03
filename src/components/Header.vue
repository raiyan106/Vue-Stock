<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link exact class-active="active" tag="a" class="navbar-brand" to="/">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <router-link class-active="active" tag="li" class="nav-item" to="/portfolio"> <a class="nav-link" href="#">Portfolio</a><span class="sr-only">(current)</span></router-link>
        <router-link class-active="active" tag="li" class="nav-item" to="/bought-stocks"> <a class="nav-link" href="#">Stocks</a></router-link>
      
    </ul>
        <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <a class="nav-link" style="cursor:pointer" @click="changeStockData">End Day</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveStockToDB">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadStockFromDB">Load Data</a>
            </div>
      </li>
      <strong class="navbar-text navbar-right">Funds: ${{this.$store.getters.getFunds}}</strong>

        </ul>
        </div>
  </div>
</nav>

</template>

<script>
import {mapMutations} from 'vuex';
    export default{
      methods:{
        /*randomizedStock(){
            this.$store.commit('changeStockData'); 
          
        },*/
        ...mapMutations([
          'saveStockToDB',
          'changeStockData',
          'loadStockFromDB'
        ]),
        
      }

    }
</script>

<style scoped>
 nav li.router-link-active,
 nav li.router-link-exact-active,
 nav a.router-link-active,
 nav a.router-link-exact-active {
   font-weight: bold;
   text-decoration: underline;
   cursor: pointer;
   font-size: 1.4em;
 }
</style>
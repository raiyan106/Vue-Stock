import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import AllBoughtStocks from './components/AllBoughtStocks.vue';

export const routes =  [
      { path: '/', component: Home },
      {path: '/portfolio', component: Portfolio},
      {path: '/bought-stocks', component: AllBoughtStocks}
    ];

//import {stocksRef} from './firebase';
const stockData = [
    {company: 'BMW', price: 100},
    {company: 'Google', price: 150},
    {company: 'Apple', price: 80},
    {company: 'Microsoft', price: 30},
    {company: 'Twitter', price: 45}
];

var myStockData = [];

stockData.forEach((stock)=>{
    stock.amount = 0;
    myStockData.push(stock);
});

export {stockData, myStockData};
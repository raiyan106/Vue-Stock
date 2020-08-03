import {stockData, myStockData} from './stocks';
import {stocksRef} from './db.js';
import {vuexfireMutations, firebaseAction} from 'vuexfire';
export const storeData = {
    state:{
        stocks: stockData,
        funds: 1000,
        myStocks: myStockData    
    },

    getters: {
        getStocks: (state)=>{
            /*stocksRef.on('value',(snapshot)=>{
                if (snapshot.exists()){
                    state.stocks=[];
                    snapshot.forEach((snap)=>{
                        const stock = snap.val();
                        state.stocks.push(stock);
                    });
                    console.log(state.stocks);
                }
                else{
                    state.stocks = stockData;
                }
            });*/
            /*state.stocks.forEach(stock=>{
                stock.amount=0;
                console.log(stock);
            });*/
            console.log(state.stocks);
            return state.stocks;
        },
        
        getFunds: (state)=>{
            return state.funds;
        },
        getMyStocks: (state)=>{
            return state.myStocks;
        }
    },
    mutations:{
        ...vuexfireMutations,
        buyStock(state, payload){
        
        state.myStocks.forEach((stock)=>{

            if (stock.company === payload.company){
                if(state.funds>= (payload.amount*stock.price)){
                    
                    stock.amount += payload.amount;
                    state.funds -= payload.amount*stock.price;
                    //myStocks.push(stock);
                    //console.log(stock);
                }
                else{
                    alert('Insufficient Funds');
                }                
            }
        });
           
        },

        sellStock(state, payload){
            state.myStocks.forEach((stock)=>{
                console.log(stock);
                if (stock.company === payload.company){
                    if(payload.amount<=stock.amount){
                        stock.amount -= payload.amount;
                        state.funds += payload.amount*stock.price;
                    }
                    else{
                        alert(`Not Enough stocks of ${stock.company}`);
                    }
                    
                }
            });
        },
        changeStockData(state){
            for(var i=0; i<state.stocks.length;i++){
                let newPrice = Math.floor(Math.random() * (200 - 30 + 1)) + 30;
                state.stocks[i].price = newPrice;
                state.myStocks[i].price = newPrice;
            }
        },
        saveStockToDB(state){
            
            stocksRef.on('value', function(snapshot) {
                if (snapshot.exists()) {
                    snapshot.forEach((snap)=>{
                        for(var i=0;i<state.myStocks.length;i++){
                            if(snap.val().company== state.myStocks[i].company){
                                snap.ref.update({price: state.myStocks[i].price, amount: state.myStocks[i].amount});
                            }
                        } 
                    });
                }     
                else{
                    state.myStocks.forEach((stock)=>{
                        stocksRef.push(stock);
                    });
                }

            });      
        },

        loadStockFromDB(state){
        
            stocksRef.on('value',function(snapshot){
    
                if(snapshot.exists()){
                    
                snapshot.forEach((snap)=>{
                    console.log("hello");
                    for(var i=0;i<state.myStocks.length;i++){
                        if(snap.val().company== state.myStocks[i].company){
                            Object.assign(state.myStocks[i], snap.val());
                            
                        }
                    } 
                });
            }
    
    
    
            });
            console.log(state.stocks);
        }


    },


    actions:{
        bindStocks: firebaseAction( ({ bindFirebaseRef }) => {
            return bindFirebaseRef('myStocks', stocksRef);
        }),
    }

}
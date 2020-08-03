import {initializeApp} from 'firebase';

export const db = initializeApp({
    
        apiKey: "AIzaSyDz31vTOgmbwNuIXCcntaxMFz5Lm4n3Sd4",
        authDomain: "vue-stock-7a538.firebaseapp.com",
        databaseURL: "https://vue-stock-7a538.firebaseio.com",
        projectId: "vue-stock-7a538",
        storageBucket: "vue-stock-7a538.appspot.com",
        messagingSenderId: "310943180946",
        appId: "1:310943180946:web:dd4175f63dfd3b74959e4b",
        measurementId: "G-7B6TM208PX"
      
}).database();


export const stocksRef = db.ref('myStocks');
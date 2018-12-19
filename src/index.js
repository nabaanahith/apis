const express = require('express');
const middelwarec=require ('./config/middelware')
const Cusroute=require('../modules')
const bodyparser=require('body-parser')
require('./config/db')
const app = express();
app.use(bodyparser.json())
app.get('/',(req,res)=>{
res.send("ok")
})
app.use('/api/v1/cust',Cusroute)
app.listen(3000,err=>{


if(err){
    console.log("err");

   
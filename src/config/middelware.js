const isDev =require('../constants');
const morgan=require('morgan')
const express =require('express')
module.exports=app =>{

    app.use(morgan(isDev? 'dev':'common'))
    app.use(express.json())
}

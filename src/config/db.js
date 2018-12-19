const mongoose =require('mongoose')
const DB_URL=require('../constants')
mongoose.Promise=global.Promise
mongoose.set('debug',true)
try{

mongoose.connect(DB_URL,{
    useNewUrlParser:true
})

}
catch(err){
mongoose.createConnection(DB_URL,{


    useNewUrlParser:true
})

}



mongoose.connection.once('open',()=>console.log('mongo-dbrunning')).on('error',e=>{

throw 0

})
;

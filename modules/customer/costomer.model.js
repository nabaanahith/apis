const mongoose = require('mongoose');

 const PRVIDER_ENUM=['FACEBOOK']

const cusSchema = mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Email:{
type:String,
required:[true,'email is required']



    },
avatarUrl:String,
provider:[{
uid:{required:true,type:String},
type:{required:true,type:String, enum:PRVIDER_ENUM},

}]



},{timestamps:true})
module.exports = mongoose.model('customer', cusSchema);
module.exports=PRVIDER_ENUM;
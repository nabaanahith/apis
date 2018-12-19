const Yup = require('yup')
const PRVIDER_ENUM=require('./costomer.model')
 const create =async(req,res)=>{

    const {token,provider}=req.body;
    const bodyschema = Yup.object().shape({


        token:Yup.string().required(),
        provider:Yup.string().oneOf(PRVIDER_ENUM).required()
    })

try{
    await bodyschema.validate({token,provider})

res.status(200).send("ok")

}
catch(err){
res.status(400).send("err.message in cuscontroll",err.message)


}


}
module.exports=create;
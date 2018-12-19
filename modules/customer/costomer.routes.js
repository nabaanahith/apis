const express = require('express');
const router = express.Router();
const Yup = require('yup')
const PRVIDER_ENUM=require('./costomer.model')
 

router.post('/',(req,res)=>{

    const {token,provider}=req.body;
    const bodyschema = Yup.object().shape({

ss:Yup.string().required(),
        token:Yup.string().required(),
        provider:Yup.string().oneOf(PRVIDER_ENUM).required()
    })

try{
    bodyschema.validate({token,provider}).then(result=>{

        res.status(200).send(result)
    }).catch(err=>{

        console.log("catcherr",err);
        res.status(400).send("err.message in pad",err.message)
    })


}
catch(err){
res.status(400).send("err.message in cuscontroll",err.message)


}


})


module.exports = router;
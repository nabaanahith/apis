const express = require('express');
const router = express.Router();
const Yup = require('yup')
const PRVIDER_ENUM=require('../modules/customer/costomer.model')
 

router.post('/',(req,res)=>{

    const token=req.body.token;
    const provider=req.body.provider;
    const bodyschema = Yup.object().shape({


        token:Yup.string().required(),
        provider:Yup.string().required()
    })


    bodyschema.validate({token,provider}).then(result=>{

        res.status(200).send("ll")
    }).catch(err=>{

        console.log("catcherr",err);
        res.status(400).send("err.message in pad",err.message)
  

    })
})

module.exports = router;
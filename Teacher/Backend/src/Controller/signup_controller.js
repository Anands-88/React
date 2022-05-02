const express = require("express");

const Admin = require("../Models/signup_model")

const router = express.Router()

router.post("/signup",async(req,res)=>{
    try{
        const user = await Admin.create(req.body)
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/signup",async(req,res)=>{
    try{
        const user = await Admin.find().lean().exec()
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})


module.exports = router;
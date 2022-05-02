const express = require("express");
require("dotenv").config()
const jwt = require("jsonwebtoken")
const Admin = require("../Models/signup_model")
const Loger = require("../Models/login_model")

const router = express.Router()

router.post("/login",async(req,res)=>{
    try{
        const user = await Admin.findOne({username:req.body.username})
        
        if(user)
        {
            console.log(user.password == req.body.password)
            if(user.password == req.body.password)
            {
                const loger = await Loger.create(req.body)

                var token = jwt.sign({ user }, process.env.JWT);

                return res.status(201).send({token,message:"Login SuccessFull"})
            }
            else
            {
                return res.send({message:"Wrong Password"})
            }
        }
        else
        {
            return res.send({message:"User Not Reqistered"})
        }
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/login",async(req,res)=>{
    try{
        const user = await Loger.find().lean().exec()
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})


module.exports = router;
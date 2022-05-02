const express = require("express");

const SchoolClass = require("../Models/class_model")

const router = express.Router()

router.post("/class",async(req,res)=>{
    try{
        const user = await SchoolClass.create(req.body)
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/class",async(req,res)=>{
    try{
        const user = await SchoolClass.find()
        .populate({ path: "teacher_id", select: ["name","gender","age"] }).lean().exec()
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/class/:id",async(req,res)=>{
    try{
        const user = await SchoolClass.findById(req.params.id)
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.put("/class/:id",async(req,res)=>{
    try{
        const user = await SchoolClass.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.delete("/class/:id",async(req,res)=>{
    try{
        const user = await SchoolClass.findByIdAndDelete(req.params.id);
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

module.exports = router;
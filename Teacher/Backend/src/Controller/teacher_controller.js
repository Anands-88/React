const express = require("express");

const Teacher = require("../Models/Teacher_model")
const schoolClass = require("../Models/class_model")

const router = express.Router()

router.post("/teacher",async(req,res)=>{

    try{
        const user = await Teacher.create(req.body)
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})
router.post("/teacher/:teacher_id",async(req,res)=>{

    try{
        const user = await schoolClass.create(req.body)
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/teacher",async(req,res)=>{
    
    const page = req.query.page || 1;
    const size = req.query.size || 5;
    const age = req.query.order || 1;
    const gender = req.query.gender || ["male","female"]
    // const age = req.body.age
    try{
        const user = await Teacher.find({gender:gender}).sort({"age":age})
        .skip((page-1)*size).limit(size)
        .lean().exec()
    
        return res.status(200).send(user)
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/teacher/:teacher_id",async(req,res)=>{
    
    try{
        const user = await schoolClass.find({teacher_id:req.params.teacher_id})
        .populate({ path: "teacher_id", select: ["name","gender","age"] })

        const count = await schoolClass.find({teacher_id:req.params.teacher_id})
        .populate({ path: "teacher_id", select: ["name","gender","age"] }).countDocuments()
        
        return res.status(200).send({user,count})
    }
    catch(err)
    {
        return res.send(err)
    }
})

router.get("/teachers/:name",async(req,res)=>{

    try{
        const user = await Teacher.find({name:req.params.name}).lean().exec()
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.send()
    }
})


module.exports = router;
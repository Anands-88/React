const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

require("dotenv").config()

const signupController = require("./Controller/signup_controller")
const loginController = require("./Controller/login_controller")
const authToken = require("./Controller/auth_controller")
const TeacherController = require("./Controller/teacher_controller")
const classController = require("./Controller/class_controller")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/admin",[signupController,loginController])
app.use("",authToken)
app.use("/school",[TeacherController,classController])

const port = process.env.PORT || 3000
const db = process.env.DB

app.listen(port,async(req,res)=>{

    try{
        await mongoose.connect(db)
        console.log("Connected Port",port)
    }
    catch(err)
    {
        console.error(err,"Failed to Connect to DB")
    }
})
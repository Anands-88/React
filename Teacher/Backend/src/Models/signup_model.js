const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    password:{type:String ,required:true},},
    {
        versionKey:false,
        timestamps:true
    })

const admin = mongoose.model("admin",AdminSchema)

module.exports = admin
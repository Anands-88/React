const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String ,required:true},},
    {
        versionKey:false,
        timestamps:true
    }
)

const adminlogin = mongoose.model("adminLogin",LoginSchema)

module.exports = adminlogin
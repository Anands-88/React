const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true},
    },
    {
        versionKey:false,
        timestamps:true
    })

const teacher = mongoose.model("teacher",TeacherSchema)

module.exports = teacher
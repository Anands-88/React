const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    grade:{type:Number,required:true},
    section:{type:String,required:true},
    subject:{type:String,required:true},
    teacher_id:{type:mongoose.Schema.Types.ObjectId,
        ref:"teacher",
        required:true }
    },
    {
        versionKey:false,
        timestamps:true
    })

const schoolClass = mongoose.model("class",classSchema)

module.exports = schoolClass
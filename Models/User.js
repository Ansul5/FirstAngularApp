//import mongoose
const mongoose= require("mongoose")

//create schema
const userSchema= new mongoose.Schema({
  Username:{type: String,required:[true,"Username is Required"],minlength:[4,"Minimum Length of Username should be 4"]},
  Password:{type: String,required:[true,"Password is Required"]},
  email:{type: String,required:[true,"email is Required"]},
  Age:Number,
  status:{type:Boolean,default:true}
})

//create model
const userModel= mongoose.model("newUser",userSchema)

//export model
module.exports=userModel
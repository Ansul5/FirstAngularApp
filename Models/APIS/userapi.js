//create mini express app
const exp= require("express")
const userApp= exp.Router()

//import bcryptjs for password protection
const bcryptjs=require('bcryptjs')

//import json web token
const jwt= require("jsonwebtoken")

//import async handler
const expressAsynchandler= require('express-async-handler')

//import dotenv
require('dotenv').config()

//import created user model
const userModel = require("../User")


//to get body of created user
userApp.use(exp.json())

//create new user
userApp.post('/createuser',expressAsynchandler(async(req,res)=>{
    //get  userObj from client i.e database 
    let userObj= req.body
    
    //get user by username
    let userfromDb= await userModel.findOne({Username:userObj.Username})

    //validation of user
    if(userfromDb!=null){
        res.send({message:"User already exists in this username try with another"})
    }
    else{

    //password protection by hashing
   let hashedPassword= await bcryptjs.hash(userObj.Password,5)
   //replace password
   userObj.Password=hashedPassword

   //add user status
   userObj.status=true


    //create new document
    let userDoc= new userModel({...userObj})
    
    //create user
   await userDoc.save()

    
    res.send({message:"New User Created",payload:userDoc})
    }
}))

//get user route
userApp.get("/getUser",expressAsynchandler(async(req,res)=>{
    let receivedUser= await userModel.find()

    res.send({message:"User",payload:receivedUser})
}))

//get user by username
userApp.get('/getUser/:username',expressAsynchandler(async(req,res)=>{
    //get username from url
    let usernameFromUrl= req.params.username

    //find user by username
    let userObj= await userModel.findOne({Username:usernameFromUrl}).exec()

    //verification of received user
    if(userObj==null){
        res.send({message:"User doesnot Exist"})
    }
    else{
        res.send({message:"User",payload:userObj})
    }
}))

//user login route
userApp.post("/loginUser",expressAsynchandler(async(req,res)=>{
  //get user credential obj
  let userCredobj= req.body 
  //find user by username
  let userfromClient= await userModel.findOne({Username:userCredobj.Username})
  //if no user found
  if(userfromClient==null){
      res.status(200).send({message:"User not found"})
      
  }
  //if user found then compare password
  else{
    let status= await  bcryptjs.compare(userCredobj.Password,userfromClient.Password)

    //if password is matched send token as response
     if(status==true){
         let signedToken= await jwt.sign({Username:userfromClient.Username},process.env.SECRET_KEY,{expiresIn:120})
         res.send({message:"Login Successful",token:signedToken,payload:userfromClient})
     }

     //if password is not matched
     else{
         res.send({message:"Invalid Password"})
     }
  }

}))

//update user route
userApp.put("/updateUser",expressAsynchandler(async(req,res)=>{
          //get user from db
     let userFromDB= req.body
     //find user by username
  let userfromClient= await userModel.findOne({Username:userFromDB.Username})
  if(userfromClient==null){
    res.status(200).send({message:"Invalid Username"})
    
}
else{
      //password protection by hashing
   let hashedPassword= await bcryptjs.hash(userFromDB.Password,5)
   //replace password
   userFromDB.Password=hashedPassword

     //change status of user to false by updating it
     await userModel.findOneAndUpdate({Username:userFromDB.Username},{$set:{...userFromDB}})

     res.send({message:"Password Updated"})
    }
}))

//delete user
userApp.put("/deleteUser",expressAsynchandler(async(req,res)=>{
     //get user from db
     let userFromDB= req.body

     //change status of user to false by updating it
     await userModel.findOneAndUpdate({Username:userFromDB.Username},{$set:{status:userFromDB.status}})

     res.send({message:"User Removed"})

}))



//error handling middleware
userApp.use((err,req,res,next)=>{
    res.send({message:"Error Occured",payload:err.message})
})





//export
module.exports=userApp
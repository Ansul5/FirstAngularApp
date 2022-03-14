//create express app
const exp= require("express")

const app= exp()

//import dotenv
require('dotenv').config()

//import path to join angular with webserver
const path=require('path')

//connect complete angular app with our own web-server i.e localhost:5400
app.use(exp.static(path.join(__dirname,'./dist/hands-on4')))

//get database connection url
const dbconnectionURL= process.env.DATABASE_URL

//import mongoose
const mongoose=require('mongoose')

//connect to database
mongoose.connect(dbconnectionURL)
.then(()=>{console.log("Sucessfully Connected To Database")})
.catch(err=>console.log("Error in Database Connection",err))

//import userapp
const userApp=require('./Models/APIS/userapi')

//route when path is user
app.use('/user',userApp)

//catch other routes and return the index file of angular
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/hands-on4/index.html'))
})





//assign port to express
let port=process.env.PORT

app.listen(port,()=>{
    console.log("Express Server Listening in",port)
})

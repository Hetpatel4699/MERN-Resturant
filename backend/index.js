const express = require ("express")
const cors = require("cors")
const mongoose = require ("mongoose")
const dotenv = require ("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({}))

const PORT = process.env.PORT || 8080
//mongodb_connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)

//api
app.get("/",(req,res)=>{
    res.send("server is running")
})
app.post("/signup",(req,res)=>{
    console.log(req.body)
})

app.listen(PORT,()=>console.log("server is running at port :"+ PORT))
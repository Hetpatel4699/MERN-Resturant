const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))

const PORT = process.env.PORT || 8080
//mongodb_connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connect to Database"))
    .catch((err) => console.log(err))

// schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
    image: String
})

// 
const userModel = mongoose.model("user", userSchema)

//api
app.get("/", (req, res) => {
    res.send("server is running")
})

//sign up
app.post("/signup", (req, res) => {
    console.log(req.body)
    const { email } = req.body

    userModel.findOne({ email: email }, (err, result) => {
        console.log(result)
        console.log(err)
        if (result) {
            res.send({ message: "Email id is already register", alert: false })
        }
        else {
            const data = userModel(req.body)
            const save = data.save()
            res.send({ message: "Successfully sign up", alert: true })
        }
    })
})


//api login
app.post("/login", (req, res) => {
    console.log(req.body)
    const { email } = req.body
    userModel.findOne({ email: email }, (err, result) => {
        if (result) {
            console.log(result);
            const datasend = {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                image:result.image,
                }
                console.log(datasend)
            res.send({ message: "Login is successfully", alert: true,data : datasend })
        }
        else{
            res.send({ message: "email is not avaible,please sign up", alert: false})
        }
    })
})



//product secton
const schemaProduct = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    price: String,
    description: String,
})

const productModle = mongoose.model("product",schemaProduct)


//save product in data
//api
app.post("uploadProduct",(req,res)=>{
    console.log(req.body)
})

//server is running
app.listen(PORT, () => console.log("server is running at port :" + PORT))
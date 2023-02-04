const express = require("express");
const app = express();
const noteRoutes = require("./routes/noteRoutes")
const userRouter = require("./routes/userRoutes")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

const mongoose = require("mongoose")
app.use(express.json())
app.use(cors())

app.use("/",(req,res)=>{
    res.status(200).send("app is live")
})

app.use("/users",userRouter)
app.use("/note",noteRoutes)

const PORT = process.env.PORT || 5000

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port no. "+PORT)
    })
})
.catch((error)=>{
    console.log(error)
})




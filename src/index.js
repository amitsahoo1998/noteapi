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

app.use("/users",userRouter)
app.use("/note",noteRoutes)

const PORT = process.env.PORT || 5000

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:Pramod%407104@cluster0.vlygj8n.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port no. "+PORT)
    })
})
.catch((error)=>{
    console.log(error)
})




import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/", (req,res)=> {
    console.log("this is the root route")
})

app.listen(3001, (req,res)=>{
    console.log("Connected to server on port 3001")
})
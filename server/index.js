import express from "express"
import cors from "cors"
import User from './routes/user.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', User)

app.listen(3001, (req,res)=>{
    console.log("Connected to server on port 3001")
})
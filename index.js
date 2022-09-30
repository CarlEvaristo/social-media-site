import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(process.env.port || 3001, (req,res)=>{
    console.log("Connected to server on port 3001")
})



// import express from "express"
// import cors from "cors"
// import User from './routes/user.js'
// import Upload from "./routes/upload.js"
// import Posts from "./routes/posts.js"
// import Like from "./routes/like.js"
// import Delete from "./routes/delete.js"
// import Update from "./routes/update.js"

// const app = express()
// app.use(express.json())
// app.use(cors())

// app.use('/user', User)
// app.use('/upload', Upload)
// app.use('/posts', Posts)
// app.use('/like', Like)
// app.use('/delete', Delete)
// app.use('/update', Update)

// app.listen(process.env.port || 3001, (req,res)=>{
//     console.log("Connected to server on port 3001")
// })
import express from "express"
import cors from "cors"
// import User from './routes/user.js'
// import Upload from "./routes/upload.js"
// import Posts from "./routes/posts.js"
// import Like from "./routes/like.js"
// import Delete from "./routes/delete.js"
// import Update from "./routes/update.js"

import path from "path"

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
     
// let corsOptions = {             //=> this is very important when running react and express both on localhost
//   origin: "*",
//   optionsSuccessStatus: 200,
// }
// app.use(cors(corsOptions));

const app = express()
app.use(express.json())
app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.use('/user', User)
// app.use('/upload', Upload)
// app.use('/posts', Posts)
// app.use('/like', Like)
// app.use('/delete', Delete)
// app.use('/update', Update)

app.use(express.static(path.resolve(__dirname, 'client/build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });


app.listen(process.env.PORT || 3001, (req,res)=>{
    console.log("Connected to server on port 3001")
})


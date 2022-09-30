import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.post("/", (req,res)=> {
    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    const author = req.body.author
    const date = req.body.date
    db.query("INSERT INTO posts (title,description,image,author,date) VALUES (?,?,?,?,?)", [title, description, image, author, date],
    (err,result) => err ? res.send(err) : res.send(result))
})

export default router
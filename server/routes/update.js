import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.put("/", (req,res)=> {
    const postId = req.body.id
    const title = req.body.title
    const description = req.body.description
    const image = req.body.image
    const author = req.body.author
    const date = req.body.date
    // db.query("UPDATE posts SET (title,description,image,author,likes,date) VALUES (?,?,?,?,?) WHERE ID = ?", [title, description, image, author, date],
    db.query("UPDATE posts SET title = ?, description = ?, image = ? WHERE id = ?", [title, description, image, postId],
    (err,result) => err ? res.send(err) : res.send(result))
})

export default router
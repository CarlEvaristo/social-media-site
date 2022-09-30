import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.post("/", (req,res)=> {
    const userName = req.body.username
    const postId = req.body.postid
    db.query("INSERT INTO likes (username, postid) VALUES (?,?)", [userName, postId],
    (err,result) => err ? res.send(err) : 
        db.query("UPDATE posts SET likes=likes+1 WHERE id = ? ", [postId],
        (err,result) => err ? res.send(err) : res.send(result))
    )
})

router.get("/:id", (req,res)=> {
    const postId = req.params.id 
    db.query("SELECT * FROM likes WHERE postid = ?", [postId],
    (err,result) => err ? res.send(err) : res.send(result))
})

router.delete("/", (req,res)=> {
    const userName = req.body.username
    const postId = req.body.postid
    db.query("DELETE FROM likes WHERE postid = ? AND username = ?", [postId, userName],
    (err,result) => err ? res.send(err) : 
        db.query("UPDATE posts SET likes=likes-1 WHERE id = ? ", [postId],
        (err,result) => err ? res.send(err) : res.send(result))
    )
})


export default router
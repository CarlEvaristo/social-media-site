import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.delete("/:id", (req,res)=> {
    const postId = req.params.id 
    db.query("DELETE FROM posts WHERE id = ? ", [postId],
    (err,result) => err ? res.send(err) : res.send(result))
})


export default router
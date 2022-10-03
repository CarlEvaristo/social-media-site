import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.get("/", (req,res)=> {
    db.query("SELECT * FROM posts ", 
    (err,result) => err ? res.status(err.status).send(err) : res.send(result))
})

router.get("/:id", (req,res)=> {
    const id= req.params.id 
    db.query("SELECT * FROM posts WHERE id = ?", [id],
    (err,result) => err ? res.send(err) : res.send(result))
})

export default router
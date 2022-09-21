import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.post("/register", (req,res)=> {
    const userName = req.body.username
    const passWord = req.body.password
    db.query("INSERT INTO users (username, password) VALUES (?,?)", [userName, passWord],
    (err,result) => err ? console.log(err) : res.send(result))
})

export default router
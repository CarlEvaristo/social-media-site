import express from "express"
import db from "../config/db.js"

const router = express.Router()

router.post("/register", (req,res)=> {
    const userName = req.body.username
    const passWord = req.body.password
    db.query("INSERT INTO users (username, password) VALUES (?,?)", [userName, passWord],
    (err,result) => err ? res.send(err) : res.send(result))
})

router.post("/login", (req,res)=> {
    const userName = req.body.username
    const passWord = req.body.password
    db.query("SELECT * FROM users WHERE username = ?", [userName],
    (err,result) => err ? res.send(err) : res.send(result))
})

router.get("/users", (req,res)=> {
    db.query("SELECT * FROM users", 
    (err,result) => err ? console.log(err) : res.send(result))
})


export default router
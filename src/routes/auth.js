const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// const jwtAuth = require("../middleware/jwtAuth")
const userModel = require("../models/users")

const router = express.Router()
const key = process.env.JWT_KEY

router.post("/login", (req, res) => {
    const { username, password } = req.body

    // const userLogin = users.find(user => user.username === username && user.password === password)
    // login success

    userModel.getUser(username, password, (error,data)=>{
    try{
        if(error) return res.status(500).send({error})

        if (data.length) {
            const dataUser = {
                username,
                role: data[0].role
            }
    
            // create jwt token
            const token = jwt.sign(dataUser, key, { expiresIn: '1h' })
    
            return res.status(200).send({
                message: "User found!!",
                data: [{token }]
            })
        }
    
        // login failed
        return res.status(401).send({
            error: "User not found!!"
        })
    }catch(error){
        return res.status(500).send({error : "ERROR LOGIN!"})
    }
    })
})

//Register
router.post("/register", (req, res)=>{
    console.log("req", req.body)
    users.push(req.body)
    console.log(users);
    res.send({
        message: "POST Success"
    })
})

module.exports = router
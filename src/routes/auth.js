const express = require("express")
const jwt = require("jsonwebtoken")
const conn = require("../confiq/database")
require("dotenv").config()
const userModel = require("../models/users")


// const jwtAuth = require("../middleware/jwtAuth")

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
            console.log(data[0].role);
            // create jwt token
            const token = jwt.sign(dataUser, key, { expiresIn: '1h' })
    
            return res.status(200).send({
                message: "User found!!",
                data: [{token,role: data[0].role, dataUser}]
            })
        }
        return res.status(401).send({
            error: "User not found!!"
        })

        // login failed
    }catch(error){
        console.log(error);
        return res.status(401).send({
            error: "User not oo!!"
        })
    }
    })
})

//Register
router.post("/register", (req, res)=>{
    const param = req.body.username
    const param1 = req.body.name
    const param2 = req.body.password
    const param3 = req.body.role
    try{
        // const query = `select * from user1 where username='${username}' and password='${password}'` 
        conn.query(`INSERT INTO user (id,name,username,email,password,role) VALUES ('','${param1}','${param}','${param1}@${param1}','${param2}','${param3}')`,
        function(error,results, fields){    
            if (error) {
                console.log("ERROR : tambahGAGAL -", + error);
                return response(res, 500, "ERROR : errorEditUser -", error)
            }
            return response(res, 200, "BERHASIL TAMBAH")
          });

    }catch(err){
        return response(res, 500, "Internal ERROR", error)
    }
})

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}
module.exports = router
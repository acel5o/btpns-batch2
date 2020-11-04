const express = require("express")
const router = express.Router()

const jwtAuth = require("../middleware/jwtAuth")
let users = require("../models/users")

// public data
router.get("/", (req, res) => {
    // login success
    res.status(200).send({
        message: "Success",
        data: [users[0]]
    })
})

// private data
router.get("/all", jwtAuth, (dataLogin, req, res, next) => {
    if (dataLogin.role === "admin") {
        // login success
        res.status(200).send({
            message: "Success",
            data: users
        })
    } else {
        res.status(401).send({
            error: "Unauthorized!!"
        })
    }
})

router.post("/edit/:username", jwtAuth, (dataLogin, req, res, next) => {
    const username = req.params.username
    const param = req.body
    for (let i = 0; i < users.length; i++) {
        let thisuser = users[i]
        if (thisuser.username === username) {
            users[i] = param;
            return response(res, 200, "Edit Success", [users])
        }
    }
})

//delete data
router.post("/delete/:username", jwtAuth, (dataLogin, req, res, next) => {
    const username = req.params.username
    if (dataLogin.role === "admin") {
        users=users.filter(j => j.username !== username) 
        return response(res, 200, "Berhasil Delete", [users])
    }
    return response(res, 400, "Unauthorized!!", [])
})

//TampilData
router.get("/data", jwtAuth, (dataLogin, req, res, next)=>{
    res.send(users)
})

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}

module.exports = router
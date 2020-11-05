const express = require("express")
const router = express.Router()
const conn = require("../confiq/database")

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

// UPDATE MyGuests SET lastname='Doe' WHERE id=2
router.post("/edit/:username", jwtAuth, (dataLogin, req, res, next) => {
    const username = req.params.username
    const param = req.body.username
    const param1 = req.body.name
    const param2 = req.body.role
    if(param2==="admin"){   
        role="1"
    }else{
        role="2"
    }
    
        try{
            // const query = `select * from user1 where username='${username}' and password='${password}'`
            conn.query(`UPDATE user SET username='${param}',name='${param1}',role='${role}' where username='${username}'`,
            function(error,results, fields){    
                if (error) {
                    console.log("ERROR : editUser -", + error);
                    return response(res, 500, "ERROR : errorEditUser -", error)
                }
                return response(res, 200, "EDIT SUKSES")
              });
    
        }catch(err){
            return response(res, 500, "Internal Server Error!!", error)
        } 

    // for (let i = 0; i < users.length; i++) {
    //     let thisuser = users[i]
    //     if (thisuser.username === username) {
    //         users[i] = param;
    //         return response(res, 200, "Edit Success", [users])
    //     }
    // }
})

//delete data
router.post("/delete/:username", jwtAuth, (dataLogin, req, res, next) => {
    const username = req.params.username
    if (dataLogin.role === "admin") {
        try{
            // const query = `select * from user1 where username='${username}' and password='${password}'`
            conn.query(`DELETE FROM USER WHERE username='${username}'`,
            function(error,results, fields){    
                if (error) {
                    console.log("ERROR : deleteUser -", + error);
                    return response(res, 500, "ERROR : errorDeleteUser -", error)
                }
                return response(res, 200, "DELETE SUKSES", null)
              });
    
        }catch(err){
            return response(res, 500, "Internal Server Error!!", error)
        } 
    }
})

//TampilData Clear
router.get("/data", jwtAuth, (dataLogin, req, res, next)=>{
    try{
        // const query = `select * from user1 where username='${username}' and password='${password}'`
        conn.query("SELECT a.username username,a.name name, b.name role FROM user a INNER JOIN user_roles b ON a.role=b.id",
        function(error,results, fields){    
            if (error) {
                console.log("ERROR : getUser -", + error);
                return response(res, 500, "ERROR : getUser -", error)
            }
            return res.send(results)
          });

    }catch(err){
        return response(res, 500, "Internal Server Error!!", error)
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
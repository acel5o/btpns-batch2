const express = require("express")
const app = express()
const bodyParser = require("body-parser")
// const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.use((req,res,next) => {
//     // res.status(200).json({
//     //     massage: "Hello World!"
//     // })
//     next()
// })
let users = [
    {
        "username" : "admin",
        "name" : "admin",
        "password" : "123",
        "role" : "admin"
    },
    {
        "username" : "admin1",
        "name" : "admin1",
        "password" : "123",
        "role" : "admin"
    },
    {
        "username" : "acel5o",
        "name" : "Zefa",
        "password" : "123",
        "role" : "user"
    },
]

app.get("/data", (req,res)=>{
    res.send(users)
})

// app.get("/test", (req,res) => {
//     res.send({
//         massage : "Hello /!"
//     })
// })

// app.post("/login", (req,res) => {
//     console.log("req", req.query);
//     res.send({
//         massage : "Hello /!"
//     })
// })

// app.post("/regis", (req,res) => {
//     console.log("req", req.body);
//     res.send({
//         massage : "Hello /!"
//     })
// })

// app.get("/user/:userId", (req,res) => {
//     res.send({
//         massage : `Hello ${req.params.userId}!`
//     })
// })

// //server static
// app.use(express.static("public"))

 module.exports = app
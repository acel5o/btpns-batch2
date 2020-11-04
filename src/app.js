const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const users = require("./routes/user")
const auth = require("./routes/auth")
const userss = require("./models/users")
// const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// app.use((req,res,next) => {
//     // res.status(200).json({
//     //     massage: "Hello World!"
//     // })
//     next()
// })\

//LAMA
// let users = [
//     {
//         "username" : "admin",
//         "name" : "admin",
//         "password" : "123",
//         "role" : "admin"
//     },
//     {
//         "username" : "admin1",
//         "name" : "admin1",
//         "password" : "123",
//         "role" : "admin"
//     },
//     {
//         "username" : "acel5o",
//         "name" : "Zefa",
//         "password" : "123",
//         "role" : "user"
//     },
// ]

// app.get("/data", (req,res)=>{
//     res.send(userss)
// })

// //edit User
// app.post("/edit/:username", (req,res) => {
    // const username = req.params.username
    // const param = req.body
    // for (let i = 0; i < users.length; i++) {
    //     let thisuser = users[i]
    //     if (thisuser.username === username) {
    //         users[i] = param;
    //     }
    // }

    // res.send({
    //     massage : `Edited User : ${req.params.username}!`
    // })
// })

// //delete User
// app.post("/delete/:username", (req,res) => {
//     const username = req.params.username
    // users = users.filter(i => {
    //     if (i.username !== username) {
    //         return true;
    //     }
    //     return false;
//     });

//     res.send({
//         massage : `Deleted User : ${req.params.username}!`
//     })
// })


// routing
app.use("/auth", auth)
app.use("/users", users) // edit, delete, detail, add, get

// error handler
app.use((req, res, next) => {
    const error = new Error("Error occured!!")
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        error: error.message
    })
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



///Yang Baru////




// create application/json parser
// app.use(bodyParser.json())

// // create application/x-www-form-urlencoded parser
// app.use(bodyParser.urlencoded({ extended: true }))

// // serve static files
// app.use(express.static("public"))



// native routing
// app.get("/test", (req, res) => {
//     res.send({
//         message: "Hello /!!"
//     })
// })

// app.get("/user/:userId", (req, res) => {
//     res.send({
//         message: `Hello ${req.params.userId}!!`
//     })
// })

// POST /login gets urlencoded bodies
// app.post("/login", (req, res) => {
//     console.log("req: ", req.body);
//     res.send({
//         message: "Hello /!!"
//     })
// })

// POST /register gets JSON bodies
// app.post("/register", (req, res) => {
//     console.log("req: ", req.body);
//     res.send({
//         message: "Hello /!!"
//     })
// })




/**
 * Latihan:
 *  - Login => generate token
 *  - Register/Tambah User => tanpa verifikasi token
 *  - User List => pake token
 *  - Edit User => pake token (khusus admin kalo ngedit orang lain)
 *  - Delete User  => pake token (khusus admin)
 */

/**
 * RESTFull Method:
 *     POST => Tambah data     => /user
 *     GET => Ambil data       => /users
 *     PUT => Edit data        => /user/idUser
 *     DELETE => Hapus data    => /user/idUser
 */

/**
 * API Contract:
 *     {
 *         status_code: 200 "http status"
 *         message: "Data Saved/Error saving data",
 *         data: []/{}
 *     }
 */

 module.exports = app
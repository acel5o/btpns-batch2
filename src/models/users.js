const conn = require("../confiq/database")

const getUser=(username=null,password=null,cb=()=>{})=>{
    try{
        // const query = `select * from user1 where username='${username}' and password='${password}'`
        conn.query("select b.name role from user_roles b INNER JOIN user a on a.role=b.id where username=? and password=? order by a.username limit 1", [username,password],
        function(error,results, fields){    
            if (error) {
                console.log("ERROR : getUser -", + error);
                return cb("Internal Server Error!!", null)
            }
            return cb(null, results)
          });

    }catch(err){
        console.log("ERROR getUser.catch", + error);
        return cb("Internal Server Error!!", null)
    }
}
// let users = [
//         {
//             "username" : "admin",
//             "name" : "admin",
//             "password" : "123",
//             "role" : "admin"
//         },
//         {
//             "username" : "admin1",
//             "name" : "admin1",
//             "password" : "123",
//             "role" : "admin"
//         },
//         {
//             "username" : "acel5o",
//             "name" : "Zefa",
//             "password" : "123",
//             "role" : "user"
//     }
// ]


module.exports = {getUser}
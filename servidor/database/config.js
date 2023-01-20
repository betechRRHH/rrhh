const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "172.20.1.220",
    database: "rrhh",
    user: "root",
    password: "prueba1234",
})

conn.connect((error)=>{
    if(error){
        throw error;
    }else {
        console.log("db connect RRHH")
    }
})


module.exports = conn

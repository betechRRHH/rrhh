const mysql = require('mysql');
let conn;

try {
    conn = mysql.createConnection({
        host: "172.20.1.220",
        database: "rrhh",
        user: "root",
        password: "prueba1234",
    });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = conn;

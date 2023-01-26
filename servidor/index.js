const express = require('express')
const conn =  require('./database/config.js')
const empleados = require('./routes/empleados.route.js')
const app = express()


app.use('/api', empleados)


const PORT = 5000
app.listen(PORT, () => console.log("server on port 5000"))
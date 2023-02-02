const express = require('express')
const conn =  require('./database/config.js')
const empleados = require('./routes/empleados.route.js')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/empleados', empleados)


const PORT = 5000
app.listen(PORT, () => console.log("server on port 5000"))
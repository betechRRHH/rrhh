const express = require('express')
const {empleados, empleado} =  require('../controllers/empleados.controllers.js')

const route = express.Router()

route.get('/empleados', empleados)
route.get('/empleado/:dni', empleado)


module.exports = route
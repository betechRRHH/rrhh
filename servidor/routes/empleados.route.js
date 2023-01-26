const express = require('express')
const route = express.Router()

const postEmpleados = require ('../controllers/empleados.controllers.js')

const nuevosDatos = {
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    fechaIngreso: '',
    actividad: '',
    elementos: ''
}
//const empleados = []


route.get('/', (req, res)=> {
    res.json({ok: "RRHH" })
})

// app.use(express.json()); // para interpretar el req.body en el metodo post

route.post("/nuevo", postEmpleados)




module.exports = route
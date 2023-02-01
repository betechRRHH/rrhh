const express = require('express')
const route = express.Router()
const {body, validationResult} = require("express-validator")

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

route.get('/', (req, res)=> {
    res.json({ok: "RRHH" })
})

route.post("/nuevo",
[
    body('nombre')
        .exists()
        .isLength({min: 5}),
    
    body("apellido")
        .exists()
        .isLength({min: 5}),

    body("dni")
        .exists()
        .toInt()
        
],
 postEmpleados)


module.exports = route
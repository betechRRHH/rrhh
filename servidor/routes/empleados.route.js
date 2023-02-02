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
        .trim()
        .isLength({min: 5})
        .withMessage('Debes ingresar un valor'),
    
    body("apellido")
        .exists()
        .trim()
        .isLength({min: 5}),

     body("domicilioReal")
        .exists()
        .trim()
        .isLength({min: 5}),

    body("domicilioLegal")
        .exists()
        .trim()
        .isLength({min: 5}),

    body("ciudad")
        .exists()
        .trim(),

    body('cp')
        .exists()
        .trim()
        .toInt(),

    body("dni")
        .exists()
        .trim()
        .toInt()
        .withMessage('Debes ingresar un numero de DNI'),

    body('fechaNacimiento')
        .exists()
        .trim()
        .isDate()
        .withMessage('Debes ingresar una fecha valida'),

    body('lugarNacimiento')
        .exists()
        .trim(),

        body('lugarNacimiento')
        .exists()
        .trim()
        .isDate()
        .withMessage('Debes ingresar una fecha valida'),

    body('fechaAlta')
        .exists()
        .trim()
        .isDate(),
        
    body('rol')
        .exists()
        .trim(),

    body('elementos')
        .exists()
        .trim()
],
 postEmpleados)


module.exports = route
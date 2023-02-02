const { validationResult } = require('express-validator');
const conn =  require('../database/config.js')

/*
[
    body('nya', 'Ingrese nombre completo')
        .exists()
        .isLength({min: 5})
]*/

const postEmpleados = (req, res) => {
    const {nombre, apellido, domicilioReal, domicilioLegal, ciudad, cp, dni, fechaNacimiento, lugarNacimiento, fechaIngreso, 
        actividad, elementos} = req.body

    console.log(req.body)
        
    /*conn.query( "INSERT INTO EMPLEADOS(EM_NOMBRE,EM_APELLIDO,EM_DNI,EM_FECNAC,EM_LUGNAC,EM_FECHAING,EM_ACT,EM_ELEM, DO_CODIGO, PA_CODIGO, RO_CODIGO, DE_CODIGO) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
    [nombre, apellido, dni, fechaNacimiento, lugarNacimiento, fechaIngreso, actividad, elementos, 1,2,3,4],
    (error, results) => {
        if(error)
            throw error;
        res.status(201).json({"Item añadido correctamente": results.affectedRows});
    const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    });*/
   /* (error, results) => {
        if(error)
            throw error;
        res.status(201).json({"Item añadido correctamente": results.affectedRows});*/
    const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.sendStatus(201);
   // }
    

}

module.exports = postEmpleados
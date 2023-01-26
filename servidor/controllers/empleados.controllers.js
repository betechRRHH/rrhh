const conn =  require('../database/config.js')

const postEmpleados = (req, res) => {
    const {nombre, apellido, dni, fechaNacimiento, lugarNacimiento, fechaIngreso, actividad, elementos} = req.body

    console.log(req.body.nombre, apellido, dni, fechaNacimiento, lugarNacimiento, fechaIngreso, actividad, elementos)
        
    conn.query( "INSERT INTO EMPLEADOS(EM_NOMBRE,EM_APELLIDO,EM_DNI,EM_FECNAC,EM_LUGNAC,EM_FECHAING,EM_ACT,EM_ELEM, DO_CODIGO, PA_CODIGO, RO_CODIGO, DE_CODIGO) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
    [nombre, apellido, dni, fechaNacimiento, lugarNacimiento, fechaIngreso, actividad, elementos, 1,2,3,4],
    (error, results) => {
        if(error)
            throw error;
        res.status(201).json({"Item añadido correctamente": results.affectedRows});
    });
    

}

module.exports = postEmpleados
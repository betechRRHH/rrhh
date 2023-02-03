const conn =  require('../database/config.js')

const getEmpleados = (req, res) =>{

    const { dni } = req.params
    const { algo } = req.query // parametros que se pasan por query string ?dni=39498001&nombre=agustin
    const { some } = req.boy // este es para POST y no esta disponible en un get

    res.json({ 
        dni : req.params.dni        
    })

    conn.query('SELECT * FROM EMPLEADOS',
        (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                res.json(results);
            } else {
                res.send('Not result')
            }
        }
    )
}
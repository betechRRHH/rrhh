const conn =  require('../database/config.js')

const getEmpleados = (req, res) =>{

     conn.query('SELECT * FROM EMPLEADOS',
        (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                console.log(results.body)
                res.json(results);
            } else {
                res.send('Not result')
            }
        }
    )
}

module.exports = getEmpleados
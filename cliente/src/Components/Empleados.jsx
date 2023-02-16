import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { reqResApi } from '../Api/reqRes'
import '../Css/empleados.css'

export default function Empleados() {

    const [empleados, setEmpleados] = useState([])
    
    useEffect(()=>{
        cargarEmpleados()
    })

    const cargarEmpleados = async()=>{
        const resp = await reqResApi.get('/empleados/0')
        setEmpleados(resp.data)
    }
    const renderEmpleado = ({COD_EMPLEADO,EM_APELLIDO,EM_NOMBRE, EM_DNI, RO_SECTOR})=>{
        return (
            <tr key={COD_EMPLEADO}>
                <td>{EM_APELLIDO}, {EM_NOMBRE}</td>
                <td>{EM_DNI}</td>
                <td>{RO_SECTOR}</td>
            </tr>
        )
    }
  return (

    <div className='empelados'>

        <div className='empleados__title'>
            <div>
                 <h1>Empleados</h1>
            </div>
           
            <div className='contenedor_boton'>
                <button className='boton boton__atras'>ATRAS</button>
                <button className='boton boton__siguiente'>SIGUIENTE</button>
            </div>
        </div>

        <div>
         <table className="table empleado__table">
            <thead>
            <tr className='header_empleado'>
                <th scope="col">Nombre</th>
                <th scope="col">DNI</th>
                <th scope="col">Sector</th>
            </tr>
            </thead>
            
            <tbody>
                { empleados.map ( renderEmpleado ) }
            </tbody>
            </table>
        </div>
   
    </div>
  )
}

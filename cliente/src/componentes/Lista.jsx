import React from 'react'
import { Link } from 'react-router-dom'

export const Lista = () => {
  return (
    <div className='container'>

     
      <div className="row">
        <h5 className="text-start">Buscar empleado: </h5>
       </div>
        
     <form className="row">
            <div className="col-4">                
                <input type="text" className="form-control" id="nombre" placeholder="Ingresar dni.."/>
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary" value="buscar" id='buscar'>Buscar</button>
              <button type="submit" className="btn btn-primary" value="buscar" id='buscar'><Link to='/empleados/nuevo' className=' col-10 text-decoration-none text-reset'>Nuevo</Link></button>
            </div>
            
        </form>

      <div className='mt-3'><h4 className='text-center'>Aca se deberian mostrar todos los empleados</h4></div>

    </div>
  )
}

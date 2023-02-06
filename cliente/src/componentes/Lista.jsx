import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Lista = () => {

  const [data, setData] = useState([])
  

    useEffect(() => {
        let url = 'http://localhost:5000/empleados'
        axios.get(url)
            .then(res => {
                setData(res.data)
                
            })
    },[])

  return (
    <div className='container'>

     
      <div className="row">
        <h5 className="text-start">Buscar empleado: </h5>
       </div>
        
     <form className="row">
            <div className="col-4">                
                <input type="text" className="form-control" id="nombre" placeholder="Ingresar dni.."/>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary" value="buscar" id='buscar'>Buscar</button>
              <button type="submit" className="btn btn-primary" value="buscar" id='buscar'><Link to='/empleados/nuevo' className=' col-10 text-decoration-none text-reset'>Nuevo</Link></button>
            </div>
            
        </form>

      <div className='row mt-4' >
      
      {
            data.map((item) => {
                return <div className='col-2 card m-1' key={item.COD_EMPLEADO}>
                        <img src="../../foto_perfil_default.jpg" className="card-img-top" alt="imagen"/>
                        <h5 class="card-title">{item.EM_APELLIDO + ', ' + item.EM_NOMBRE} </h5>
                        <p class="card-text">{item.EM_DNI}</p>
                        <p class="card-text">{item.EM_ACT}</p>
                        <Link to='/empleados/nuevo' class="btn btn-primary">Editar</Link>
                </div>
            })
        }      
    

      </div>

    </div>
  )
}

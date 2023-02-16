import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/header.css'

export default function SideBar() {
    const navegar = useNavigate()
  return (
    <div className='sidebar'>
        <div className='sidebar__body'>
                <div   className='busqueda'>
                    <button onClick={()=>navegar('/Search')}><ion-icon  className="search_icons" name="search-outline"/>Busqueda</button>
                </div>
                <div >
                    <button ><ion-icon name="person-add-outline"/>Añadir Empleado</button>
                </div>
                <div >
                    <button > <ion-icon name="gift-outline"/>Cumpleaños</button>
                </div>
                <div  >
                    <button onClick={()=>navegar('/')}> <ion-icon name="home-outline"/>Home</button>
                </div>
            </div>
        </div>
   
  )
}

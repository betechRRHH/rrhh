import React from 'react';
let hoy = new Date();
let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
let fechaYHora = fecha + ' ' + hora;

export const Header = () => {
  return (
    <header className="p-1 text-bg-dark">
        <div className="container">
            <div className="row g-1">
                <div className="col">
                            
                    <font color="lightblue">BETECH</font> <b>APP</b>
                               
                </div>

                <div className="col text-center">
                    <img alt='imagen' src="../../logo-betech.png"/>
                </div>

                <div className="col ">
                    <div className=" text-end">
                        Area:  RRHH
                    </div>
                    <div id="fechaYHora" className=" text-end">
                        {fechaYHora}
                    </div>
                </div>
                
            </div>                   
        </div>
    </header>
  )
}

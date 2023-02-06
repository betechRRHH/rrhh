import React, {useState} from 'react';

let hoyDia = new Date();
let dia = hoyDia.getDate()
let mes = hoyDia.getMonth()+1
let año = hoyDia.getFullYear()

if(dia < 10) { dia = '0' + dia; }
if(mes < 10) { mes = '0' + mes; }
if(año < 10) { año = '0' + año; }

let fecha = dia + '-' + mes + '-' + año

export const Header = () => {

    const [reloj, setReloj] = useState('')

        const fReloj = () => {
            let hoy = new Date();
            let horas = hoy.getHours()
            let minutos = hoy.getMinutes()
            let segundos = hoy.getSeconds()
        
            if(horas < 10) { horas = '0' + horas; }
            if(minutos < 10) { minutos = '0' + minutos; }
            if(segundos < 10) { segundos = '0' + segundos; }
        
            let horario = horas+':'+minutos+':'+segundos
            setReloj(horario)
        }
        
        setInterval(fReloj, 1000);

  return (
    <header className="p-1 text-bg-dark">
        <div className="container">
            <div className="row g-1">
                <div className="col">
                            
                    <font color="lightblue">BETECH</font> <b>APP</b>
                               
                </div>

                <div className="col text-center">
                    <img alt='imagen' src="../../favicon.ico"/>
                </div>

                <div className="col ">
                    <div className=" text-end">
                        Area:  RRHH
                    </div>
                    
                    <div id="fecha" className="text-end">
                        {fecha}
                    </div>
                    <div id="reloj" className="clock text-end">
                        {reloj}
                    </div>

                </div>
                
            </div>                   
        </div>
    </header>
  )
}


import RouterRRHH from "./Router/RouterRRHH";

import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar";


import './Css/home.css'


function App() {
  return (
  <>
    <div className="container">
      <Header/>
    <div className='contenedor__home'>
      <div className='contenedor__sidebar'>
        <SideBar/>
    </div>
      <div className='contenedor__empleados'>
      <RouterRRHH/>
    </div>
    </div>

  </div>
  
  </>
  );
}

export default App;

import React from 'react'
import Sidebar from '../components/Sidebar';


import '../styles/pages/registro.css'



function Registro(){
 
  return(
    <div id="page-landing">
        <Sidebar />
       <div id="registros">
          <input type='search' className="search"/>

          <div className="filter">
                <input className="filterDate" type="date"/>
              </div>
          <div className="container">
              
           </div>

         </div>   
    </div>

  )
}

export default Registro;
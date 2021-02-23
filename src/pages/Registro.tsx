import React from 'react'
import Sidebar from '../components/Sidebar';


import '../styles/pages/registro.css'
import {FiAlertCircle, FiXCircle} from 'react-icons/fi'



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
              <div className="card">
                <p>
                      <strong>OS0001</strong> 
                      <br/> Data:24/02/2021
                </p>
                <button className="buttonDetails"><FiAlertCircle size={35} color='blue' /></button>
                <button className="buttonDelete"><FiXCircle size={35} color='red' /></button>
              </div>
           </div>

         </div>   
    </div>

  )
}

export default Registro;
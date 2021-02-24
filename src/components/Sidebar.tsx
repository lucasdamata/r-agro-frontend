import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/components/sidebar.css'
import trator from '../images/trator.svg'

export default function Sidebar(){
  return (
    <div id="page-sidebar">
    <aside>
              <img src={trator} alt="Trator"  />
              <nav>
                <ul>
                  <li>
                        <Link to="cadastro" id="teste" >Cadastrar</Link>
                  </li>
                  <li>
                  <Link to='registro' id="teste" >Registros</Link>
                  </li>
                </ul>
              </nav>
        </aside>
        </div>
  )
}


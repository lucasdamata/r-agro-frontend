import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Cadastro from './pages/Cadastro'
import Registro from './pages/Registro';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
          <Route path='/' component={Cadastro} exact/>
          <Route path='/cadastro' component={Cadastro}  />
          <Route path='/registro' component={Registro}  />
         
        </Switch>
    </BrowserRouter>
  );
}

export default Routes
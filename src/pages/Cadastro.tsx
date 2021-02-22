import React, {useRef} from 'react'
import {Form} from '@unform/web'
import {Scope, SubmitHandler, FormHandles} from '@unform/core'
import Sidebar from '../components/Sidebar';
import Input from '../components/Form'

import '../styles/pages/cadastro.css'


interface FormData {
  os: string;
  location: string;
  time: {
    initial: Date;
    final: Date;
  };
  machine:{
    nameMachine: string;
    inplementMachine: string;
  };
  operator: string;
  inputs: {
    input: string;
    amount: string
  }

}

function Cadastro(){
  const formRef = useRef<FormHandles>(null)
  
  
  const handleSubmit: SubmitHandler<FormData> = (data, {reset}) => {
    const {machine,os} = data;
  
    if (os === ''){
        formRef.current?.setFieldError('os','Campo obrigatório')
    }

    if(machine.nameMachine === ''){
      formRef.current?.setFieldError('machine.nameMachine','Campo obrigatório')
    }


    console.log(data)

    reset()
  };


  const initialData = {
    os: 'OS'
  }
 
  return(
    
    <div id="page-landing">
        <Sidebar />
        <div id="formulario">
            <Form ref={formRef} initialData={initialData}  onSubmit={ handleSubmit}>
              <Input  name="os" />
              <Input  name="location" />
              
              <Scope path='time'>
                <Input  name="initial" />
                <Input  name="final" />
                <Input  name="date" />
              </Scope>

              <Scope path='machine'>
              <Input  name="nameMachine" />
              <Input  name="inplementMachine" />
              </Scope>

              <Input  name="operator" />

              <Scope path='inputs'>
                  <Input  name="input" />
                  <Input  name="amount" />
              </Scope>
              

              <button type='submit'>Enviar</button>
            </Form>
        </div>
    </div>
    
  )
}

export default Cadastro;
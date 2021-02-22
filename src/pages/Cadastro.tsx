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
            <fieldset>  
             
              <div className='colum01'>
                <Input className="os"  name="os" /> 
                <Input className="location"  name="location" />
              </div>
              
              <Scope path='time'>
                <div className="colum02">
                <Input type='time' className="initial"  name="initial" />
                <Input type='time' className="final"  name="final" />
                <Input type='date' className="date"  name="date" />
                </div>
              </Scope>
              
              <Scope path='machine'>
                <div className="colum03">
                  <Input className="nameMachine"  name="nameMachine" />
                  <Input className="inplementMachine"  name="inplementMachine" />
                </div>
              </Scope>

              <Input className="operator"  name="operator" />

              <Scope path='inputs'>
                <div className="colum04">
                  <Input className="input"  name="input" />
                  <Input  type='number' className="amount"  name="amount" />
                </div>
              </Scope>
              
              

              <button className="formButton" type='submit'>SALVAR</button>
              </fieldset>
            </Form>
            
        </div>
    </div>
    
  )
}

export default Cadastro;
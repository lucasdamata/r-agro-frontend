import React, {useRef} from 'react'
import {Form} from '@unform/web'
import {Scope, SubmitHandler, FormHandles} from '@unform/core'
import Sidebar from '../components/Sidebar';
import Input from '../components/Form'

import '../styles/pages/cadastro.css'
import {FiPlusSquare} from 'react-icons/fi'


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
                <label htmlFor="labelOS">OS</label>
                <Input  className="os"  name="os" /> 
                <Scope path='time'>
                <label htmlFor="labelInitial">Inicio</label>
                <Input type='time' className="initial"  name="initial" />
                <label htmlFor="labelFinal">Final</label>
                <Input type='time' className="final"  name="final" />
                <label htmlFor="labelDate">Data</label>
                <Input type='date' className="date"  name="date" />
              </Scope>
              </div>
        
              <div className="colum02">
              <label htmlFor="labelLocation">Lugar</label>
              <Input className="location"  name="location" />
              </div>
              
              <Scope path='machine'>
                <div className="colum03">
                <label htmlFor="labelNameMachine">Máquina</label>
                  <Input className="nameMachine"  name="nameMachine" />
                <label htmlFor="labelImplementMachine">Complemento</label>
                  <Input className="inplementMachine"  name="inplementMachine" />
                  <button type='button'   className='buttonMachine'  onClick={()=>{}}><FiPlusSquare size={30}  /></button>
                </div>
              </Scope>
              <div className="colum05">
              <label htmlFor="labelOperator">Operador</label>
                  <Input className="operator"  name="operator" />
              </div>
              <Scope path='inputs'>
                <div className="colum04">
                <label htmlFor="labelFinal">Insumo</label>
                  <Input className="input"  name="input" />
                <label htmlFor="labelFinal">Quantidade</label>
                  <Input  type='number' className="amount"  name="amount" />
                  <button type='button'   className='buttonInput'  onClick={()=>{}}><FiPlusSquare size={30}  /></button>
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
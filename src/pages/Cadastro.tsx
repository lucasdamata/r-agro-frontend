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
        <div className="form">
            <Form ref={formRef} initialData={initialData}  onSubmit={ handleSubmit}>
            <fieldset>  
            <div className="block1">
                <div>
                    <label htmlFor="labelOS">Ordem de serviço</label>
                    <Input  className="os"  name="os" /> 
                  </div>
                  
                    <Scope path='time'>
                    <div className="block101">
                      <div className="inputDirection">
                        <label htmlFor="labelInitial">Inicio</label>
                        <Input type='time' className="initial"  name="initial" />
                      </div>
                      <div className="inputDirection">
                        <label htmlFor="labelFinal">Final</label>
                        <Input type='time' className="final"  name="final" />
                      </div>
                      <div className="inputDirection">
                        <label htmlFor="labelDate">Data</label>
                        <Input type='date' className="date"  name="date" />
                      </div>
                    </div>
                </Scope>
                
               </div>
        
                <div className="block2">
                <Scope path='machine'>
                <div className="block101">
                  <div className="inputDirection">
                    <label htmlFor="labelLocation">Lugar</label>
                    <Input className="location"  name="location" />
                  </div>
                <div className="inputDirection">
                    <label htmlFor="labelNameMachine">Máquina</label>
                    <Input className="nameMachine"  name="nameMachine" />
                  </div>
                  <div className="inputDirection">
                  <label htmlFor="labelImplementMachine">Complemento</label>
                    <Input className="inplementMachine"  name="inplementMachine" />
                    </div>
                    <button type='button'   className='buttomMachine'  onClick={()=>{}}><FiPlusSquare size={30}  /></button>
                  </div>
                </Scope>
                </div>
                <div className="block101">
                <div className="inputDirection">
                   <label htmlFor="labelOperator">Operador</label>
                   <Input className="operator"  name="operator" />
                  </div>
                <Scope path='inputs'>
                <div className="inputDirection">
                  <label htmlFor="labelFinal">Insumo</label>
                    <Input className="input"  name="input" />
                </div>
                <div className="inputDirection">
                    <label htmlFor="labelFinal">Quantidade</label>
                    <Input  type='number' className="amount"  name="amount" />
                  </div>
                    <button type='button'   className='buttomInput'  onClick={()=>{}}><FiPlusSquare size={30}  /></button>
              
                </Scope>
                </div>
                
              <div className="positionButtom">
                <button className="formButton" type='submit'>SALVAR</button>
                </div>
              </fieldset>
            </Form>
        </div>
    </div>
    
  )
}

export default Cadastro;
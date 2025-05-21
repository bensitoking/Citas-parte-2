import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Lista  from './assets/components/Lista.jsx'
import  Form  from './assets/components/Form.jsx'
function App() {
  return (
    <>
    <div id="root">
    <div className='row'>
      <div className='container'>
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <Form/>
          <Lista/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App

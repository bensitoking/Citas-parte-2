import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Lista  from './assets/components/Lista.jsx'
import  Form  from './assets/components/Form.jsx'
function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };
  return (
    <>
    <div id="root">
    <div className='row'>
      <div className='container'>
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          <Form onAgregarCita={agregarCita}/>
          <Lista citas={citas} eliminarCita={eliminarCita}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App

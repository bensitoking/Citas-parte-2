import React from 'react';
import "./Lista.css";
import Cita from './Cita';
function Lista() 
{
    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Cita/>
        </div>
    );
}
export default Lista
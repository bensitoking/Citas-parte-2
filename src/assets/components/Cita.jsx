import "./Cita.css";
import React, { useState } from "react";
function Cita({datos, onEliminar}){

    const { mascota, propietario, fecha, hora, sintomas } = datos;

    return (
        <>
        <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Síntomas: <span>{sintomas}</span></p>
            <button 
            className="button elimnar u-full-width"
            onClick={onEliminar}
            >Eliminar ×
            </button>
        </div>
        </>
    );
}

export default Cita;
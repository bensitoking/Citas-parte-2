import "./Form.css";
import React, { useState } from "react";
function Form({ onAgregarCita })
{

    const [mascota, setMascota] = useState("");
    const [dueño, setDueño] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [sintomas, setSintomas] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        const nuevaCita = { mascota, dueño, fecha, hora, sintomas };
        onAgregarCita(nuevaCita);
    
        setMascota("");
        setDueño("");
        setFecha("");
        setHora("");
        setSintomas("");
      };

    return (
        <div className="one-half column">
            <form onSubmit={Submit}>
                <label>Nombre Mascota</label>
                <input 
                type="text" 
                name="mascota" 
                className="u-full-width" 
                placeholder="Nombre Mascota"
                value = {mascota}
                onChange={(e) => setMascota(e.target.value)}
                />
                <label>Nombre Dueño</label>
                <input 
                type="text" 
                name="propietario" 
                className="u-full-width"  
                placeholder="Nombre dueño de la mascota" 
                value={dueño}
                onChange={(e) => setDueño(e.target.value)}
                />
                <label>Fecha</label>
                <input type="date" 
                name="fecha" 
                className="u-full-width" 
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                />
                <label>hora</label>
                <input 
                type="time" 
                name="hora" 
                className="u-full-width" 
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                />
                <label>Sintomas</label>
                <textarea 
                name="sintomas" 
                className="u-full-width"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                ></textarea>
                <button type="submit"className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
}

export default Form;
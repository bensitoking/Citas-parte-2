
import "./Lista.css";
import Cita from './Cita';
function Lista({citas, eliminarCita }) 
{
    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            {citas.map((cita, index) => (
            <Cita
              key={index}
              datos={cita}
              onEliminar={() => eliminarCita(index)}
            />
            ))}
        </div>
    );
}
export default Lista
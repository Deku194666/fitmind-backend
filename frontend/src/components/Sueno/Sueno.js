import React, { useState } from 'react';
import axios from 'axios';
import './Sueno.css';

const Sueno = () => {
  const [datos, setDatos] = useState({
    fecha: '',
    horaDormir: '',
    horaDespertar: '',
    despertares: 0,
    calidad: 3,
    pantallasAntes: false,
    cafeNoche: false,
    somnolencia: false,
    notas: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos({
      ...datos,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/sueno', datos);
      alert('Registro de sueño guardado con éxito.');
      setDatos({
        fecha: '',
        horaDormir: '',
        horaDespertar: '',
        despertares: 0,
        calidad: 3,
        pantallasAntes: false,
        cafeNoche: false,
        somnolencia: false,
        notas: ''
      });
    } catch (err) {
      console.error(err);
      alert('Hubo un error al guardar el registro.');
    }
  };

  return (
    <div>
      <div className='formulario-sueno'>
        <p className="titulo-sueno"> Registro de Sueño </p>
        <form onSubmit={handleSubmit} className="formulario-centro">

          <div className="fecha-container">
            <label className="fecha">Fecha</label>
            <input type="date" name="fecha" value={datos.fecha} onChange={handleChange} className="fecha-input" required />    
          </div>

          <div className="fila-centro">
            <div>
              <label className="input-centro" >Hora de Dormir</label>
              <input type="time" name="horaDormir" value={datos.horaDormir} onChange={handleChange}  className="horadormir-input"  required />
            </div>
            <div >
              <label  className="input-centro1">  Hora de Despertar   </label>
              <input type="time" name="horaDespertar" value={datos.horaDespertar} onChange={handleChange} className="horadespertar-input"   required />
            </div>
          </div>

          <div >
            <label className="despertarnocturno"  >Despertares Nocturnos</label>
            <input type="number" name="despertares" value={datos.despertares} onChange={handleChange} min="0"  className="despertaresnocturnos-input"    />
          </div>

          <div className="input-centro">
            <label  className="calidadsueno" >   Calidad del Sueño: {datos.calidad} ⭐</label>
            <input type="range" name="calidad" min="1" max="5" value={datos.calidad} onChange={handleChange} />
          </div>

          <div className="checkbox-centro">
            <label>
              <input type="checkbox" name="pantallasAntes" checked={datos.pantallasAntes} onChange={handleChange} />
              Usó pantallas antes de dormir
            </label>
            <label>
              <input type="checkbox" name="cafeNoche" checked={datos.cafeNoche} onChange={handleChange} />
              Tomó café por la noche
            </label>
            <label>
              <input type="checkbox" name="somnolencia" checked={datos.somnolencia} onChange={handleChange} />
              Tuvo somnolencia al día siguiente
            </label>
          </div>

          <div className="input-centro">
            <label>Notas</label>
            <textarea name="notas" value={datos.notas} onChange={handleChange} rows={3} />
          </div>

          <button type="submit" className="boton-centro">
            Guardar Registro
          </button>

        </form>
      </div>
    </div>
  );
};

export default Sueno;

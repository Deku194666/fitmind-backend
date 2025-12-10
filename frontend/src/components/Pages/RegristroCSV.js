import React, { useState } from 'react';
import axios from 'axios';

function Registro({ setSignosVitales }) {   // ✅ Recibo la función como prop desde Dashboard
  const [formData, setFormData] = useState({
    frecuencia_cardiaca: '',
    presion_arterial: '',
    temperatura: '',
    saturacion_oxigeno: '',
    frecuencia_respiratoria: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtener usuario_id desde localStorage
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) {
        console.error('No hay usuario_id en localStorage');
        setMensaje('Error: usuario no autenticado');
        return;
      }

      // Preparar datos del formulario
      const payload = {
        usuario_id,
        fecha: new Date().toISOString().split('T')[0],
        ...formData
      };

       // POST al backend
       const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/signos-vitales`,
        payload,
        {
          headers: {
            'user-id': usuario_id, // 👈 obligatorio
            },
          }
        );
        
        console.log('Registro creado:', res.data);


      // Limpiar formulario
      setFormData({
        frecuencia_cardiaca: '',
        presion_arterial: '',
        temperatura: '',
        saturacion_oxigeno: '',
        frecuencia_respiratoria: ''
      });

// --- Traer todos los registros del usuario ---
const resUltimo = await axios.get(
  `${process.env.REACT_APP_API_URL}/api/signos-vitales/usuario/${usuario_id}`,
  {
    headers: {
      'user-id': usuario_id,
    },
  }
);

if (setSignosVitales) {
  const registros = resUltimo.data;
  // ✅ Tomar el último registro (más reciente)
  setSignosVitales(registros[registros.length - 1] || null);
}


      // Opcional: también puedes mantener el evento
      window.dispatchEvent(new Event('sv:creado'));

      setMensaje('Registro guardado correctamente ✅');
    } catch (error) {
      console.error('Error al registrar signos vitales:', error);
      setMensaje('Error al guardar los signos vitales ❌');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '30px',
      border: '2px solid #2980b9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <p style={{ marginBottom: '20px', color: '#2980b9', fontSize: '3rem', fontWeight: '700' }}>
        Registro de Signos Vitales
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="number"
          name="frecuencia_cardiaca"
          placeholder="Frecuencia cardíaca"
          value={formData.frecuencia_cardiaca}
          onChange={handleChange}
          min={20}
          max={260}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="text"
          name="presion_arterial"
          placeholder="Presión arterial (ej: 120/80 mmhg )"
          value={formData.presion_arterial}
          onChange={handleChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="number"
          name="temperatura"
          placeholder="Temperatura"
          step="0.1"
          value={formData.temperatura}
          onChange={handleChange}
          min={30}
          max={45}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="number"
          name="saturacion_oxigeno"
          placeholder="Saturación de oxígeno"
          value={formData.saturacion_oxigeno}
          onChange={handleChange}
          min={0}
          max={100}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="number"
          name="frecuencia_respiratoria"
          placeholder="Frecuencia respiratoria"
          value={formData.frecuencia_respiratoria}
          onChange={handleChange}
          min={3}
          max={60}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <button
          type="submit"
          style={{
            padding: '12px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#2980b9',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={e => e.target.style.backgroundColor = '#3498db'}
        >
          Registrar
        </button>
      </form>
      {mensaje && (
        <p style={{ marginTop: '20px', fontWeight: 'bold', color: mensaje.includes('Error') ? 'red' : 'green' }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default Registro;

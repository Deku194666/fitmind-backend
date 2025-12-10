import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Elongacion = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0); // en segundos
  const [ultimaSesion, setUltimaSesion] = useState(null);

  const caloriasPorMinuto = 3;
  const calorias = tiempo > 0 ? ((tiempo / 60) * caloriasPorMinuto).toFixed(2) : 0;

  // 🔑 Función para cerrar sesión por inactividad
  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  // ⏱️ Timeout de inactividad: 1 minuto
  useEffect(() => {
    let timeoutId;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(cerrarSesion, 60000);
    };

    resetTimeout();

    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, []);

  // Cronómetro
  useEffect(() => {
    let intervalo;
    if (isRunning) {
      intervalo = setInterval(() => setTiempo(prev => prev + 1), 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [isRunning]);

  // Cargar última sesión (con header user-id)
  useEffect(() => {
    const fetchUltimaSesion = async () => {
      const usuario_id = localStorage.getItem('usuario_id');
      if (!usuario_id) return;
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/elongacion/${usuario_id}`,
          { headers: { 'user-id': usuario_id } }
        );
        if (res.data && Object.keys(res.data).length > 0) {
          setUltimaSesion(res.data);
        }
      } catch (err) {
        console.error('Error al obtener la última sesión:', err.response?.data || err.message);
      }
    };
    fetchUltimaSesion();
  }, []);

  const handleStartStop = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTiempo(0);
  };

  // Guardar sesión (con header user-id y calorías como número)
  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      alert("Usuario no autenticado");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/elongacion`,
        { usuario_id, tiempo, calorias: parseFloat(calorias) },
        { headers: { 'user-id': usuario_id } }
      );
      alert('✅ Sesión registrada con éxito');
      setUltimaSesion({ tiempo, calorias: parseFloat(calorias), fecha: new Date() });
      setTiempo(0);
    } catch (error) {
      console.error('❌ Error al registrar elongación:', error.response?.data || error.message);
      alert('Error al registrar en la base de datos');
    }
  };

  const formatTime = (segundos) => {
    if (!segundos || segundos <= 0) return '00:00:00';
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s
      .toString().padStart(2, '0')}`;
  };

  const beneficios = [
    "Mejora la flexibilidad y el rango de movimiento",
    "Disminuye el riesgo de lesiones musculares",
    "Reduce la tensión muscular y el estrés",
    "Mejora la postura y el equilibrio",
    "Aumenta la circulación sanguínea en los músculos",
    "Favorece la recuperación post-ejercicio",
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4rem',
      padding: '2rem',
      maxWidth: '60rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h2>⏱️ Cronómetro de Elongación</h2>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: '700',
        margin: '1rem 0',
        fontFamily: 'monospace',
        color: '#333'
      }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button
          onClick={handleStartStop}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: isRunning ? '#f44336' : '#4caf50',
            color: '#fff',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
          Reiniciar
        </button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={handleFinalizar}
            style={{
              backgroundColor: '#2196f3',
              color: '#fff',
              padding: '0.8rem 2.5rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s'
            }}>
            Finalizar sesión
          </button>
        </div>
      )}

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion ? (
        <div style={{
          marginTop: '3rem',
          padding: '1rem',
          backgroundColor: '#e0f7fa',
          borderRadius: '10px'
        }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
          <p>🔥 Calorías: <strong>{ultimaSesion.calorias} kcal</strong></p>
          <p>🗓️ Fecha: <strong>{new Date(ultimaSesion.fecha).toLocaleString()}</strong></p>
        </div>
      ) : (
        <p style={{ marginTop: '2rem', color: '#888' }}>No hay sesiones registradas aún.</p>
      )}

      <div style={{
        maxWidth: '60rem',
        margin: '4rem auto',
        textAlign: 'left',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.6rem' }}>
          🌿 Beneficios de la Elongación
        </h2>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          Incluir elongaciones regularmente en tu rutina mejora tu salud física y mental. Algunos beneficios son:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.6' }}>
          {beneficios.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Elongacion;

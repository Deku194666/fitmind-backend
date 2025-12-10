import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Caminar = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0); // en segundos
  const [ultimaSesion, setUltimaSesion] = useState(null);

  const caloriasPorMinuto = 4.5; // estimado caminar moderado
  const calorias = Number(((tiempo / 60) * caloriasPorMinuto).toFixed(2));

  // ⛔️ cierre por inactividad
  const cerrarSesion = () => {
    alert('⏱️ Sesión expirada por inactividad');
    localStorage.clear();
    window.location.href = '/login';
  };

  // ⏱️ timer de inactividad
  useEffect(() => {
    let timeoutId;
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(cerrarSesion, 60000);
    };
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);
    resetTimeout(); // iniciar
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, []);

  // ⏱️ cronómetro
  useEffect(() => {
    let intervalo;
    if (isRunning) {
      intervalo = setInterval(() => setTiempo((prev) => prev + 1), 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [isRunning]);

  // 📥 última sesión (con header user-id)
  const fetchUltimaSesion = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/caminar/${usuario_id}`,
        { headers: { 'user-id': usuario_id } }
      );
      if (res.data && typeof res.data === 'object') setUltimaSesion(res.data);
    } catch (err) {
      const msg = err.response?.data || err.message;
      console.error('❌ Error al obtener última sesión (caminar):', msg);
      // Si es 401, saca al usuario (coherente con middleware)
      if (err.response?.status === 401) cerrarSesion();
    }
  };

  useEffect(() => {
    fetchUltimaSesion();
    // refrescar al volver a la pestaña (útil si guardaste desde otra vista)
    const onVisible = () => {
      if (document.visibilityState === 'visible') fetchUltimaSesion();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  const handleStartStop = () => setIsRunning(!isRunning);
  const handleReset = () => { setIsRunning(false); setTiempo(0); };

  // 💾 guardar sesión + actualizar tarjeta local + evento global para dashboard
  const handleFinalizar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      alert('Usuario no autenticado');
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/caminar`,
        { usuario_id, tiempo, calorias },
        { headers: { 'user-id': usuario_id } }
      );
      alert('✅ Sesión de caminata registrada con éxito');

      // Actualiza tarjeta local
      setUltimaSesion({ tiempo, calorias, fecha: new Date() });

      // Notifica al dashboard/registro para auto-refrescar
      window.dispatchEvent(new CustomEvent('ejercicio:registrado', { detail: { tipo: 'caminar' } }));

      handleReset();
    } catch (error) {
      const msg = error.response?.data || error.message;
      console.error('❌ Error al registrar caminar:', msg);
      if (error.response?.status === 401) cerrarSesion();
      else alert('Error al registrar en la base de datos');
    }
  };

  const formatTime = (segundos = 0) => {
    const s = Math.max(0, Number(segundos) || 0);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const r = s % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${r.toString().padStart(2,'0')}`;
  };

  const beneficios = [
    'Mejora la salud cardiovascular con bajo impacto articular',
    'Ayuda a mantener un peso saludable',
    'Reduce el estrés y mejora el estado de ánimo',
    'Favorece la circulación sanguínea',
    'Aumenta la resistencia física progresivamente',
    'Ideal para personas de todas las edades',
  ];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      marginTop: '4rem', padding: '2rem', maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto',
      backgroundColor: '#f9f9f9', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2>🚶‍♂️ Cronómetro de Caminata</h2>
      <h1 style={{ fontSize: '4rem', fontWeight: '700', margin: '1rem 0', fontFamily: 'monospace', color: '#333' }}>
        {formatTime(tiempo)}
      </h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button
          onClick={handleStartStop}
          style={{
            padding: '0.8rem 2rem', borderRadius: '8px', border: 'none',
            backgroundColor: isRunning ? '#f44336' : '#4caf50',
            color: '#fff', fontSize: '1.2rem', cursor: 'pointer', transition: 'background-color 0.3s'
          }}
        >
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>

        <button
          onClick={handleReset}
          style={{
            padding: '0.8rem 2rem', borderRadius: '8px', border: '1px solid #ccc',
            backgroundColor: '#fff', color: '#333', fontSize: '1.2rem', cursor: 'pointer', transition: 'all 0.3s'
          }}
        >
          Reiniciar
        </button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={handleFinalizar}
            style={{
              backgroundColor: '#2196f3', color: '#fff', padding: '0.8rem 2.5rem',
              border: 'none', borderRadius: '8px', fontSize: '1.2rem', cursor: 'pointer',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)', transition: 'background-color 0.3s'
            }}
          >
            Finalizar sesión
          </button>
        </div>
      )}

      <p style={{ marginTop: '2rem', fontSize: '1.2rem' }}>
        🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong>
      </p>

      {ultimaSesion && (
        <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#d0f0c0', borderRadius: '10px' }}>
          <h3>📊 Última sesión registrada</h3>
          <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
          <p>🔥 Calorías: <strong>{Number(ultimaSesion.calorias).toFixed(2)} kcal</strong></p>
          <p>🗓️ Fecha: <strong>{new Date(ultimaSesion.fecha).toLocaleString()}</strong></p>
        </div>
      )}

      <div style={{
        maxWidth: '60rem', margin: '4rem auto', textAlign: 'left', padding: '2rem',
        backgroundColor: '#e3f2fd', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.6rem' }}>
          🚶‍♀️ Beneficios de caminar
        </h2>
        <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
          Caminar regularmente aporta múltiples beneficios para la salud física y mental. Algunos de ellos son:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.6' }}>
          {beneficios.map((item, idx) => <li key={idx}>✅ {item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Caminar;

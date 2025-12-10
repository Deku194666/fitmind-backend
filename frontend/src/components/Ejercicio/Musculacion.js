import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';


console.log('[FRONT] API_URL:', API_URL); // <-- así debuggeas tu URL



const Musculacion = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [ultimaSesion, setUltimaSesion] = useState(null);
  const [loading, setLoading] = useState(true);

  const caloriasPorMinuto = 10; // estimado
  const calorias = ((tiempo / 60) * caloriasPorMinuto).toFixed(2);

  const fetchUltimaSesion = useCallback(async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      setUltimaSesion(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/musculacion/ultimo/${usuario_id}`, {
        
      });

      const sesion = res.data || {};
      setUltimaSesion({
        tiempo: Number(sesion.tiempo) || 0,
        calorias: Number(sesion.calorias) || 0,
        fecha: sesion.fecha ? new Date(sesion.fecha) : null
      });
    } catch (err) {
      console.error('Error al obtener última sesión:', err);
      setUltimaSesion(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUltimaSesion();
  }, [fetchUltimaSesion]);

  useEffect(() => {
    let intervalo;
    if (isRunning) {
      intervalo = setInterval(() => setTiempo(prev => prev + 1), 1000);
    } else clearInterval(intervalo);
    return () => clearInterval(intervalo);
  }, [isRunning]);

  const handleStartStop = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setTiempo(0);
  };

  const handleFinalizar = async () => {
  const usuario_id = localStorage.getItem('usuario_id');
  if (!usuario_id) return alert("Usuario no autenticado");

  try {
    const res = await axios.post(
      `${API_URL}/api/musculacion`,
      { usuario_id, tiempo, calorias: parseFloat(calorias) },
      { headers: { 'user-id': usuario_id } }
    );

    // 👉 Este log DEBE IR AQUÍ (dentro del try y después del post)
    console.log('[FRONT] POST musculacion response:', res.data);

    await fetchUltimaSesion(); 
    setTiempo(0);
    setIsRunning(false);
    alert('✅ Sesión registrada con éxito');
    
  } catch (error) {
    console.error('Error al registrar sesión:', error);
    alert('Error al registrar en la base de datos');
  }
};

  const formatTime = (segundos) => {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginTop:'4rem', padding:'2rem', maxWidth:'60rem', marginLeft:'auto', marginRight:'auto', backgroundColor:'#f9f9f9', borderRadius:'12px', boxShadow:'0 4px 15px rgba(0,0,0,0.1)' }}>
      <h2>🏋️ Cronómetro de Musculación</h2>
      <h1 style={{ fontSize:'4rem', fontWeight:'700', margin:'1rem 0', fontFamily:'monospace', color:'#333' }}>{formatTime(tiempo)}</h1>

      <div style={{ display:'flex', gap:'1rem', marginTop:'1rem' }}>
        <button onClick={handleStartStop} style={{ padding:'0.8rem 2rem', borderRadius:'8px', border:'none', backgroundColor:isRunning ? '#f44336':'#4caf50', color:'#fff', fontSize:'1.2rem', cursor:'pointer', transition:'background-color 0.3s' }}>
          {isRunning ? 'Detener' : 'Iniciar'}
        </button>
        <button onClick={handleReset} style={{ padding:'0.8rem 2rem', borderRadius:'8px', border:'1px solid #ccc', backgroundColor:'#fff', color:'#333', fontSize:'1.2rem', cursor:'pointer', transition:'all 0.3s' }}>
          Reiniciar
        </button>
      </div>

      {!isRunning && tiempo > 0 && (
        <div style={{ marginTop:'2rem' }}>
          <button onClick={handleFinalizar} style={{ backgroundColor:'#2196f3', color:'#fff', padding:'0.8rem 2.5rem', border:'none', borderRadius:'8px', fontSize:'1.2rem', cursor:'pointer', boxShadow:'0 3px 6px rgba(0,0,0,0.1)', transition:'background-color 0.3s' }}>
            Finalizar sesión
          </button>
        </div>
      )}

      <p style={{ marginTop:'2rem', fontSize:'1.2rem' }}>🔥 Calorías quemadas estimadas: <strong>{calorias} kcal</strong></p>

      {/* Última sesión */}
      <div style={{ marginTop:'2rem', padding:'1rem', backgroundColor:'#e0f7fa', borderRadius:'10px' }}>
        {loading ? <p>Cargando última sesión...</p> :
          ultimaSesion ? (
            <>
              <h3>📊 Última sesión registrada</h3>
              <p>⏱️ Tiempo: <strong>{formatTime(ultimaSesion.tiempo)}</strong></p>
              <p>🔥 Calorías: <strong>{ultimaSesion.calorias.toFixed(2)} kcal</strong></p>
              <p>🗓️ Fecha: <strong>{ultimaSesion.fecha ? ultimaSesion.fecha.toLocaleString() : "Sin datos"}</strong></p>
            </>
          ) : <p>No hay sesiones registradas aún</p>
        }
      </div>
    </div>
  );
};

export default Musculacion;

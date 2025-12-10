import React, { useEffect, useState } from 'react';
import './Ejercicio.css';
import NavBarEx from './NavBarEx';
import NavBarEx2 from './NavBarEx2';
import { Box, Typography, Paper } from '@mui/material';
import axios from 'axios';
import Musculacion from '../Ejercicio/Musculacion';
import Caminar from '../Ejercicio/CV/Caminar';

 

const Ejercicio = () => {
  const [elongacion, setElongacion] = useState(null);
  const [musculacion, setMusculacion] = useState(null);
  const [correr, setUltimoCorrer] = useState(null);
  const [trote, setTrote] = useState(null);
  const [sprint, setSprint] = useState(null);
  const [bicicleta, setBicicleta] = useState(null); 
  const [caminar,  setCaminar] = useState(null);
  const [nadar, setNadar] = useState(null);
  const [boxeosaco, setBoxeoSaco]  = useState(null);



useEffect(() => {
  let cancel = false;

  const fetchElongacion = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/elongacion/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data; // por si viniera lista
      setElongacion(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setElongacion(null); // ✅ sin datos
        else console.error('Error al cargar elongación:', error.response?.data || error.message);
      }
    }
  };

  fetchElongacion();

  // 🔁 Auto-refresco si el módulo emite el evento tras guardar
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'elongacion') fetchElongacion();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);



 
useEffect(() => {
  let cancel = false;

  const fetchMusculacion = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return; // sin sesión
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/musculacion/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (!cancel) {
        const payload = Array.isArray(res.data) ? res.data[0] : res.data;
        setMusculacion(payload ?? null);
      }
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          // ✅ no hay registros aún
          setMusculacion(null);
        } else {
          console.error('Error al cargar musculación:', error.response?.data || error.message);
        }
      }
    }
  };

  fetchMusculacion();

  // 🔁 Auto-refresco al registrar desde el módulo Musculación
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'musculacion') fetchMusculacion();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





useEffect(() => {
  let cancel = false;

  const fetchCorrer = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/correr/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data; // por si el backend devuelve lista
      setUltimoCorrer(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          setUltimoCorrer(null); // ✅ sin registros
        } else {
          console.error('Error obteniendo datos de correr:', error.response?.data || error.message);
        }
      }
    }
  };

  fetchCorrer();

  // 🔁 Auto-refresco cuando el módulo Correr guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'correr') fetchCorrer();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);






useEffect(() => {
  let cancel = false;

  const fetchTrote = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/trote/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setTrote(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) {
          setTrote(null); // ✅ sin registros
        } else {
          console.error('Error al cargar trote:', error.response?.data || error.message);
        }
      }
    }
  };

  fetchTrote();

  // 🔁 Auto-refresco cuando el módulo Trote guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'trote') fetchTrote();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);






  useEffect(() => {
  let cancel = false;

  const fetchSprint = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/sprint/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setSprint(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setSprint(null); // ✅ sin datos
        else console.error('Error al cargar sprint:', error.response?.data || error.message);
      }
    }
  };

  fetchSprint();

  // 🔁 Auto-refresco cuando el módulo Sprint guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'sprint') fetchSprint();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





useEffect(() => {
  let cancel = false;

  const fetchBicicleta = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/bicicleta/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setBicicleta(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setBicicleta(null); // ✅ sin datos
        else console.error('Error al cargar bicicleta:', error.response?.data || error.message);
      }
    }
  };

  fetchBicicleta();

  // 🔁 Auto-refresco cuando el módulo Bicicleta guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'bicicleta') fetchBicicleta();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);





useEffect(() => {
  let cancel = false;

  const fetchCaminar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/caminar/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setCaminar(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setCaminar(null); // ✅ sin registros
        else console.error('Error al cargar caminar:', error.response?.data || error.message);
      }
    }
  };

  fetchCaminar();

  // 🔁 Auto-refresco cuando el módulo Caminar guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'caminar') fetchCaminar();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);


useEffect(() => {
  let cancel = false;

  const fetchNadar = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/nadar/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setNadar(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setNadar(null); // ✅ sin datos
        else console.error('Error al cargar nadar:', error.response?.data || error.message);
      }
    }
  };

  fetchNadar();

  // 🔁 Auto-refresco cuando el módulo Nadar guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'nadar') fetchNadar();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);




useEffect(() => {
  let cancel = false;

  const fetchBoxeoSaco = async () => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) return;

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/boxeosaco/${usuario_id}`,
        { headers: { 'user-id': usuario_id } } // ✅ requerido por el middleware
      );
      if (cancel) return;
      const payload = Array.isArray(res.data) ? res.data[0] : res.data;
      setBoxeoSaco(payload ?? null);
    } catch (error) {
      if (!cancel) {
        if (error.response?.status === 404) setBoxeoSaco(null); // ✅ sin registros
        else console.error('Error al cargar boxeosaco:', error.response?.data || error.message);
      }
    }
  };

  fetchBoxeoSaco();

  // 🔁 Auto-refresco cuando el módulo BoxeoSaco guarda una sesión
  const onNuevo = (e) => {
    if (e.detail?.tipo === 'boxeosaco') fetchBoxeoSaco();
  };
  window.addEventListener('ejercicio:registrado', onNuevo);

  return () => {
    cancel = true;
    window.removeEventListener('ejercicio:registrado', onNuevo);
  };
}, []);



  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '0vh' }}></Box>
      <NavBarEx />
      <NavBarEx2 />

      <div className="ejercicio-container">
        <p className='parraf1'>Beneficios del Ejercicio</p>
        <p className='parraf2'>
          Realizar actividad física regularmente ayuda a mejorar la salud cardiovascular, fortalecer los músculos y huesos, reducir el 
          estrés y mejorar la calidad del sueño.
        </p>

        {/* Contenedor flex para mostrar los Paper en fila */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '5rem', marginBottom: '4rem' }}>
          <Paper elevation={3} sx={{ padding: 8, width: '40rem', borderRadius: '0.8rem', marginBottom: '1rem', height: '17rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🧘 Última sesión de Elongación</Typography>
            {elongacion && typeof elongacion.tiempo === 'number' && elongacion.fecha ? (
              <>
              <Typography sx={{ fontSize: '1.3rem' }}>
                ⏱️ Tiempo realizado: {Math.floor(elongacion.tiempo / 60)} min {elongacion.tiempo % 60} seg
                </Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>
                🔥 Calorías quemadas: {elongacion.calorias} kcal
                </Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>
                📅 Fecha: {new Date(elongacion.fecha).toLocaleString()}
                </Typography>
                </>
                ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
                  )}
                    
                </Paper>


          <Paper elevation={3} sx={{ padding: 8, width: '41rem', borderRadius: '0.8rem', marginBottom: '1rem', height:'17rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏋️ Última sesión de Musculación</Typography>
            {musculacion ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(musculacion.tiempo / 60)} min {musculacion.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {musculacion.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(musculacion.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
          </Paper>
          

          
          <Paper elevation={3} sx={{ padding: 8, width: '40rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Correr  </Typography>
            {correr ? (
              <>
              <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(correr.tiempo / 60)} min {correr.tiempo % 60} seg</Typography>
              <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {correr.calorias} kcal</Typography>
              <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(correr.fecha).toLocaleString()}</Typography>
              </>
              ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
              )}
          </Paper>



            <Paper elevation={3} sx={{ padding: 8, width: '41rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Trote  </Typography>
            {trote ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(trote.tiempo / 60)} min {trote.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {trote.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(trote.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
             </Paper>



            <Paper elevation={3} sx={{ padding: 8, width: '40rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Sprint  </Typography>
            {sprint ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(sprint.tiempo / 60)} min {sprint.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {sprint.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(sprint.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
            </Paper>


            
            <Paper elevation={3} sx={{ padding: 8, width: '41rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Bicicleta  </Typography>
            {bicicleta ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(bicicleta.tiempo / 60)} min {bicicleta.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {bicicleta.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(bicicleta.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
             </Paper>



             
            <Paper elevation={3} sx={{ padding: 8, width: '41rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Caminata  </Typography>
            {caminar ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(caminar.tiempo / 60)} min {caminar.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {caminar.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(caminar.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
             </Paper>


            <Paper elevation={3} sx={{ padding: 8, width: '41rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Natación  </Typography>
            {nadar ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(nadar.tiempo / 60)} min {nadar.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {nadar.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(nadar.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
             </Paper>


            <Paper elevation={3} sx={{ padding: 8, width: '46rem', borderRadius: '0.8rem', marginBottom: '3rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>🏃 Última sesión de Boxeo de Saco  </Typography>
            {boxeosaco ? (
              <>
                <Typography sx={{ fontSize: '1.3rem' }}>⏱️ Tiempo realizado: {Math.floor(boxeosaco.tiempo / 60)} min {boxeosaco.tiempo % 60} seg</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>🔥 Calorías quemadas: {boxeosaco.calorias} kcal</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>📅 Fecha: {new Date(boxeosaco.fecha).toLocaleString()}</Typography>
              </>
            ) : (
              <Typography>No hay sesiones registradas aún.</Typography>
            )}
             </Paper>


          
        </div>
       
      </div>
    </>
  );
};

export default Ejercicio;

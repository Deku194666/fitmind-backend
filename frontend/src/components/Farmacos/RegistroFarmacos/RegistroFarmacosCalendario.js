import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RegistroFarmacosCalendario.css';
import { Dialog, DialogTitle, DialogContent, IconButton, List, ListItem, ListItemText, Alert, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// ✅ formateo local (no UTC)
function formatLocalDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// ✅ parse y valida "08:00, 14:00, 22:00" (por ahora solo comas, como pediste)
function parseHoras(input) {
  if (!input) return [];
  const hhmm = input
    .split(',')
    .map((h) => h.trim())
    .filter(Boolean)
    .map((h) => {
      // normaliza 8:0 -> 08:00
      const m = h.match(/^(\d{1,2}):(\d{1,2})$/);
      if (!m) return null;
      let H = Number(m[1]);
      let M = Number(m[2]);
      if (Number.isNaN(H) || Number.isNaN(M) || H < 0 || H > 23 || M < 0 || M > 59) return null;
      return `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}`;
    })
    .filter(Boolean);

  // únicos + ordenados
  return Array.from(new Set(hhmm)).sort();
}

// ✅ asegura array para render
function asArray(x) {
  if (!x) return [];
  if (Array.isArray(x)) return x;
  if (typeof x === 'string' && x.trim()) return x.split(',').map((s) => s.trim()).filter(Boolean);
  return [];
}

function RegistroFarmacosCalendario() {
  const [formData, setFormData] = useState({
    farmaco: '',
    dosis: '',
    frecuencia: '',
    fechaInicio: formatLocalDate(new Date()),
    fechaFin: formatLocalDate(new Date()),
    horas: '',
    notas: '',
  });

  const [mensaje, setMensaje] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [farmacosDia, setFarmacosDia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  // Modal para ver agenda del día al pinchar calendario
  const [agendaOpen, setAgendaOpen] = useState(false);

  const API = process.env.REACT_APP_API_URL; // ej: http://localhost:4000
  const fechaStr = useMemo(() => formatLocalDate(selectedDate), [selectedDate]);

  // GET: cargar fármacos de un día
  const cargarFarmacosDia = async (date) => {
    const usuario_id = localStorage.getItem('usuario_id');
    const token = localStorage.getItem('token'); // si tu back usa JWT
    if (!API) {
      console.error('REACT_APP_API_URL no configurado');
      setFarmacosDia([]);
      return [];
    }
    if (!usuario_id) {
      console.error('usuario_id no encontrado en localStorage');
      setFarmacosDia([]);
      return [];
    }

    const fecha = formatLocalDate(date);

    try {
      setLoading(true);
      const resp = await axios.get(
        `${API}/api/farmacos/agenda/${usuario_id}`,
        {
          params: { fecha, _: Date.now() }, // evita 304 por cache
          headers: {
            'user-id': usuario_id,                       // header que tu middleware espera
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          // withCredentials: true, // descomenta si autenticas por cookie
        }
      );
      const arr = Array.isArray(resp.data) ? resp.data : [];
      setFarmacosDia(arr);
      return arr;
    } catch (error) {
      const status = error?.response?.status;
      console.error('Error al cargar fármacos del día:', status, error?.response?.data || error.message);
      if (status === 401) {
        console.warn('401: revisa el nombre del header en el backend (¿"user-id", "x-user-id", "userid"?) y el token.');
      }
      setFarmacosDia([]);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Cargar al montar y cuando cambia el día (sin abrir modal)
  useEffect(() => {
    // sincroniza fechas del form con el día seleccionado
    setFormData((prev) => ({
      ...prev,
      fechaInicio: fechaStr,
      fechaFin: fechaStr,
    }));
    cargarFarmacosDia(selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, API]);

  // Al pinchar un día en el calendario: carga y abre modal
  const handleClickDay = async (date) => {
    setSelectedDate(date);           // actualiza fecha
    await cargarFarmacosDia(date);   // carga agenda de ese día
    setAgendaOpen(true);             // abre modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // POST: crear fármaco
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.farmaco.trim()) { setMensaje('❌ Indica el nombre del fármaco.'); return; }
    if (formData.fechaFin < formData.fechaInicio) { setMensaje('❌ La fecha de fin no puede ser anterior a la de inicio.'); return; }

    const horasArray = parseHoras(formData.horas);
    if (horasArray.length === 0) { setMensaje('❌ Ingresa al menos una hora válida (formato HH:mm).'); return; }

    try {
      setSending(true);
      const usuarioId = localStorage.getItem('usuario_id'); // lo lees igual
      const token = localStorage.getItem('token');          // si usas JWT

      if (!usuarioId || !API) { setMensaje('❌ Sesión inválida o API no configurada.'); return; }

      const payload = {
        usuarioId,  // el backend lo requiere así (camelCase)
        farmaco: formData.farmaco.trim(),
        dosis: formData.dosis.trim(),
        frecuencia: formData.frecuencia.trim(),
        fechaInicio: formData.fechaInicio,
        fechaFin: formData.fechaFin,
        horas: horasArray,
        notas: formData.notas.trim(),
      };

      await axios.post(
        `${API}/api/farmacos`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'user-id': usuarioId,                         // tu middleware puede seguir usando este header
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          // withCredentials: true, // si autenticas por cookie
        }
      );

      setMensaje('Fármaco registrado con éxito ✅');
      setFormData({
        farmaco: '',
        dosis: '',
        frecuencia: '',
        fechaInicio: fechaStr,
        fechaFin: fechaStr,
        horas: '',
        notas: '',
      });

      // refresca la lista del día y notifica al Dashboard
      await cargarFarmacosDia(selectedDate);
      window.dispatchEvent(new CustomEvent('farmaco:registrado', { detail: { tipo: 'farmacos' } }));
    } catch (err) {
      console.error('POST /api/farmacos ->', err?.response?.status, err?.response?.data || err.message);
      setMensaje(`❌ Error al registrar. ${err?.response?.status === 401 ? 'No autorizado (401): revisa headers/token.' : 'Intenta de nuevo.'}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contenedor">
      <h1 className="titulo">Registro de Fármacos con Calendario</h1>

      <div className="contenedor-principal">
        <div className="contenedor-calendario">
          <Calendar
            onChange={setSelectedDate}
            onClickDay={handleClickDay}   // 👈 abre modal con detalles del día
            value={selectedDate}
          />
        </div>

        <div className="contenedor-formulario">
          <h3 className="subtitulo">Fármacos para el día: {fechaStr}</h3>

          <form onSubmit={handleSubmit} className="formulario">
            <input type="text" name="farmaco" placeholder="Nombre del fármaco" value={formData.farmaco} onChange={handleChange} required className="input" />
            <input type="text" name="dosis" placeholder="Dosis (ej: 500 mg)" value={formData.dosis} onChange={handleChange} className="input" />
            <input type="text" name="frecuencia" placeholder="Frecuencia (ej: 1 vez al día)" value={formData.frecuencia} onChange={handleChange} className="input" />

            <input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} required className="input" />
            <input type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} required className="input" />

            <input
              type="text"
              name="horas"
              placeholder="Horas (ej: 08:00, 14:00, 22:00)"
              value={formData.horas}
              onChange={handleChange}
              required
              className="input"
            />

            <textarea name="notas" placeholder="Notas adicionales" value={formData.notas} onChange={handleChange} rows={3} className="textarea" />

            <button type="submit" className="boton" disabled={sending}>
              {sending ? 'Guardando…' : 'Registrar'}
            </button>
          </form>

          {mensaje && (
            <p className={`mensaje ${mensaje.includes('Error') || mensaje.startsWith('❌') ? 'error' : 'exito'}`}>
              {mensaje}
            </p>
          )}

          <div className="lista-farmacos">
            <h4>Fármacos en este día:</h4>
            {loading ? (
              <p>Cargando…</p>
            ) : farmacosDia.length === 0 ? (
              <p>No hay fármacos para esta fecha.</p>
            ) : (
              <ul>
                {farmacosDia.map((f, i) => {
                  const horas = asArray(f.horas);
                  return (
                    <li key={i} className="farmaco-item">
                      <strong>{f.farmaco}</strong> — {f.dosis} — {f.frecuencia} — Horas: {horas.join(', ')}
                      {f.notas ? (
                        <>
                          <br />
                          <em>{f.notas}</em>
                        </>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Modal con agenda del día */}
      <Dialog
        open={agendaOpen}
        onClose={() => setAgendaOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          Fármacos para el {formatLocalDate(selectedDate)}
          <IconButton onClick={() => setAgendaOpen(false)} aria-label="cerrar">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
              <CircularProgress />
            </div>
          ) : farmacosDia.length === 0 ? (
            <Alert severity="info">No hay fármacos para esta fecha.</Alert>
          ) : (
            <List>
              {farmacosDia.map((f, i) => {
                const horas = asArray(f.horas);
                return (
                  <ListItem key={i} alignItems="flex-start" sx={{ py: 1 }}>
                    <ListItemText
                      primary={<strong>{f.farmaco}</strong>}
                      secondary={
                        <>
                          {f.dosis ? `${f.dosis} — ` : ''}{f.frecuencia || 'Frecuencia no especificada'}<br/>
                          Horas: {horas.join(', ')}
                          {f.notas ? (<><br/><em>{f.notas}</em></>) : null}
                        </>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RegistroFarmacosCalendario;

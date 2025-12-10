// src/components/Perfil.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';

import {
  Box, Paper, Typography, Divider, List, ListItemButton, ListItemText,
  IconButton, Fab, useTheme, useMediaQuery, Chip, Stack, Drawer,
  TextField, FormControlLabel, Switch, Button, Alert, CircularProgress
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import LockResetIcon from '@mui/icons-material/LockReset';
import SettingsIcon from '@mui/icons-material/Settings';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Link } from 'react-router-dom';

const SIDEBAR_WIDTH = 350;  // el ancho de la barra derecha

const Perfil = () => {
  const API = process.env.REACT_APP_API_URL || 'http://localhost:4000';
  const usuario_id =
    localStorage.getItem('usuario_id') || localStorage.getItem('usuarioId') || '';
  const token = localStorage.getItem('token') || '';

  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(Boolean(usuario_id));

  // ----- Información médica (incluye todas las preguntas) -----
  const [medica, setMedica] = useState({
    // Antropometría
    peso: '',          // kg
    talla: '',         // cm
    imc: '',           // calculado

    // Condiciones
    diabetes: false,
    hipertension: false,

    // Medicación
    medicamentos: [],  // chips
    medRegular: '',    // texto libre

    // Salud general (preguntas del HTML)
    estadoSalud: '',
    enfermedadDiagnosticada: '',
    enfermedadCronica: '',
    fuma: '',
    alcohol: '',
    alimentacion: '',
    ejercicio: '',
    sueno: '',
    emocional: '',
    sintomas: '',
    examenes: '',

    // Otros
    otros: '',
  });
  const [medicamentoInput, setMedicamentoInput] = useState('');
  const [saveLoading, setSaveLoading] = useState(false);
  const [saveOk, setSaveOk] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Layout responsivo
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openRight, setOpenRight] = useState(false);

  // Cargar perfil
  useEffect(() => {
    if (!usuario_id) return;
    const fetchPerfil = async () => {
      try {
        setLoading(true);
        setError('');
        const resp = await axios.get(`${API}/api/datosusuario/${usuario_id}`, {
          headers: {
            'user-id': usuario_id,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        setPerfil(resp.data || null);
      } catch (err) {
        console.error('Error al cargar el perfil:', err?.response?.data || err.message);
        setError(
          err?.response?.status === 401
            ? 'No autorizado. Revisa el header user-id o el token.'
            : 'No fue posible cargar el perfil.'
        );
        setPerfil(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPerfil();
  }, [API, usuario_id, token]);

  // Hidratar info médica desde localStorage (si existe)
  useEffect(() => {
    if (!usuario_id) return;
    try {
      const raw = localStorage.getItem(`fitmind_medica_${usuario_id}`);
      if (raw) setMedica(prev => ({ ...prev, ...JSON.parse(raw) }));
    } catch {}
  }, [usuario_id]);

  // (Opcional) Cargar info médica desde servidor si existe endpoint
  useEffect(() => {
    if (!usuario_id) return;
    (async () => {
      try {
        const resp = await axios.get(`${API}/api/infomedica/${usuario_id}`, {
          headers: {
            'user-id': usuario_id,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });
        if (resp?.data) setMedica(prev => ({ ...prev, ...resp.data }));
      } catch {}
    })();
  }, [API, usuario_id, token]);

  // Calcular IMC automáticamente
  useEffect(() => {
    const peso = parseFloat(medica.peso);
    const tallaCm = parseFloat(medica.talla);
    if (!isNaN(peso) && !isNaN(tallaCm) && tallaCm > 0) {
      const tallaM = tallaCm / 100;
      const imcVal = peso / (tallaM * tallaM);
      setMedica(prev => ({ ...prev, imc: imcVal ? imcVal.toFixed(1) : '' }));
    } else {
      setMedica(prev => ({ ...prev, imc: '' }));
    }
  }, [medica.peso, medica.talla]);

  if (!usuario_id) return <p>No estás logueado</p>;

  const nombre = perfil?.nombre?.trim() || localStorage.getItem('usuario_nombre') || 'Sin nombre';
  const email = perfil?.usuario?.email || localStorage.getItem('usuario_email') || 'Sin email';
  const edad = perfil?.edad ?? 'No especificada';
  const genero = perfil?.genero?.trim() || 'No especificado';
  const pais = perfil?.pais?.trim() || 'No especificado';
  const ciudad = perfil?.ciudad?.trim() || 'No especificada';

  // ----- Helpers UI: preguntas en vertical con título arriba -----
  const QField = ({ question, value, onChange, multiline=false, minRows=1, type='text', placeholder='', readOnly=false }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
        {question}
      </Typography>
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        multiline={multiline}
        minRows={multiline ? minRows : undefined}
        type={type}
        placeholder={placeholder}
        InputProps={{ readOnly }}
      />
    </Box>
  );

  const QSwitch = ({ question, checked, onChange }) => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
        {question}
      </Typography>
      <FormControlLabel control={<Switch checked={checked} onChange={onChange} />} label="Sí" />
    </Box>
  );

  // Handlers info médica
  const handleMedicaChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setMedica(prev => ({ ...prev, [field]: value }));
  };

  const addMedicamento = () => {
    const val = medicamentoInput.trim();
    if (!val) return;
    if (medica.medicamentos.includes(val)) { setMedicamentoInput(''); return; }
    setMedica(prev => ({ ...prev, medicamentos: [...prev.medicamentos, val] }));
    setMedicamentoInput('');
  };

  const removeMedicamento = (name) => {
    setMedica(prev => ({
      ...prev,
      medicamentos: prev.medicamentos.filter(m => m !== name),
    }));
  };

  const handleMedicamentoKey = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addMedicamento(); }
  };

  const handleSaveMedica = async () => {
    setSaveOk(false);
    setSaveError('');
    setSaveLoading(true);
    try {
      await axios.put(`${API}/api/infomedica/${usuario_id}`, medica, {
        headers: {
          'Content-Type': 'application/json',
          'user-id': usuario_id,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      setSaveOk(true);
    } catch (e) {
      setSaveError(e?.response?.data?.message || 'No se pudo guardar la información médica en el servidor.');
    } finally {
      setSaveLoading(false);
    }
  };

  // Contenido del panel derecho (reutilizado en desktop/móvil)
  const SidebarContent = (
    <Box sx={{ width: SIDEBAR_WIDTH, p: 2 }}>
      {/* Header (solo móvil) */}
      {!isMdUp && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Opciones</Typography>
          <IconButton onClick={() => setOpenRight(false)} aria-label="Cerrar panel">
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary', marginRight: '3rem' }}>
        Accesos rápidos
      </Typography>
      <List dense sx={{ mt: 1 }}>
        <ListItemButton component={Link} to="/perfil/editar">
          <EditIcon fontSize="small" style={{ marginRight: 8 }} />
          <ListItemText primary="Editar perfil" secondary="Nombre, edad, ubicación" />
        </ListItemButton>
        <ListItemButton component={Link} to="/configuracion/seguridad">
          <LockResetIcon fontSize="small" style={{ marginRight: 8 }} />
          <ListItemText primary="Cambiar contraseña" secondary="Seguridad de tu cuenta" />
        </ListItemButton>
        <ListItemButton component={Link} to="/configuracion">
          <SettingsIcon fontSize="small" style={{ marginRight: 8 }} />
          <ListItemText primary="Preferencias" secondary="Notificaciones, tema, idioma" />
        </ListItemButton>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Hoy
      </Typography>
      <Stack spacing={1.25} sx={{ mt: 1 }}>
        <Box sx={{ p: 1.25, borderRadius: 2, bgcolor: 'action.hover' }}>
          <Typography sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
            <EventNoteIcon fontSize="small" />
            Resumen rápido
            <Chip size="small" label="Perfil" sx={{ ml: 'auto' }} />
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Completa tu perfil para personalizar recomendaciones.
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Navegación
      </Typography>
      <List dense>
        <ListItemButton component={Link} to="/dashboard"><ListItemText primary="Dashboard" /></ListItemButton>
        <ListItemButton component={Link} to="/farmacos"><ListItemText primary="Fármacos" /></ListItemButton>
        <ListItemButton component={Link} to="/examenes"><ListItemText primary="Exámenes" /></ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
      {/* MAIN */}
      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <p className="Parraf1">Perfil de Usuario</p>

        {loading && <p>Cargando perfil...</p>}
        {error && <p className="Parraf3" style={{ color: 'crimson' }}>{error}</p>}
        {!loading && !error && (
          <>
            {/* Información básica */}
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, width: '90%', marginLeft: '3rem' }}>
              <Typography sx={{ fontWeight: 700, mb: 2, marginLeft: '3rem', fontSize: '2rem' }}>
                Información básica
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography className="Parraf2"><strong>Nombre:</strong> {nombre}</Typography>
              <Typography className="Parraf3"><strong>Email:</strong> {email}</Typography>
              <Typography className="Parraf3"><strong>Edad:</strong> {edad}</Typography>
              <Typography className="Parraf3"><strong>Género:</strong> {genero}</Typography>
              <Typography className="Parraf3"><strong>País:</strong> {pais}</Typography>
              <Typography className="Parraf3"><strong>Ciudad:</strong> {ciudad}</Typography>
            </Paper>

            {/* Información médica (100% vertical, preguntas completas) */}
            <Paper elevation={2} sx={{ p: 3, borderRadius: 3, width: '90%', ml: '3rem', mt: 3 }}>
              <Typography sx={{ fontWeight: 700, mb: 2, ml: '3rem', fontSize: '2rem' }}>
                Información médica
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* Mensajes de guardado */}
              {saveOk && <Alert severity="success" sx={{ mb: 2 }}>Información guardada correctamente.</Alert>}
              {saveError && <Alert severity="error" sx={{ mb: 2 }}>{saveError}</Alert>}

              <Stack spacing={2}>
                {/* Antropometría */}
                <QField
                  question="Peso (kg)"
                  value={medica.peso}
                  onChange={handleMedicaChange('peso')}
                  type="number"
                  placeholder="Ej: 72.5"
                />
                <QField
                  question="Talla (cm)"
                  value={medica.talla}
                  onChange={handleMedicaChange('talla')}
                  type="number"
                  placeholder="Ej: 170"
                />
                <QField
                  question="IMC (se calcula automáticamente a partir de peso y talla)"
                  value={medica.imc}
                  onChange={() => {}}
                  readOnly
                />

                {/* Condiciones */}
                <QSwitch
                  question="¿Tienes diabetes?"
                  checked={medica.diabetes}
                  onChange={handleMedicaChange('diabetes')}
                />
                <QSwitch
                  question="¿Tienes hipertensión?"
                  checked={medica.hipertension}
                  onChange={handleMedicaChange('hipertension')}
                />

                {/* Medicación */}
                <QField
                  question="¿Tomas algún medicamento de forma regular? ¿Cuál(es) y para qué?"
                  value={medica.medRegular}
                  onChange={handleMedicaChange('medRegular')}
                  multiline
                  minRows={2}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Añade un medicamento (presiona Enter o usa el botón)
                  </Typography>
                  <Stack spacing={1}>
                    <TextField
                      value={medicamentoInput}
                      onChange={(e) => setMedicamentoInput(e.target.value)}
                      onKeyDown={handleMedicamentoKey}
                      fullWidth
                      placeholder="Ej: Metformina 850 mg / 2 veces al día"
                    />
                    <Button variant="contained" onClick={addMedicamento} fullWidth>
                      Agregar medicamento
                    </Button>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {medica.medicamentos.length === 0 ? (
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Aún no registras medicamentos.
                        </Typography>
                      ) : (
                        medica.medicamentos.map((m) => (
                          <Chip key={m} label={m} onDelete={() => removeMedicamento(m)} sx={{ mb: 1 }} />
                        ))
                      )}
                    </Stack>
                  </Stack>
                </Box>

                {/* Salud general (todas las preguntas) */}
                <QField
                  question="¿Cómo describirías tu estado de salud en general? (Bueno, regular, malo)"
                  value={medica.estadoSalud}
                  onChange={handleMedicaChange('estadoSalud')}
                />
                <QField
                  question="¿Tienes alguna enfermedad diagnosticada?"
                  value={medica.enfermedadDiagnosticada}
                  onChange={handleMedicaChange('enfermedadDiagnosticada')}
                />
                <QField
                  question="¿Tienes alguna enfermedad crónica?"
                  value={medica.enfermedadCronica}
                  onChange={handleMedicaChange('enfermedadCronica')}
                />
                <QField
                  question="¿Fumas o has fumado antes? Si sí, ¿cuántos cigarrillos al día y por cuánto tiempo?"
                  value={medica.fuma}
                  onChange={handleMedicaChange('fuma')}
                />
                <QField
                  question="¿Consumes alcohol? ¿Con qué frecuencia y en qué cantidad?"
                  value={medica.alcohol}
                  onChange={handleMedicaChange('alcohol')}
                />
                <QField
                  question="¿Cómo describirías tu alimentación? (frutas, verduras, comida procesada, etc.)"
                  value={medica.alimentacion}
                  onChange={handleMedicaChange('alimentacion')}
                />
                <QField
                  question="¿Haces ejercicio regularmente? ¿Qué tipo y con qué frecuencia?"
                  value={medica.ejercicio}
                  onChange={handleMedicaChange('ejercicio')}
                />
                <QField
                  question="¿Cómo describirías la calidad de tu sueño? (insomnio, apnea, duermes bien...)"
                  value={medica.sueno}
                  onChange={handleMedicaChange('sueno')}
                />
                <QField
                  question="¿Cómo te has sentido emocionalmente en los últimos meses? (estrés, ansiedad, depresión, etc.)"
                  value={medica.emocional}
                  onChange={handleMedicaChange('emocional')}
                />
                <QField
                  question="¿Has tenido síntomas como tos, dolor de cabeza, digestivos u otros? (¿cuáles?)"
                  value={medica.sintomas}
                  onChange={handleMedicaChange('sintomas')}
                />
                <QField
                  question="¿Te has realizado exámenes de rutina en el último año? (sangre, presión, colesterol, etc.) Anota todo lo que tengas."
                  value={medica.examenes}
                  onChange={handleMedicaChange('examenes')}
                  multiline
                  minRows={2}
                />

                {/* Otros */}
                <QField
                  question="Otros datos médicos (alergias, cirugías, hábitos, etc.)"
                  value={medica.otros}
                  onChange={handleMedicaChange('otros')}
                  multiline
                  minRows={3}
                />

                {/* Acciones */}
                <Stack direction="column" spacing={1} alignItems="stretch">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      try {
                        localStorage.setItem(`fitmind_medica_${usuario_id}`, JSON.stringify(medica));
                        setSaveOk(true);
                        setSaveError('');
                      } catch {
                        setSaveError('No se pudo guardar localmente.');
                      }
                    }}
                    fullWidth
                  >
                    Guardar local
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleSaveMedica}
                    disabled={saveLoading}
                    startIcon={saveLoading ? <CircularProgress size={18} /> : null}
                    fullWidth
                  >
                    {saveLoading ? 'Guardando...' : 'Guardar en servidor'}
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </>
        )}
      </Box>

      {/* ASIDE DESKTOP */}
      {isMdUp && (
        <Box component="aside" sx={{ width: '24rem', flexShrink: 0, marginRight: '3rem', marginTop: '2rem' }}>
          <Paper
            elevation={3}
            sx={{ borderRadius: 3, position: 'sticky', top: 16 }}
          >
            {SidebarContent}
          </Paper>
        </Box>
      )}

      {/* MÓVIL: Drawer + FAB */}
      {!isMdUp && (
        <>
          <Fab
            color="primary"
            size="medium"
            onClick={() => setOpenRight(true)}
            aria-label="Abrir panel derecho"
            sx={{ position: 'fixed', right: 16, bottom: 16, zIndex: 1300 }}
          >
            <MenuOpenIcon />
          </Fab>
          <Drawer
            anchor="right"
            open={openRight}
            onClose={() => setOpenRight(false)}
            ModalProps={{ keepMounted: true }}
            PaperProps={{ sx: { width: SIDEBAR_WIDTH } }}
          >
            {SidebarContent}
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Perfil;

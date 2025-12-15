import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import API from "../api";


const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    edad: '',
    genero: '',
    pais: '',
    ciudad: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage('');
  setSuccessMessage('');

  try {
    const res = await API.post("/api/datosusuario/register", formData);

    // Guardar nombre e ID en localStorage
    localStorage.setItem('usuarioNombre', res.data.nombre);
    localStorage.setItem('usuarioId', res.data._id);

    setSuccessMessage('Registro exitoso, puedes iniciar sesión');

    setTimeout(() => {
      navigate('/login');
    }, 2000);

  } catch (err) {
    console.error('❌ Error en registro:', err);

    if (err.response) {
      setErrorMessage(err.response.data?.mensaje || 'Error en el registro');
    } else {
      setErrorMessage('Error de conexión con el servidor');
    }
  }
};


  return (
    <Box className='Registro-container'>
      <Typography gutterBottom className="Registro-title" sx={{ fontSize: '3.7rem', fontWeight:'650', color: '#2980b9' }}>
        Registro
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre Completo"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ maxWidth: '400px', width: '100%', marginLeft: '3rem' }}
        />

        <TextField
          label="Correo electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ maxWidth: '400px', width: '100%' }}
        />

        <TextField
          label="Crear Contraseña"
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ maxWidth: '400px', width: '100%' }}
        />

        <TextField
          label="Edad"
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          min="0"
          required
          fullWidth
          margin="normal"
          sx={{ maxWidth: '400px', width: '100%' }}
        />

        <FormControl fullWidth margin="normal" sx={{ maxWidth: '400px', width: '100%' }}>
          <InputLabel id="genero-label">Género</InputLabel>
          <Select
            labelId="genero-label"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
          >
            <MenuItem value="">Selecciona una opción</MenuItem>
            <MenuItem value="femenino">Femenino</MenuItem>
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="otro">Otro</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="País"
          type="text"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ maxWidth: '400px', width: '100%' }}
        />

        <TextField
          label="Ciudad"
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ maxWidth: '400px', width: '100%' }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: '2rem', backgroundColor: '#2980b9', fontWeight: '700', maxWidth: '400px', width: '100%' }}
        >
          Crear cuenta
        </Button>
      </form>

      {errorMessage && <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>}

      <Button
        className='buton1'
        variant="contained"
        component={Link}
        to="/"
        sx={{
          marginTop: 2,
          backgroundColor: '#2980b9',
          fontWeight: '700',
          marginRight: '3rem',
        }}
      >
        Volver al Inicio
      </Button>
    </Box>
  );
};

export default Register;

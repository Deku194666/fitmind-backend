// src/components/Login.js
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from "../api";



const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await API.post("/api/usuarios/login", {
        email: formData.loginEmail,
        password: formData.loginPassword
      });

      console.log('✅ Login exitoso:', res.data);

      // Guardar datos del usuario
      localStorage.setItem('usuario_id', res.data.usuarioId);
      localStorage.setItem('usuario_email', res.data.email);
      localStorage.setItem('usuario_nombre', res.data.nombre);
      localStorage.setItem('token', res.data.token);

      navigate('/Dashboard');

    } catch (err) {
      console.error('❌ Error completo:', err);

      if (err.response) {
        alert(`Error ${err.response.status}: ${JSON.stringify(err.response.data)}`);
      } else if (err.request) {
        alert('El servidor no responde. Verifica que el backend esté corriendo.');
      } else {
        alert(`Error: ${err.message}`);
      }
    }
  };

  return (
    <Box sx={{
      width: '400px',
      padding: '3rem 2rem',
      margin: '6rem auto',
      border: '2px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <Typography gutterBottom sx={{ 
        fontWeight: 700, 
        color: '#2980b9', 
        fontSize: '3.3rem',
        textAlign: 'center',
      }}>Login</Typography>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="loginEmail"
          value={formData.loginEmail}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{
            width: '90%',
            maxWidth: '360px',
            height: '40px',
            padding: '8px 12px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '1.5rem',
          }}
        />

        <input
          type="password"
          name="loginPassword"
          value={formData.loginPassword}
          onChange={handleChange}
          placeholder="Contraseña"
          required
          style={{
            width: '90%',
            maxWidth: '360px',
            height: '40px',
            padding: '8px 12px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '1.5rem',
          }}
        />

        <Button type="submit" variant="contained" sx={{ backgroundColor: '#2980b9' }}>
          Iniciar Sesión
        </Button>
      </form>
    </Box>
  );
};

export default Login;

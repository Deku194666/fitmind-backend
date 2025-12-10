import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BuscadorAlimentos() {
  const [alimentos, setAlimentos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if (!busqueda) {
      setAlimentos([]); // si no hay búsqueda, no mostrar nada
      return;
    }

    const fetchAlimentos = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/alimentos/buscar?q=${busqueda}`,
          {
            headers: {
              // 🔑 aquí añadimos el user-id al header
              'user-id': localStorage.getItem('usuario_id')
            }
          }
        );

        setAlimentos(res.data);
      } catch (error) {
        console.error('Error al buscar alimentos:', error);
      }
    };

    fetchAlimentos();
  }, [busqueda]); // cada vez que cambie la búsqueda, hacemos la consulta

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '30px',
        border: '2px solid #2980b9',
        borderRadius: '12px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2
        style={{
          color: '#2980b9',
          fontSize: '2rem',
          marginBottom: '20px'
        }}
      >
        Buscador de Alimentos
      </h2>
      <input
        type="text"
        placeholder="Buscar alimento..."
        value={busqueda}
        onChange={(e) => {
          console.log('Buscando:', e.target.value); // esto imprime lo que escribes
          setBusqueda(e.target.value);
        }}
        style={{
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
          width: '100%',
          marginBottom: '25px'
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {alimentos.map((alimento) => (
          <div
            key={alimento._id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h3 style={{ color: '#2980b9', fontWeight: '600' }}>
              {alimento.nombre}
            </h3>
            <p>
              <strong>Categoría:</strong> {alimento.categoria}
            </p>
            <p>
              <strong>Calorías:</strong> {alimento.calorias} kcal
            </p>
            <p>
              <strong>Proteínas:</strong> {alimento.proteinas} g
            </p>
            <p>
              <strong>Grasas:</strong> {alimento.grasas} g
            </p>
            <p>
              <strong>Carbohidratos:</strong> {alimento.carbohidratos} g
            </p>
            <p>
              <strong>Fibra:</strong> {alimento.fibra} g
            </p>
            <p>
              <strong>Porción:</strong> {alimento.porcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscadorAlimentos;

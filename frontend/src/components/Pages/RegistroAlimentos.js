// src/components/Alimentos/RegistroAlimentos.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarAl from './NavBarAl';

// ---- Utils ----
const num = (v, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
};

const hoyISO = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
};

// ---- Buscador por comida ----
function BuscadorComida({ comida, onAdd }) {
  const [busqueda, setBusqueda] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBusqueda = async (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    if (!valor) {
      setResultados([]);
      return;
    }
    try {
      const usuario_id = localStorage.getItem('usuario_id');
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/alimentos/buscar`,
        {
          params: { q: valor },
          headers: { 'user-id': usuario_id }, // 👈 NECESARIO por el middleware
        }
      );
      setResultados(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('❌ Error buscando alimentos:', error?.response?.data || error.message);
      setResultados([]);
    }
  };

  const agregarAlimento = (al) => {
    const qty = num(cantidad, 1);
    const nuevo = {
      nombre: al.nombre,
      cantidad: qty,
      calorias: num(al.calorias),
      proteinas: num(al.proteinas),
      grasas: num(al.grasas),
      carbohidratos: num(al.carbohidratos),
      fibra: num(al.fibra),
    };
    onAdd(comida, nuevo);
    setBusqueda('');
    setCantidad('');
    setResultados([]);
  };

  return (
    <div style={{ marginBottom: 20, width: '29.2rem', textAlign: 'center', marginLeft: '3rem' }}>
      <h4 style={{ color: '#2980b9' }}>{comida}</h4>

      <input
        type="text"
        placeholder={`Buscar alimento para ${comida}...`}
        value={busqueda}
        onChange={handleBusqueda}
        style={{ width: '300px', height: '60px', padding: '10px 14px', marginRight: '10px', border: '2px solid #2980b9', borderRadius: '10px', outline: 'none', boxShadow: '0px 2px 6px rgba(0,0,0,0.1)', fontSize: '16px', display: 'block', boxSizing: 'border-box' }}
      />

      <input
        type="number"
        placeholder="Cantidad"
        min="0"
        step="0.1"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
        style={{ width: '180px', height: '60px', padding: '10px 14px', border: '2px solid #2980b9', borderRadius: '10px', outline: 'none', boxShadow: '0px 2px 6px rgba(0,0,0,0.1)', fontSize: '16px', display: 'block', boxSizing: 'border-box' }}
        onFocus={(e) => (e.target.style.borderColor = '#1abc9c')}
        onBlur={(e) => (e.target.style.borderColor = '#2980b9')}
      />

      {resultados.length > 0 && (
        <div style={{ border: '1px solid #ccc', maxHeight: '150px', overflowY: 'auto', marginTop: 5, textAlign: 'left' }}>
          {resultados.map((al) => (
            <div
              key={al._id}
              style={{ padding: 8, cursor: 'pointer', borderBottom: '1px solid #eee' }}
              onClick={() => agregarAlimento(al)}
              title="Agregar a la comida"
            >
              {al.nombre} — {num(al.calorias)} kcal
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Página principal ----
function RegistroAlimentos() {
  const [alimentosRegistrados, setAlimentosRegistrados] = useState({
    Desayuno: [],
    'Colación Mañana': [],
    Almuerzo: [],
    'Colación Tarde': [],
    Cena: [],
  });

  const [mensaje, setMensaje] = useState('');

  // Carga inicial desde BD
  useEffect(() => {
    const fetchRegistroAlimentos = async () => {
      try {
        const usuario_id = localStorage.getItem('usuario_id');
        if (!usuario_id) {
          console.warn('⚠️ No hay usuario logueado en localStorage');
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/registroalimentos/${usuario_id}`,
          { headers: { 'user-id': usuario_id } } // 👈 NECESARIO por el middleware
        );

        const base = {
          Desayuno: [],
          'Colación Mañana': [],
          Almuerzo: [],
          'Colación Tarde': [],
          Cena: [],
        };

        const registros = Array.isArray(res.data) ? res.data : [];
        registros.forEach((r) => {
          if (base[r.comida]) {
            base[r.comida] = Array.isArray(r.alimentos) ? r.alimentos : [];
          }
        });

        setAlimentosRegistrados(base);
      } catch (error) {
        console.error('❌ Error cargando registroAlimentos:', error?.response?.data || error.message);
      }
    };

    fetchRegistroAlimentos();
  }, []);

  // Guardar una comida en BD y reflejar respuesta en el estado
  const guardarComida = async (comida, alimentos) => {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
      console.warn('⚠️ No hay usuario logueado en localStorage');
      return null;
    }

    const payload = {
      usuario_id,
      comida,
      alimentos: alimentos.map((a) => ({
        nombre: a.nombre,
        cantidad: num(a.cantidad, 1),
        calorias: num(a.calorias),
        proteinas: num(a.proteinas),
        grasas: num(a.grasas),
        carbohidratos: num(a.carbohidratos),
        fibra: num(a.fibra),
      })),
      fecha: hoyISO(), // si tu schema lo ignora, no pasa nada
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/registroalimentos`,
      payload,
      { headers: { 'user-id': usuario_id } } // 👈 NECESARIO por el middleware
    );
    return res.data; // debería ser el documento { usuario_id, comida, alimentos, ... }
  };

  // Agregar alimento a una comida (optimista + sincronización con BD)
  const onAddAlimento = async (comida, alimento) => {
    // 1) optimista
    setAlimentosRegistrados((prev) => {
      const nuevos = [...prev[comida], alimento];
      return { ...prev, [comida]: nuevos };
    });

    try {
      // 2) persistir y sincronizar con lo que devuelve Mongo
      const doc = await guardarComida(comida, [...alimentosRegistrados[comida], alimento]);
      if (doc && Array.isArray(doc.alimentos)) {
        setAlimentosRegistrados((prev) => ({ ...prev, [comida]: doc.alimentos }));
      }

      setMensaje(`✅ ${alimento.nombre} agregado a ${comida}`);
      setTimeout(() => setMensaje(''), 2000);

      // notificar a dashboard (si lo usas)
      window.dispatchEvent(new CustomEvent('alimentos:actualizado', { detail: { tipo: 'alimentos' } }));
    } catch (error) {
      console.error('❌ Error guardando comida:', error?.response?.data || error.message);
      // rollback simple (quitar el último agregado)
      setAlimentosRegistrados((prev) => {
        const copia = [...prev[comida]];
        copia.pop();
        return { ...prev, [comida]: copia };
      });
    }
  };

  return (
    <>
      <NavBarAl />

      <div
        style={{
          maxWidth: '600px',
          margin: '40px auto',
          padding: '30px',
          border: '2px solid #2980b9',
          borderRadius: '10px',
          backgroundColor: '#fdfdfd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#2980b9' }}>Registro de Alimentos</h2>
        {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

        {Object.keys(alimentosRegistrados).map((comida) => (
          <BuscadorComida key={comida} comida={comida} onAdd={onAddAlimento} />
        ))}

        {/* Listado + totales por comida */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {Object.keys(alimentosRegistrados).map((comida) => {
            const alimentos = alimentosRegistrados[comida];

            const totalCalorias = alimentos.reduce((sum, al) => sum + num(al.calorias) * num(al.cantidad, 1), 0);
            const totalProteinas = alimentos.reduce((sum, al) => sum + num(al.proteinas) * num(al.cantidad, 1), 0);
            const totalGrasas = alimentos.reduce((sum, al) => sum + num(al.grasas) * num(al.cantidad, 1), 0);
            const totalCarbohidratos = alimentos.reduce((sum, al) => sum + num(al.carbohidratos) * num(al.cantidad, 1), 0);
            const totalFibra = alimentos.reduce((sum, al) => sum + num(al.fibra) * num(al.cantidad, 1), 0);

            return (
              <div key={comida} style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#2980b9', textAlign: 'center' }}>{comida}</h4>

                {alimentos.length > 0 ? (
                  <>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', textAlign: 'center' }}>
                      {alimentos.map((al, i) => (
                        <li key={i} style={{ marginTop: '1rem', marginBottom: '-5rem' }}>
                          {al.nombre} — {num(al.cantidad, 1)} porciones
                          <ul style={{ fontSize: '13px', color: '#555' }}>
                            <li>Calorías: {num(al.calorias) * num(al.cantidad, 1)}</li>
                            <li>Proteínas: {num(al.proteinas) * num(al.cantidad, 1)} g</li>
                            <li>Grasas: {num(al.grasas) * num(al.cantidad, 1)} g</li>
                            <li>Carbohidratos: {num(al.carbohidratos) * num(al.cantidad, 1)} g</li>
                            <li>Fibra: {num(al.fibra) * num(al.cantidad, 1)} g</li>
                          </ul>
                        </li>
                      ))}

                      <li style={{ fontSize: '1.5rem', fontWeight: 500, marginTop: '-5rem', marginBottom: '6.5rem' }}>
                        Totales Calorías: {totalCalorias} kcal
                      </li>
                      <li style={{ fontSize: '1.5rem', fontWeight: 500, marginTop: '-5rem', marginBottom: '1rem' }}>
                        Totales Macronutrientes: {totalProteinas} g Proteínas, {totalGrasas} g Grasas, {totalCarbohidratos} g Carbohidratos, {totalFibra} g Fibra
                      </li>
                    </ul>
                  </>
                ) : (
                  <p style={{ color: '#888', fontSize: '14px' }}>No hay alimentos registrados aún.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RegistroAlimentos;



// src/components/CalendarioFarmacos.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import Modal from 'react-modal';
import './CalendarioFarmacos.css'; // Luego te doy estilos básicos

Modal.setAppElement('#root'); // Para accesibilidad del modal

function CalendarioFarmacos() {
  // Estado para datos fármacos del mes: { 'YYYY-MM-DD': [fármacos] }
  const [farmacosPorDia, setFarmacosPorDia] = useState({});

  // Fecha seleccionada en el calendario
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  // Modal abierto o cerrado
  const [modalAbierto, setModalAbierto] = useState(false);

  // Cargar fármacos para el mes actual
  useEffect(() => {
    const fetchFarmacosMes = async () => {
      try {
        // Obtener usuarioId guardado en localStorage
        const usuarioId = localStorage.getItem('usuarioId');
        if (!usuarioId) {
          console.error('No se encontró usuarioId en localStorage');
          return;
        }

        // Obtener fecha actual para definir rango mes (inicio y fin)
        const ahora = new Date();
        const anio = ahora.getFullYear();
        const mes = ahora.getMonth();

        // Fecha inicio mes (primer día)
        const fechaInicioMes = new Date(anio, mes, 1);
        // Fecha fin mes (último día)
        const fechaFinMes = new Date(anio, mes + 1, 0);

        // Formatear fechas ISO para backend (yyyy-mm-dd)
        const formatoISO = (fecha) => fecha.toISOString();

        // Llamada al backend para obtener fármacos del mes
        const response = await axios.get(
          `/api/farmacos/mes`, // Debes tener esta ruta creada, si quieres te ayudo con backend
          {
            params: {
              usuarioId,
              fechaInicio: formatoISO(fechaInicioMes),
              fechaFin: formatoISO(fechaFinMes),
            },
          }
        );

        // Respuesta esperada: array de fármacos con fechas y datos
        // Vamos a agrupar por día:
        // farmacosPorDia = { '2025-07-22': [farmaco1, farmaco2], ... }
        const data = response.data;

        const agrupados = {};
        data.forEach((item) => {
          // Extraer fecha YYYY-MM-DD del campo fechaInicio
          const fechaStr = item.fechaInicio.slice(0, 10);
          if (!agrupados[fechaStr]) agrupados[fechaStr] = [];
          agrupados[fechaStr].push(item);
        });

        setFarmacosPorDia(agrupados);
      } catch (error) {
        console.error('Error al cargar fármacos del mes:', error);
      }
    };

    fetchFarmacosMes();
  }, []);

  // Función que marca días en el calendario
  const marcarDiasConFarmacos = ({ date, view }) => {
    if (view === 'month') {
      // YYYY-MM-DD
      const fechaStr = date.toISOString().slice(0, 10);
      if (farmacosPorDia[fechaStr]) {
        // Si hay fármacos ese día, retornamos un div para el punto azul
        return (
          <div className="punto-farmaco" />
        );
      }
    }
    return null;
  };

  // Al hacer click en un día
  const handleClickDia = (date) => {
    const fechaStr = date.toISOString().slice(0, 10);
    if (farmacosPorDia[fechaStr]) {
      setFechaSeleccionada(fechaStr);
      setModalAbierto(true);
    } else {
      // No hay fármacos ese día, puede abrir modal vacío o nada
      alert('No hay fármacos registrados para este día');
    }
  };

  return (
    <div className="calendario-farmacos-container">
      <Calendar
        onClickDay={handleClickDia}
        tileContent={marcarDiasConFarmacos}
      />

      <Modal
        isOpen={modalAbierto}
        onRequestClose={() => setModalAbierto(false)}
        contentLabel="Detalles del día"
        className="modal-farmacos"
        overlayClassName="overlay-modal"
      >
        <button className="cerrar-modal" onClick={() => setModalAbierto(false)}>X</button>
        <h2>Fármacos para {fechaSeleccionada}</h2>
        <div className="detalles-farmacos">
          {fechaSeleccionada && farmacosPorDia[fechaSeleccionada].map((farmaco, idx) => (
            <div key={idx} className="farmaco-item">
              <p><strong>Nombre:</strong> {farmaco.farmaco}</p>
              <p><strong>Dosis:</strong> {farmaco.dosis || '-'}</p>
              <p><strong>Frecuencia:</strong> {farmaco.frecuencia || '-'}</p>
              <p><strong>Horas:</strong> {farmaco.horas.join(', ')}</p>
              <p><strong>Notas:</strong> {farmaco.notas || 'Sin notas'}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default CalendarioFarmacos;

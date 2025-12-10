


// RegistroTrote2.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer, LineChart, Line,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend,
} from "recharts";

// Card simple
const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-2xl p-4">{children}</div>
);

// Fecha DD/MM HH:MM
const formatDateLabel = (fechaStr) => {
  if (!fechaStr) return "";
  const d = new Date(fechaStr);
  if (isNaN(d)) return fechaStr;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month} ${hours}:${minutes}`;
};

function RegistroTrote2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    const fetchRegistros = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) {
          if (!cancel) { setData([]); setLoading(false); }
          return;
        }

        // ⛳️ Requiere endpoint backend: GET /api/trote/historial/:usuario_id
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/trote/historial/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        const lista = Array.isArray(res.data) ? res.data : [];

        const mapped = lista.map((item) => {
          const fechaRaw = item.fecha || item.createdAt || item._id;
          let ts = Date.parse(fechaRaw);
          if (Number.isNaN(ts) && item._id) {
            // fallback: timestamp desde ObjectId
            ts = parseInt(String(item._id).substring(0, 8), 16) * 1000;
          }

          const segundos = Number(item.tiempo) || 0;
          const minutos = segundos / 60;
          const kcal = Number(item.calorias) || 0;

          return {
            _id: item._id,
            ts,
            fechaLabel: formatDateLabel(fechaRaw),
            minutos: Number(minutos.toFixed(2)),
            calorias: Number(kcal.toFixed(2)),
            kcal_x_min: minutos > 0 ? Number((kcal / minutos).toFixed(2)) : null,
          };
        });

        mapped.sort((a, b) => a.ts - b.ts);
        if (!cancel) setData(mapped);
      } catch (err) {
        console.error("Error al cargar trote:", err);
        if (!cancel) setData([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    fetchRegistros();

    // 🔁 Auto-refresco al registrar desde el módulo de trote
    const onNuevo = (e) => {
      if (!e?.detail?.tipo || e.detail.tipo === "trote") fetchRegistros();
    };
    window.addEventListener("ejercicio:registrado", onNuevo);

    // Refrescar al volver a la pestaña
    const onVisible = () => {
      if (document.visibilityState === "visible") fetchRegistros();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancel = true;
      window.removeEventListener("ejercicio:registrado", onNuevo);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (loading) return <p className="p-6">Cargando datos...</p>;
  if (!data || data.length === 0) return <p className="p-6">No hay registros para graficar.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <p className="Par1">📊 Análisis de Trote</p>
      <p className="Par2">Visualiza la evolución de tus sesiones de trote.</p>

      {/* Resumen simple */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <p className="ParGrafico">Sesiones</p>
          <p className="Par1">{data.length}</p>
        </Card>
        <Card>
          <p className="ParGrafico">Minutos totales</p>
          <p className="Par1">
            {data.reduce((acc, x) => acc + (x.minutos || 0), 0).toFixed(1)}
          </p>
        </Card>
        <Card>
          <p className="ParGrafico">Calorías totales</p>
          <p className="Par1">
            {data.reduce((acc, x) => acc + (x.calorias || 0), 0).toFixed(0)} kcal
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tiempo (min) */}
        <Card>
          <div><p className="ParGrafico">⏱️ Tiempo de trote (min)</p></div>
          <ResponsiveContainer width="92%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="minutos"
                name="Minutos"
                stroke="#4f46e5"
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Calorías (kcal) */}
        <Card>
          <div><p className="ParGrafico">🔥 Calorías (kcal)</p></div>
          <ResponsiveContainer width="92%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="calorias"
                name="Calorías"
                stroke="#ef4444"
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* (Opcional) Kcal por minuto */}
        <Card>
          <div><p className="ParGrafico">⚖️ Intensidad (kcal/min)</p></div>
          <ResponsiveContainer width="92%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="kcal_x_min"
                name="kcal/min"
                stroke="#10b981"
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}

export default RegistroTrote2;

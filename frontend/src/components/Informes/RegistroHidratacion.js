import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Card = ({ children }) => (
  <div
    style={{
      background: "#fff",
      padding: 16,
      borderRadius: 12,
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    }}
  >
    {children}
  </div>
);

// Función para formatear fecha y hora correctamente
const formatFechaHora = (fechaStr, horaStr) => {
  if (!fechaStr) return "";
  const hora = horaStr || "00:00:00";
  const fechaCompletaStr = `${fechaStr}T${hora}`;
  const fechaCompleta = new Date(fechaCompletaStr);
  if (isNaN(fechaCompleta)) return "";

  const dia = fechaCompleta.getDate().toString().padStart(2, "0");
  const mes = (fechaCompleta.getMonth() + 1).toString().padStart(2, "0");
  const horas = fechaCompleta.getHours().toString().padStart(2, "0");
  const minutos = fechaCompleta.getMinutes().toString().padStart(2, "0");

  return `${dia}/${mes} ${horas}:${minutos}`;
};

function RegistroHidratacion() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistros = async () => {
      setLoading(true);
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) {
          setData([]);
          setLoading(false);
          return;
        }

        const urlTodos = `${process.env.REACT_APP_API_URL}/api/hidratacion/todos/${usuario_id}`;
        const res = await axios.get(urlTodos, { headers: { "user-id": usuario_id } });

        if (Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data
            .map((item) => ({
              _id: item._id,
              fechaLabel: formatFechaHora(item.fecha, item.hora),
              ts: new Date(`${item.fecha}T${item.hora || "00:00:00"}`).getTime(),
              cantidad: Number(item.cantidad_ml) || 0,
            }))
            .sort((a, b) => a.ts - b.ts);

          setData(mapped);
          setLoading(false);
          return;
        }

        // Fallback: si no hay registros, obtener el total del día
        const urlResumen = `${process.env.REACT_APP_API_URL}/api/hidratacion/resumen/${usuario_id}`;
        const res2 = await axios.get(urlResumen, { headers: { "user-id": usuario_id } });
        const total = Number(res2.data.total_ml) || 0;
        const fechaRaw = new Date().toISOString().split("T")[0];

        setData([
          {
            _id: "resumen-" + fechaRaw,
            fechaLabel: formatFechaHora(fechaRaw),
            ts: new Date(fechaRaw).getTime(),
            cantidad: total,
          },
        ]);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar hidratación:", err);
        setData([]);
        setLoading(false);
      }
    };

    fetchRegistros();

    // Opcional: refrescar cuando se agregue algo
    const handler = () => fetchRegistros();
    window.addEventListener("hidratacion:refresh", handler);
    return () => window.removeEventListener("hidratacion:refresh", handler);
  }, []);

  if (loading) return <p style={{ padding: 16 }}>Cargando datos...</p>;
  if (!data || data.length === 0)
    return <p style={{ padding: 16 }}>No hay registros de hidratación para graficar.</p>;

  return (
    <div style={{ padding: 24, background: "#f6f9fc", minHeight: "70vh" }}>
      <h2 style={{ marginBottom: 6 }}>💧 Análisis de Hidratación</h2>
      <p style={{ color: "#666", marginBottom: 18 }}>Evolución del consumo de agua (ml).</p>

      <Card>
        <div style={{ marginBottom: 8 }}>
          <strong>Consumo de Agua (ml)</strong>
        </div>
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fechaLabel" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cantidad"
              name="Agua (ml)"
              stroke="#00aaff"
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

export default RegistroHidratacion;

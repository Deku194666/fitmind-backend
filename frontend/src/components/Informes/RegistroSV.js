// RegistroSV.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegistroSV.css";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, } from "recharts";
import { HeartPulse, Thermometer, Droplets, Activity, Wind, } from "lucide-react"; 

// --- Pequeño componente Card sin shadcn/ui ---
const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-2xl p-4">{children}</div>
);

// Mostrar fecha y hora DD/MM HH:MM
const formatDateLabel = (fechaStr) => {
  if (!fechaStr) return "";
  const d = new Date(fechaStr);
  if (isNaN(d)) return fechaStr;

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");

  return `${day}/${month} ${hours}:${minutes}`;
};

const parsePressure = (pres) => {
  if (!pres) return { sistolica: null, diastolica: null };
  const text = String(pres);
  const m = text.match(/(\d{2,3})\s*\/\s*(\d{2,3})/);
  if (m) {
    return { sistolica: parseInt(m[1], 10), diastolica: parseInt(m[2], 10) };
  }
  return { sistolica: null, diastolica: null };
};

function RegistroSV() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const usuario_id = localStorage.getItem("usuario_id");
        if (!usuario_id) {
          setData([]);
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/signos-vitales/usuario/${usuario_id}`,
          { headers: { "user-id": usuario_id } }
        );

        const registros = Array.isArray(res.data) ? res.data : [];

        const mapped = registros.map((item) => {
          const { sistolica, diastolica } = parsePressure(item.presion_arterial);
          const fechaRaw = item.fecha || new Date().toISOString();
          const ts = new Date(fechaRaw).getTime(); // timestamp completo

          return {
            _id: item._id,
            ts,
            fechaLabel: formatDateLabel(fechaRaw), // incluye hora
            frecuencia_cardiaca: Number(item.frecuencia_cardiaca) || null,
            temperatura: Number(item.temperatura) || null,
            saturacion_oxigeno: Number(item.saturacion_oxigeno) || null,
            frecuencia_respiratoria: Number(item.frecuencia_respiratoria) || null,
            sistolica,
            diastolica,
          };
        });

        // Ordena por timestamp completo
        mapped.sort((a, b) => a.ts - b.ts);
        setData(mapped);
      } catch (err) {
        console.error("Error al cargar signos vitales:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistros();
  }, []);

  if (loading) return <p className="p-6">Cargando datos...</p>;
  if (!data || data.length === 0)
    return <p className="p-6">No hay registros para graficar.</p>;

  const charts = [
    {
      title: "🫀Frecuencia Cardiaca (lpm)",
      icon: <HeartPulse className="w-6 h-6 text-red-500" />,
      dataKey: "frecuencia_cardiaca",
      stroke: "#e63946",
    },
    {
      title: "🌡️Temperatura (°C)",
      icon: <Thermometer className="w-6 h-6 text-blue-500" />,
      dataKey: "temperatura",
      stroke: "#457b9d",
    },
    {
      title: "💨Saturación de Oxígeno (%)",
      icon: <Droplets className="w-6 h-6 text-cyan-600" />,
      dataKey: "saturacion_oxigeno",
      stroke: "#2a9d8f",
    },
    {
      title: "🫁Frecuencia Respiratoria (rpm)",
      icon: <Wind className="w-6 h-6 text-orange-500" />,
      dataKey: "frecuencia_respiratoria",
      stroke: "#f4a261",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <p className="Par1">📊 Análisis de Signos Vitales</p>
      <p className="Par2"> Visualiza la evolución de tus registros de salud. </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {charts.map((chart) => (
          <Card key={chart.dataKey}>
            <div >
              <p className="ParGrafico">{chart.title}</p>
            </div>
            <ResponsiveContainer width="91.3%" height={350}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fechaLabel" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={chart.dataKey}
                  name={chart.title}
                  stroke={chart.stroke}
                  dot={{ r: 3 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        ))}

        {/* Presión arterial */}
        <Card >
          <div>
            <p className="ParGraficoPA "> 🩸Presión Arterial (mmHg)</p>
          </div>
          <ResponsiveContainer width="92%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fechaLabel" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sistolica"
                name="Sistólica"
                stroke="#8d99ae"
                dot={{ r: 3 }} 
              />
              <Line
                type="monotone"
                dataKey="diastolica"
                name="Diastólica"
                stroke="#6a994e"
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}

export default RegistroSV;

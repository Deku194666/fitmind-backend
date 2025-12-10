

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Antiacidos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antiácidos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antiácidos</strong> son medicamentos que neutralizan el ácido clorhídrico del jugo gástrico. Se utilizan principalmente para aliviar síntomas relacionados con hiperacidez gástrica, como la dispepsia o el reflujo gastroesofágico.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Neutralizan el ácido gástrico en la luz del estómago.</li>
        <li>Reducen la acidez, aumentando el pH gástrico.</li>
        <li>Alivian los síntomas de pirosis, ardor o acidez estomacal.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Dispepsia funcional</li>
        <li>Enfermedad por reflujo gastroesofágico (ERGE)</li>
        <li>Gastritis y úlceras gástricas o duodenales</li>
        <li>Alivio sintomático ocasional de acidez</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Composición</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hidróxido de aluminio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antiácido de acción lenta</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-15 ml después de las comidas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hidróxido de magnesio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antiácido con efecto laxante</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-15 ml después de las comidas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Combinación Al/Mg (ej. Maalox®)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neutraliza y equilibra efectos secundarios</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 a 2 tabletas masticables o 10-20 ml</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estreñimiento (aluminio)</li>
        <li>Diarrea (magnesio)</li>
        <li>Alteraciones del equilibrio electrolítico</li>
        <li>Interferencia con la absorción de otros medicamentos</li>
        <li>Alcalosis metabólica en uso prolongado o excesivo</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Insuficiencia renal severa</li>
        <li>Hipofosfatemia</li>
        <li>Hipersensibilidad a alguno de los componentes</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Disminuyen absorción de tetraciclinas, quinolonas, hierro y digoxina</li>
        <li>Separar su administración al menos 2 horas de otros medicamentos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Uso ocasional o a corto plazo; no es tratamiento de mantenimiento</li>
        <li>No sustituye inhibidores de bomba de protones en patologías graves</li>
        <li>Evitar uso excesivo en pacientes con insuficiencia renal</li>
        <li>Revisar interacción si el paciente toma otros fármacos crónicos</li>
      </ul>
    </div>
  );
}

export default Antiacidos;

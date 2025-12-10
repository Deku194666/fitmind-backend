

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Metilxantinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Metilxantinas</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>metilxantinas</strong> son broncodilatadores utilizados en enfermedades respiratorias como 
        <Link to="/ecnt/asma"> Asma</Link> y <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link>. Aunque su uso 
        ha disminuido por su estrecho margen terapéutico y efectos adversos, pueden ser útiles en casos seleccionados o donde 
        no se dispone de otras opciones.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhiben la fosfodiesterasa (PDE), aumentando los niveles de AMPc.</li>
        <li>Relajan el músculo liso bronquial → broncodilatación.</li>
        <li>Estimulantes del sistema nervioso central y centro respiratorio.</li>
        <li>Poseen leve efecto antiinflamatorio e inmunomodulador.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asma persistente moderada o severa (en combinación con otros fármacos)</li>
        <li>EPOC moderado o severo, especialmente en zonas sin acceso a inhaladores</li>
        <li>Apnea neonatal (en forma de cafeína)</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Teofilina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>300–600 mg/día (oral o EV)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Monitoreo plasmático necesario (niveles 5-15 mcg/mL)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aminofilina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-7 mg/kg en bolo EV, luego infusión continua</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Más usada en urgencias o UCI</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cafeína</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10 mg/kg/día (oral o EV)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso en neonatología</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Náuseas, vómitos</strong></li>
        <li><strong>Taquicardia, arritmias</strong></li>
        <li><strong>Temblor, insomnio, ansiedad</strong></li>
        <li><strong>Convulsiones</strong> (en intoxicación)</li>
        <li><strong>Gastritis o reflujo</strong> (por estimulación gástrica)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Epilepsia no controlada</li>
        <li>Enfermedades cardíacas graves (riesgo de arritmias)</li>
        <li>Úlcera péptica activa</li>
        <li>Hipersensibilidad al compuesto</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con macrólidos o quinolonas: aumenta niveles de teofilina</li>
        <li>Con anticonvulsivantes (fenitoína, carbamazepina): disminuyen sus niveles</li>
        <li>Con tabaco: induce su metabolismo → menor efecto</li>
        <li>Con cafeína u otros estimulantes: efecto aditivo en SNC</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorear niveles plasmáticos para evitar toxicidad</li>
        <li>Usar como alternativa si no se dispone de inhaladores o en combinación</li>
        <li>Ajustar dosis en insuficiencia hepática o en ancianos</li>
        <li>Educar al paciente sobre signos de toxicidad</li>
      </ul>
    </div>
  );
}

export default Metilxantinas;

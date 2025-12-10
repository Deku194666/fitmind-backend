

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FarmacosNerviosColumna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Nervios Periféricos y Columna Vertebral</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las afecciones de los nervios periféricos y de la columna vertebral pueden causar dolor neuropático, inflamación radicular, parestesias y disfunción motora. El tratamiento farmacológico tiene como objetivo reducir el dolor, desinflamar estructuras nerviosas y mejorar la calidad de vida del paciente, en complemento con fisioterapia y abordaje postural.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición de la transmisión nociceptiva a nivel del sistema nervioso central y periférico.</li>
        <li>Modulación de canales iónicos neuronales (sodio, calcio).</li>
        <li>Reducción de la inflamación radicular y neural.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Radiculopatías cervicales, torácicas y lumbosacras</li>
        <li>Ciática o lumbociática</li>
        <li>Neuralgia intercostal o postherpética</li>
        <li>Neuropatía periférica (por compresión o metabólica)</li>
        <li>Síndrome del túnel carpiano u otros atrapamientos nerviosos</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gabapentina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>300–1200 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antineurítico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pregabalina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>75–300 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modulador de canales de calcio</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Duloxetina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>30–60 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ISRSN (antidepresivo con acción sobre el dolor)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tramadol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50–100 mg cada 6–8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Analgésico opioide débil</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Corticoides orales o infiltrados</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis variable bajo indicación médica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antiinflamatorio esteroideo</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia, mareos (gabapentinoides)</li>
        <li>Náuseas, sequedad de boca, aumento de peso (duloxetina)</li>
        <li>Estreñimiento, náuseas (tramadol)</li>
        <li>Retención de líquidos, hiperglucemia (corticoides)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Insuficiencia renal (ajustar dosis de gabapentina/pregabalina)</li>
        <li>Trastornos psiquiátricos no controlados (duloxetina)</li>
        <li>Historia de abuso de opioides (tramadol)</li>
        <li>Diabetes mal controlada (corticoides)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Gabapentina/pregabalina con depresores del SNC (riesgo de sedación)</li>
        <li>Duloxetina con otros antidepresivos (riesgo de síndrome serotoninérgico)</li>
        <li>Tramadol con benzodiacepinas (riesgo de depresión respiratoria)</li>
        <li>Corticoides con AINEs (riesgo de úlcera gástrica)</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Indicar fármacos de forma escalonada según intensidad del dolor y perfil del paciente</li>
        <li>Asociar con terapia física, ejercicios neurodinámicos y reeducación postural</li>
        <li>Vigilar efectos secundarios a mediano plazo</li>
        <li>Usar infiltraciones o bloqueos con guía imagenológica si hay compresión radicular severa</li>
      </ul>
    </div>
  );
}

export default FarmacosNerviosColumna;

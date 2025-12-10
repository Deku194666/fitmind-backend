

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function  DolorNeuropatico() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Dolor Neuropático</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        El <strong>Dolor Neuropático</strong> es aquel que se origina como consecuencia directa de una lesión o enfermedad que afecta el sistema somatosensorial. Es común en patologías como neuropatía diabética, neuralgia postherpética, radiculopatías o lesiones medulares.
      </p>

      <p className="p14">🎯 Objetivos del Tratamiento</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Reducir la intensidad del dolor.</li>
        <li>Mejorar la funcionalidad y calidad de vida.</li>
        <li>Prevenir la cronificación del dolor.</li>
      </ul>

      <p className="p14">💊 Fármacos de Primera Línea</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antiepilépticos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gabapentina, Pregabalina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modulan canales de calcio, reducen hiperexcitabilidad neuronal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antidepresivos tricíclicos (ATC)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amitriptilina, Nortriptilina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben recaptación de serotonina y noradrenalina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ISRSN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Duloxetina, Venlafaxina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alternativa a ATC con mejor tolerabilidad</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💊 Fármacos de Segunda Línea</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Consideraciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Opioides débiles</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tramadol, Tapentadol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reservados para casos resistentes, riesgo de dependencia</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lidocaína tópica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Parche de lidocaína al 5%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Útil en áreas localizadas (ej. neuralgia postherpética)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Capsaicina tópica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Parches de capsaicina al 8%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desensibiliza fibras nociceptivas periféricas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Consideraciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evaluar comorbilidades psiquiátricas como ansiedad y depresión.</li>
        <li>Evitar monoterapia prolongada si no hay respuesta; considerar combinación racional.</li>
        <li>Monitorizar efectos adversos y adherencia al tratamiento.</li>
        <li>Educar al paciente sobre el carácter crónico del dolor neuropático y la importancia del enfoque multidisciplinario.</li>
      </ul>

      <p className="p14">📚 Recomendaciones Generales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Comenzar con dosis bajas y titular lentamente según tolerancia.</li>
        <li>Evaluar respuesta clínica a las 4–6 semanas de tratamiento.</li>
        <li>Complementar con terapias no farmacológicas: fisioterapia, terapia cognitivo-conductual, estimulación.</li>
      </ul>
    </div>
  );
}

export default  DolorNeuropatico;

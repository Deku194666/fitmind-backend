

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function  Antiparkinsonianos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos Antiparkinsonianos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Fármacos Antiparkinsonianos</strong> se utilizan en el tratamiento del <strong>Parkinson</strong> y otros síndromes parkinsonianos. Su objetivo principal es restaurar el equilibrio dopaminérgico en los ganglios basales, mejorando síntomas motores como bradicinesia, rigidez y temblor.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Aumento de a dopamina en el sistema nervioso central (levodopa, agonistas dopaminérgicos).</li>
        <li>Inhibición del metabolismo de dopamina (inhibidores de la MAO-B o COMT).</li>
        <li>Bloqueo de receptores colinérgicos (anticolinérgicos).</li>
        <li>Modulación glutamatérgica (amantadina).</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Enfermedad de Parkinson idiopática</li>
        <li>Parkinsonismo secundario (fármacos, traumatismos, etc.)</li>
        <li>Síntomas extrapiramidales inducidos por antipsicóticos (anticolinérgicos)</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Uso común</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Levodopa + Carbidopa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Precursor dopaminérgico + inhibidor periférico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea para síntomas motores</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pramipexol / Ropinirol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Agonistas dopaminérgicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alternativa o complemento a levodopa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Selegilina / Rasagilina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidores MAO-B</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumentan vida media de la dopamina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Entacapona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidor de la COMT</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prolonga efecto de levodopa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Trihexifenidilo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticolinérgico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control de temblor en etapas iniciales</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Discinesias (movimientos involuntarios) por levodopa</li>
        <li>Alucinaciones, somnolencia (agonistas dopaminérgicos)</li>
        <li>Hipotensión ortostática</li>
        <li>Confusión o deterioro cognitivo (anticolinérgicos en adultos mayores)</li>
        <li>Insomnio, náuseas, ansiedad</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Psicosis activa o demencia (evitar agonistas dopaminérgicos y anticolinérgicos)</li>
        <li>Glaucoma de ángulo cerrado (anticolinérgicos)</li>
        <li>Enfermedad hepática grave (inhibidores COMT)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Levodopa con alimentos ricos en proteínas (interfiere con absorción)</li>
        <li>Inhibidores MAO-B + antidepresivos ISRS/IRSN: riesgo de síndrome serotoninérgico</li>
        <li>Agonistas dopaminérgicos con sedantes: riesgo de somnolencia excesiva</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Usar la dosis mínima eficaz, ajustando progresivamente</li>
        <li>Combinar fármacos para reducir fluctuaciones motoras</li>
        <li>Monitorear aparición de discinesias o trastornos del comportamiento</li>
        <li>Educar al paciente y cuidadores sobre adherencia y efectos secundarios</li>
      </ul>
    </div>
  );
}

export default  Antiparkinsonianos;

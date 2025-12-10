

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Procineticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Procinéticos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Procinéticos</strong> son medicamentos que estimulan la motilidad del tracto gastrointestinal sin afectar directamente la secreción gástrica. Se utilizan para tratar trastornos funcionales como el vaciamiento gástrico lento, el reflujo gastroesofágico y la distensión abdominal.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estimulan los receptores serotoninérgicos (5-HT4) o dopaminérgicos (bloqueo D2), facilitando la liberación de acetilcolina y promoviendo la motilidad gástrica y del intestino delgado.</li>
        <li>Aumentan el tono del esfínter esofágico inferior y mejoran el vaciamiento gástrico.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Dispepsia funcional</li>
        <li>Gastroparesis (diabética o idiopática)</li>
        <li>Reflujo gastroesofágico</li>
        <li>Náuseas y vómitos asociados a retraso del vaciamiento gástrico</li>
        <li>Distensión abdominal por hipomotilidad</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metoclopramida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonista D2, agonista 5-HT4</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg cada 8 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Domperidona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonista D2 periférico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-20 mg cada 8 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cisaprida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Agonista 5-HT4</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10 mg cada 8 h (uso restringido)</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia, fatiga, diarrea</li>
        <li>Reacciones extrapiramidales (metoclopramida)</li>
        <li>Galactorrea, ginecomastia (por aumento de prolactina)</li>
        <li>Prolongación del QT y arritmias ventriculares (cisaprida)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Obstrucción intestinal mecánica</li>
        <li>Hemorragia gastrointestinal</li>
        <li>Parkinson (precaución con metoclopramida)</li>
        <li>Prolongación del QT o uso concomitante con fármacos que prolongan el QT</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Potencian efectos sedantes de otros depresores del SNC</li>
        <li>Metoclopramida puede disminuir absorción de medicamentos con liberación prolongada</li>
        <li>Riesgo de arritmias con cisaprida + macrólidos o antifúngicos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Usar a corto plazo para evitar efectos adversos extrapiramidales</li>
        <li>Evaluar riesgo de interacciones cardíacas antes de usar cisaprida</li>
        <li>Preferir domperidona cuando se desean menores efectos a nivel central</li>
        <li>Administrar antes de las comidas</li>
      </ul>
    </div>
  );
}

export default Procineticos;

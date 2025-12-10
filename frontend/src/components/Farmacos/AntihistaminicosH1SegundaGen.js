

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AntihistaminicosH1SegundaGen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antihistamínicos H1 (2ª Generación)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antihistamínicos H1 de Segunda Generación</strong> son medicamentos selectivos que bloquean los receptores H1 de histamina, sin atravesar la barrera hematoencefálica de forma significativa, lo que disminuye notablemente su efecto sedante. Son ampliamente utilizados para tratar enfermedades alérgicas crónicas.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Antagonismo selectivo de receptores H1 periféricos.</li>
        <li>Reducción de la respuesta alérgica sin efectos sedantes significativos.</li>
        <li>Larga duración de acción que permite administración diaria.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Rinitis alérgica estacional y perenne</li>
        <li>Urticaria crónica idiopática</li>
        <li>Conjuntivitis alérgica</li>
        <li>Tratamiento prolongado de síntomas alérgicos sin somnolencia</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sedación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Loratadina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Baja</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cetirizina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Leve (en algunos pacientes)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fexofenadina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>120–180 mg cada 24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nula</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Dolor de cabeza</li>
        <li>Boca seca</li>
        <li>Somnolencia leve (especialmente con cetirizina)</li>
        <li>Mareos ocasionales</li>
        <li>Náuseas</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al principio activo</li>
        <li>Precaución en insuficiencia hepática o renal grave</li>
        <li>Uso en embarazo solo si es estrictamente necesario</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con alcohol o depresores del SNC: puede potenciar somnolencia en algunos casos</li>
        <li>Con inhibidores del CYP3A4 (p. ej. ketoconazol): puede aumentar niveles plasmáticos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Preferidos sobre los de primera generación para uso prolongado</li>
        <li>Evitar en lactancia (algunos se excretan en leche materna)</li>
        <li>En pacientes sensibles a sedación, optar por fexofenadina</li>
        <li>Evaluar eficacia y tolerancia en tratamientos crónicos</li>
      </ul>
    </div>
  );
}

export default AntihistaminicosH1SegundaGen;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Antiemeticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antieméticos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antieméticos</strong> son fármacos utilizados para prevenir o tratar las náuseas y los vómitos, síntomas frecuentes en múltiples condiciones como enfermedades gastrointestinales, tratamientos oncológicos, cirugía o mareos por movimiento.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Actúan sobre diferentes receptores del sistema nervioso central y periférico involucrados en el reflejo del vómito: dopaminérgicos (D2), serotoninérgicos (5-HT3), histaminérgicos (H1), muscarínicos (M1) y neuroquinina-1 (NK1).</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Náuseas y vómitos de origen gastrointestinal</li>
        <li>Cinetosis (mareo por movimiento)</li>
        <li>Postoperatorio</li>
        <li>Quimioterapia y radioterapia</li>
        <li>Embarazo (uso restringido a ciertos fármacos)</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo / Receptor</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metoclopramida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonista D2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 mg cada 8 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ondansetrón</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonista 5-HT3</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-8 mg cada 8-12 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Domperidona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonista D2 periférico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10-20 mg cada 8 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dimenhidrinato</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antihistamínico H1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50-100 mg cada 4-6 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Escopolamina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antimuscarínico M1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Parche 1 cada 72 h</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aprepitant</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonista NK1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>125 mg día 1, 80 mg días 2-3</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia, mareo (antihistamínicos, escopolamina)</li>
        <li>Distonías, parkinsonismo (metoclopramida)</li>
        <li>Prolongación del QT (ondansetrón)</li>
        <li>Sequedad bucal, visión borrosa (escopolamina)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Metoclopramida: enfermedad de Parkinson, epilepsia</li>
        <li>Ondansetrón: prolongación del QT</li>
        <li>Escopolamina: glaucoma, obstrucción urinaria</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Ondansetrón + otros prolongadores del QT → riesgo de torsades de pointes</li>
        <li>Metoclopramida con antipsicóticos → aumento de efectos extrapiramidales</li>
        <li>Aprepitant puede alterar metabolismo de warfarina y anticonceptivos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Elegir el antiemético según la causa (quimioterapia, vértigo, postoperatorio, etc.)</li>
        <li>Evitar uso crónico de metoclopramida por riesgo de disquinesia tardía</li>
        <li>Monitorizar electrocardiograma si se usan fármacos que prolongan el QT</li>
        <li>Evaluar riesgo-beneficio en embarazo y pediatría</li>
      </ul>
    </div>
  );
}

export default Antiemeticos;

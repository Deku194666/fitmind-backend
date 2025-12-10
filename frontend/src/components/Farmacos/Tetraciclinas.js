

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tetraciclinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Tetraciclinas</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Tetraciclinas</strong> son un grupo de antibióticos de amplio espectro que actúan inhibiendo la síntesis proteica bacteriana. Son efectivas contra bacterias gram positivas, gram negativas, así como microorganismos atípicos, como Chlamydia, Mycoplasma y Rickettsias.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Se unen a la subunidad 30S del ribosoma bacteriano.</li>
        <li>Inhiben la unión del aminoacil-ARNt al sitio A del ribosoma.</li>
        <li>Bloquean la síntesis proteica bacteriana, actuando de forma bacteriostática.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Infecciones respiratorias por microorganismos atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae)</li>
        <li>Neumonía adquirida en la comunidad</li>
        <li>Infecciones por Rickettsias (fiebre Q, tifus)</li>
        <li>Acné y algunas infecciones cutáneas</li>
        <li>Enfermedad de Lyme</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vida media</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Doxiciclina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100 mg cada 12-24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>18-22 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tetraciclina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>250-500 mg cada 6 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 horas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Fotosensibilidad</li>
        <li>Toxicidad gastrointestinal: náuseas, vómitos, diarrea</li>
        <li>Alteración de la flora intestinal y sobreinfecciones</li>
        <li>Coloración amarilla de dientes en niños (contraindicada en menores de 8 años)</li>
        <li>Hepatotoxicidad en dosis altas o prolongadas</li>
        <li>Riesgo de hipoplasia ósea en fetos (contraindicada en embarazo)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Embarazo y lactancia</li>
        <li>Niños menores de 8 años</li>
        <li>Hipersensibilidad conocida</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Antiácidos, suplementos de calcio, hierro y magnesio: disminuyen absorción</li>
        <li>Anticoagulantes orales: pueden aumentar efecto anticoagulante</li>
        <li>Retinoides: aumento de toxicidad hepática</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Administrar con el estómago vacío para mejorar absorción</li>
        <li>Evitar exposición solar intensa durante el tratamiento</li>
        <li>Monitorear función hepática si el tratamiento es prolongado</li>
        <li>Usar con precaución en pacientes con insuficiencia renal</li>
      </ul>
    </div>
  );
}

export default Tetraciclinas;

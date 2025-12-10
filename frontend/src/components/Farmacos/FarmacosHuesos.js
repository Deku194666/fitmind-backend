

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FarmacosHuesos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para la Salud Ósea</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los fármacos para la salud ósea se emplean en el tratamiento y prevención de enfermedades como la <Link to="/ecnt/osteoporosis">Osteoporosis</Link>, enfermedad de Paget y otras patologías que afectan la densidad mineral ósea. Estos medicamentos pueden actuar inhibiendo la resorción ósea o estimulando la formación de hueso.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición de la actividad osteoclástica (antirresortivos).</li>
        <li>Estimulación de la formación ósea por osteoblastos (anabólicos).</li>
        <li>Regulación del metabolismo del calcio y fósforo.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><Link to="/ecnt/osteoporosis">Osteoporosis </Link>posmenopáusica o senil  </li>
        <li>Prevención de fracturas osteoporóticas</li>
        <li>Enfermedad de Paget ósea</li>
        <li>Osteogénesis imperfecta (algunos casos)</li>
        <li>Hipercalcemia maligna</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alendronato</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>70 mg semanal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bifosfonato</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ácido zoledrónico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 mg anual IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bifosfonato</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Denosumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>60 mg SC cada 6 meses</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticuerpo monoclonal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Teriparatida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20 mcg diarios SC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anabólico óseo</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Irritación esofágica y úlceras (bifosfonatos orales)</li>
        <li>Dolor óseo, muscular o articular</li>
        <li>Hipocalcemia (especialmente con denosumab)</li>
        <li>Osteonecrosis mandibular (raro)</li>
        <li>Fracturas atípicas del fémur con uso prolongado</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipocalcemia no corregida</li>
        <li>Insuficiencia renal grave (depuración &lt;30 ml/min)</li>
        <li>Trastornos esofágicos (para bifosfonatos orales)</li>
        <li>Embarazo y lactancia (según tipo de fármaco)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Calcio y antiácidos interfieren con absorción de bifosfonatos</li>
        <li>Denosumab puede potenciar hipocalcemia con diuréticos de asa</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asegurar aporte adecuado de calcio y vitamina D</li>
        <li>Supervisar adherencia y técnica de administración oral</li>
        <li>Evaluar densidad ósea periódicamente (DEXA)</li>
        <li>Considerar interrupción tras 3-5 años de bifosfonatos (vacaciones terapéuticas)</li>
      </ul>
    </div>
  );
}

export default FarmacosHuesos;

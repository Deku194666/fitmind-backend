

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CorticoidesSistemicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Corticoides Sistémicos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        Los <strong>Corticoides Sistémicos</strong> son fármacos antiinflamatorios potentes que se administran por vía oral o parenteral. 
        Se utilizan en enfermedades respiratorias como el <Link to="/ecnt/asma">Asma </Link> grave  o la 
        <Link to="/ecnt/enfermedadpulmonarobstructivacronica"> EPOC</Link> exacerbada, así como en otras condiciones inflamatorias o 
        autoinmunes. Su uso debe ser controlado debido al riesgo de efectos adversos sistémicos.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Suprimen la respuesta inflamatoria mediante la inhibición de citocinas y mediadores proinflamatorios.</li>
        <li>Estabilizan membranas lisosomales y reducen la permeabilidad vascular.</li>
        <li>Modulan la expresión génica vía receptores glucocorticoides.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Exacerbaciones de asma o EPOC</li>
        <li>Asma grave no controlada con inhaladores</li>
        <li>Neumonitis, sarcoidosis, fibrosis pulmonar</li>
        <li>Shock anafiláctico y reacciones alérgicas severas</li>
        <li>Enfermedades autoinmunes sistémicas</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Vía de administración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prednisona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20-60 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metilprednisolona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>40-125 mg cada 6-12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IV o IM</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dexametasona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-16 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Oral o IV</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Hiperglicemia</strong> e intolerancia a la glucosa</li>
        <li><strong>Hipertensión arterial</strong></li>
        <li><strong>Osteoporosis</strong> con uso prolongado</li>
        <li><strong>Miopatía proximal</strong></li>
        <li><strong>Trastornos psiquiátricos</strong> (insomnio, euforia, depresión)</li>
        <li><strong>Inmunosupresión</strong> con mayor riesgo de infecciones</li>
        <li><strong>Supresión del eje HHA</strong> y síndrome de Cushing iatrogénico</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Infección sistémica no controlada</li>
        <li>Úlcera péptica activa</li>
        <li>Psicosis no tratada</li>
        <li>Diabetes descompensada (relativa)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Inductores del CYP3A4 (rifampicina, fenitoína): reducen su eficacia</li>
        <li>Inhibidores del CYP3A4 (ketoconazol): aumentan sus efectos</li>
        <li>Diuréticos: riesgo de hipopotasemia</li>
        <li>AINES: mayor riesgo de úlcera gástrica</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Utilizar la menor dosis posible durante el menor tiempo necesario</li>
        <li>Monitorear glicemia, presión arterial, y densidad ósea en tratamientos prolongados</li>
        <li>Si se usan más de 2 semanas, retirar progresivamente para evitar supresión del eje HHA</li>
        <li>Asociar con protector gástrico si hay riesgo de sangrado digestivo</li>
      </ul>
    </div>
  );
}

export default CorticoidesSistemicos;

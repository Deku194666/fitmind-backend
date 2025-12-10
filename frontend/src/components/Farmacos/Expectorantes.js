

import React, { useEffect } from 'react';

function Expectorantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Expectorantes</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Expectorantes</strong> son fármacos que aumentan el volumen y la fluidez del moco en las vías respiratorias, facilitando su expulsión mediante la tos. Se emplean en enfermedades respiratorias con producción de secreciones abundantes y viscosas, ayudando a limpiar las vías aéreas.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estimulan las glándulas secretoras de las vías respiratorias para aumentar la producción de moco más fluido.</li>
        <li>Incrementan el volumen de secreciones, facilitando la expulsión por tos.</li>
        <li>Mejoran la eliminación del moco y disminuyen la obstrucción bronquial.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Tos productiva con moco espeso y difícil de expulsar</li>
        <li>Bronquitis aguda y crónica</li>
        <li>Bronquiectasias</li>
        <li>Neumonías con producción excesiva de secreciones</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Guaifenesina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>200-400 mg cada 4-6 horas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estimula secreción bronquial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ammonium chloride (Cloruro de amonio)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500 mg cada 8 horas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uso menos frecuente, acción irritante</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Molestias gastrointestinales: náuseas, vómitos</li>
        <li>Reacciones alérgicas poco frecuentes</li>
        <li>Riesgo de irritación gástrica en pacientes sensibles</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al fármaco</li>
        <li>Úlcera gástrica activa</li>
        <li>Niños menores de 2 años (según fármaco)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Precaución con otros fármacos irritantes gástricos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Utilizar junto con hidratación adecuada para mejorar la fluidez del moco</li>
        <li>Evitar combinación con antitusígenos en tos productiva</li>
        <li>Consultar con médico en caso de tos persistente o con sangre</li>
      </ul>
    </div>
  );
}

export default Expectorantes;

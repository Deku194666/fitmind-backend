

import React, { useEffect } from 'react';

function Mucoliticos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Mucolíticos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Mucolíticos</strong> son fármacos utilizados para disminuir la viscosidad del moco en las vías respiratorias,
         facilitando su eliminación y mejorando la expectoración. Son empleados principalmente en enfermedades respiratorias con 
         producción excesiva de secreciones, como bronquitis crónica y fibrosis quística.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Rompen los enlaces disulfuro en las mucoproteínas del moco, reduciendo su viscosidad.</li>
        <li>Favorecen la fluidificación del moco y facilitan su expulsión.</li>
        <li>Algunos tienen acción antioxidante y antiinflamatoria.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Bronquitis aguda y crónica con expectoración densa</li>
        <li>Fibrosis quística</li>
        <li>Bronquiectasias</li>
        <li>Neumonías con secreciones espesas</li>
        <li>Tos productiva con moco viscoso</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acetilcisteína</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>600 mg/día (oral)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antioxidante y mucolítico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Carbocisteína</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>750-1500 mg/día (oral)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Modula la secreción mucosa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bromhexina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8-16 mg cada 8 h (oral)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estimula la producción de moco menos viscoso</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Reacciones alérgicas (rash, prurito)</li>
        <li>Gastrointestinales: náuseas, vómitos, diarrea</li>
        <li>Broncoespasmo en asmáticos sensibles</li>
        <li>Mal sabor y olor en algunos preparados</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al fármaco</li>
        <li>Asma bronquial activa con broncoespasmo</li>
        <li>Úlcera gástrica activa (precaución con algunos mucolíticos)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Puede potenciar el efecto de algunos antibióticos por mejorar su penetración</li>
        <li>No debe mezclarse con antitusígenos (supresores de la tos) en tos productiva</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Uso indicado para facilitar la expectoración en secreciones densas</li>
        <li>Evitar uso concomitante con antitusígenos</li>
        <li>Monitorizar efectos secundarios en pacientes asmáticos</li>
      </ul>
    </div>
  );
}

export default Mucoliticos;



import React, { useEffect } from 'react';

function AntihistaminicosH2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antihistamínicos H2</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antihistamínicos H2</strong> son fármacos que bloquean los receptores H2 de histamina en las células parietales gástricas, reduciendo la secreción ácida. Aunque su uso principal es en el tratamiento de patologías digestivas, también se emplean en algunas situaciones alérgicas como parte del tratamiento complementario.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Bloqueo competitivo y reversible de los receptores H2 de histamina.</li>
        <li>Disminuyen la secreción de ácido gástrico basal y estimulada.</li>
        <li>Potencial efecto coadyuvante en reacciones alérgicas severas, junto con antihistamínicos H1.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Enfermedad por reflujo gastroesofágico (ERGE)</li>
        <li>Úlcera gástrica o duodenal</li>
        <li>Dispepsia funcional</li>
        <li>Profilaxis de úlceras por estrés en pacientes hospitalizados</li>
        <li>Reacciones alérgicas severas (uso complementario con antihistamínicos H1)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ranitidina*</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>150 mg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retirada del mercado en muchos países</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Famotidina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20–40 mg cada 12-24 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mejor tolerada que ranitidina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cimetidina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400–800 mg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Interacciones medicamentosas frecuentes</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Diarrea o estreñimiento</li>
        <li>Cefalea</li>
        <li>Mareos</li>
        <li>Confusión en ancianos (especialmente con cimetidina)</li>
        <li>Ginecomastia o impotencia (raro, con cimetidina)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al principio activo</li>
        <li>Precaución en insuficiencia renal o hepática</li>
        <li>No recomendados en embarazo sin indicación clara</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Cimetidina: inhibe el citocromo P450 → interfiere con warfarina, fenitoína, teofilina, etc.</li>
        <li>Reducción de absorción de medicamentos que requieren pH ácido (p. ej. ketoconazol)</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Famotidina es preferida por su perfil de seguridad e interacción favorable</li>
        <li>Evaluar función renal en tratamientos prolongados</li>
        <li>No son primera línea en alergias, pero útiles como complemento</li>
      </ul>
    </div>
  );
}

export default AntihistaminicosH2;

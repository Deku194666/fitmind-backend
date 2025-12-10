

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InhibidoresGPIIbIIIa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Inhibidores de la Glicoproteína IIb/IIIa</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Inhibidores de la Glicoproteína IIb/IIIa</strong> son potentes agentes antiagregantes plaquetarios utilizados en situaciones clínicas
        de alto riesgo trombótico, especialmente en el contexto de <strong>síndrome coronario agudo</strong> y <strong>intervenciones coronarias percutáneas (ICP)</strong>.
        Actúan bloqueando el receptor final común de la agregación plaquetaria, impidiendo la unión del fibrinógeno y la formación de trombos.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        La glicoproteína IIb/IIIa es un receptor ubicado en la superficie de las plaquetas que permite la unión cruzada de fibrinógeno entre plaquetas activadas.
        Su bloqueo impide la <strong>fase final de la agregación plaquetaria</strong>, proporcionando una potente inhibición de la trombosis arterial.
      </p>

      <p className="p14">💊 Fármacos Representativos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Abciximab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticuerpo monoclonal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloqueo irreversible. Vida media prolongada. Puede generar trombocitopenia.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Eptifibatide</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Péptido sintético</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acción reversible. Vida media corta. Requiere infusión continua.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tirofiban</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Molécula no peptídica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Acción reversible. Inicio rápido. Elimina por vía renal.</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Intervención coronaria percutánea (ICP) de alto riesgo con carga trombótica significativa.</li>
        <li>Síndrome coronario agudo sin elevación del ST (NSTE-ACS) con alto riesgo isquémico.</li>
        <li>Coadyuvante en pacientes con trombosis intraprocedimiento durante ICP.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hemorragias (mayor riesgo que con otros antiagregantes).</li>
        <li>Trombocitopenia (particularmente con abciximab).</li>
        <li>Reacciones alérgicas (raro).</li>
        <li>Dolor en el sitio de punción (por administración intravenosa).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Se administran exclusivamente por vía intravenosa en ambiente hospitalario.</li>
        <li>Requieren monitoreo estrecho de plaquetas y función renal.</li>
        <li>Usualmente combinados con aspirina y heparina durante ICP.</li>
        <li>Abciximab tiene efectos prolongados incluso después de suspender la infusión.</li>
        <li>Contraindicados en pacientes con hemorragia activa o antecedentes de sangrado reciente grave.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Inhibidores de la Glicoproteína IIb/IIIa</strong> representan una herramienta terapéutica eficaz en el manejo de eventos trombóticos agudos,
        aunque su uso se ha reducido con la aparición de otros agentes antiagregantes orales. Son especialmente valiosos en contextos
        intervencionistas seleccionados donde el riesgo trombótico es elevado y se requiere una inhibición plaquetaria potente e inmediata.
      </p>
    </div>
  );
}

export default InhibidoresGPIIbIIIa;

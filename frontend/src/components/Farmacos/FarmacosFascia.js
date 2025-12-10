

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FarmacosFascia() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Lesiones de la Fascia</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las lesiones de la fascia, como la fasciopatía plantar, son afecciones dolorosas frecuentes que afectan la biomecánica del aparato locomotor. Aunque el tratamiento principal es físico y biomecánico, existen opciones farmacológicas coadyuvantes para aliviar el dolor e inflamación, especialmente en fases agudas.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición de mediadores inflamatorios (prostaglandinas, citocinas).</li>
        <li>Modulación central y periférica del dolor.</li>
        <li>Estimulación de procesos regenerativos (suplementos coadyuvantes).</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Fasciopatía plantar (fascitis plantar crónica o aguda)</li>
        <li>Dolor miofascial</li>
        <li>Fasciosis con degeneración del tejido fascial</li>
        <li>Inflamación secundaria por sobrecarga biomecánica</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', marginLeft: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ibuprofeno</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400–600 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AINE</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Paracetamol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500–1000 mg cada 6–8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Analgésico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Corticoide (infiltración local)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis única o repetida bajo criterio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antiinflamatorio potente</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Suplementos con colágeno + vitamina C</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis diaria oral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Coadyuvante regenerativo</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Irritación gástrica (por AINEs)</li>
        <li>Toxicidad hepática con paracetamol en dosis altas</li>
        <li>Atrofia tisular o ruptura fascial con corticoides infiltrados repetidamente</li>
        <li>Intolerancia digestiva o alergias a suplementos</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Úlcera péptica activa (AINEs)</li>
        <li>Insuficiencia hepática (paracetamol)</li>
        <li>Infección local activa (contraindicada infiltración)</li>
        <li>Hipersensibilidad a alguno de los componentes</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con anticoagulantes (riesgo de sangrado con AINEs)</li>
        <li>Con otros hepatotóxicos (potencial toxicidad con paracetamol)</li>
        <li>Con corticosteroides orales (sumatoria de efectos inmunosupresores)</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Utilizar farmacoterapia como complemento a fisioterapia</li>
        <li>Reservar infiltraciones para casos rebeldes al tratamiento conservador</li>
        <li>Revisar siempre la causa biomecánica y modificar calzado o soporte plantar si es necesario</li>
        <li>Valorar uso de ortesis nocturnas y ejercicios de elongación</li>
      </ul>
    </div>
  );
}

export default FarmacosFascia;



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function OtrosAntiarritmicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Otros Antiarrítmicos: Adenosina y Digoxina</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Existen fármacos antiarrítmicos que no se clasifican dentro de las clases tradicionales de Vaughan Williams, pero desempeñan un papel importante
        en el tratamiento de ciertas arritmias. Entre ellos destacan la <strong>Adenosina</strong> y la <strong>Digoxina</strong>, que actúan principalmente sobre
        el nodo auriculoventricular (AV) o modulan el tono vagal.
      </p>

      <p className="p14">🔬 Fármacos Destacados</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Uso clínico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adenosina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Activa receptores A1 en el nodo AV, abriendo canales de potasio e inhibiendo AMPc, lo que reduce la conducción nodal.
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Taquicardia supraventricular paroxística (TSVP). Efecto muy rápido y de corta duración.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Digoxina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Inhibe la Na⁺/K⁺ ATPasa y aumenta el tono vagal, lo que reduce la conducción a través del nodo AV.
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Control de frecuencia en fibrilación auricular, especialmente en pacientes con insuficiencia cardíaca.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Adenosina:</strong> tratamiento agudo de taquicardias por reentrada nodal AV.</li>
        <li><strong>Digoxina:</strong> control de la respuesta ventricular en FA y flutter auricular en pacientes con disfunción sistólica.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Adenosina:</strong> rubor facial, disnea, dolor torácico transitorio, bloqueo AV, broncoespasmo.</li>
        <li><strong>Digoxina:</strong> náuseas, vómitos, visión amarilla (xantopsia), arritmias ventriculares, toxicidad digital (dosis-dependiente).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Adenosina debe administrarse en bolo intravenoso rápido, con monitoreo ECG continuo.</li>
        <li>Contraindicada la adenosina en asma grave y síndrome de WPW con FA.</li>
        <li>Digoxina tiene un margen terapéutico estrecho; requiere monitoreo de niveles plasmáticos.</li>
        <li>La función renal afecta la depuración de digoxina; ajustar dosis en ancianos y en ERC.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Digoxina + betabloqueadores o calcioantagonistas para control de FA (con precaución).</li>
        <li>Adenosina puede usarse junto a maniobras vagales en el manejo inicial de TSVP.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Adenosina y digoxina son herramientas útiles y específicas para el control de ciertas arritmias. Su empleo debe basarse en el tipo de arritmia,
        el perfil del paciente y las posibles interacciones o contraindicaciones, especialmente en contextos de insuficiencia cardíaca o disfunción renal.
      </p>
    </div>
  );
}

export default OtrosAntiarritmicos;

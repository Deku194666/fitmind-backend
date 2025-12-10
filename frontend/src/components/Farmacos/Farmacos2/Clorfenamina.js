

import React, { useEffect } from 'react';

function Clorfenamina() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">💊 Clorfenamina</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        La <strong>Clorfenamina</strong> (también conocida como clorfeniramina) es un antihistamínico de primera generación ampliamente utilizado para tratar síntomas alérgicos como rinitis, urticaria y conjuntivitis. Actúa bloqueando los receptores H<sub>1</sub> de histamina, lo que reduce la respuesta alérgica.
      </p>

      <p className="p14">🧪 Mecanismo de acción</p>
      <p className="p15">
        Inhibe de manera competitiva los receptores H<sub>1</sub> de histamina en las vías respiratorias, tracto gastrointestinal y vasos sanguíneos. Su acción también afecta el sistema nervioso central, lo que le confiere efectos sedantes y anticolinérgicos.
      </p>

      <p className="p14">📋 Indicaciones clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Rinitis alérgica</li>
        <li>Urticaria y prurito</li>
        <li>Dermatitis alérgica</li>
        <li>Conjuntivitis alérgica</li>
        <li>Alivio sintomático de resfriados comunes (en combinación)</li>
      </ul>

      <p className="p14">💊 Dosis habitual</p>
      <table style={{ width: '70%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Población</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Frecuencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adultos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 4-6 h (máx. 24 mg/día)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Niños 6-12 años</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 mg</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cada 6 h (máx. 12 mg/día)</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">📈 Farmacocinética</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Inicio de acción:</strong> 30 minutos</li>
        <li><strong>Duración:</strong> 4-6 horas</li>
        <li><strong>Vida media:</strong> 12-15 horas</li>
        <li><strong>Metabolismo:</strong> Hepático</li>
        <li><strong>Eliminación:</strong> Renal</li>
      </ul>

      <p className="p14">⚠️ Efectos adversos frecuentes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia, sedación</li>
        <li>Sequedad de boca</li>
        <li>Mareos</li>
        <li>Visión borrosa</li>
        <li>Estreñimiento</li>
        <li>Retención urinaria</li>
      </ul>

      <p className="p14">🚫 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al principio activo</li>
        <li>Niños menores de 2 años</li>
        <li>Glaucoma de ángulo cerrado</li>
        <li>Retención urinaria severa</li>
        <li>Uso concomitante con inhibidores de la MAO</li>
      </ul>

      <p className="p14">🔄 Interacciones relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Alcohol y sedantes: potencian somnolencia</li>
        <li>Anticolinérgicos: aumento de efectos adversos</li>
        <li>Inhibidores de la MAO: riesgo de crisis hipertensiva</li>
      </ul>

      <p className="p14">📌 Observaciones prácticas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Evitar conducir o manejar maquinaria durante su uso</li>
        <li>Usar con precaución en adultos mayores</li>
        <li>Alternativas más modernas (antihistamínicos de 2ª generación) pueden causar menos sedación</li>
        <li>Informar sobre posibles efectos anticolinérgicos</li>
      </ul>
    </div>
  );
}

export default Clorfenamina;

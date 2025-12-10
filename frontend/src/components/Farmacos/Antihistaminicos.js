

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import NavBarAntiHistaminicos from './NavBarAntiHistaminicos';
 
function Antihistaminicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarAntiHistaminicos/>

 
      <p className="p13"> Antihistamínicos</p>

      <p className="p14">📌 Introducción </p>
      <p className="p150">
        Los <strong>Antihistamínicos</strong> son medicamentos que bloquean los efectos de la histamina, una sustancia química involucrada en las reacciones alérgicas. Son ampliamente utilizados en el manejo de afecciones respiratorias alérgicas como la rinitis alérgica y el asma con componente atópico.
      </p>

      <p className="p14">🔬 Clasificación de Antihistamínicos</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antihistamínicos H1 (1ra generación)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Clorfenamina, Difenhidramina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean los receptores H1 de histamina en SNC y periferia</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antihistamínicos H1 (2da generación)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Loratadina, Cetirizina, Fexofenadina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean los receptores H1 con menor penetración en el SNC</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antihistamínicos H2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ranitidina (uso gástrico, actualmente limitado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores H2 en mucosa gástrica (no respiratorio)</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Rinitis alérgica estacional y perenne.</li>
        <li>Conjuntivitis alérgica.</li>
        <li>Urticaria y prurito asociado a alergias.</li>
        <li>Asma con componente alérgico (como terapia adyuvante).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>1ra generación:</strong> Somnolencia, sequedad de boca, visión borrosa.</li>
        <li><strong>2da generación:</strong> Generalmente bien tolerados, ocasionalmente cefalea o fatiga.</li>
        <li>Interacciones con alcohol u otros depresores del SNC (1ra generación).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Preferir antihistamínicos de 2da generación para uso prolongado por su menor sedación.</li>
        <li>En pacientes pediátricos o adultos mayores, utilizar con precaución los de 1ra generación.</li>
        <li>La administración nocturna puede reducir molestias diurnas si hay somnolencia.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Antihistamínicos + corticoides intranasales en rinitis alérgica persistente.</li>
        <li>Antihistamínicos + broncodilatadores en asma alérgica leve.</li>
        <li>Antihistamínicos + antileucotrienos como terapia adyuvante.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Antihistamínicos</strong>  son herramientas fundamentales en el manejo de alergias respiratorias. Su selección debe basarse en el perfil del paciente y la duración del tratamiento, buscando siempre minimizar efectos adversos sin comprometer su eficacia.
      </p>
    </div>
  );
}

export default Antihistaminicos;

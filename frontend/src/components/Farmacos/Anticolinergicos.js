

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Anticolinergicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Anticolinérgicos (Antagonistas Muscarínicos)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p15">
        Los <strong>Anticolinérgicos</strong>, también conocidos como antagonistas muscarínicos, son fármacos broncodilatadores 
        utilizados principalmente en el manejo de <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link> y, 
        en algunos casos, <Link to="/ecnt/asma">Asma</Link>. Bloquean los receptores muscarínicos del sistema parasimpático 
        en el músculo liso bronquial, reduciendo el tono vagal y favoreciendo la dilatación de las vías respiratorias.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Bloquean los receptores muscarínicos (M1, M2, M3) en el músculo liso bronquial.</li>
        <li>Inhiben la acción de la acetilcolina endógena.</li>
        <li>Disminuyen el tono vagal broncoconstrictor.</li>
        <li>Favorecen la broncodilatación sostenida.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link> leve a severa (tratamiento de mantenimiento)</li>
        <li><Link to="/ecnt/asma">Asma </Link>persistente (en combinación con otros broncodilatadores)</li>
        <li>Exacerbaciones agudas de EPOC y asma</li>
        <li>Broncoespasmo inducido por irritantes</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ipratropio (SAMA)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>20-40 mcg cada 6-8 h (inhalado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-8 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tiotropio (LAMA)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>18 mcg cada 24 h (inhalado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>≥ 24 horas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aclidinio (LAMA)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400 mcg cada 12 h (inhalado)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>12 horas</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li><strong>Sequedad bucal</strong></li>
        <li><strong>Tos o irritación faríngea</strong></li>
        <li><strong>Retención urinaria</strong> (especial precaución en varones con HBP)</li>
        <li><strong>Visión borrosa</strong> si hay contacto ocular accidental</li>
        <li><strong>Taquicardia</strong> o palpitaciones (raro)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al fármaco o excipientes</li>
        <li>Glaucoma de ángulo cerrado (precaución)</li>
        <li>Hiperplasia prostática benigna no controlada</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Con otros anticolinérgicos: aumento de efectos adversos</li>
        <li>Con β2 agonistas: efecto broncodilatador sinérgico</li>
        <li>Con fármacos antimuscarínicos sistémicos: riesgo de retención urinaria</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p17" style={{ listStyleType: 'disc' }}>
        <li>Preferir LAMA en EPOC moderado-severo como tratamiento de base</li>
        <li>Combinar con LABA si los síntomas persisten</li>
        <li>Evitar contacto con los ojos (puede causar midriasis y visión borrosa)</li>
        <li>Revisar antecedentes de glaucoma o retención urinaria antes de indicar</li>
      </ul>
    </div>
  );
}

export default Anticolinergicos;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CorticoidesInhalados() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Corticoides Inhalados (CI)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Corticoides Inhalados</strong> son medicamentos antiinflamatorios esenciales en el tratamiento del <Link to="/ecnt/asma">Asma</Link> y de la <Link to="/ecnt/enfermedadpulmonarobstructivacronica">EPOC</Link>. Reducen la inflamación de la vía aérea, mejoran los síntomas y disminuyen las exacerbaciones. Son el pilar del tratamiento controlador del asma persistente.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhiben la producción de mediadores inflamatorios.</li>
        <li>Reducen la infiltración de eosinófilos, mastocitos y células T.</li>
        <li>Disminuyen la hiperreactividad bronquial.</li>
        <li>Mejoran la función pulmonar y reducen los síntomas diarios.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Asma persistente (leve, moderada o severa)</li>
        <li>EPOC con fenotipo inflamatorio o exacerbador frecuente</li>
        <li>Rinitis alérgica (como spray nasal)</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Presentación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Beclometasona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100-400 mcg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhalador presurizado (pMDI)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/farmacos2/budesonida"> Budesonida  </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>200-800 mcg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Turbuhaler o nebulización</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fluticasona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100-500 mcg cada 12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diskus o pMDI</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Candidiasis orofaríngea</strong>: prevenir con enjuague bucal post-inhalación</li>
        <li><strong>Dolor de garganta o disfonía</strong></li>
        <li><strong>Tos irritativa</strong> después de la inhalación</li>
        <li>En altas dosis: supresión del eje HHA, adelgazamiento óseo, cataratas</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al principio activo o excipientes</li>
        <li>Infecciones fúngicas activas de la vía aérea</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con inhibidores del CYP3A4 (ritonavir, ketoconazol): aumento del riesgo de efectos sistémicos</li>
        <li>Uso concomitante con otros esteroides sistémicos → potencia efectos adversos</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Se deben usar de forma regular, no solo ante síntomas</li>
        <li>Indicar enjuague bucal post-uso para prevenir micosis</li>
        <li>Ajustar dosis según control clínico y función pulmonar</li>
        <li>No suspender bruscamente si se usaron dosis altas prolongadas</li>
      </ul>
    </div>
  );
}

export default CorticoidesInhalados;

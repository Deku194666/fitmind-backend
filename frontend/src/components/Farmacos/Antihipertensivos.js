import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarAntihipertensivos from './NavBarAntihipertensivos';

function Antihipertensivos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        <NavBarAntihipertensivos/>

      <p className="p13">Fármacos Antihipertensivos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Fármacos Antihipertensivos</strong> son medicamentos diseñados para reducir la presión arterial en pacientes con
         <Link to="/ecnt/hipertension"> Hipertensión Arterial</Link>. Su uso adecuado disminuye significativamente el riesgo de complicaciones cardiovasculares como <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link>,
         <Link to="/ecnt/acv"> Accidente Cerebro Vascular</Link>, y <Link to="/ecnt/erc"> Enfermedad Renal Crónica</Link>.
      </p>

      <p className="p14">🔬 Clasificación de Antihipertensivos</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IECA</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enalapril, Ramipril</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben la enzima convertidora de angiotensina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ARA II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Losartán, Valsartán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores AT1 de angiotensina II</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Calcioantagonistas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amlodipino, Nifedipino</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben entrada de calcio en músculo liso vascular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Betabloqueadores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Atenolol, Metoprolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean receptores β1 cardíacos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diuréticos tiazídicos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hidroclorotiazida, Indapamida</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminuyen el volumen intravascular</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><Link to="/ecnt/hipertension"> Hipertensión Arterial</Link> esencial (primaria).</li>
        <li>Hipertensión secundaria en combinación con manejo etiológico.</li>
        <li>Prevención secundaria en pacientes con riesgo cardiovascular.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li> <strong> <Link to="/farmacos/iecas" > IECAs</Link></strong>: Tos seca, hiperpotasemia, angioedema.</li>
        <li> <strong> <Link to="/farmacos/araii" > ARA II</Link></strong>: Hiperpotasemia, menor incidencia de tos.</li>
        <li> <strong> <Link to="/farmacos/bloqueadorescanalesca"> Calcioantagonistas</Link></strong>: Edema maleolar, cefalea.</li>
        <li> <strong> <Link to="/farmacos/betabloqueadores"> BetaBloqueadores</Link>: </strong>  Bradicardia, fatiga, disfunción sexual.</li>
        <li> <strong> <Link to="/farmacos/diureticos"> Diureticos</Link></strong>:  Hipokalemia, Hiponatremia, Hiperuricemia.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>En pacientes jóvenes: preferir IECA/ARA-II o betabloqueadores.</li>
        <li>En adultos mayores: considerar calcioantagonistas o tiazidas.</li>
        <li>En pacientes con diabetes o proteinuria: IECA o ARA-II de elección.</li>
        <li>Evitar combinaciones IECA + ARA-II por riesgo de insuficiencia renal.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>IECA + diurético tiazídico (ej: enalapril + hidroclorotiazida).</li>
        <li>ARA II + calcioantagonista (ej: valsartán + amlodipino).</li>
        <li>IECA o ARA II + betabloqueador: útil en hipertensión con insuficiencia cardíaca.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong> Fármacos Antihipertensivos </strong>  son pilares fundamentales en el manejo de la hipertensión arterial. Su elección debe individualizarse según edad, comorbilidades y tolerancia, priorizando siempre la prevención de complicaciones cardiovasculares a largo plazo.
      </p>
    </div>
  );
}

export default Antihipertensivos;


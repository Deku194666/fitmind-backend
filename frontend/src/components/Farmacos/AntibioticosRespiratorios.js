

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarAntibioticosRespiratorios from './NavBarAntibioticosRespiratorios';
 
function AntibioticosRespiratorios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarAntibioticosRespiratorios/>

 
      <p className="p13">Antibióticos en Patologías Respiratorias</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        En las infecciones del tracto respiratorio, los <strong>Antibióticos Respiratorios </strong> se utilizan cuando existe una etiología bacteriana confirmada o altamente sospechosa. La elección depende del sitio de infección, comorbilidades, resistencia local y características del paciente.
      </p>

      <p className="p14">🔬 Clasificación y Ejemplos</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones comunes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Penicilinas + inhibidor de β-lactamasas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/amoxicilina"> Amoxicilina  </Link> /ácido clavulánico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sinusitis, otitis media, bronquitis aguda, neumonía leve a moderada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Macrólidos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Azitromicina, Claritromicina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neumonía atípica, bronquitis en alérgicos a penicilina</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cefalosporinas de 2° y 3° generación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cefuroxima, Ceftriaxona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neumonías comunitarias o nosocomiales, sinusitis severa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fluoroquinolonas respiratorias</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Levofloxacino, Moxifloxacino</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neumonía complicada, exacerbación de EPOC, resistencia a otros fármacos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tetraciclinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Doxiciclina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Neumonía atípica, bronquitis en pacientes con alergia a penicilina</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Neumonía adquirida en la comunidad (NAC).</li>
        <li>Bronquitis aguda bacteriana o exacerbaciones de EPOC.</li>
        <li>Sinusitis bacteriana aguda.</li>
        <li>Otitis media aguda en pediatría.</li>
        <li>Infecciones nosocomiales en pacientes hospitalizados.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Amoxicilina/clavulánico:</strong> Diarrea, exantemas, náuseas.</li>
        <li><strong>Macrólidos:</strong> Prolongación QT, malestar gastrointestinal.</li>
        <li><strong>Cefalosporinas:</strong> Alergias cruzadas, alteraciones digestivas.</li>
        <li><strong>Fluoroquinolonas:</strong> Tendinopatías, prolongación QT, fototoxicidad.</li>
        <li><strong>Doxiciclina:</strong> Fotosensibilidad, molestias digestivas, esofagitis.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar el uso innecesario para prevenir resistencia antimicrobiana.</li>
        <li>Considerar comorbilidades (insuficiencia renal, hepática) en la elección.</li>
        <li>Valorar cultivo y antibiograma en infecciones recurrentes o severas.</li>
        <li>Revisar antecedentes de alergias a betalactámicos y otros grupos.</li>
      </ul>

      <p className="p14">📦 Combinaciones Habituales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Amoxicilina/clavulánico + macrólido en neumonías mixtas.</li>
        <li>Ceftriaxona + azitromicina en hospitalizados con NAC severa.</li>
        <li>Levofloxacino solo en pacientes con múltiples alergias o resistencia previa.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Antibióticos Respiratorios </strong> deben utilizarse de forma juiciosa, según evidencia clínica y microbiológica. Una prescripción racional permite un tratamiento eficaz y reduce el riesgo de resistencia antimicrobiana.
      </p>
    </div>
  );
}

export default AntibioticosRespiratorios;

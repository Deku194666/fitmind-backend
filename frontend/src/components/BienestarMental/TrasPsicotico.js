

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarTrasPsico from './NavBarTrasPsico';

function TrasPsicotico() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        <NavBarTrasPsico />
      <p className='p13'> Trastornos Psicóticos </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'>  
        Los trastornos psicóticos son condiciones graves que afectan la capacidad de pensar con claridad, gestionar emociones y percibir la realidad. Se caracterizan por la presencia de <strong>psicosis</strong>: síntomas como delirios, alucinaciones y pensamiento desorganizado. A diferencia de lo que se cree popularmente, no implican "doble personalidad", sino una ruptura con la realidad que requiere intervención multidisciplinaria.
      </p>
        
      <p className='p16'> 📌 Esquizofrenia </p>
      <p className='p150'>
        La esquizofrenia es el trastorno psicótico más conocido, con una prevalencia del <strong>0.3-0.7%</strong> mundial. Afecta la cognición, las emociones y la conducta, generalmente apareciendo entre los <strong>16 y 30 años</strong>.
      </p>

      <p className='p150'> <strong>Primeros signos de alerta:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Aislamiento social progresivo.</li>
        <li>Deterioro en la higiene personal.</li>
        <li>Habla desorganizada o incoherente.</li>
        <li>Creencias extrañas no compartidas por su cultura (ej.: "mis pensamientos se transmiten por radio").</li>
        <li>Percepción alterada (escuchar voces o ver sombras inexistentes).</li>
      </ul>

      <p className='p150'> <strong>Entrenamiento cognitivo:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Terapia Cognitivo-Conductual para Psicosis (TCCP):</strong> Reestructuración de creencias delirantes mediante pruebas de realidad.</li>
        <li><strong>Remediación cognitiva:</strong> Ejercicios para mejorar memoria, atención y función ejecutiva.</li>
        <li><strong>Psicoeducación grupal:</strong> Enseñar a identificar pródromos (señales tempranas de recaída).</li>
      </ul>

      <p className='p16'> 📌 Trastorno Delirante </p>
      <p className='p150'>
        El trastorno delirante se caracteriza por <strong>delirios no extraños</strong> (situaciones plausibles pero falsas) que persisten ≥1 mes, sin alucinaciones prominentes. Afecta al <strong>0.2%</strong> de la población, con igual frecuencia en hombres y mujeres.
      </p>

      <p className='p150'> <strong>Tipos de delirios:</strong> </p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Característica </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Ejemplo </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Persecutorio </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Creencia de ser espiado/atacado </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> "Mis vecinos envenenan mi comida" </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Grandiosidad </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Autoimagen exagerada </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> "Tengo poderes telepáticos" </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Celotípico </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Infidelidad sin pruebas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> "Mi pareja usa códigos secretos con el cartero" </td>
          </tr>
        </tbody>
      </table>

      <p className='p150'> <strong>Estrategias familiares:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Comunicación no confrontativa:</strong> Evitar discusiones directas sobre el delirio ("¿Qué te hace pensar eso?" vs. "¡Eso es falso!").</li>
        <li><strong>Manejo de crisis:</strong> Contactar con psiquiatría si hay agitación o riesgo de auto/heteroagresión.</li>
        <li><strong>Reducción de estrés:</strong> Mantener rutinas predecibles y ambientes calmados.</li>
        <li><strong>Grupos de apoyo:</strong> Organizaciones como FEAFES (España) o NAMI (EE.UU.).</li>
      </ul>

      <p className='p14'> 📌 Tratamientos Clave </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Antipsicóticos:</strong> Risperidona, Olanzapina (controlan síntomas positivos como alucinaciones).</li>
        <li><strong>Terapia psicosocial:</strong> Entrenamiento en habilidades sociales y laborales.</li>
        <li><strong>Intervenciones familiares:</strong> Mejoran la adherencia al tratamiento y reducen recaídas.</li>
      </ul>
    </div>
  );
}

export default TrasPsicotico;
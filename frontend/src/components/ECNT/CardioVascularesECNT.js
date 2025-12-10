

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../ECNT/CardioVascularesECNT.css';

function CardiovascularesECNT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">


      <p className='p13'> Enfermedades Cardiovasculares </p>

      <p className='p14'> 📌 Introducción</p>
      <p className='p150'>
        Las <strong> Enfermedades Cardiovasculares (ECV) </strong>  son la principal causa de muerte a nivel mundial. Afectan al corazón y vasos sanguíneos, 
        y pueden manifestarse como <Link to="/ecnt/iam">Infarto Agudo al Miocardio</Link>,  
        <Link to="/ecnt/acv"> Accidente Cerebro Vascular</Link>, <Link to="/ecnt/arritmias"> Arritmias </Link>e
        <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca</Link>, entre otras. Están fuertemente relacionadas con factores de riesgo como 
        <Link to="/ecnt/hipertension"> Hipertensión Arterial</Link>, <Link to="/ecnt/dislipidemia"> Dislipidemia</Link>, 
        Tabaquismo, <Link to="/ecnt/diabetes">Diabetes Mellitus </Link>  y <Link to="/ecnt/obesidad">Obesidad.</Link> </p> 

      <p className='p16'> 📌 <Link to="/ecnt/iam">Infarto Agudo al Miocardio (IAM) </Link> </p>
      <p className='p150'>
        Es la obstrucción súbita de una arteria coronaria, lo que causa isquemia y necrosis del músculo cardíaco. Es una emergencia médica. 
        Síntomas típicos: dolor torácico opresivo, irradiación a brazo izquierdo o mandíbula, disnea, diaforesis.
      </p>

      <p className='p150'> <strong>  Diagnóstico </strong>  <Link to="/ecnt/iam">IAM: </Link>  </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>ECG:</strong> Elevación del Segmento ST</li>
        <li><strong>Troponinas:</strong> Elevadas</li>
        <li><strong>Angiografía coronaria:</strong> Confirmación de obstrucción</li>
      </ul>

      <p className='p16'> 📌 <Link to="/ecnt/arritmias"> Arritmias </Link>  </p>
      <p className='p150'>
        Alteraciones del ritmo cardíaco que pueden ser <strong>Bradicardias</strong>, <strong>Taquicardias</strong> o <strong>Fibrilaciones</strong>. Pueden causar <strong> Síncope</strong>, palpitaciones o incluso muerte súbita.
      </p>

      <p className='p150'><strong>Tipos comunes:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>FA (Fibrilación Auricular):</strong> Irregularidad auricular frecuente en ancianos</li>
        <li><strong>TV (Taquicardia Ventricular):</strong> Potencialmente mortal</li>
        <li><strong>BAV completo:</strong> Requiere marcapasos</li>
      </ul>

      <p className='p16'> 📌 <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca (IC)</Link> </p>
      <p className='p150'>
        Condición crónica donde el corazón no puede bombear adecuadamente. Síntomas: disnea, fatiga, edemas en extremidades, ortopnea. Se clasifica según la fracción de eyección (conservada o reducida).
      </p>

      <p className='p14'> 📌 Herramientas Diagnósticas</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Estudio </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Hallazgos Clave </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> ECG </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ritmo, lesiones isquémicas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Arritmias, elevación ST </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ecocardiograma </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Función ventricular </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fracción de eyección, dilatación </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Angiografía </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación coronaria </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Obstrucciones, lesiones </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Tratamiento</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Patología </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Manejo </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Eficacia </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/iam">IAM </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Angioplastía + antiplaquetarios </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducción de mortalidad mayor a 50% si en 90 min </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/arritmias"> Arritmias </Link> </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antiarrítmicos / marcapasos / desfibrilador </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mejora calidad de vida y sobrevida </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/insuficienciacardiaca"> Insuficiencia Cardiaca</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> IECA + BB + diuréticos + dieta </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducción de síntomas y hospitalizaciones </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>No fumar:</strong> Principal factor modificable</li>
        <li><strong>Dieta saludable:</strong> Baja en grasas saturadas y sodio</li>
        <li><strong>Ejercicio regular:</strong> Al menos 150 min/semana</li>
        <li><strong>Control de presión arterial y colesterol</strong></li>
        <li><strong>Chequeos médicos regulares</strong></li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las <strong> Enfermedades cardiovasculares </strong> requieren una <strong>detección precoz</strong> y <strong>tratamiento integral</strong>. 
        La educación en salud y el control de factores de riesgo son esenciales para disminuir su impacto. La atención oportuna en  
        <Link to="/ecnt/iam"> IAM</Link>  y <Link to="/ecnt/arritmias"> Arritmias </Link> puede salvar vidas.
      </p>

    </div>
  );
}

export default CardiovascularesECNT;

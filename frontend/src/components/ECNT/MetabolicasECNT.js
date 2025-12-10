

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function MetabolicasECNT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
   

      <p className='p13'> Enfermedades Metabólicas Crónicas </p>

      <p className='p14'> 📌 Introducción</p>
      <p className='p150'>
        Las <strong>  Enfermedades Metabólicas Crónicas </strong> afectan procesos bioquímicos fundamentales como el metabolismo de la 
        glucosa, los lípidos o las hormonas tiroideas. Las más frecuentes son la <Link to="/ecnt/diabetes">Diabetes Mellitus Tipo II</Link>, el <strong> Síndrome Metabólico</strong> y el <strong>  Hipotiroidismo. </strong> Su detección precoz y tratamiento son claves para prevenir complicaciones.
      </p>

      <p className='p16'> 📌 <Link to="/ecnt/diabetes"> Diabetes Mellitus  Tipo II (DMII) </Link>  </p>
      <p className='p150'>
        Enfermedad caracterizada por hiperglicemia crónica secundaria a resistencia a la insulina y disfunción progresiva de las células 
        beta pancreáticas. Se asocia fuertemente a obesidad, sedentarismo y factores genéticos.
      </p>

      <p className='p150'><strong>Diagnóstico <Link to="/ecnt/diabetes">DMII:</Link></strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Glicemia en ayunas ≥ 126 mg/dL</li>
        <li>Hemoglobina A1c ≥ 6.5%</li>
        <li>Test de tolerancia oral a la glucosa ≥ 200 mg/dL (2 horas post carga)</li>
        <li>Síntomas clásicos + glicemia aleatoria ≥ 200 mg/dL</li>
      </ul>

      <p className='p16'> 📌 Síndrome Metabólico</p>
      <p className='p150'>
        Conjunto de factores de riesgo que aumentan la probabilidad de <Link to="/ecnt/cardiovascularesecnt"> Enfermedades CardioVasculares </Link> y <Link to="/ecnt/diabetes">Diabetes Mellitus.</Link> Se define por la presencia 
        de al menos 3 de los siguientes criterios:
      </p>

      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Obesidad abdominal (cintura &gt;102 cm en hombres, &gt;88 cm en mujeres)</li>
        <li>Triglicéridos &gt; 150 mg/dL</li>
        <li>HDL &lt; 40 mg/dL (hombres) o &lt; 50 mg/dL (mujeres)</li>
        <li>Presión arterial ≥ 130/85 mmHg</li>
        <li>Glicemia en ayunas ≥ 100 mg/dL</li>
      </ul>

      <p className='p16'> 📌 Hipotiroidismo</p>
      <p className='p150'>
        Trastorno endocrino por déficit de hormonas tiroideas. Puede ser primario (fallo tiroideo) o secundario (hipofisario). Produce enlentecimiento del metabolismo, fatiga, intolerancia al frío, aumento de peso y constipación.
      </p>

      <p className='p150'><strong>Diagnóstico Hipotiroidismo:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>TSH elevada + T4 libre baja (hipotiroidismo primario)</li>
        <li>TSH baja o normal + T4 libre baja (hipotiroidismo central)</li>
        <li>Anticuerpos antitiroideos (+ en tiroiditis de Hashimoto)</li>
      </ul>

      <p className='p14'> 📊 Comparación de Parámetros</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Patología </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba Principal </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Valor Umbral </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/diabetes">Diabetes Mellitus Tipo II  </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Glicemia ayunas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> ≥ 126 mg/dL </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Síndrome metabólico </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Cintura abdominal </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> &gt;102 cm (H) / &gt;88 cm (M) </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hipotiroidismo </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> TSH </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Elevada (&gt; 4.5 mUI/L aprox.) </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 💊 Tratamiento</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong><Link to="/ecnt/diabetes">Diabetes Mellitus Tipo II: </Link> </strong> Cambios en el estilo de vida + metformina (primera línea), otros antidiabéticos según perfil (SGLT2, GLP-1, insulina)</li>
        <li><strong>Síndrome metabólico:</strong> Dieta, ejercicio, control de factores individuales (hipertensión, dislipidemia, obesidad)</li>
        <li><strong>Hipotiroidismo:</strong> Levotiroxina oral con ajuste individualizado según TSH</li>
      </ul>

      <p className='p14'> 🌿 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Actividad física regular</li>
        <li>Dieta balanceada, reducida en azúcares simples y grasas saturadas</li>
        <li>Control de peso corporal</li>
        <li>Chequeos preventivos anuales</li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las <strong>  Enfermedades Metabólicas Crónicas </strong> son altamente prevalentes y prevenibles. El abordaje debe centrarse en la modificación de hábitos, 
        la detección precoz y el tratamiento oportuno para evitar complicaciones cardiovasculares, renales o neurológicas.
      </p>
    </div>
  );
}

export default MetabolicasECNT;

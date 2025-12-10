

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Gota() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Enfermedad por Gota (Artritis por Cristales)</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La gota es una enfermedad metabólica caracterizada por <strong>depósitos de cristales de urato monosódico</strong> en articulaciones y tejidos, afectando al <strong>1-2% de la población adulta</strong> en países desarrollados. 
        Es la artritis inflamatoria más común en hombres mayores de 40 años (ratio 9:1 vs mujeres) y su incidencia ha aumentado un 50% en las últimas décadas debido a cambios en la dieta y aumento de la obesidad.
      </p>

      <p className='p14'>Fisiopatología Clave 🦠</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Hiperuricemia</strong>: Niveles séricos de ácido úrico mayor a 6.8 mg/dL (punto de saturación)
        </li>
        <li>
          <strong>Formación de cristales</strong>: Precipitación de urato monosódico en tejidos
        </li>
        <li>
          <strong>Respuesta inflamatoria</strong>: Activación del inflamasoma NLRP3 por cristales → liberación de IL-1β
        </li>
        <li>
          <strong>Tofos</strong>: Acumulaciones macroscópicas de cristales (en enfermedad crónica)
        </li>
      </ul>

      <p className='p14'>Clasificación Clínica 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Hiperuricemia asintomática</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ácido úrico elevado sin síntomas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Años (solo 20% desarrolla gota)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Crisis aguda de gota</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artritis monoarticular dolorosa (1° MTP en 50%)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>7-10 días (resolución espontánea)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Gota intercrítica</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Períodos asintomáticos entre crisis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Meses-años</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Gota tofácea crónica</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tofos, artropatía destructiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>mayor a 10 años sin tratamiento</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Factores de Riesgo 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Genéticos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Defectos en transportadores de urato (SLC2A9, ABCG2)</li>
            <li>Historia familiar (30% de casos)</li>
          </ul>
        </li>
        <li><strong>Adquiridos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Obesidad (IMC mayor a 30)</li>
            <li>Dieta rica en purinas (carnes rojas, mariscos)</li>
            <li>Consumo de alcohol (especialmente cerveza)</li>
            <li>Fármacos (diuréticos tiazídicos, ciclosporina)</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Criterios ACR/EULAR 2015</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Puntaje ≥8/23</strong> confirma diagnóstico</li>
        <li><strong>Componentes</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Localización articular (1° MTP = +2.5 puntos)</li>
            <li>Características clínicas (eritema, incapacidad de carga)</li>
            <li>Laboratorio (hiperuricemia, análisis de líquido sinovial)</li>
            <li>Imágenes (detección de cristales, erosiones)</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>2. Estudios Clave</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Utilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/lab">Ácido úrico sérico</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>mayor a 6.8 mg/dL (aunque puede ser normal durante crisis)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Screening, seguimiento</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artrocentesis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cristales negativamente birrefringentes en microscopía polarizada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gold standard diagnóstico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Erosiones "en sacabocados", margen sobresaliente</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación daño crónico</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Signo del doble contorno, agregados cristalinos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diagnóstico precoz</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento de Crisis Aguda 💊</p>
      <p className='p16'>Opciones farmacológicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>AINEs</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Indometacina 50mg c/8h x 2d, luego 25mg c/8h</li>
            <li>Naproxeno 500mg c/12h x 5-7d</li>
            <li>Eficacia similar a colchicina (inicio en primeras 24h)</li>
          </ul>
        </li>
        <li><strong>Colchicina</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Dosis baja (1.2mg inicial + 0.6mg 1h después)</li>
            <li>Efectos adversos GI limitan su uso</li>
          </ul>
        </li>
        <li><strong>Corticosteroides</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Prednisona 30-35mg/d x 5d (oral)</li>
            <li>Metilprednisolona 40-80mg IM (1 dosis)</li>
            <li>Alternativa para pacientes con contraindicaciones a AINEs</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Hipouricemiante Crónico ⏳</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>≥2 crisis anuales</li>
        <li>Presencia de tofos</li>
        <li>Artropatía gotosa crónica</li>
        <li>Nefrolitiasis por ácido úrico</li>
      </ul>

      <p className='p16'>Fármacos:</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Medicamento</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alopurinol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidor de xantina oxidasa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>100-800 mg/d (ajustar por función renal)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Febuxostat</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhibidor selectivo de xantina oxidasa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>40-80 mg/d (no requiere ajuste renal)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Probenecid</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Uricosúrico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500mg-2g/d en 2 dosis (contraindicado si clearance menor a 50ml/min)</td>
          </tr>
        </tbody>
      </table>
      <p className='p15'><strong>Objetivo terapéutico:</strong> Ácido úrico menor a 6 mg/dL (menor a 5 mg/dL en gota tofácea)</p>

      <p className='p14'>Manejo No Farmacológico 🥗</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Modificaciones dietéticas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Limitar carnes rojas, mariscos, alcohol</li>
            <li>Aumentar lácteos bajos en grasa, café</li>
            <li>Hidratación adecuada (mayor a 2L agua/día)</li>
          </ul>
        </li>
        <li><strong>Control de comorbilidades</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reducción de peso (IMC menor a 25)</li>
            <li>Manejo de HTA, síndrome metabólico</li>
          </ul>
        </li>
        <li><strong>Educación al paciente</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reconocimiento síntomas prodrómicos</li>
            <li>Adherencia a tratamiento crónico</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Artropatía gotosa crónica</strong>: Destrucción articular irreversible</li>
        <li><strong>Nefropatía por uratos</strong>: Insuficiencia renal crónica</li>
        <li><strong>Litiasis renal</strong>: 20% de pacientes con gota</li>
        <li><strong>Infección de tofos</strong>: Riesgo de osteomielitis</li>
      </ul>

      <p className='p14'>Pronóstico 🔮</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Con tratamiento adecuado</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Eliminación completa de crisis en 90% casos</li>
            <li>Resolución de tofos en 3-5 años</li>
          </ul>
        </li>
        <li><strong>Sin tratamiento</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Progresión a gota tofácea en mayor a 10 años</li>
            <li>Daño articular permanente</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La gota es una enfermedad <strong>crónica pero altamente tratable</strong> que requiere manejo en dos fases: tratamiento antiinflamatorio agudo y terapia hipouricemiante crónica. 
        El diagnóstico preciso mediante identificación de cristales es esencial para diferenciarla de otras artropatías. 
        El control estricto de los niveles de ácido úrico (menor a 6 mg/dL) puede eliminar las crisis y prevenir las complicaciones a largo plazo, mejorando significativamente la calidad de vida de los pacientes.
      </p>
    </div>
  );
}

export default Gota;
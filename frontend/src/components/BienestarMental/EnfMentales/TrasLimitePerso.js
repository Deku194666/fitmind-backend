

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function TrasLimitePerso () {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'> Trastorno Límite de Personalidad (TLP) </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        El TLP es un trastorno de personalidad que afecta aproximadamente al <strong>1.6% de la población general</strong>, con mayor prevalencia en mujeres (3:1) según la OMS (2023). Se caracteriza por un patrón persistente de <strong>inestabilidad emocional</strong>, <strong>relaciones interpersonales intensas</strong>, <strong>autoimagen distorsionada</strong> y <strong>conductas impulsivas</strong>. El 75% de los pacientes presentan conductas autolesivas y el 10% llegan al suicidio.
      </p>
        
      <p className='p14'> 🧠 Criterios Diagnósticos (DSM-5)</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Esfuerzos frenéticos para evitar el abandono</strong> (real o imaginario)</li>
        <li> <strong>Relaciones inestables e intensas</strong> (idealización/devaluación)</li>
        <li> <strong>Alteración de identidad</strong>: Autoimagen marcadamente inestable</li>
        <li> <strong>Impulsividad</strong> en áreas autodestructivas (gastos, sexo, sustancias)</li>
        <li> <strong>Comportamientos suicidas recurrentes</strong> o autolesiones</li>
        <li> <strong>Inestabilidad afectiva</strong> por reactividad del estado de ánimo</li>
        <li> <strong>Sentimientos crónicos de vacío</strong></li>
        <li> <strong>Ira inapropiada</strong> o dificultades para controlarla</li>
        <li> <strong>Ideación paranoide transitoria</strong> o síntomas disociativos</li>
      </ul>

      <p className='p14'> 🧬 Bases Neurobiológicas</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>Amígdala hiperreactiva:</strong> Respuesta emocional exagerada</li>
        <li> <strong>Corteza prefrontal hipofuncionante:</strong> Dificultad en regulación emocional</li>
        <li> <strong>Desequilibrio serotoninérgico:</strong> Relacionado con impulsividad</li>
        <li> <strong>Reducción volumen hipocampo:</strong> Memoria emocional alterada</li>
      </ul>

      <p className='p14'> 📌 Subtipos Clínicos</p>

<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Características </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prevalencia </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TLP impulsivo </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Conductas temerarias, búsqueda de sensaciones </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 40% de casos </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TLP petulante </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hostilidad, negativismo, resistencia a la autoridad </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 25% de casos </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> TLP autodestructivo </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Autocastigo, sentimiento de indignidad </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 35% de casos </td>
    </tr>
  </tbody>
</table>

      <p className='p14'> 🚨 Factores de Riesgo</p>
      <ul className='p17' style={{ listStyleType: 'disc'}} >
        <li>Historia de abuso o negligencia en la infancia (presente en 70% de casos)</li>
        <li>Familiares de primer grado con TLP o trastornos del estado de ánimo</li>
        <li>Invalidez emocional durante el desarrollo</li>
        <li>Separaciones tempranas o pérdidas traumáticas</li>
        <li>Disregulación emocional en el entorno familiar</li>
      </ul>

      <p className='p14'> 🩺 Evaluación Diagnóstica</p>
      <p className='p16'> 1. Herramientas Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>DIB-R:</strong> Entrevista Diagnóstica para Bordeline</li>
        <li><strong>MSI-BPD:</strong> Cuestionario de screening de 10 ítems</li>
        <li><strong>SCID-II:</strong> Entrevista clínica estructurada</li>
      </ul>

      <p className='p16'> 2. Diagnóstico Diferencial:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Trastorno bipolar:</strong> Episodios anímicos más prolongados</li>
        <li><strong>Depresión mayor:</strong> Sin inestabilidad interpersonal característica</li>
        <li><strong>Trastorno de identidad disociativo:</strong> Pérdida de continuidad identitaria</li>
      </ul>

      <p className='p14'> 💡 Intervenciones Basadas en Evidencia</p>
      <p className='p16'> 🔹 Terapia Dialéctico-Conductual (DBT):</p>
      
<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Módulo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Habilidades </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Objetivo </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mindfulness </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Observar, describir, participar </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducir juicios, vivir el presente </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tolerancia al malestar </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> STOP, auto-calmarse, distracción </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Manejar crisis sin empeorarlas </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Regulación emocional </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> ABC, acción opuesta </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Modular intensidad emocional </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Efectividad interpersonal </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> DEAR MAN, GIVE, FAST </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Relaciones equilibradas </td>
    </tr>
  </tbody>
</table>

      <p className='p16'> 🔹 Otras Terapias Eficaces:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Terapia Basada en Mentalización:</strong> Mejorar capacidad de entender estados mentales propios y ajenos</li>
        <li><strong>Terapia de Esquemas:</strong> Trabajar modos desadaptativos tempranos</li>
        <li><strong>Terapia Focalizada en la Transferencia:</strong> Analizar patrones relacionales en la terapia</li>
      </ul>

      <p className='p14'> 🌱 Estrategias de Autoregulación</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Técnica TIPP:</strong> Temperatura (agua fría), Intensa actividad, Respiración progresiva, Relajación muscular</li>
        <li><strong>Diario de emociones:</strong> Registrar desencadenantes, intensidad (0-100) y respuesta</li>
        <li><strong>Kit de crisis:</strong> Objetos sensoriales, fotos reconfortantes, lista de contactos de apoyo</li>
        <li><strong>Escala de angustia:</strong> Auto-monitoreo del 1-10 con estrategias específicas para cada nivel</li>
      </ul>

      <p className='p16'> 🚨 Consideraciones Clínicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Comorbilidades frecuentes:</strong> Depresión (60%), trastornos alimentarios (25%), abuso de sustancias (50%)</li>
        <li><strong>Manejo farmacológico:</strong> Solo para síntomas específicos (ej. antipsicóticos atípicos para desregulación afectiva)</li>
        <li><strong>Pronóstico:</strong> 50% logran remisión sostenida tras 10 años de tratamiento adecuado</li>
        <li><strong>Riesgo suicida:</strong> Evaluar constantemente, especialmente en transiciones terapéuticas</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        El TLP no es una "condición crónica" sino un <strong>patrón aprendido de supervivencia emocional</strong>. La recuperación 
        implica desarrollar una identidad más estable, regular las emociones intensas y construir relaciones saludables. La meta 
        es <strong>transformar el sufrimiento en crecimiento</strong>, reconociendo la sensibilidad emocional como potencial cuando
         está bien regulada.
      </p>
    </div>
  );
}

export default TrasLimitePerso;
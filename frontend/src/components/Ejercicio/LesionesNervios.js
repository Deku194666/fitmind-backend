

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
 import NavBarLesNervios from './NavBarLesNervios';
 

function LesionesNervios() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="neuro-detail">
         <NavBarLesNervios/>

   
      <p className='p13'> Lesiones de Nervios Periféricos y Radiculopatías </p>
      <p className='p14'> 📌 Introducción</p>
      <p className='p150'> 
        Las neuropatías periféricas afectan al <strong>5-10% de la población general</strong>, aumentando hasta 50% en diabéticos. 
        Las radiculopatías (cervical y lumbar) son causa común de dolor y discapacidad. El diagnóstico preciso mediante 
        examen clínico y estudios complementarios es esencial para el manejo adecuado.
      </p>
        
      <p className='p16'> 📌 Neuropatías Periféricas Comunes</p>
      <p className='p150'>
        Afectan a <strong>20 millones de estadounidenses</strong>, con causas que incluyen diabetes (60% de casos), deficiencias nutricionales, 
        toxinas y compresión nerviosa. Pueden ser axonales o desmielinizantes.
      </p>

      <p className='p150'> <strong>Clasificación por Localización:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Mononeuropatía:</strong> Afectación de un solo nervio (ej. síndrome del túnel carpiano)</li>
        <li><strong>Mononeuropatía múltiple:</strong> Afectación asimétrica de varios nervios</li>
        <li><strong>Polineuropatía:</strong> Afectación simétrica y distal (ej. neuropatía diabética)</li>
      </ul>

      <p className='p16'> 📌 Radiculopatía Cervical</p>
      <p className='p150'>
        Presente en <strong>3.5 casos/1000 personas</strong>, más común en C6-C7 (60% de casos). Causada por compresión de raíces nerviosas 
        por hernia discal (70%) o espondilosis (30%).
      </p>

      <p className='p150'> <strong>Hallazgos por Nivel:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>C5:</strong> Debilidad deltoides, dolor hombro</li>
        <li><strong>C6:</strong> Debilidad bíceps, reflejo bicipital ↓, dolor braquiorradial</li>
        <li><strong>C7:</strong> Debilidad tríceps, reflejo tricipital ↓, dolor dedo medio</li>
        <li><strong>C8:</strong> Debilidad intrínsecos mano, dolor cara medial antebrazo</li>
      </ul>

      <p className='p16'> 📌 Radiculopatía Lumbar</p>
      <p className='p150'>
        Afecta al <strong>3-5% de la población</strong>, con L4-L5 y L5-S1 representando el 90% de casos. Principal causa es hernia discal 
        (75%), seguida de estenosis foraminal.
      </p>

      <p className='p150'> <strong>Hallazgos por Nivel:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>L4:</strong> Debilidad cuadriceps, reflejo patelar ↓, dolor cara anterior muslo</li>
        <li><strong>L5:</strong> Debilidad extensores dedo gordo, dolor cara posterolateral pierna</li>
        <li><strong>S1:</strong> Debilidad gastrocnemio, reflejo aquiliano ↓, dolor cara posterior pierna</li>
      </ul>

      <p className='p14'> 📌 Técnicas de Diagnóstico</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Modalidad </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Hallazgos Clave </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> EMG/NCV </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación funcional nerviosa </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Velocidad conducción, amplitud potenciales </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> RMN </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación estructural </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hernias discales, compresión nerviosa </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ecografía Nerviosa </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación nervios superficiales </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Engrosamiento nervioso, cambios estructurales </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Manejo por Tipo de Lesión</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Condición </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tratamiento </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Eficacia </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Neuropatía diabética </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Control glucémico + pregabalina </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 50% reducción dolor </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Radiculopatía cervical </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fisioterapia + AINEs </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 75% mejoría en 6 semanas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Radiculopatía lumbar </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Educación + ejercicio </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 80% resolución en 8 semanas </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención y Autocuidado</p>
      <p className='p16'> 🟢 Para Neuropatías:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Control metabólico:</strong> HbA1c menor a 7% en diabéticos</li>
        <li><strong>Suplementación:</strong> B12 en deficiencias, ácido alfa-lipoico</li>
        <li><strong>Protección de extremidades:</strong> Prevención úlceras en pies</li>
      </ul>

      <p className='p16'> 🟢 Para Radiculopatía Cervical:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ergonomía postural:</strong> Ajuste posición pantalla computador</li>
        <li><strong>Ejercicios cervicales:</strong> Fortalecimiento musculatura cervical</li>
        <li><strong>Evitar movimientos bruscos:</strong> Especialmente extensión cervical</li>
      </ul>

      <p className='p16'> 🟢 Para Radiculopatía Lumbar:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Mecánica corporal adecuada:</strong> Levantar objetos con piernas</li>
        <li><strong>Fortalecimiento core:</strong> Ejercicios abdominales y lumbares</li>
        <li><strong>Mantenerse activo:</strong> Evitar reposo prolongado en cama</li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las lesiones de nervios periféricos y radiculopatías requieren <strong>un enfoque diagnóstico preciso</strong> que combine historia clínica detallada, examen físico dirigido y estudios complementarios adecuados. Mientras las neuropatías periféricas suelen requerir manejo de la causa subyacente, las radiculopatías responden bien a tratamiento conservador en la mayoría de casos. La identificación temprana de signos de alarma (déficit neurológico progresivo) es crucial para determinar necesidad de intervención quirúrgica.
      </p>
    </div>
  );
}

export default LesionesNervios;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function RespiECNT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
    

      <p className='p13'> Enfermedades Pulmonares Crónicas </p>

      <p className='p14'> 📌 Introducción</p>
      <p className='p150'>
        Las enfermedades pulmonares crónicas afectan de forma progresiva la función respiratoria. Entre las más frecuentes se encuentran
         el  <Link to="/ecnt/asma"> Asma</Link>, la <Link to="/ecnt/epoc"> EPOC</Link>,  y la 
         <Link to="/ecnt/fibrosispulmonar"> Fibrosis Pulmonar</Link>. Estas condiciones pueden alterar significativamente la calidad de vida si no se detectan y
          tratan a tiempo.
      </p>

      <p className='p16'> 📌 <strong><Link to="/ecnt/asma"> Asma </Link></strong> </p>
      <p className='p150'>
        Trastorno inflamatorio crónico de las vías aéreas caracterizado por episodios de disnea, sibilancias y tos. Suele desencadenarse 
        por alérgenos, ejercicio o infecciones. Es reversible con tratamiento.
      </p>

      <p className='p150'><strong> Diagnóstico </strong>  <strong><Link to="/ecnt/asma"> Asma </Link></strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Espirometría:</strong> Obstrucción reversible del flujo aéreo</li>
        <li><strong>Prueba broncodilatadora:</strong> Mejora del VEF1 ≥12%</li>
        <li><strong>Historial clínico:</strong> Síntomas intermitentes con desencadenantes</li>
      </ul>

      <p className='p16'> 📌 <Link to="/ecnt/epoc"> EPOC </Link> </p>
      <p className='p150'>
        Enfermedad obstructiva no reversible, relacionada principalmente con el tabaquismo. Incluye bronquitis crónica y enfisema.
         Se manifiesta por disnea progresiva, tos crónica y producción de esputo.
      </p>

      <p className='p150'><strong>Diagnóstico <Link to="/ecnt/epoc"> EPOC: </Link> </strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Espirometría:</strong> VEF1/CVF &lt; 70% post-broncodilatador</li>
        <li><strong>Antecedente de tabaquismo:</strong> Mayor a 10 paquetes-año</li>
        <li><strong>Clasificación GOLD:</strong> Según FEV1</li>
      </ul>

      <p className='p16'> 📌 <Link to="/ecnt/fibrosispulmonar"> Fibrosis Pulmonar</Link> </p>
      <p className='p150'>
        Enfermedad intersticial caracterizada por la formación de tejido cicatricial (fibrosis) en los pulmones, lo que dificulta el intercambio gaseoso. Puede ser idiopática o secundaria a otras condiciones (ej. enfermedades autoinmunes, exposición a tóxicos).
      </p>

      <p className='p150'><strong>Diagnóstico <Link to="/ecnt/fibrosispulmonar"> Fibrosis Pulmonar</Link>:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>TAC de alta resolución:</strong> Patrón en panal</li>
        <li><strong>Pruebas de función pulmonar:</strong> Patrón restrictivo</li>
        <li><strong>Biopsia pulmonar (en casos seleccionados)</strong></li>
      </ul>

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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Espirometría </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación del flujo aéreo </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Obstructivo en EPOC y asma; restrictivo en fibrosis </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> TAC alta resolución </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación de parénquima pulmonar </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Panalización, vidrio esmerilado, bullas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Gases arteriales </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación de oxigenación </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hipoxemia en fases avanzadas </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Tratamiento</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Patología </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tratamiento </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Objetivo </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/asma"> Asma </Link> </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Corticoides inhalados + broncodilatadores </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Control inflamación y prevenir crisis </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/epoc"> EPOC </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Broncodilatadores de acción prolongada, oxigenoterapia en casos severos </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mejorar calidad de vida y reducir exacerbaciones </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/fibrosispulmonar"> Fibrosis Pulmonar</Link> </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antifibróticos (ej. pirfenidona), rehabilitación pulmonar </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lentificar progresión y preservar función </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>No fumar:</strong> Prevención principal para <Link to="/ecnt/epoc"> EPOC </Link>  y <Link to="/ecnt/fibrosispulmonar"> Fibrosis Pulmonar</Link> </li>
        <li><strong>Vacunación:</strong> Influenza y neumococo</li>
        <li><strong>Control ambiental:</strong> Evitar alérgenos e irritantes</li>
        <li><strong>Educación al paciente:</strong> Reconocer signos de descompensación</li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las <strong> Enfermedades Pulmonares Crónicas </strong> requieren un manejo multidisciplinario y enfoque preventivo. El diagnóstico temprano y la 
        adherencia al tratamiento son claves para mantener una buena calidad de vida.
      </p>
    </div>
  );
}

export default RespiECNT;

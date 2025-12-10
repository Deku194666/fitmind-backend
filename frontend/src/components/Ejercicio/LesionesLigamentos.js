
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
 import NavBarLesLig from './NavBarLesLig';
 
function LesionesLigamentos() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        <NavBarLesLig/>
 
      <p className='p13'> Lesiones Ligamentosas Comunes </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        Las lesiones ligamentosas representan el <strong>25-40% de todas las lesiones deportivas</strong> y son particularmente frecuentes en actividades que implican cambios bruscos de dirección. Los ligamentos son estructuras de tejido conectivo que conectan huesos entre sí, proporcionando estabilidad articular. Su correcto diagnóstico y manejo son esenciales para prevenir inestabilidad articular crónica.
      </p>
        
      <p className='p16'> 📌Esguince de Tobillo (Ligamentos Laterales)</p>
      <p className='p150'>
        Representa el <strong>85% de todas las lesiones ligamentosas</strong>, afectando principalmente al ligamento peroneoastragalino anterior (LPAA). Ocurre típicamente por inversión forzada del pie. El 70% de casos ocurren en actividades deportivas (baloncesto, fútbol).
      </p>

      <p className='p150'> <strong>Clasificación:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Grado I:</strong> Microdesgarros (dolor leve, sin inestabilidad)</li>
        <li><strong>Grado II:</strong> Rotura parcial (dolor moderado, hematoma, leve inestabilidad)</li>
        <li><strong>Grado III:</strong> Rotura completa (dolor intenso, inestabilidad marcada)</li>
      </ul>

      <p className='p16'> 📌Lesión del LCA (Ligamento Cruzado Anterior)</p>
      <p className='p150'>
        Afecta al <strong>1 de cada 3,000 personas activas</strong> anualmente. Mecanismo típico: rotación con pie fijo + valgo de rodilla. Deportes de alto riesgo: fútbol, esquí, baloncesto.
      </p>

      <p className='p150'> <strong>Pruebas diagnósticas:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Test de Lachman:</strong> Sensibilidad 85% para LCA</li>
        <li><strong>Cajón anterior:</strong> Menos sensible en fase aguda</li>
        <li><strong>Pivot-shift:</strong> Evalúa inestabilidad rotatoria</li>
      </ul>

      <p className='p16'> 📌Lesión del LCM (Ligamento Colateral Medial)</p>
      <p className='p150'>
        El <strong>ligamento más frecuentemente lesionado en rodilla</strong> (40% de lesiones). Mecanismo: valgo forzado + rotación externa. Grado II representa el 60% de casos.
      </p>

      <p className='p150'> <strong>Características únicas:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Capacidad de cicatrización intrínseca (vs LCA)</li>
        <li>Asociación frecuente con menisco medial (66% de casos)</li>
        <li>Tratamiento conservador efectivo en grados I-II</li>
      </ul>

      <p className='p16'> 📌Lesión del LCC (Ligamento Cruzado Posterior)</p>
      <p className='p150'>
        Representa solo el <strong>3-20% de lesiones ligamentosas de rodilla</strong> pero con frecuencia subdiagnosticada. Mecanismo típico: impacto directo sobre tibia con rodilla flexionada (accidentes de tráfico).
      </p>

      <p className='p150'> <strong>Hallazgos clave:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Dolor en hueco poplíteo</li>
        <li>Prueba de cajón posterior positiva</li>
        <li>Caída anterior de la tibia (signo de Godfrey)</li>
      </ul>

      <p className='p14'> 📌 Técnicas de Rehabilitación</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Técnica </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Beneficio </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Propiocepción </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tabla de equilibrio, superficies inestables </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Restaura control neuromuscular </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Fortalecimiento excéntrico </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Nordic hamstring, sentadillas excéntricas </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mejora estabilidad dinámica </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Vendaje funcional </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Taping específico según ligamento </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Soporte durante fase de cicatrización </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Manejo por Tipo de Lesión</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Lesión </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tratamiento </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tiempo Recuperación </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Esguince tobillo Grado II </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Protocolo POLICE + rehab temprana </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 4-6 semanas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> LCA completo </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reconstrucción quirúrgica + rehab </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 6-12 meses </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> LCM Grado I-II </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tratamiento conservador </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 3-6 semanas </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención y Autocuidado</p>
      <p className='p16'> 🟢 Para Deportistas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Programas neuromusculares:</strong> Reducen lesiones LCA en 50%</li>
        <li><strong>Fortalecimiento de CORE:</strong> Mejora control postural</li>
        <li><strong>Calzado adecuado:</strong> Según superficie deportiva</li>
      </ul>

      <p className='p16'> 🟢 Para Lesiones Agudas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protocolo POLICE:</strong> Protection, Optimal Loading, Ice, Compression, Elevation</li>
        <li><strong>Movilización temprana:</strong> Según tolerancia dolor</li>
        <li><strong>Ortesis:</strong> Rodilleras/tobilleras según necesidad</li>
      </ul>

      <p className='p16'> 🟢 Para Recuperación:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ejercicios propioceptivos:</strong> 3-5 veces por semana</li>
        <li><strong>Nutrición:</strong> Adecuado aporte de proteínas y vitamina C</li>
        <li><strong>Sueño reparador:</strong> Fundamental para reparación tisular</li>
      </ul>
0
      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        Las lesiones ligamentosas requieren <strong>un enfoque individualizado según el ligamento afectado y grado de lesión</strong>. Mientras que algunos ligamentos (como el LCM) tienen buena capacidad de cicatrización, otros (como el LCA) generalmente requieren intervención quirúrgica en casos completos. La rehabilitación temprana con énfasis en propiocepción y fortalecimiento excéntrico es clave para prevenir inestabilidad crónica. Los programas de prevención específicos pueden reducir significativamente la incidencia de estas lesiones en poblaciones de riesgo.
      </p>
    </div>
  );
}

export default LesionesLigamentos;
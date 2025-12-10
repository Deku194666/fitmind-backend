

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarLesMusc from './NavBarLesMusc';
function LesMusc() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
    <NavBarLesMusc />

      <p className='p13'> Lesiones Musculares Comunes </p>
      <p className='p14'> 📌Introducción</p>
      <p className='p150'> 
        Las lesiones musculares representan el <strong>30-50% de todas las lesiones deportivas</strong> y son frecuentes en actividades 
        cotidianas. Su correcta identificación y manejo son cruciales para una recuperación óptima. Presentamos las principales lesiones
         musculares con sus características y protocolos de tratamiento basados en evidencia.
      </p>
        
      <p className='p16'> 📌Desgarros Musculares</p>
      <p className='p150'>
        Los desgarros afectan al <strong>90% de los deportistas profesionales</strong> en algún momento de su carrera. Ocurren cuando
         las fibras musculares se estiran más allá de su capacidad, rompiéndose parcial o totalmente. Los músculos más afectados son 
         isquiotibiales (33%), gemelos (28%) y cuádriceps (19%).
      </p>

       

      <p className='p16'> 📌Contusiones Musculares</p>
      <p className='p150'>
        Las contusiones representan el <strong>25% de lesiones en deportes de contacto</strong>. Ocurren por impacto directo, 
        causando daño vascular y acumulación de sangre dentro del músculo (hematoma). Las más graves pueden evolucionar a miositis
         osificante (5% de casos).
      </p>

       

      <p className='p16'> 📌Distensiones y Sobrecargas</p>
      <p className='p150'>
        Afectan al <strong>40% de atletas amateur</strong> por mala preparación o sobreuso. Son microlesiones por elongación excesiva 
        sin rotura fibrilar completa. El 70% ocurren en fase excéntrica del movimiento.
      </p>

       

      <p className='p16'> <strong>Técnicas de Recuperación:</strong> </p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Vendaje neuromuscular </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aplicación específica según músculo </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Soporte y drenaje </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Punción seca </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> En puntos gatillo asociados </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Liberación tensión </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> EPI (Electrólisis) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lesiones crónicas ( mayor a 6 semanas) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Regeneración tejido </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 📌 Intervenciones Clave</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Desgarro Grado I </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> RICE + Rehabilitación precoz </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 1-2 semanas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Contusión moderada </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Compresión + Movilización temprana </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 2-3 semanas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Distensión crónica </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ejercicios excéntricos + EPI </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 4-8 semanas </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención y Autocuidado</p>
      <p className='p16'> 🟢 Para Deportistas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Calentamiento dinámico:</strong> 15-20 min pre-actividad</li>
        <li><strong>Rutina de estiramientos:</strong> Especial atención a isquiotibiales</li>
        <li><strong>Hidratación adecuada:</strong> 500ml 2h antes del ejercicio</li>
      </ul>

      <p className='p16'> 🟢 Para Lesiones Agudas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Protocolo RICE:</strong> Aplicar inmediatamente tras lesión</li>
        <li><strong>Analgesia:</strong> AINES solo primeros 3 días (consultar médico)</li>
        <li><strong>Movilización temprana:</strong> Iniciar suavemente a las 48h</li>
      </ul>

      <p className='p16'> 🟢 Para Recuperación:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Nutrición regenerativa:</strong> Proteínas + Vitamina C + Zinc</li>
        <li><strong>Sueño reparador:</strong> 7-9 horas con correcta higiene del sueño</li>
        <li><strong>Terapia de contrastes:</strong> Alternar frío/calor en fases subagudas</li>
      </ul>

      <p className='p14'> 📌Conclusión</p>
      <p className='p150'>
        Las lesiones musculares requieren <strong>manejo específico según su tipo y gravedad</strong>. El tratamiento temprano y 
        adecuado reduce significativamente el riesgo de recidivas. La combinación de reposo inicial controlado con rehabilitación
         progresiva es clave para una recuperación óptima. En casos persistentes o graves, siempre se recomienda evaluación médica 
         especializada.
      </p>
    </div>
  );
}

export default LesMusc;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesTendones from './NavBarLesTendones';
import NavBarTendones from './NavBarTendones';

function LesionesTendinosas() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
        
        <NavBarLesTendones/>
        <NavBarTendones/>

  
      <p className='p13'> Lesiones Tendinosas Comunes </p>
      <p className='p14'> 📌 Introducción</p>
      <p className='p150'> 
        Las lesiones tendinosas afectan al <strong>11-30% de los adultos activos</strong> y representan una causa mayor de dolor musculoesquelético.
        Involucran daño a los tendones (estructuras fibrosas que unen músculo a hueso) y pueden ser agudas (tendinitis) o crónicas (tendinosis). 
        El diagnóstico preciso es esencial para prevenir complicaciones y roturas completas.
      </p>
        
      <p className='p16'> 📌 Tendinitis (Inflamación Aguda)</p>
      <p className='p150'>
        Afecta principalmente a <strong>deportistas y personas con actividades repetitivas</strong>, siendo el tendón de Aquiles y el rotuliano los más comunes. Caracterizada por inflamación aguda con dolor localizado y edema. Factores de riesgo: sobreuso, mala técnica deportiva, calzado inadecuado.
      </p>

      <p className='p150'> <strong>Clasificación por Gravedad:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Grado 1:</strong> Dolor solo después de actividad</li>
        <li><strong>Grado 2:</strong> Dolor durante y después de actividad</li>
        <li><strong>Grado 3:</strong> Dolor que limita la actividad</li>
        <li><strong>Grado 4:</strong> Dolor en reposo y durante actividad</li>
      </ul>

      <p className='p16'> 📌 Tendinosis (Degeneración Crónica)</p>
      <p className='p150'>
        Condición degenerativa que afecta al <strong>5-10% de adultos mayores de 40 años</strong>, con predominio en hombros (manguito rotador) y codos (epicondilitis). Caracterizada por degeneración colágena sin inflamación significativa. Diferenciación clave: la tendinosis es un proceso degenerativo, no inflamatorio.
      </p>

      <p className='p150'> <strong>Hallazgos Histológicos:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Desorganización de fibras de colágeno</strong></li>
        <li><strong>Aumento de sustancia fundamental</strong></li>
        <li><strong>Neovascularización patológica</strong></li>
        <li><strong>Ausencia de células inflamatorias</strong></li>
      </ul>

      <p className='p16'> 📌 Roturas Tendinosas</p>
      <p className='p150'>
        Pueden ser parciales o completas, con una incidencia de <strong>2-5% en tendones previamente afectados</strong>. El tendón de Aquiles es el más frecuentemente roto (80% de casos). Factores de riesgo: edad, uso de corticoides, enfermedades sistémicas (diabetes, artritis reumatoide).
      </p>

      <p className='p150'> <strong>Diagnóstico:</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de Thompson (Aquiles):</strong> Ausencia de flexión plantar al comprimir la pantorrilla</li>
        <li><strong>Prueba de lag (manguito rotador):</strong> Incapacidad para mantener abducción pasiva</li>
        <li><strong>Ecografía dinámica:</strong> Visualización directa de la discontinuidad</li>
      </ul>

      <p className='p14'> 📌 Técnicas de Diagnóstico por Imagen</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ecografía </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación inicial y dinámica </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Engrosamiento tendinoso, roturas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> RMN </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación prequirúrgica </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Edema, degeneración, roturas completas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Radiografía </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Evaluación ósea asociada </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Calcificaciones, avulsiones óseas </td>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tendinitis aguda </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> RICE + AINEs cortos </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 70-80% resolución en 2-3 semanas </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Tendinosis crónica </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ejercicio excéntrico + carga progresiva </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 60% mejoría en 3-6 meses </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Rotura completa </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reparación quirúrgica </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> 85-90% retorno funcional </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 🌱 Prevención y Autocuidado</p>
      <p className='p16'> 🟢 Para Tendinitis:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Calentamiento adecuado:</strong> 10-15 min previo a actividad</li>
        <li><strong>Progresión gradual:</strong> Aumentar intensidad máximo 10% semanal</li>
        <li><strong>Técnica correcta:</strong> Asesoramiento profesional en deportes</li>
      </ul>

      <p className='p16'> 🟢 Para Tendinosis:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Carga controlada:</strong> Ejercicios excéntricos supervisados</li>
        <li><strong>Modificación actividades:</strong> Evitar movimientos repetitivos</li>
        <li><strong>Fortalecimiento global:</strong> Mejorar sinergias musculares</li>
      </ul>

      <p className='p16'> 🟢 Para Prevención de Roturas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reconocimiento precoz:</strong> Tratar tendinopatías crónicas</li>
        <li><strong>Evitar corticoides:</strong> Especialmente en inyecciones peritendinosas</li>
        <li><strong>Nutrición adecuada:</strong> Proteínas y vitamina C para síntesis de colágeno</li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las lesiones tendinosas requieren <strong>un enfoque específico según su fase</strong> (aguda vs crónica) y gravedad. Mientras las tendinitis responden bien al reposo y antiinflamatorios, las tendinosis necesitan carga progresiva y ejercicios excéntricos. Las roturas completas en pacientes activos generalmente requieren reparación quirúrgica. La prevención mediante programas de fortalecimiento excéntrico y modificación de factores de riesgo es clave para reducir la incidencia de estas lesiones.
      </p>
    </div>
  );
}

export default LesionesTendinosas;
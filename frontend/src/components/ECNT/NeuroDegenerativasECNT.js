

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NeuroDegenerativasECNT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
 
      <p className='p13'> Enfermedades Cerebrales Degenerativas Crónicas </p>

      <p className='p14'> 📌 Introducción</p>
      <p className='p150'>
        Las enfermedades neurodegenerativas crónicas se caracterizan por la pérdida progresiva e irreversible de neuronas en áreas 
        específicas del sistema nervioso central. Estas enfermedades impactan severamente la autonomía funcional y la calidad de vida.
         Las más frecuentes son:  <Link to="/ecnt/ea"> Enfermedad de Alzheimer</Link>, <Link to="/ecnt/enfermedaddeparkinson"> Enfermedad de Parkinson</Link> y 
         <strong> Esclerosis Lateral Amiotrófica (ELA)</strong>.
      </p>

      <p className='p16'> 🧠 <Link to="/ecnt/ea"> Enfermedad de Alzheimer </Link> </p>
      <p className='p150'>
        Tipo más común de demencia. Se caracteriza por pérdida progresiva de la memoria, desorientación, dificultad en el lenguaje y deterioro funcional. Está relacionada con acumulación de placas de beta-amiloide y ovillos de tau en el cerebro.
      </p>
      <p className='p150'><strong>Signos clave:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pérdida de memoria reciente</li>
        <li>Desorientación temporal y espacial</li>
        <li>Lenguaje empobrecido</li>
        <li>Cambios de personalidad</li>
        <li>Dificultad para realizar actividades cotidianas</li>
      </ul>

      <p className='p16'> 🧠 <Link to="/ecnt/enfermedaddeparkinson"> Enfermedad de Parkinson</Link> </p>
      <p className='p150'>
        Trastorno neurodegenerativo del sistema extrapiramidal, causado por la pérdida de neuronas dopaminérgicas en la sustancia negra. Afecta el movimiento y puede tener síntomas cognitivos en etapas avanzadas.
      </p>
      <p className='p150'><strong>Clásica tríada motora:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Temblor de reposo</li>
        <li>Bradicinesia (lentitud de movimientos)</li>
        <li>Rigidez muscular</li>
      </ul>

      <p className='p16'> 🧠 Esclerosis Lateral Amiotrófica (ELA)</p>
      <p className='p150'>
        Enfermedad neurodegenerativa que afecta las neuronas motoras superiores e inferiores, provocando debilidad muscular progresiva, espasticidad, fasciculaciones y atrofia muscular. Preserva la función cognitiva en muchos casos.
      </p>
      <p className='p150'><strong>Síntomas comunes:</strong></p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Debilidad progresiva en extremidades</li>
        <li>Dificultad para hablar, tragar y respirar</li>
        <li>Fasciculaciones (temblores musculares finos)</li>
        <li>Pérdida de masa muscular</li>
      </ul>

      <p className='p14'> 🧪 Diagnóstico</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '6rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedad </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Herramientas diagnósticas </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Característica clave </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/ea"> Enfermedad de Alzheimer </Link> </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pruebas cognitivas (MMSE), imagen cerebral (RMN), PET amiloide </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Pérdida de memoria + alteración funcional </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/enfermedaddeparkinson"> Parkinson</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Clínica + respuesta a levodopa, DaTscan (en casos dudosos) </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Temblor + bradicinesia + rigidez </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> ELA </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> EMG, RMN, criterios de El Escorial </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> Debilidad + fasciculaciones + atrofia muscular </td>
          </tr>
        </tbody>
      </table>

      <p className='p14'> 💊 Tratamiento</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><Link to="/ecnt/ea"> Enfermedad de Alzheimer</Link>: Inhibidores de colinesterasa (donepezilo, rivastigmina), memantina, soporte cognitivo y psicosocial</li>
        <li><Link to="/ecnt/enfermedaddeparkinson"> Parkinson</Link>: Levodopa/carbidopa, agonistas dopaminérgicos, MAO-B inhibidores, fisioterapia</li>
        <li><strong>ELA:</strong> Riluzol, Edaravona (en algunos casos), ventilación no invasiva, kinesiterapia, terapia ocupacional</li>
      </ul>

      <p className='p14'> 🌿 Enfoque Integral</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Apoyo del entorno familiar y cuidadores</li>
        <li>Rehabilitación neurológica y funcional</li>
        <li>Prevención de complicaciones (caídas, infecciones, úlceras)</li>
        <li>Cuidados paliativos en etapas avanzadas</li>
      </ul>

      <p className='p14'> 📌 Conclusión</p>
      <p className='p150'>
        Las <strong> Enfermedades Cerebrales Degenerativas </strong> son incurables pero tratables. El diagnóstico precoz, el manejo sintomático y el
         acompañamiento psicosocial son pilares fundamentales para preservar la calidad de vida y la dignidad del paciente.
      </p>
    </div>
  );
}

export default NeuroDegenerativasECNT;



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LuxacionMMDedos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Luxaciones de Dedos, Mano y Muñeca</p>
      
      {/* SECCIÓN DE INTRODUCCIÓN */}
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las luxaciones en la extremidad superior distal representan <strong>25% de todas las luxaciones articulares</strong>. 
        Su manejo requiere comprensión anatómica precisa para evitar complicaciones como rigidez o inestabilidad crónica. 
        Las más frecuentes son interfalángicas (60%), seguidas por metacarpofalángicas (25%) y de muñeca (15%).
      </p>

      {/* ANATOMÍA CLAVE - EXPANDIDA */}
      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Dedos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Placa volar</strong>: Principal estabilizador contra hiperextensión</li>
            <li><strong>Ligamentos colaterales</strong>: Resistencia a desviaciones laterales</li>
          </ul>
        </li>
        <li>
          <strong>Mano</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Arcos palmares</strong>: Claves para la función de prensión</li>
            <li><strong>Compartimentos thenar/hypothenar</strong>: Estabilidad motora fina</li>
          </ul>
        </li>
        <li>
          <strong>Muñeca</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Complejo del fibrocartílago triangular (TFCC)</strong>: Estabilizador ulnar</li>
            <li><strong>Ligamentos intercarpianos</strong>: Mantienen alineación ósea</li>
          </ul>
        </li>
      </ul>

      {/* TABLA COMPARATIVA DE LUXACIONES */}
      <p className='p14'>Clasificación de Luxaciones por Región 📊</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Articulación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo Frecuente</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Complicación Principal</th>
          </tr>
        </thead>
        <tbody>
          {/* Dedos */}
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Interfalángica (IFP/IFD)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dorsal (90%)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperextensión + fuerza axial</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rigidez (30%)</td>
          </tr>
          {/* Mano */}
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Metacarpofalángica (MCF)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dorsal (75%)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída con puño cerrado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestabilidad crónica</td>
          </tr>
          {/* Muñeca */}
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Carpo (Lunato)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Perilunar (60%)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperextensión forzada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Necrosis avascular</td>
          </tr>
        </tbody>
      </table>

      {/* DIAGNÓSTICO POR IMAGEN - ACTUALIZADO */}
      <p className='p14'>Diagnóstico por Imagen 🩺</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Articulación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estudio Ideal</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgo Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dedos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RX AP/lateral/oblícua</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pérdida congruencia articular ± fractura</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mano</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RX + TAC si compleja</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión de arcos metacarpianos</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Muñeca</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RMN + TAC 3D</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disrupción ligamentosa intercarpiana</td>
          </tr>
        </tbody>
      </table>

      {/* TÉCNICAS DE REDUCCIÓN ESPECÍFICAS */}
      <p className='p14'>Técnicas de Reducción 🔄</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {/* Tarjeta Dedos */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Dedos (IFP/MCF)</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Técnica de traction-flexion</strong>: Tracción axial + flexión progresiva</li>
            <li><strong>Anestesia</strong>: Bloqueo digital con lidocaína 1%</li>
            <li><strong>Post-reducción</strong>: Test de estabilidad colateral</li>
          </ul>
        </div>

        {/* Tarjeta Muñeca */}
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '300px' }}>
          <h4 style={{ marginTop: 0 }}>Muñeca (Perilunar)</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li><strong>Técnica de Watson-Jones</strong>: Tracción + presión sobre hueso desplazado</li>
            <li><strong>Anestesia</strong>: Sedación consciente o regional</li>
            <li><strong>Post-reducción</strong>: Evaluar alineación del arco de Gilula</li>
          </ul>
        </div>
      </div>

      {/* REHABILITACIÓN POR REGIÓN */}
      <p className='p14'>Rehabilitación Específica 🏋️‍♂️</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dedos (0-6 sem)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Muñeca (0-12 sem)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Férula en "posición de seguridad" (MCF 70° flex, IFP 10° flex)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Férula braquiopalmar neutra</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización activa asistida + ejercicios de bloqueo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización pasiva progresiva</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Funcional</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios de pinza + fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ejercicios propioceptivos con carga</td>
          </tr>
        </tbody>
      </table>

      {/* CONCLUSIÓN ACTUALIZADA */}
      <p className='p14'>Conclusión</p>
      <p className='p150'>
        El manejo de luxaciones en la extremidad superior distal requiere <strong>enfoque anatómico específico</strong>:
        reducción precisa, estabilización adecuada y rehabilitación temprana. Mientras las luxaciones digitales suelen
        responder bien a tratamiento conservador, las lesiones carpianas complejas frecuentemente requieren
        <strong> abordaje quirúrgico</strong>. La comprensión de los mecanismos lesionales y la anatomía funcional
        es clave para prevenir complicaciones como rigidez o inestabilidad crónica.
      </p>
    </div>
  );
}

export default LuxacionMMDedos;
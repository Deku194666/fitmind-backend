import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxHombro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Hombro, Clavícula y Escápula</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas del complejo del hombro (húmero proximal, clavícula y escápula) representan aproximadamente el <strong>10% de todas las fracturas</strong> en adultos. 
        Este grupo de fracturas tiene mecanismos, tratamientos y pronósticos diferentes. La clavícula es el hueso que se fractura con más frecuencia en la infancia, 
        mientras las fracturas de húmero proximal son más comunes en mayores de 65 años.
      </p>

      {/* SECCIÓN DE HÚMERO PROXIMAL */}
      <p className='p14'>📌 Fracturas de Húmero Proximal</p>
      <p className='p150'>
        Representan el <strong>5% de todas las fracturas</strong> y son las más comunes del complejo del hombro en adultos mayores. 
        La clasificación de Neer es la más utilizada, basada en el desplazamiento de los cuatro segmentos principales.
      </p>

      <p className='p16'>Clasificación de Neer:</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazamiento</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Incidencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 parte</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>menor a 1cm o menor a 45°</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>70-80%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 partes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>mayor a 1cm o mayor a 45° en 1 segmento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>15-20%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 partes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 segmentos desplazados</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5-10%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 partes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Todos segmentos desplazados</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>menor a 5%</td>
          </tr>
        </tbody>
      </table>

      {/* SECCIÓN DE CLAVÍCULA */}
      <p className='p14'>📌 Fracturas de Clavícula</p>
      <p className='p150'>
        Representan el <strong>2.6-5% de todas las fracturas</strong> y hasta el <strong>44% de las fracturas del hombro</strong>. 
        Ocurren principalmente en el tercio medio (80%), siendo menos frecuentes en los tercios distal (15%) y proximal (5%).
      </p>

      <p className='p16'>Clasificación de Allman modificada:</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tercio medio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>80% de casos, consolidación rápida</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tercio distal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subtipos A, B, C según compromiso ligamentario</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Tercio proximal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Raras, asociadas a trauma de alta energía</td>
          </tr>
        </tbody>
      </table>

      <p className='p16'>Manejo de fracturas de clavícula:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Conservador (mayoría casos):</strong> Cabestrillo por 3-6 semanas</li>
        <li><strong>Quirúrgico (indicaciones):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Desplazamiento mayor a 2cm o acortamiento</li>
            <li>Compromiso neurovascular</li>
            <li>Fracturas abiertas</li>
            <li>Pacientes jóvenes activos</li>
          </ul>
        </li>
        <li><strong>Técnicas quirúrgicas:</strong> Placa de compresión, clavos intramedulares</li>
      </ul>

      {/* SECCIÓN DE ESCÁPULA */}
      <p className='p14'>📌 Fracturas de Escápula</p>
      <p className='p150'>
        Representan solo el <strong>0.5-1% de todas las fracturas</strong> y el <strong>3-5% de las fracturas del hombro</strong>. 
        Son fracturas de <strong>alta energía</strong> (90% por accidentes vehiculares) y frecuentemente asociadas a otras lesiones (pulmonares, vasculares).
      </p>

      <p className='p16'>Clasificación anatómica:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Cuerpo (50%):</strong> Múltiples líneas de fractura</li>
        <li><strong>Cuello (25%):</strong> Fractura "anatómica" o "quirúrgica"</li>
        <li><strong>Acromion (8%):</strong> Por impacto directo</li>
        <li><strong>Apófisis coracoides (7%):</strong> Por avulsión</li>
        <li><strong>Cavidad glenoidea (10%):</strong> Requieren evaluación cuidadosa</li>
      </ul>

      <p className='p16'>Manejo de fracturas de escápula:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Conservador (mayoría casos):</strong> Cabestrillo por 3-4 semanas</li>
        <li><strong>Quirúrgico (indicaciones):</strong>
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Desplazamiento glenoideo mayor a 5mm</li>
            <li>Inestabilidad glenohumeral</li>
            <li>Fracturas de coracoides con lesión ligamentaria</li>
            <li>Fracturas de acromion que comprometen espacio subacromial</li>
          </ul>
        </li>
      </ul>

      {/* DIAGNÓSTICO COMÚN */}
      <p className='p14'>📌 Diagnóstico por Imagen</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Húmero Proximal</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clavícula</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Escápula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Radiografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP, axial, Y escapular</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP y 45° cefálica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP, lateral y axilar</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar consolidación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D esencial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar manguito rotador</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Poco utilizada</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones partes blandas</td>
          </tr>
        </tbody>
      </table>

      {/* REHABILITACIÓN */}
      <p className='p14'>📌 Rehabilitación</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Húmero Proximal</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clavícula</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Escápula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-3 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cabestrillo, pendulares</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cabestrillo, evitar elevación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cabestrillo, movilización pasiva</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (3-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM activo asistido</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inicio movilización activa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM progresivo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento escapular</td>
          </tr>
        </tbody>
      </table>

      {/* COMPLICACIONES */}
      <p className='p14'>⚠️ Complicaciones</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ width: '32%' }}>
          <p className='p16'>Húmero Proximal:</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Rigidez articular (10-20%)</li>
            <li>Necrosis avascular (hasta 35%)</li>
            <li>Pseudoartrosis (1-5%)</li>
          </ul>
        </div>
        <div style={{ width: '32%' }}>
          <p className='p16'>Clavícula:</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Pseudoartrosis (5-15%)</li>
            <li>Malunión con acortamiento</li>
            <li>Irritación por material de osteosíntesis</li>
          </ul>
        </div>
        <div style={{ width: '32%' }}>
          <p className='p16'>Escápula:</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li>Rigidez glenohumeral</li>
            <li>Artrosis postraumática</li>
            <li>Disfunción escapulotorácica</li>
          </ul>
        </div>
      </div>

      {/* CONCLUSIÓN */}
      <p className='p14'>📌 Conclusión</p>
      <p className='p150'>
        El manejo de las fracturas del complejo del hombro requiere un enfoque individualizado. Mientras la mayoría de fracturas de clavícula y escápula pueden tratarse conservadoramente, 
        las fracturas de húmero proximal desplazadas frecuentemente requieren intervención quirúrgica. La rehabilitación temprana y supervisada es clave para recuperar la función del hombro, 
        especialmente en pacientes activos. Las fracturas de escápula, aunque raras, deben alertar sobre posibles lesiones asociadas graves.
      </p>
    </div>
  );
}

export default FxHombro;
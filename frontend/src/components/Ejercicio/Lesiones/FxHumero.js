

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxHumero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Húmero</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de húmero representan aproximadamente el <strong>3-5% de todas las fracturas</strong> en adultos. 
        Pueden ocurrir en diferentes niveles: proximal (45%), diáfisis (35%) y distal (20%). 
        Su tratamiento varía según la localización, desplazamiento y características del paciente.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Húmero proximal:</strong> Cabeza anatómica, troquíter, troquín y diáfisis</li>
        <li><strong>Diáfisis humeral:</strong> Relación con nervio radial en surco espiral</li>
        <li><strong>Húmero distal:</strong> Cóndilo, epitróclea y fosa olecraneana</li>
        <li><strong>Vascularización:</strong> Arteria humeral profunda y circunflejas</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas 📊</p>
      
      <p className='p16'>Fracturas proximales (Neer):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>1 parte:</strong> No desplazada o mínimamente desplazada</li>
        <li><strong>2 partes:</strong> Una parte desplazada mayor a 1cm o mayor a 45°</li>
        <li><strong>3 partes:</strong> Dos partes desplazadas</li>
        <li><strong>4 partes:</strong> Todas partes desplazadas</li>
      </ul>

      <p className='p16'>Fracturas diafisarias (AO):</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '1rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>A</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas simples</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>B</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fragmento en cuña</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>C</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Trauma directo:</strong> Caídas, accidentes deportivos</li>
        <li><strong>Trauma indirecto:</strong> Caída sobre mano extendida</li>
        <li><strong>Traumatismos de alta energía:</strong> Accidentes vehiculares</li>
        <li><strong>Fracturas patológicas:</strong> Metástasis, osteoporosis</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor e impotencia funcional</strong></li>
        <li><strong>Evaluación neurovascular:</strong> Nervio radial (diáfisis)</li>
        <li><strong>Deformidad visible:</strong> En fracturas desplazadas</li>
        <li><strong>Pruebas específicas:</strong> Movilidad activa/pasiva</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Radiografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Línea de fractura, desplazamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Proyecciones AP y lateral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TAC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación 3D, fragmentos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fracturas complejas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones partes blandas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar manguito rotador</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Fracturas no desplazadas o mínimamente desplazadas</li>
        <li>Pacientes ancianos con baja demanda funcional</li>
        <li>Fracturas diafisarias con contacto cortical mayor a 50%</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización:</strong> Cabestrillo o férula braquiopalmar</li>
        <li><strong>Movilización temprana:</strong> Ejercicios pendulares a los 7-10 días</li>
        <li><strong>Control radiográfico:</strong> Semanal las primeras 3 semanas</li>
        <li><strong>Rehabilitación:</strong> Inicio progresivo según consolidación</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Desplazamiento mayor a 2cm o mayor a 30° angulación</li>
        <li>Fracturas intraarticulares con escalón mayor a 3mm</li>
        <li>Fracturas diafisarias con compromiso radial</li>
        <li>Fracturas patológicas con riesgo inminente</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Osteosíntesis con placa:</strong> Fracturas proximales y diafisarias</li>
        <li><strong>Clavos endomedulares:</strong> Fracturas diafisarias</li>
        <li><strong>Hemiartroplastia:</strong> Fracturas proximales complejas</li>
        <li><strong>Fijación externa:</strong> Fracturas abiertas grado III</li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda (0-3 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control dolor, movilización pasiva</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda (3-6 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM activo asistido</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperación (6-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Funcional (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lesión nervio radial:</strong> 10-15% en fracturas diafisarias</li>
        <li><strong>Pseudoartrosis:</strong> 2-10% (mayor en fumadores)</li>
        <li><strong>Rigidez articular:</strong> Especialmente en fracturas proximales</li>
        <li><strong>Infección:</strong> 1-5% en tratamiento quirúrgico</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prevención de caídas:</strong> Ejercicio, evaluación domiciliaria</li>
        <li><strong>Manejo osteoporosis:</strong> Calcio, vitamina D, bifosfonatos</li>
        <li><strong>Protección deportiva:</strong> Equipo adecuado</li>
        <li><strong>Rehabilitación precoz:</strong> Evitar rigideces</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas de húmero requieren un manejo individualizado según localización, desplazamiento y características del paciente. 
        Mientras las fracturas no desplazadas pueden tratarse conservadoramente con buenos resultados, las desplazadas o complejas 
        requieren reducción anatómica y fijación estable. La rehabilitación supervisada es clave para recuperar la función del miembro superior.
      </p>
    </div>
  );
}

export default FxHumero;
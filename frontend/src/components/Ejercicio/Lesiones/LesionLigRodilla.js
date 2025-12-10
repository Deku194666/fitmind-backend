

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigRod from './NavBArLesLigRod';

function LesionLigRodilla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        <NavBarLesLigRod/>
      
      <p className='p13'>Lesiones de Ligamentos de Rodilla</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones ligamentosas de rodilla representan el <strong>40% de todas las lesiones deportivas</strong> en extremidades inferiores. 
        Son particularmente frecuentes en deportes con cambios de dirección bruscos (fútbol, baloncesto, esquí) y pueden comprometer 
        severamente la estabilidad articular.
      </p>

      <p className='p14'>📌 Ligamentos Principales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Ligamento Cruzado Anterior (LCA)</strong> - Lesión más frecuente (70%)</li>
        <li><strong>Ligamento Cruzado Posterior (LCP)</strong> - Generalmente por trauma directo</li>
        <li><strong>Ligamento Colateral Medial (LCM)</strong> - Mecanismo en valgo</li>
        <li><strong>Ligamento Colateral Lateral (LCL)</strong> - Mecanismo en varo</li>
        <li><strong>Ligamento Patelofemoral</strong> - Asociado a inestabilidad rotuliana</li>
      </ul>

      <p className='p14'>📌 Clasificación de Lesiones</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '4rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Síntomas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros (menor a 25% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor localizado, mínima inflamación</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (25-75%)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor moderado, edema, inestabilidad leve</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura completa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hematoma, inestabilidad marcada, "giving way"</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Mecanismos Lesionales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>LCA:</strong> Rotación + valgo forzado (ej.: aterrizaje en extensión)</li>
        <li><strong>LCP:</strong> Impacto directo en tibia proximal (ej.: accidente automovilístico)</li>
        <li><strong>LCM:</strong> Valgo brusco (ej.: placaje en fútbol)</li>
        <li><strong>LCL:</strong> Varo forzado + rotación externa</li>
      </ul>

      <p className='p14'>📌 Diagnóstico Clínico</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ligamento</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba Especial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgo Positivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCA</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lachman, Cajón anterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Traslación tibial mayor a 5mm</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cajón posterior</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída tibial posterior</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>LCM</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Valgo stress test (30° flexión)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Apertura medial mayor a 10mm</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Tratamiento Inmediato</p>
      <p className='p16'>Protocolo PEACE & LOVE (primeras 72h):</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>P</strong>rotection: Inmovilización relativa</li>
        <li><strong>E</strong>levation: Elevación sobre corazón</li>
        <li><strong>A</strong>void antiinflamatorios: Pueden interferir con reparación tisular</li>
        <li><strong>C</strong>ompression: Vendaje compresivo</li>
        <li><strong>E</strong>ducation: Educación sobre carga progresiva</li>
        <li><strong>L</strong>oad: Carga temprana según tolerancia</li>
        <li><strong>O</strong>ptimism: Manejo expectativas realistas</li>
        <li><strong>V</strong>ascularization: Actividad suave sin dolor</li>
        <li><strong>E</strong>xercise: Movilización temprana</li>
      </ul>

      <p className='p14'>📌 Manejo Específico</p>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Tratamiento Conservador</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Indicado en:</strong> Grado I-II, LCP aislado, pacientes sedentarios</li>
            <li><strong>Fisioterapia:</strong> Fortalecimiento cuádriceps/isquiotibiales</li>
            <li><strong>Propiocepción:</strong> Ejercicios en tabla de equilibrio</li>
          </ul>
        </div>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Tratamiento Quirúrgico</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Indicado en:</strong> Grado III, atletas, lesiones combinadas</li>
            <li><strong>Técnicas:</strong> Reconstrucción con injerto (hueso-tendón-hueso, semitendinoso)</li>
            <li><strong>Postoperatorio:</strong> Inmovilización 4-6 semanas</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📌 Rehabilitación</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Control edema, rango de movimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0-2 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento, marcha normal</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-6 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Funcional</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propiocepción, gestos deportivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>6-12 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pruebas funcionales, deporte específico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3-6 meses</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad crónica</strong> (principalmente LCA no tratado)</li>
        <li><strong>Artrosis precoz</strong> (riesgo aumentado 5x con LCA lesionado)</li>
        <li><strong>Rigidez articular</strong> (especialmente postquirúrgica)</li>
        <li><strong>Lesiones meniscales secundarias</strong></li>
      </ul>

      <p className='p14'>📌 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Programas neuromusculares:</strong> Ejercicios de aterrizaje (reduce LCA en mujeres 50%)</li>
        <li><strong>Fortalecimiento:</strong> Cuádriceps excéntrico, glúteo medio</li>
        <li><strong>Calentamiento:</strong> Incluir ejercicios pliométricos</li>
        <li><strong>Calzado:</strong> Adecuado a superficie deportiva</li>
      </ul>
    </div>
  );
}

export default LesionLigRodilla;
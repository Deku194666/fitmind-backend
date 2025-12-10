

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarLesLigMM from './NavBarLesLigMM';

function LesionLigMM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        <NavBarLesLigMM/>
      
      <p className='p13'>Lesiones Ligamentosas e Inestabilidades de Muñeca, Mano y Dedos</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las lesiones ligamentosas en mano y muñeca representan el <strong>20-30% de todas las lesiones</strong> de la extremidad superior. 
        Son particularmente comunes en deportes de contacto, actividades laborales y caídas. La estabilidad de estas articulaciones 
        depende de complejas interacciones ligamentarias que permiten movimientos precisos mientras mantienen la estabilidad.
      </p>

      <p className='p14'>📌 Estructuras Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Muñeca</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamento escafolunar</strong>: Principal estabilizador proximal</li>
            <li><strong>Ligamento lunotriquetral</strong>: Estabilidad ulnar</li>
            <li><strong>TFCC</strong> (Triangular Fibrocartilage Complex): Estabilizador distal</li>
          </ul>
        </li>
        <li><strong>Mano</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamentos colaterales MCF</strong>: Estabilidad radial/ulnar</li>
            <li><strong>Placa volar</strong>: Previene hiperextensión</li>
          </ul>
        </li>
        <li><strong>Dedos</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Ligamento colateral radial/ulnar IFP/IFD</strong></li>
            <li><strong>Placa volar</strong>: Estabilizador primario</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📌 Clasificación de Lesiones</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión Típica</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Muñeca</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión escafolunar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caída en hiperextensión</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>CMC Pulgar</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión de Stener</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Abducción forzada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>MCF Dedos</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión colateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desviación lateral forzada</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>IFP</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dedo en martillo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hiperflexión brusca</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Mecanismos de Lesión</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Traumático agudo</strong>: Caída sobre mano extendida (FOOSH), torsiones forzadas</li>
        <li><strong>Microtrauma repetitivo</strong>: Deportes de raqueta, actividades manuales repetitivas</li>
        <li><strong>Hiperextensión</strong>: Especialmente en articulaciones MCF e IFP</li>
        <li><strong>Fuerzas laterales</strong>: Para lesiones de ligamentos colaterales</li>
      </ul>

      <p className='p14'>📌 Diagnóstico Clínico</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Lesión</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba Especial</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgo Positivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Escafolunar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Test de Watson</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Chasquido doloroso</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>CMC Pulgar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba de estrés en valgo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud mayor a 35° o diferencia mayor a 15° contralateral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colateral IFP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba de estrés lateral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Apertura articular mayor a 20°</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>TFCC</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Test de compresión ulnar</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor y crepitación</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Estudios de Imagen</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/radiografia">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsiones, malalineamientos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea, estrés views</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Integridad ligamentosa, edema</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lesiones intrínsecas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía dinámica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud ligamentosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación funcional</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Artro-RMN</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desgarros completos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos complejos</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Tratamiento Conservador</p>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Fase Aguda (0-3 semanas)</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Inmovilización</strong>: Férula funcional según lesión</li>
            <li><strong>Control inflamación</strong>: RICE protocol</li>
            <li><strong>Movilización temprana</strong>: Cuando sea estable</li>
          </ul>
        </div>
        <div style={{ flex: 1, border: '1px solid #e0e0e0', padding: '1rem', borderRadius: '8px' }}>
          <p className='p16'>Rehabilitación (3-8 semanas)</p>
          <ul className='p150' style={{ listStyleType: 'disc' }}>
            <li><strong>Fortalecimiento</strong>: Progresivo isométrico a excéntrico</li>
            <li><strong>Propiocepción</strong>: Ejercicios de prensión</li>
            <li><strong>Estiramientos</strong>: Controlados</li>
          </ul>
        </div>
      </div>

      <p className='p14'>📌 Tratamiento Quirúrgico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Indicaciones</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Lesión de Stener (pulgar)</li>
            <li>Inestabilidad escafolunar mayor a 3mm</li>
            <li>Roturas completas colaterales IFP con inestabilidad</li>
          </ul>
        </li>
        <li><strong>Técnicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Reparación directa</strong>: Para lesiones agudas</li>
            <li><strong>Reconstrucción ligamentosa</strong>: Injertos tendinosos</li>
            <li><strong>Artroscopia</strong>: Para TFCC y lesiones escafolunares</li>
            <li><strong>Fijación temporal con K-wires</strong></li>
          </ul>
        </li>
      </ul>

      <p className='p14'>📌 Rehabilitación Postquirúrgica</p>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>0-4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>ROM completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4-8 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fuerza 80%</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>8-12 semanas</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>📌 Ejercicios Clave</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Movilizaciones activo-asistidas</strong>: Para recuperar ROM</li>
        <li><strong>Pinzas de precisión</strong>: Para recuperación funcional</li>
        <li><strong>Ejercicios con masilla</strong>: Fortalecimiento progresivo</li>
        <li><strong>Coordinación fina</strong>: Actividades de destreza</li>
      </ul>

      <p className='p14'>📌 Complicaciones</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Rigidez articular</strong>: Principal complicación</li>
        <li><strong>Inestabilidad crónica</strong>: Por diagnóstico tardío</li>
        <li><strong>Artrosis postraumática</strong>: Secuela tardía</li>
        <li><strong>Disfunción grip</strong>: Por desalineación</li>
      </ul>

      <p className='p14'>📌 Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Fortalecimiento intrínseco</strong>: Músculos de la mano</li>
        <li><strong>Protección en deportes</strong>: Vendajes funcionales</li>
        <li><strong>Ergonomía laboral</strong>: Para trabajos manuales</li>
        <li><strong>Educación en caídas</strong>: Técnica de apoyo</li>
      </ul>

      <p className='p14'>📌 Consideraciones Especiales</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lesión de Stener</strong>: Siempre requiere reparación quirúrgica</li>
        <li><strong>Dedo en ojal</strong>: Diferentes grados de afectación</li>
        <li><strong>Inestabilidad carpiana</strong>: Diagnóstico precoz esencial</li>
        <li><strong>TFCC</strong>: Manejo diferenciado central vs periférico</li>
      </ul>
    </div>
  );
}

export default LesionLigMM;
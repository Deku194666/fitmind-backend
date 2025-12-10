

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function LesionStener() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Lesión de Stener (Esguince del Ligamento Colateral Cubital del Pulgar)</p>
      
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        La lesión de Stener es una <strong>rotura completa del ligamento colateral cubital (LCC) de la articulación metacarpofalángica (MCF) del pulgar</strong>, 
        donde el tendón del aductor se interpone entre los extremos rotos del ligamento, impidiendo su cicatrización espontánea. 
        Representa el <strong>10-15% de todas las lesiones de la mano</strong> y es conocida como "pulgar del esquiador" o "pulgar del guardabosques".
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>
          <strong>Ligamento Colateral Cubital (LCC)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Principal estabilizador contra fuerzas en valgo</li>
            <li>Inserción proximal: Cabeza del primer metacarpiano</li>
            <li>Inserción distal: Base de la falange proximal</li>
          </ul>
        </li>
        <li>
          <strong>Relación con el tendón del aductor</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>El tendón del aductor pollicis discurre superficial al LCC</li>
            <li>En lesiones completas, puede interponerse (lesión de Stener)</li>
          </ul>
        </li>
        <li>
          <strong>Estabilizadores accesorios</strong>: Placa volar, ligamento colateral radial
        </li>
      </ul>

      <p className='p14'>Clasificación de la Lesión 📊</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Daño Estructural</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clínicos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>I (Leve)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Microdesgarros sin laxitud</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor localizado, sin inestabilidad</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>II (Moderado)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura parcial (50% fibras)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dolor + laxitud leve (menor a 15°)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>III (Completo)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura total sin Stener</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud mayor a 15° pero reducible</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Stener (Completa +)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rotura total con interposición</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Laxitud mayor a 30°, masa palpable</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Abducción forzada + extensión</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Caída sobre mano abierta con pulgar en abducción</li>
            <li>Esquí (bastón atrapado en nieve) - 50% de casos</li>
          </ul>
        </li>
        <li><strong>Hiperextensión + rotación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Deportes de contacto (rugby, balonmano)</li>
          </ul>
        </li>
        <li><strong>Trauma directo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Impacto sobre el pulgar en abducción</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Examen Físico</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Prueba de estrés en valgo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>MCF en 30° flexión (aisla LCC)</li>
            <li>Laxitud mayor a 30° o diferencia mayor a 15° vs contralateral</li>
          </ul>
        </li>
        <li><strong>Masa palpable</strong>: Tumoración dolorosa (tendón aductor interpuesto)</li>
        <li><strong>Dolor focal</strong>: Sobre inserción del LCC</li>
        <li><strong>Equimosis</strong>: En fase aguda (primeras 48h)</li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Avulsión ósea (30% casos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estrés en valgo (bilateral comparativo)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Interposición tendón aductor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmación lesión Stener (sensibilidad 97%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Discontinuidad ligamentosa</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluación dinámica</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Lesiones grado I-II (parciales)</li>
        <li>Lesiones completas sin Stener (grado III) en pacientes no activos</li>
        <li>Avulsiones pequeñas no desplazadas (menor a 2mm)</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Férula espica pulgar (MCF en ligera flexión)</li>
            <li>4-6 semanas para lesiones parciales</li>
          </ul>
        </li>
        <li><strong>Control evolutivo</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Evaluar aparición de inestabilidad</li>
            <li>Radiografías de control a las 2 semanas</li>
          </ul>
        </li>
        <li><strong>Rehabilitación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva post-inmovilización</li>
            <li>Fortalecimiento de aductor y musculatura intrínseca</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Indicaciones absolutas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Lesión de Stener confirmada</strong> (100% de los casos)</li>
        <li>Avulsiones óseas desplazadas (mayor a 2mm)</li>
        <li>Inestabilidad persistente post-tratamiento conservador</li>
      </ul>

      <p className='p16'>Técnicas Quirúrgicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reparación directa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Reinserción con anclajes óseos o sutura transósea</li>
            <li>Para lesiones agudas (menor a 3 semanas)</li>
          </ul>
        </li>
        <li><strong>Reconstrucción ligamentosa</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Injerto tendón palmaris longus o extensor propio del índice</li>
            <li>Para lesiones crónicas o tejido insalvable</li>
          </ul>
        </li>
        <li><strong>Fijación de avulsiones óseas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Tornillos canulados o K-wires para fragmentos grandes</li>
          </ul>
        </li>
      </ul>

      <p className='p16'>Postoperatorio:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inmovilización</strong>: Férula espica durante 4 semanas</li>
        <li><strong>Protección</strong>: Evitar estrés en valgo por 3 meses</li>
        <li><strong>Rehabilitación</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Movilización progresiva desde 4ª semana</li>
            <li>Fortalecimiento desde 8ª semana</li>
          </ul>
        </li>
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
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1 (0-4 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Protección reparación</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2 (4-8 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar ROM completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>3 (8-12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fortalecimiento progresivo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 semanas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>4 (mayor a 12 sem)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Retorno actividades</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Personalizado</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Inestabilidad crónica</strong>: Por diagnóstico tardío</li>
        <li><strong>Artrosis MCF</strong>: Secuela tardía (5-10 años post-lesión)</li>
        <li><strong>Rigidez articular</strong>: Principalmente extensión</li>
        <li><strong>Dolor residual</strong>: Por neuroma del nervio radial superficial</li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Uso de bastones correctos en esquí</strong> (con dragonera)</li>
        <li><strong>Vendaje funcional</strong> en deportes de contacto</li>
        <li><strong>Fortalecimiento musculatura intrínseca</strong></li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        La lesión de Stener representa una emergencia quirúrgica en patología de la mano, ya que la interposición del tendón del aductor impide la cicatrización espontánea. 
        El diagnóstico temprano mediante examen físico cuidadoso y estudios de imagen adecuados es crucial para prevenir inestabilidad crónica y artrosis secundaria. 
        Mientras las lesiones parciales pueden manejarse conservadoramente, las lesiones completas con fenómeno de Stener requieren reparación quirúrgica para restaurar 
        la estabilidad de la pinza pulgar.
      </p>
    </div>
  );
}

export default LesionStener;
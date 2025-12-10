

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FxCadera() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className='p13'>Fracturas de Cadera</p>
      <p className='p14'>📌 Introducción</p>
      <p className='p150'>
        Las fracturas de cadera representan una de las lesiones más graves en adultos mayores, con una incidencia anual de <strong>mayor a 300,000 casos</strong> en EE.UU. y una mortalidad al año del <strong>15-30%</strong>. 
        Son consideradas fracturas por fragilidad y requieren manejo quirúrgico urgente (menor a 24-48h) para reducir complicaciones.
      </p>

      <p className='p14'>Anatomía Clave 🦴</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Cuello femoral</strong>: Intraarticular, vascularización precaria (riesgo de necrosis avascular)</li>
        <li><strong>Región intertrocantérea</strong>: Entre trocánter mayor y menor, rica vascularización</li>
        <li><strong>Subtrocantérea</strong>: 5 cm distal a trocánter menor, zona de alto estrés mecánico</li>
        <li><strong>Vascularización</strong>: Arteria circunfleja medial (principal aporte a cabeza femoral)</li>
      </ul>

      <p className='p14'>Clasificación de Fracturas 📊</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Localización</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clasificación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Riesgo AVN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Intracapsulares</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Cuello femoral</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Garden I-IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>15-30%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Extracapsulares</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Intertrocantérea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AO/OTA 31-A</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>menor a 5%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subtrocantéreas</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>5 cm distal a trocánter menor</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Seinsheimer</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Variable</td>
          </tr>
        </tbody>
      </table>

      <p className='p16'>Clasificación de Garden (Cuello Femoral)</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grado</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Descripción</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>I</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Impactación incompleta (trabéculas alineadas)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>II</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fractura completa sin desplazamiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>III</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazamiento parcial (trabéculas desalineadas)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inestable</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>IV</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Desplazamiento completo</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Altamente inestable</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Mecanismos de Lesión 🤕</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Caída de baja energía</strong>: 90% de casos (ancianos con osteoporosis)</li>
        <li><strong>Trauma de alta energía</strong>: Accidentes vehiculares, caídas de altura (adultos jóvenes)</li>
        <li><strong>Factores de riesgo</strong>: Edad mayor a 65 años, osteoporosis, déficit vitamina D, antecedentes de caídas</li>
      </ul>

      <p className='p14'>Diagnóstico 🩺</p>
      <p className='p16'>1. Presentación Clínica</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Dolor inguinal/coxofemoral</strong>: Intenso al movimiento</li>
        <li><strong>Acortamiento y rotación externa</strong>: Signo clásico en fracturas desplazadas</li>
        <li><strong>Imposibilidad para deambular</strong>: 95% de los casos</li>
        <li><strong>"Hip fracture position"</strong>: Pierna acortada + rotada externamente</li>
      </ul>

      <p className='p16'>2. Estudios de Imagen</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Prueba</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicación</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Hallazgos Clave</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rx">Radiografía</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AP pelvis + axial cadera, línea de fractura</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/rmn">RMN</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>RX negativa con alta sospecha</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Edema óseo, fractura oculta (sensibilidad 99%)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/examenes/tac">TAC</Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Planificación quirúrgica compleja</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reconstrucción 3D, compromiso articular</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Gammagrafía</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Casos seleccionados</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumento captación tardía (48-72h post-trauma)</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Tratamiento Conservador 🏥</p>
      <p className='p16'>Indicado en:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li>Pacientes no ambulatorios previamente con dolor controlado</li>
        <li>Fracturas impactadas Garden I en pacientes muy ancianos</li>
        <li>Contraindicación absoluta para cirugía</li>
      </ul>

      <p className='p16'>Protocolo:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Reposo en cama</strong>: Con cambios posturales frecuentes</li>
        <li><strong>Analgesia multimodal</strong>: Opioides + acetaminofén</li>
        <li><strong>Profilaxis TEV</strong>: Heparina de bajo peso molecular</li>
        <li><strong>Movilización pasiva</strong>: Prevenir contracturas</li>
      </ul>

      <p className='p14'>Tratamiento Quirúrgico 🔪</p>
      <p className='p16'>Principios:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Urgencia</strong>: Ideal menor a 24-48h (reduce mortalidad)</li>
        <li><strong>Estabilización</strong>: Permite movilización precoz</li>
        <li><strong>Reducción anatómica</strong>: Especialmente en pacientes jóvenes</li>
      </ul>

      <p className='p16'>Técnicas por Tipo de Fractura:</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Intracapsulares (Cuello femoral)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Osteosíntesis</strong>: Tornillos canulados (Garden I-II)</li>
            <li><strong>Artroplastia</strong>: Hemiartroplastia (Garden III-IV en ancianos)</li>
            <li><strong>Artroplastia total</strong>: En artrosis preexistente</li>
          </ul>
        </li>
        <li><strong>Extracapsulares (Intertrocantéricas)</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Clavo cephalomedular</strong>: Gold standard (Gamma nail, PFNA)</li>
            <li><strong>Placa deslizante</strong>: DHS (para fracturas estables 31-A1/A2)</li>
          </ul>
        </li>
        <li><strong>Subtrocantéricas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li><strong>Clavo largo</strong>: Recon o PFN-Long</li>
            <li><strong>Placa de compresión</strong>: LCP 95°</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Rehabilitación 🏋️‍♂️</p>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Objetivos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Aguda (0-72h)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Movilización precoz, analgesia, prevención complicaciones</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta alta hospitalaria</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Subaguda (1-6 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Deambulación progresiva, fortalecimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta soporte de peso completo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Recuperación (6-12 sem)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Recuperar marcha independiente, equilibrio</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hasta retorno a actividades básicas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Mantenimiento (mayor a 3 mes)</strong></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prevención de nuevas caídas, tratamiento osteoporosis</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Continuo</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Complicaciones ⚠️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Médicas</strong>: 
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Infección urinaria/neumonía (30%)</li>
            <li>Tromboembolismo pulmonar (1-3%)</li>
            <li>Delirium postoperatorio (15-20%)</li>
          </ul>
        </li>
        <li><strong>Quirúrgicas</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Infección profunda (1-5%)</li>
            <li>Fallo de osteosíntesis (5-10%)</li>
            <li>Necrosis avascular (Garden III-IV: 15-30%)</li>
          </ul>
        </li>
        <li><strong>Funcionales</strong>:
          <ul style={{ listStyleType: 'circle', marginLeft: '2rem' }}>
            <li>Pérdida de autonomía (40% no recuperan marcha previa)</li>
            <li>Artrosis postraumática</li>
          </ul>
        </li>
      </ul>

      <p className='p14'>Prevención 🛡️</p>
      <ul className='p150' style={{ listStyleType: 'disc' }}>
        <li><strong>Tratamiento osteoporosis</strong>: Bifosfonatos, denosumab</li>
        <li><strong>Suplementación</strong>: Calcio + vitamina D</li>
        <li><strong>Programas de equilibrio</strong>: Tai Chi, ejercicios de fortalecimiento</li>
        <li><strong>Modificación domiciliaria</strong>: Barras de apoyo, iluminación adecuada</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>
        Las fracturas de cadera constituyen una urgencia geriátrica que requiere manejo quirúrgico temprano (menor a 48h) y abordaje multidisciplinario. 
        Mientras las fracturas intracapsulares en ancianos suelen requerir artroplastia, las extracapsulares se tratan con osteosíntesis. 
        La rehabilitación precoz y el tratamiento de la osteoporosis subyacente son esenciales para reducir la alta mortalidad asociada (30% al año).
      </p>
    </div>
  );
}

export default FxCadera;
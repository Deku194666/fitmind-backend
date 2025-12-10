

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Contractura() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className="ecnt-detail">
      <p className='p13'>Contracturas Musculares</p>
      <p className='p14'>Introducción</p>
      <p className='p150'>Las <strong>Contracturas Musculares</strong> son contracciones involuntarias y persistentes de fibras musculares que afectan al <strong>60% de adultos</strong>, especialmente en zonas cervicales y lumbares. A diferencia de los calambres, no son dolorosas inicialmente pero generan molestias crónicas y limitación funcional progresiva. Representan la causa del 30% de consultas por dolor musculoesquelético.</p>
        
      <p className='p14'>Tipos de Contracturas 🧠</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Posturales:</strong> Por malas posiciones mantenidas (ej.: tortícolis por computadora)</li>
        <li><strong>Por sobreuso:</strong> En deportistas o trabajos repetitivos (ej.: trapecio en nadadores)</li>
        <li><strong>Reflejas:</strong> Secundarias a otras lesiones (ej.: contractura lumbar por hernia discal)</li>
        <li><strong>Idiopáticas:</strong> Sin causa aparente (asociadas a estrés emocional)</li>
      </ul>

      <p className='p14'>Fisiopatología 🧬</p>
      <p className='p150'>Mecanismo de formación en 4 etapas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>1. Hiperactividad:</strong> Aumento tono basal por estrés mecánico/emocional</li>
        <li><strong>2. Isquemia local:</strong> Compresión vascular por contracción mantenida</li>
        <li><strong>3. Acumulación metabolitos:</strong> Ácido láctico y sustancias algógenas</li>
        <li><strong>4. Ciclo dolor-espasmo:</strong> Perpetuación del cuadro</li>
      </ul>
      <p className='p150'>Los músculos más afectados son trapecio (40%), paravertebrales (30%) y gemelos (15%).</p>

      <p className='p14'>Factores de Riesgo</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><Link to="/ecnt/estres">Estrés emocional crónico</Link> (aumenta tono simpático)</li>
        <li>Posturas estáticas prolongadas (oficina, conducción)</li>
        <li>Desequilibrios musculares (acortamientos/debilidades)</li>
        <li>Sedentarismo o sobreentrenamiento</li>
        <li><Link to="/ecnt/deshidratacion">Deshidratación</Link> y déficit de electrolitos</li>
        <li>Enfermedades reumáticas (<Link to="/ecnt/fibromialgia">fibromialgia</Link>)</li>
      </ul>
      
      <p className='p14'>Síntomas Característicos</p>
      <p className='p150'>Manifestaciones clínicas progresivas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>📌 <strong>Tempranas:</strong> Rigidez local, pesadez muscular</li>
        <li>📌 <strong>Intermedias:</strong> Dolor sordo que mejora con movimiento suave</li>
        <li>📌 <strong>Avanzadas:</strong> Nódulos palpables ("puntos gatillo"), dolor referido</li>
        <li>📌 <strong>Asociados:</strong> Cefaleas tensionales, limitación articular</li>
      </ul>

      <p className='p14'>🩺Diagnóstico</p>
      <p className='p16'>1) Evaluación Clínica</p>
      <p className='p16'>📌 Hallazgos clave:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>🔍 <strong>Inspección:</strong> Asimetrías posturales, hipertonía visible</li>
        <li>✋ <strong>Palpación:</strong> Bandas tensas, nódulos dolorosos (puntos gatillo)</li>
        <li>🏋️ <strong>Movilidad:</strong> Limitación dolorosa al estiramiento pasivo</li>
      </ul>
      <p className='p16'>2. Estudios Complementarios</p>

<table style={{ width: '70%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Prueba </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Utilidad </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Hallazgos </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Electromiografía</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Confirmar hiperactividad eléctrica</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Potenciales de unidad motora continuos</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Termografía</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evaluar cambios térmicos locales</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumento temperatura en zona contracturada</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ecografía</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Descartar otras patologías</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aumento ecogenicidad muscular</td>
    </tr>
  </tbody>
</table>

      <p className='p16'>3. Diagnóstico Diferencial</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Calambre muscular:</strong> Contracción dolorosa transitoria</li>
        <li><strong>Miositis:</strong> Inflamación muscular con CK elevada</li>
        <li><strong>Distonía focal:</strong> Contracción involuntaria organizada</li>
      </ul>

      <p className='p14'>Tratamiento</p>
      <p className='p16'>🔴 Medidas Generales:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Educación postural y ergonomía</li>
        <li>Actividad física regular (yoga, natación)</li>
        <li>Termoterapia local (almohadillas térmicas 15-20min)</li>
      </ul>
      
      <p className='p16'>🔴 Terapias Físicas:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li>Masaje descontracturante (técnica de Cyriax)</li>
        <li>Estiramientos mantenidos (30-45 segundos)</li>
        <li>Electroterapia (TENS, corrientes interferenciales)</li>
        <li>Vendaje neuromuscular (kinesiotaping)</li>
      </ul>

      <p className='p16'>🔴 Tratamientos Avanzados:</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Punción seca:</strong> Para puntos gatillo activos</li>
        <li><strong>Ondas de choque:</strong> En contracturas crónicas</li>
        <li><strong>Acupuntura:</strong> Efecto relajante muscular</li>
      </ul>
   
      <p className='p14'>Fármacos</p>
      <p className='p150'>Uso racional (solo para crisis agudas):</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Relajantes musculares:</strong> Ciclobenzaprina (2-3 semanas máximo)</li>
        <li><strong>Analgésicos:</strong> Paracetamol o AINES por corto tiempo</li>
        <li><strong>Toxina botulínica:</strong> En casos refractarios seleccionados</li>
      </ul>

      <p className='p14'>Plan de Rehabilitación</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Fase </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Duración </th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}> Intervenciones </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Aguda</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1-2 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Termoterapia + Masaje superficial</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subaguda</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-4 semanas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estiramientos + Fortalecimiento antagonista</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mantenimiento</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Indefinido</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reeducación postural + Automasajes</td>
          </tr>
        </tbody>
      </table>

      <p className='p14'>Prevención</p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li><strong>Pausas activas:</strong> Cada 2h en trabajos sedentarios</li>
        <li><strong>Ejercicios de movilidad:</strong> 10-15min diarios</li>
        <li><strong>Hidratación adecuada:</strong> 35ml/kg de peso al día</li>
        <li><strong>Manejo del estrés:</strong> Técnicas de relajación/respiración</li>
        <li><strong>Condicionamiento físico:</strong> Equilibrio agonista-antagonista</li>
      </ul>

      <p className='p14'>Conclusión</p>
      <p className='p150'>Las <strong>Contracturas Musculares</strong>, aunque comunes, deben abordarse integralmente. El tratamiento combinado de terapia manual, ejercicios específicos y manejo de factores predisponentes ofrece los mejores resultados. La prevención mediante hábitos posturales correctos y actividad física regular es fundamental. En casos crónicos, un enfoque multidisciplinar (fisioterapia, psicología, medicina) puede ser necesario para romper el ciclo dolor-espasmo-dolor.</p>
    </div>
  );
}

export default Contractura;
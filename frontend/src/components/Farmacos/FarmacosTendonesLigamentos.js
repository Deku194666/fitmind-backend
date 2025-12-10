

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function FarmacosTendonesLigamentos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Tendones y Ligamentos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        El manejo farmacológico de lesiones tendinosas y ligamentosas se enfoca principalmente en controlar el dolor y la inflamación. Aunque el tratamiento de base es fisioterapéutico, los fármacos cumplen un rol coadyuvante durante fases agudas o subagudas de la recuperación.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Inhibición de la ciclooxigenasa (COX-1 y COX-2) para reducir prostaglandinas inflamatorias.</li>
        <li>Modulación de vías del dolor mediante acción central y periférica.</li>
        <li>Reducción del edema local y alivio de la hiperalgesia.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Tendinopatías agudas o crónicas</li>
        <li>Esguinces y distensiones ligamentosas</li>
        <li>Dolor inflamatorio musculotendinoso</li>
        <li>Fase postoperatoria de cirugía ligamentaria</li>
        <li>Inflamación peritendinosa o entesitis</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', marginLeft: '6rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clasificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/ibuprofeno"> Ibuprofeno  </Link>   </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>400–600 mg cada 8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AINE no selectivo</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diclofenaco</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>50 mg cada 8–12 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AINE tópico u oral</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Paracetamol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>500–1000 mg cada 6–8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Analgésico central</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Colágeno tipo I/III + vitamina C</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Suplemento diario</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Coadyuvante regenerativo</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Gastritis o dispepsia (AINEs)</li>
        <li>Riesgo cardiovascular (uso prolongado de AINEs)</li>
        <li>Toxicidad hepática (paracetamol en dosis altas)</li>
        <li>Reacciones alérgicas o intolerancia digestiva (suplementos)</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Úlcera péptica activa</li>
        <li>Insuficiencia renal o hepática severa</li>
        <li>Antecedentes de alergia a AINEs</li>
        <li>Pacientes con alto riesgo cardiovascular</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con anticoagulantes: mayor riesgo de sangrado</li>
        <li>Con corticoides: aumento del riesgo de úlceras</li>
        <li>Con IECA o ARA II: posible deterioro de función renal</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Usar AINEs por el menor tiempo posible</li>
        <li>Evaluar siempre la causa biomecánica de la lesión</li>
        <li>Asociar con fisioterapia activa desde fases iniciales</li>
        <li>Evitar reposo prolongado sin justificación</li>
      </ul>
    </div>
  );
}

export default FarmacosTendonesLigamentos;

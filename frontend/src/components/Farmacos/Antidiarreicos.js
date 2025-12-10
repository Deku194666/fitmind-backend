

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Antidiarreicos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antidiarreicos</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antidiarreicos</strong> son fármacos utilizados para reducir la frecuencia, urgencia o volumen de las deposiciones en casos de diarrea, especialmente cuando esta es sintomática, no infecciosa o crónica.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Disminuyen la motilidad intestinal (opioides sintéticos)</li>
        <li>Absorben toxinas y líquidos (adsorbentes)</li>
        <li>Modifican la flora intestinal (probióticos)</li>
      </ul>

      <p className="p14">📋 Clasificación e Indicaciones</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Indicaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antimotilidad (opioides sintéticos)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Loperamida, Difenoxilato</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diarrea no infecciosa aguda o crónica</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Adsorbentes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Caolín, Pectina, Carbón activado</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diarrea leve de origen no infeccioso</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antisecretores</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Subsalicilato de bismuto</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Diarrea del viajero, infecciones leves</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Probióticos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lactobacillus, Saccharomyces</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Prevención y tratamiento de diarrea asociada a antibióticos</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Estreñimiento</li>
        <li>Distensión abdominal</li>
        <li>Somnolencia o depresión del SNC (opioides)</li>
        <li>Reacciones alérgicas o intolerancia a probióticos</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Diarrea infecciosa bacteriana invasiva (como Shigella, Salmonella, E. coli enterohemorrágica)</li>
        <li>Colitis pseudomembranosa</li>
        <li>Sangrado rectal o fiebre alta sin diagnóstico</li>
        <li>Niños menores de 2 años (riesgo de ileo paralítico con loperamida)</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Loperamida puede potenciar efectos depresores del SNC con otros sedantes</li>
        <li>Subsalicilato de bismuto puede interferir con pruebas de laboratorio (guayaco)</li>
        <li>Adsorbentes pueden reducir absorción de otros fármacos orales</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evaluar causa de la diarrea antes de iniciar tratamiento farmacológico</li>
        <li>Reponer líquidos y electrolitos como medida primaria</li>
        <li>Evitar el uso de antimotilidad en infecciones bacterianas invasivas</li>
        <li>Uso racional en diarreas funcionales o por síndrome de intestino irritable</li>
      </ul>
    </div>
  );
}

export default Antidiarreicos;

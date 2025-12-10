

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AntihistaminicosH1PrimeraGen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Antihistamínicos H1 (1ª Generación)</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antihistamínicos H1 de Primera Generación</strong> son fármacos que bloquean los receptores H1 de histamina. Se utilizan en alergias, náuseas, vértigo y como sedantes. A diferencia de los de segunda generación, atraviesan la barrera hematoencefálica, provocando efectos sedantes marcados.
      </p>

      <p className="p14">🧪 Mecanismo de Acción</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Antagonismo competitivo reversible de los receptores H1 periféricos y centrales.</li>
        <li>Disminuyen la permeabilidad capilar, prurito y la respuesta alérgica.</li>
        <li>Muchos poseen efectos anticolinérgicos, sedantes y antieméticos.</li>
      </ul>

      <p className="p14">📋 Indicaciones Principales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Rinitis alérgica y conjuntivitis</li>
        <li>Urticaria</li>
        <li>Prurito</li>
        <li>Cinetosis y vértigo</li>
        <li>Insomnio ocasional</li>
        <li>Reacciones anafilácticas (como parte del tratamiento coadyuvante)</li>
      </ul>

      <p className="p14">💊 Ejemplos Comunes</p>
      <table style={{ width: '80%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármaco</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Dosis habitual</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Efecto sedante</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Difenhidramina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25-50 mg cada 6-8 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alto</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/farmacos2/clorfenamina"> Clorfenamina </Link></td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2-4 mg cada 6 h</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Moderado</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hidroxicina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>25-100 mg/día</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Alto</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Efectos Adversos</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Somnolencia y sedación</li>
        <li>Sequedad de boca, visión borrosa</li>
        <li>Retención urinaria</li>
        <li>Confusión (especialmente en ancianos)</li>
        <li>Taquicardia o palpitaciones</li>
      </ul>

      <p className="p14">🔄 Contraindicaciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hipersensibilidad al principio activo</li>
        <li>Glaucoma de ángulo cerrado</li>
        <li>Retención urinaria o hiperplasia prostática</li>
        <li>Uso concomitante con depresores del SNC</li>
      </ul>

      <p className="p14">📉 Interacciones Relevantes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Con alcohol u otros sedantes: aumenta el efecto depresor del SNC</li>
        <li>Con anticolinérgicos: potenciación de efectos adversos</li>
        <li>Con inhibidores de MAO: riesgo de crisis hipertensiva</li>
      </ul>

      <p className="p14">📚 Recomendaciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>No se recomiendan como tratamiento crónico de primera línea para alergias</li>
        <li>Evitar su uso en adultos mayores por riesgo de deterioro cognitivo</li>
        <li>Útiles en cuadros agudos con prurito o reacciones alérgicas intensas</li>
        <li>No conducir ni operar maquinaria pesada bajo su efecto</li>
      </ul>
    </div>
  );
}

export default AntihistaminicosH1PrimeraGen;

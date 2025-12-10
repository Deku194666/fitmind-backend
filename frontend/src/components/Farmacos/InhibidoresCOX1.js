

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InhibidoresCOX1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Inhibidores de la COX-1</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Inhibidores de la Ciclooxigenasa-1 (COX-1)</strong>, como la <strong>aspirina en dosis bajas</strong>, actúan bloqueando de forma irreversible esta enzima, 
        lo que reduce la formación de tromboxano A2 (TXA2) en las plaquetas. Esta acción inhibe la agregación plaquetaria, por lo que se utilizan como <strong>antiagregantes plaquetarios</strong> en la prevención cardiovascular.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        La COX-1 participa en la síntesis de prostanoides como el TXA2 en las plaquetas, el cual induce vasoconstricción y agregación plaquetaria. 
        La <strong>aspirina</strong> inhibe de forma irreversible esta enzima, suprimiendo la producción de TXA2 durante toda la vida de la plaqueta (7-10 días).
      </p>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Prevención primaria en pacientes con alto riesgo cardiovascular.</li>
        <li>Prevención secundaria de infarto agudo al miocardio (IAM) o accidente cerebrovascular isquémico (ACV).</li>
        <li>Enfermedad coronaria estable o síndrome coronario agudo.</li>
        <li>Enfermedad arterial periférica o historia de revascularización.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Irritación gástrica, dispepsia.</li>
        <li>Úlceras gastrointestinales o sangrado digestivo (riesgo aumentado con edad avanzada o AINES).</li>
        <li>Hemorragias (epistaxis, hematomas, etc.).</li>
        <li>Hipersensibilidad (rinitis, asma inducida por AAS).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Se prefiere la <strong>aspirina a dosis bajas</strong> (75–100 mg/día) para efecto antiagregante sin inhibición significativa de la COX-2.</li>
        <li>En prevención primaria, evaluar riesgo-beneficio individual, especialmente por riesgo de sangrado.</li>
        <li>No usar en menores de 16 años con infecciones virales (riesgo de síndrome de Reye).</li>
        <li>Suspender antes de cirugías de alto riesgo hemorrágico (consultar guías específicas).</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>AAS + clopidogrel en doble antiagregación (síndrome coronario agudo o stents coronarios).</li>
        <li>AAS + inhibidores de la bomba de protones (IBP) para proteger la mucosa gástrica en pacientes de alto riesgo digestivo.</li>
        <li>Evitar combinación con AINEs no selectivos por competencia en la unión a la COX-1.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Inhibidores de la Ciclooxigenasa-1 (COX-1)</strong>, especialmente la aspirina en dosis bajas, son pilares en la prevención de eventos cardiovasculares. 
        Su efecto antiagregante se debe a la inhibición irreversible del TXA2. Su uso debe ser individualizado, teniendo en cuenta el riesgo cardiovascular frente al riesgo hemorrágico.
      </p>
    </div>
  );
}

export default InhibidoresCOX1;

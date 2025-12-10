

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function AntagonistasVitaminaK() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13"> Antagonistas de la Vitamina K</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Antagonistas de la Vitamina K</strong> (AVK) son anticoagulantes orales que actúan inhibiendo la síntesis hepática de factores de coagulación dependientes de vitamina K
        (factores II, VII, IX y X, así como proteínas C y S). El principal representante de este grupo es la <strong>warfarina</strong>.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Inhiben la enzima <strong>epóxido reductasa</strong>, encargada de regenerar la forma activa de la vitamina K, lo cual disminuye la activación de los factores de coagulación dependientes
        de dicha vitamina. Esto reduce progresivamente la capacidad de coagulación de la sangre.
      </p>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Prevención y tratamiento de trombosis venosa profunda (TVP) y embolia pulmonar (TEP).</li>
        <li>Prevención de eventos tromboembólicos en fibrilación auricular no valvular o valvular.</li>
        <li>En pacientes con válvulas cardíacas mecánicas (donde es el tratamiento de elección).</li>
        <li>Profilaxis secundaria en síndrome antifosfolípido.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hemorragias (riesgo mayor en INR elevado).</li>
        <li>Necrosis cutánea (raro, por deficiencia transitoria de proteína C).</li>
        <li>Interacciones farmacológicas frecuentes (antibióticos, AINEs, alimentos con vitamina K).</li>
        <li>Teratogenicidad (contraindicada en embarazo).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Requiere <strong>monitoreo frecuente del INR</strong> (objetivo habitualmente entre 2.0 y 3.0).</li>
        <li>Inicio de acción lento: puede necesitar puente con heparina en contextos agudos.</li>
        <li>Debe mantenerse una dieta estable en vitamina K (evitar variaciones bruscas).</li>
        <li>Posee múltiples interacciones: ajustar dosis con cautela.</li>
        <li>En sobredosis, se revierte con vitamina K y, si es necesario, plasma fresco o complejo protrombínico.</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Puente terapéutico con heparinas en inicio o interrupción perioperatoria.</li>
        <li>No se recomienda combinar con AINEs por riesgo de hemorragia.</li>
        <li>Puede requerir ajuste si se administra con antibióticos (por interacción intestinal con flora productora de vitamina K).</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Antagonistas de la Vitamina K</strong>, como la warfarina, siguen siendo fundamentales en ciertos contextos clínicos, especialmente en pacientes con válvulas cardíacas mecánicas.
        Requieren un manejo cuidadoso y control regular del INR para garantizar eficacia y seguridad. A pesar del surgimiento de anticoagulantes directos, los AVK siguen siendo insustituibles en situaciones específicas.
      </p>
    </div>
  );
}

export default AntagonistasVitaminaK;

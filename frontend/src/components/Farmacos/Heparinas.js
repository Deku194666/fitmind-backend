

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Heparinas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Heparinas</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Las <strong>Heparinas</strong> son anticoagulantes parenterales ampliamente utilizados en la prevención y tratamiento de enfermedades tromboembólicas.
        Existen dos tipos principales: <strong>Heparina No Fraccionada (HNF)</strong> y <strong>Heparinas de Bajo Peso Molecular (HBPM)</strong>, cada una con características farmacológicas y clínicas distintas.
      </p>

      <p className="p14">🔬 Mecanismo de Acción</p>
      <p className="p150">
        Ambas formas de heparina potencian la acción de la <strong>antitrombina III</strong>, una proteína endógena que inhibe los factores de coagulación activados, especialmente <strong>factor Xa y trombina (IIa)</strong>.
        <br /><br />
        - La <strong>HNF</strong> inhibe por igual a Xa y IIa. <br />
        - Las <strong>HBPM</strong> inhiben preferentemente al factor Xa, con menos efecto sobre IIa.
      </p>

      <p className="p14">📋 Tipos y Características</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Características principales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Heparina no fraccionada (HNF)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Heparina sódica</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Vida media corta, efecto inmediato, requiere monitoreo (aPTT), mayor riesgo de trombocitopenia, se administra EV o SC.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Heparinas de bajo peso molecular (HBPM)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Enoxaparina, Dalteparina, Nadroparina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              Vida media más prolongada, administración SC, no requiere control rutinario, menor riesgo de trombocitopenia, preferidas en la práctica clínica.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Profilaxis de trombosis venosa profunda (TVP) en pacientes hospitalizados o postoperatorios.</li>
        <li>Tratamiento de TVP y tromboembolismo pulmonar (TEP).</li>
        <li>Anticoagulación en síndrome coronario agudo (infarto, angina inestable).</li>
        <li>Prevención de trombosis en pacientes con fibrilación auricular o prótesis valvulares cuando se suspende anticoagulación oral (puente).</li>
        <li>Uso en diálisis o circulación extracorpórea.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Hemorragias, especialmente si hay sobredosis.</li>
        <li><strong>Trombocitopenia inducida por heparina (TIH):</strong> reacción inmunológica que puede producir trombosis paradójica. Más frecuente con HNF.</li>
        <li>Osteoporosis (uso prolongado).</li>
        <li>Reacciones locales en el sitio de inyección subcutánea (dolor, hematoma).</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>La <strong>HNF</strong> requiere monitoreo con <strong>aPTT</strong>; las <strong>HBPM</strong> usualmente no, salvo en embarazo, obesidad extrema o insuficiencia renal.</li>
        <li>Las HBPM tienen mejor biodisponibilidad y menor variabilidad farmacocinética.</li>
        <li>Las <strong>heparinas no atraviesan la placenta</strong>, por lo que se consideran seguras en embarazo (preferentemente HBPM).</li>
        <li>En caso de sangrado, el antídoto es <strong>protamina</strong> (reversible en HNF; efecto parcial en HBPM).</li>
        <li>Las HBPM deben usarse con precaución en insuficiencia renal (riesgo de acumulación).</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Transición a anticoagulantes orales (ej: warfarina): se usa heparina como puente hasta alcanzar INR terapéutico.</li>
        <li>Puede combinarse temporalmente con antiagregantes en síndrome coronario agudo, bajo supervisión estricta.</li>
        <li>No se recomienda combinar con AINEs por riesgo hemorrágico.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Las <strong> Heparinas</strong>, tanto no fraccionadas como de bajo peso molecular, son pilares fundamentales en el manejo de trastornos tromboembólicos.
        Su elección depende del contexto clínico, necesidades de monitoreo, riesgo de sangrado y factores individuales como función renal o embarazo.
        Las HBPM son preferidas en la mayoría de los escenarios por su perfil de seguridad y facilidad de uso.
      </p>
    </div>
  );
}

export default Heparinas;

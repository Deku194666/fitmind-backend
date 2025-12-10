

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarMucoliticosyExpectorantes from './NavBarMucoliticosyExpectorantes';
 
function MucoliticosyExpectorantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <NavBarMucoliticosyExpectorantes/>
      <p className="p13">Mucolíticos y Expectorantes</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Mucolíticos</strong> y <strong>Expectorantes</strong> son fármacos utilizados para facilitar la eliminación del moco en enfermedades respiratorias. Se emplean comúnmente en patologías como bronquitis, EPOC y otras afecciones con hipersecreción mucosa.
      </p>

       
      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Bronquitis aguda o crónica.</li>
        <li>EPOC con hipersecreción bronquial.</li>
        <li>Fibrosis quística (uso de acetilcisteína).</li>
        <li>Infecciones respiratorias con moco espeso.</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Acetilcisteína:</strong> Náuseas, vómitos, sabor desagradable, broncoespasmo (en inhalado).</li>
        <li><strong>Ambroxol:</strong> Molestias gastrointestinales leves, rara vez reacciones alérgicas.</li>
        <li><strong>Guaifenesina:</strong> Dolor de cabeza, somnolencia, molestias digestivas.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>El aumento en la hidratación oral mejora la eficacia de mucolíticos y expectorantes.</li>
        <li>La combinación con broncodilatadores puede ser útil en EPOC o bronquitis obstructiva.</li>
        <li>Se debe tener precaución en pacientes con dificultad para expectorar (riesgo de obstrucción).</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Mucolíticos + broncodilatadores en EPOC.</li>
        <li>Mucolíticos + antibióticos en infecciones respiratorias con secreción espesa.</li>
        <li>Expectorantes + antitusivos (con precaución, evitar suprimir el reflejo si hay secreción abundante).</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong>Mucolíticos</strong> y <strong>Expectorantes</strong> son herramientas útiles para mejorar la limpieza mucociliar y aliviar los síntomas respiratorios. Su uso debe ser racional, considerando las características del paciente y de la enfermedad.
      </p>
    </div>
  );
}

export default MucoliticosyExpectorantes;

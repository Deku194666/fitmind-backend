
import React, { useEffect } from 'react';
import NavBarAnticoagulantes from './NavBarAnticoagulantes';


function AntiCoagulantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
        
        <NavBarAnticoagulantes/>
      <p className="p13">Fármacos Anticoagulantes</p>
      <p className="p14">📌 Introducción</p>
      <p className="p150">
        Los <strong>Anticoagulantes</strong> son fármacos que interfieren con la coagulación sanguínea, 
        previniendo la formación o extensión de trombos. Son fundamentales en el tratamiento y prevención 
        de enfermedades tromboembólicas venosas y arteriales.
      </p>

      <p className="p14">🔬 Clasificación de Anticoagulantes</p>
      <table style={{ width: '85%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tipo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo de acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antagonistas de la vitamina K</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Warfarina, Acenocumarol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben la síntesis de factores II, VII, IX y X dependientes de vitamina K</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Heparinas</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Heparina no fraccionada (HNF), Enoxaparina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Potencian la acción de la antitrombina III</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticoagulantes orales directos (DOACs)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Rivaroxabán, Apixabán, Dabigatrán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Inhiben directamente el factor Xa o la trombina</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">💡 Indicaciones Terapéuticas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Prevención y tratamiento de Trombosis Venosa Profunda (TVP) y Embolia Pulmonar (EP).</li>
        <li>Prevención de accidente cerebrovascular en fibrilación auricular.</li>
        <li>Tratamiento y prevención secundaria del infarto agudo de miocardio.</li>
        <li>Anticoagulación en prótesis valvulares mecánicas (warfarina).</li>
      </ul>

      <p className="p14">⚠️ Efectos Adversos Comunes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li><strong>Hemorragia:</strong> principal complicación de todos los anticoagulantes.</li>
        <li><strong>Warfarina:</strong> requiere control de INR, muchas interacciones farmacológicas.</li>
        <li><strong>Heparina:</strong> trombocitopenia inducida por heparina (TIH).</li>
        <li><strong>DOACs:</strong> menor riesgo de sangrado intracraneal, pero aún puede causar hemorragias gastrointestinales.</li>
      </ul>

      <p className="p14">🧠 Consideraciones Clínicas</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Monitorizar INR regularmente en pacientes con warfarina.</li>
        <li>Ajustar dosis de DOACs en insuficiencia renal.</li>
        <li>Evitar uso concomitante con AINEs por riesgo de sangrado.</li>
        <li>Disponibilidad de antídotos específicos (vitamina K para warfarina, idarucizumab para dabigatrán, andexanet alfa para factor Xa).</li>
      </ul>

      <p className="p14">📦 Combinaciones Frecuentes</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Aspirina + Anticoagulante (en síndrome coronario agudo con riesgo trombótico elevado).</li>
        <li>Heparina + Warfarina (inicio conjunto hasta alcanzar INR terapéutico).</li>
        <li>Evitar triple terapia (AAS + clopidogrel + anticoagulante) más allá de lo estrictamente necesario.</li>
      </ul>

      <p className="p14">📚 Conclusión</p>
      <p className="p150">
        Los <strong> Anticoagulantes </strong> son herramientas vitales en la prevención y tratamiento de eventos tromboembólicos. 
        Su manejo requiere evaluación cuidadosa del riesgo-beneficio, monitorización clínica, y educación del paciente para minimizar complicaciones hemorrágicas.
      </p>
    </div>
  );
}

export default AntiCoagulantes;

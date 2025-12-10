

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function  Migraña() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecnt-detail">
      <p className="p13">Fármacos para Migraña</p>

      <p className="p14">📌 Introducción</p>
      <p className="p150">
        La <strong>Migraña</strong> es un trastorno neurológico caracterizado por episodios recurrentes de cefalea, usualmente pulsátil, con o sin aura. El tratamiento farmacológico se divide en manejo agudo (para aliviar el dolor durante la crisis) y profilaxis (para reducir la frecuencia e intensidad de los episodios).
      </p>

      <p className="p14">🎯 Objetivos del Tratamiento</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Aliviar el dolor y los síntomas asociados durante los ataques.</li>
        <li>Reducir la frecuencia, duración e intensidad de los episodios.</li>
        <li>Mejorar la calidad de vida del paciente.</li>
      </ul>

      <p className="p14">💊 Tratamiento Agudo (Abortivo)</p>
      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Grupo</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ejemplos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>AINEs</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/farmacos2/ibuprofeno"> Ibuprofeno</Link>,  Naproxeno, Ketorolaco</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Primera línea para migrañas leves-moderadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Triptanes</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sumatriptán, Rizatriptán, Zolmitriptán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Eficaces en migraña moderada-severa</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antieméticos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Metoclopramida, Domperidona</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Útiles en náuseas asociadas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lasmiditán</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nuevo agonista serotoninérgico (5-HT<sub>1F</sub>)</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>No vasoconstrictor, útil si hay contraindicación a triptanes</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">🛡️ Tratamiento Preventivo (Profilaxis)</p>
      <p className="p150">
        Se indica en pacientes con migraña frecuente, grave o discapacitante. El tratamiento profiláctico se mantiene durante varios meses.
      </p>

      <table style={{ width: '90%', borderCollapse: 'collapse', margin: '2rem auto' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Clase</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fármacos</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Mecanismo / Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}><Link to="/farmacos/betabloqueadores" > BetaBloqueadores </Link>  </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Propranolol, Metoprolol</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Disminuyen excitabilidad cortical</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antidepresivos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Amitriptilina, Venlafaxina</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Efecto sobre vías serotoninérgicas</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Antiepilépticos</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Topiramato, Ácido valproico</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Estabilizan la actividad neuronal</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Anticuerpos monoclonales anti-CGRP</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Erenumab, Fremanezumab, Galcanezumab</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Bloquean péptido relacionado a la calcitonina</td>
          </tr>
        </tbody>
      </table>

      <p className="p14">⚠️ Consideraciones</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Evitar sobreuso de analgésicos para prevenir cefalea por rebote.</li>
        <li>Individualizar tratamiento según perfil clínico y comorbilidades.</li>
        <li>Monitorear efectos adversos y ajustar dosis según respuesta.</li>
        <li>Educar al paciente sobre factores desencadenantes (estrés, sueño, alimentos).</li>
      </ul>

      <p className="p14">📚 Recomendaciones Generales</p>
      <ul className="p150" style={{ listStyleType: 'disc' }}>
        <li>Uso precoz de tratamiento abortivo para mayor eficacia.</li>
        <li>Evaluación periódica de eficacia del tratamiento profiláctico (3-6 meses).</li>
        <li>Combinar tratamiento farmacológico con estrategias no farmacológicas (relajación, hábitos saludables).</li>
      </ul>
    </div>
  );
}

export default  Migraña;

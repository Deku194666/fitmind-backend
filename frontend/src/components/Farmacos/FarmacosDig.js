

import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosDigestivos from './NavBarFarmacosDigestivos';

function FarmacosDig() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarFarmacosDigestivos/>

      <p className='p13'>  Fármacos Digestivos </p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> Los <strong> Fármacos Digestivos </strong> son medicamentos diseñados para tratar trastornos del sistema gastrointestinal, 
        desde acidez estomacal hasta enfermedades inflamatorias intestinales. Su uso adecuado mejora la digestión, alivia síntomas y 
        previene complicaciones.Los fármacos digestivos son medicamentos diseñados para tratar trastornos del sistema gastrointestinal,
        desde acidez estomacal hasta enfermedades inflamatorias intestinales. Su uso adecuado mejora la digestión, alivia síntomas y
        previene complicaciones.</p>
        
      <p className='p14'>  📜 Historia de los Fármacos Digestivos  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Antigüedad: </strong> Uso de hierbas (jengibre, menta) para problemas digestivos.  </li>
        <li> <strong> Siglo XIX:  </strong>  Descubrimiento del bicarbonato de sodio para la acidez.</li>
        <li> <strong> 1970s:  </strong> Desarrollo de los antiácidos y bloqueadores H2.  </li>
        <li> <strong> 1980s: </strong>  Lanzamiento de los inhibidores de la bomba de protones (IBP).  </li>
        <li> <strong> 2000s:  </strong> Avances en probióticos y tratamientos para el síndrome de intestino irritable (SII).  </li>
      </ul>


      <p className='p14'> 🔍 Clasificación de los Fármacos Digestivos  </p>
      <p className='p16'> 📌 1. Antiácidos y Protectores Gástricos  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Tipo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Uso Principal   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Antiácidos	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Hidróxido de aluminio/magnesio	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Neutralizan ácido gástrico			</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alivio rápido de acidez   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Bloqueadores H2 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Ranitidina, Famotidina </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Reducen producción de ácido	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	Gastritis, úlceras  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Inhibidores de la bomba de protones (IBP)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/omeprazol">  Omeprazol</Link>, Esomeprazol	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean la secreción ácida		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reflujo, úlceras gástricas  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Protectores gástricos		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Sucralfato		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Forman barrera sobre la mucosa			</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Úlceras, gastritis   </td>
    </tr>
  </tbody>
</table>


<p className='p16'> 📌 2.  Procinéticos y Antieméticos</p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Tipo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo  </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Uso Principal  </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Procinéticos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Metoclopramida, Domperidona	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Aceleran vaciamiento gástrico	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Náuseas, reflujo </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antieméticos		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ondansetrón			   </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean receptores de serotonina	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Náuseas por quimioterapia </td>
    </tr>

  </tbody>
</table>



<p className='p16'> 📌 3. Laxantes y Antidiarreicos  </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Tipo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Uso Principal   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Laxantes osmóticos		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Lactulosa, Polietilenglicol	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Retienen agua en heces	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Estreñimiento  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Laxantes estimulantes	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Senósidos </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Aumentan motilidad intestinal	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Estreñimiento ocasional  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antidiarreicos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Loperamida	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducen motilidad intestinal		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Diarrea aguda  </td>
    </tr>
  </tbody>
</table>




<p className='p16'> 📌 4. Tratamiento para Enfermedades Inflamatorias Intestinales (EII) </p>

<table style={{ width: '60%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '4rem', marginLeft: '6rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#f2f2f2' }}>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Tipo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Ejemplo </th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}>  Mecanismo	</th>
      <th style={{ border: '1px solid #ddd', padding: '8px' }}> Uso Principal   </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Aminosalicilatos	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Mesalazina	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducen inflamación local		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Colitis ulcerosa   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Inmunomoduladores	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Azatioprina	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Suprimen respuesta inmune		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Enfermedad de Crohn   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Biológicos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Infliximab		 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean TNF-α	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  EII grave   </td>
    </tr>
  </tbody>
</table>


      <p className='p16'> 📌 5. Enzimas Digestivas y Probióticos </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 <strong> Ejemplos:  </strong> Pancreatina, Lactasa, Probióticos .   </li>
        <li> 📌 <strong> Uso: </strong>  Mejorar digestión, restaurar flora intestinal. </li>
      </ul>

      <p className='p14'>  ⚠️ Efectos Secundarios Comunes </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) <strong> IBP (<Link to="/farmacos/farmacos2/omeprazol">Omeprazol</Link>): </strong> Mayor riesgo de infecciones y déficit de vitamina B12 (uso prolongado). </li>
        <li> 2) <strong> Laxantes estimulantes: </strong>  Dependencia si se usan en exceso. </li>
        <li> 3) <strong> Metoclopramida: </strong> Somnolencia, movimientos involuntarios (en altas dosis). </li>
      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> Los <strong> Fármacos Digestivos </strong> son esenciales para tratar desde molestias comunes hasta enfermedades crónicas. 
        Su uso debe ser guiado por un médico para evitar efectos adversos y garantizar su eficacia. Recuerda: Una dieta balanceada y
        hábitos saludables son la mejor prevención para problemas digestivos. 🍏💊  </p>
    </div>
    
  );
}

export default FarmacosDig;
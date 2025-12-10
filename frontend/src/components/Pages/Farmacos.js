
// src/components/pages/Farmacos.js


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarFar from './NavBarFar';
import './Farmacos.css';
import NavBarFar2 from './NavBarFar2';
import CalendarioFarmacos from '../Farmacos/RegistroFarmacos/CalendarioFarmacos';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { Box, LinearProgress, Typography, Paper, Grid  } from '@mui/material';





function Farmacos() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
  }, []);
  return (
    
    <div className="ecnt-detail">
      <NavBarFar />
      <NavBarFar2/>
      <Typography className="parrafo2" sx={{ fontSize: '2.4rem', fontWeight: 650, marginBottom: '2rem', marginTop: '3rem', marginLeft: '5rem' }}>
        📅 Registro Medicamentos
      </Typography>
      <section className='calendariofarmacosf'  >
      <CalendarioFarmacos />
      </section>
      <p className='p13'> Farmacos </p>
      <p className='p14'> 📌 Introducción a la Farmacología Clínica </p>
      <p className='p150'> Los fármacos son herramientas fundamentales en la medicina moderna. Esta guía integral cubre los principales aspectos 
      de los medicamentos, incluyendo su historia, mecanismos de acción, usos terapéuticos y consideraciones especiales para su prescripción 
      segura y efectiva.</p>
      <p className='p150'> Comprender cómo actúan los medicamentos, sus posibles efectos adversos, las interacciones con otros tratamientos o 
      alimentos, y sus indicaciones específicas es esencial para un manejo terapéutico seguro y efectivo.</p>
      <p className='p150'> En esta sección encontrarás información detallada sobre los fármacos más comúnmente utilizados, organizados por 
      sistemas del cuerpo humano (como el sistema cardiovascular, respiratorio, digestivo, entre otros). Además, esta sección estará 
      interconectada con las enfermedades crónicas, la alimentación y otros módulos de la app, permitiéndote entender cómo los medicamentos 
      se relacionan con cada aspecto de tu salud integral.</p>

      <p className='p14'>  📜 Historia de los Fármacos </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> 3000 a.C.: </strong> Primeros registros de uso medicinal de plantas (papiro Ebers). </li>
        <li> <strong> Siglo IV a.C.:  </strong> Hipócrates establece bases de la farmacología racional. </li>
        <li> <strong> 1806: </strong> Friedrich Sertürner aísla morfina (primer principio activo purificado).  </li>
        <li> <strong> 1928: </strong> Descubrimiento de la penicilina por Alexander Fleming.   </li>
        <li> <strong> 1950s: </strong> Revolución de los psicofármacos.  </li>
        <li> <strong> 1980s: </strong>  Desarrollo de biotecnología y fármacos dirigidos. </li>
      </ul>


      <p className='p14'>  🔍 Clasificación de Fármacos por Sistemas  </p>
      <p className='p16'> 📌 1. Sistema Cardiovascular </p>
      <p className='p150'> <strong> Antihipertensivos </strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> IECA:  </strong> <Link to="/farmacos/farmacos2/enalapril">  Enalapril</Link>. </li>
        <li> <strong> ARA II:  </strong> 	Losartán.   </li>
        <li> <strong> CCB:  </strong> Amlodipino.  </li>
        <li> <strong> Diuréticos:  </strong> <Link to="/farmacos/farmacos2/hidroclorotiazida">  Hidroclorotiazida</Link>.   </li>
      </ul>

      <p className='p150'> <strong> Anticoagulantes</strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Warfarina: </strong>  Requiere monitoreo INR  </li>
        <li> <strong>	DOACs: </strong> Apixaban, Rivaroxaban (menos monitoreo)  </li>
        <li> <strong> Heparina:  </strong> Uso hospitalario  </li>
      </ul>

      
      <p className='p16'> 📌 2. Sistema Nervioso </p>
      <p className='p150'> <strong> Antidepresivos </strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> ISRS  </strong> Fluoxetina.  </li>
        <li> <strong> IRSN  </strong> Venlafaxina.   </li>
        <li> <strong> Tricíclicos  </strong> Amitriptilina. </li>
      </ul>

      <p className='p150'> <strong>  Analgésicos </strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Escalera de la OMS: </strong>  <Link to="/farmacos/farmacos2/paracetamol">  Paracetamol </Link> → AINEs → Opioides menores → Opioides mayores. </li>
        <li> <strong>	Nuevos enfoques: </strong> Gabapentinoides para dolor neuropático.  </li>
      </ul>



      <p className='p16'> 📌 3. Sistema Endocrino  </p>
      <p className='p150'> <strong> Antidiabéticos </strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Biguanidas  </strong> Metformina.  </li>
        <li> <strong> Sulfonilureas  </strong> Glibenclamida.   </li>
        <li> <strong> iSGLT2  </strong> Empagliflozina. </li>
      </ul>

      <p className='p150'> <strong>  Analgésicos </strong> </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong> Escalera de la OMS: </strong> <Link to="/farmacos/farmacos2/paracetamol">  Paracetamol </Link>  → AINEs → Opioides menores → Opioides mayores. </li>
        <li> <strong>	Nuevos enfoques: </strong> Gabapentinoides para dolor neuropático.  </li>
      </ul>

      <p className='p14'>  📌Conclusión  </p>
      <p className='p150'> El conocimiento farmacológico es dinámico y requiere actualización constante. Los profesionales de salud deben
         balancear eficacia con seguridad, considerando siempre las características individuales del paciente. La farmacología moderna 
         avanza hacia terapias más personalizadas y seguras, pero el juicio clínico sigue siendo insustituible.</p>



    </div>
    
  );
}

export default Farmacos;


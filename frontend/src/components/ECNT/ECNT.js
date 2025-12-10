

// src/components/ECNT.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ECNT.css'; // crea un archivo CSS si deseas personalizar estilos
import NavBarECNT from './NavBarECNT';

function ECNT() {
  return (
    <div className="ecnt-container">
      <NavBarECNT/>
      <p  className='p1'> Enfermedades Crónicas No Transmisibles (ECNT)</p>
      <p  className='p2'>  Las Enfermedades Crónicas No Transmisibles <strong>  (ECNT)  </strong>  son una condición médica o enfermedad considerada no infecciosa, 
        estas son afecciones de larga duración que progresan lentamente y no se transmiten de persona a persona. Son una de las principales 
        causas de muerte en el mundo y están estrechamente relacionadas con factores de riesgo como el tabaquismo, la mala alimentación, 
        el sedentarismo y el consumo nocivo de alcohol. La prevención, el diagnóstico temprano y el control adecuado son fundamentales para reducir
        su impacto en la salud pública. A veces, las <strong> ECNT   </strong>  culminan con muertes rápidas como en el caso de los <Link to="/ecnt/iam">IAM</Link>, 
        <Link to="/ecnt/acv"> ACV</Link>, <Link to="/ecnt/cancer">Cancer</Link>,  y otras que progresan mas lento como <Link to="/ecnt/diabetes">Diabetes Mellitus</Link>, 
        <Link to="/ecnt/erc"> ERC</Link>,  <Link to="/ecnt/hipertension">Hipertensión Arterial</Link>, <Link to="/ecnt/dislipidemia"> Dislipidemia</Link>,
        <Link to="/ecnt/osteoporosis"> Osteoporosis</Link>, <Link to="/ecnt/ea"> Enfermedad de Alzheimer</Link>, <Link to="/ecnt/cataratas"> Cataratas</Link>, 
        entre otras. Aunque a veces se usan (incorrectamente) como sinónimo de enfermedad crónica, las <strong> ECNT  </strong>  se distinguen solo por su causa no infecciosa,
        no necesariamente por su duración. Tambien son consideradas la <Link to="/ecnt/obesidad">Obesidad</Link>, <Link to="/ecnt/artrosis"> Artrosis</Link>,
        <Link to="/ecnt/epoc"> EPOC</Link>, <Link to="/ecnt/asma"> Asma</Link>   como <strong> ECNT.  </strong>  </p>
      
    </div>
  );
}

export default ECNT;


import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBarFarmacosRespi from './NavBarFarmacosRespi';

function FarmacosRespi() {
    useEffect(() => {
      window.scrollTo(0, 0); // Mueve el scroll al tope de la página al cargar
    }, [])
  return (
    <div className="ecnt-detail">
      <NavBarFarmacosRespi/>

      <p className='p13'>  Fármacos Respiratorios</p>
      <p className='p14'>Introducción📌</p>
      <p className='p150'> Los <strong> Fármacos Respiratorios </strong>  son medicamentos diseñados para tratar enfermedades que afectan las vías respiratorias, 
        como el <Link to="/ecnt/asma"> Asma</Link>, la <Link to="/ecnt/epoc"> EPOC</Link>, las alergias y las infecciones pulmonares. Estos medicamentos ayudan
        a abrir las vías aéreas, reducir la inflamación y eliminar secreciones, mejorando la respiración y la calidad de vida de los pacientes. </p>
        
      <p className='p14'>  📜 Historia de los Fármacos Respiratorios  </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> <strong>  Siglo XIX: </strong> Uso de la efedrina (extraída de plantas) para el  <Link to="/ecnt/asma"> Asma</Link>.  </li>
        <li> <strong> 1920s: </strong>  Introducción de la adrenalina (epinefrina) para crisis asmáticas. </li>
        <li> <strong> 1950s:  </strong>  Desarrollo de los primeros broncodilatadores (como el salbutamol).  </li>
        <li> <strong> 1970s: </strong>  Uso de corticoides inhalados para controlar la inflamación en el <Link to="/ecnt/asma"> Asma</Link>.   </li>
        <li> <strong> 2000s:  </strong> Avances biológicos para asma grave (como omalizumab).  </li>
      </ul>


      <p className='p14'> 🔍 Clasificación de los Fármacos Respiratorios  </p>
      <p className='p16'> 📌 1. Broncodilatadores</p>

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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Beta-2 agonistas (SABA)	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/farmacos/farmacos2/salbutamol"> Salbutamol </Link> </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Relajan músculos bronquiales		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Alivio rápido en crisis de <Link to="/ecnt/asma"> Asma </Link>   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Beta-2 agonistas (LABA)	  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  	Salmeterol, Formoterol  </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	Efecto prolongado (12+ horas)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> 	Control diario en <Link to="/ecnt/epoc"> EPOC </Link> y <Link to="/ecnt/asma"> Asma </Link>   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Anticolinérgicos (SAMA/LAMA)		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Ipratropio (SAMA), Tiotropio (LAMA) </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean receptores muscarínicos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> <Link to="/ecnt/epoc"> EPOC</Link>, Broncoespasmo  </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Metilxantinas		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Teofilina			</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Relaja músculos bronquiales			</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  <Link to="/ecnt/asma"> Asma</Link> / <Link to="/ecnt/epoc"> EPOC </Link> (uso menos común hoy)   </td>
    </tr>
  </tbody>
</table>


<p className='p16'> 📌 2. Antiinflamatorios (Controladores) </p>

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
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> IA  Corticoides inhalados (ICS)	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Budesonida, Fluticasona		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Reducen inflamación bronquial			</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  <Link to="/ecnt/asma"> Asma</Link> y <Link to="/ecnt/epoc"> EPOC </Link>(prevención de crisis)   </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Corticoides orales	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Prednisona		   </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antiinflamatorio sistémico			</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>  Crisis graves (uso corto) </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Antileucotrienos	</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Montelukast	 </td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Bloquean sustancias inflamatorias		</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}> Asma alérgico, rinitis  </td>
    </tr>

  </tbody>
</table>



<p className='p16'> 📌 3. Antihistamínicos (Para Alergias) </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 <strong> Ejemplos:  </strong> Loratadina, Cetirizina.   </li>
        <li> 📌 <strong> Uso: </strong>  Rinitis alérgica, picazón, estornudos.  </li>
      </ul>



<p className='p16'> 📌 4. Mucolíticos y Expectorantes </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 <strong> Ejemplos:  </strong> Acetilcisteína, Ambroxol.   </li>
        <li> 📌 <strong> Uso: </strong>  Enfermedades con flema (bronquitis, <Link to="/ecnt/epoc"> EPOC </Link>). </li>
      </ul>


      <p className='p16'> 📌 5. Antibióticos (Para Infecciones Respiratorias) </p>

      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 📌 <strong> Ejemplos:  </strong> <Link to="/farmacos/farmacos2/amoxicilina"> Amoxicilina</Link>, Azitromicina.   </li>
        <li> 📌 <strong> Uso: </strong>   Neumonía, bronquitis bacteriana. </li>
      </ul>

      <p className='p14'>  ⚠️ Efectos Secundarios Comunes </p>
      <ul className='p150' style={{ listStyleType: 'disc'}} >
        <li> 1) <strong> Broncodilatadores (SABA): </strong>  Temblor, taquicardia. </li>
        <li> 2) <strong> Corticoides inhalados:  </strong>  Ronquera, candidiasis oral (usar enjuague bucal). </li>
        <li> 3) <strong> Corticoides orales: </strong>  Aumento de peso, osteoporosis (en uso prolongado). </li>
        <li> 4) <strong> Anticolinérgicos: </strong>   Boca seca, retención urinaria.  </li>
      </ul>

      <p className='p14'>  ✅Conclusión  </p>
      <p className='p150'> Los <strong> Fármacos Respiratorios </strong> son clave para manejar enfermedades como el <Link to="/ecnt/asma"> Asma</Link> y la  <Link to="/ecnt/epoc"> EPOC</Link>, mejorando la calidad de vida
        de millones de personas. Desde broncodilatadores de acción rápida hasta modernos biológicos, estos medicamentos deben usarse según 
        prescripción médica para evitar efectos adversos. Recuerda: Si usas inhaladores, aprende la técnica correcta y sigue tu tratamiento 
        al pie de la letra. ¡Respirar mejor es vivir mejor! 🌬️💙  </p>
    </div>
    
  );
}

export default FarmacosRespi;

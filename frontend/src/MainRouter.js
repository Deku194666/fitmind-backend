
// src/MainRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Página de inicio
import Register from './components/register'; 
import Login from './components/login';
import MainLayout from './components/MainLayout';
import PrivateLayout from './components/PrivateLayout'
import Dashboard from './components/Dashboard';
import Hidratacion from './components/Hidratacion';
import ECNT from './components/ECNT/ECNT';
import Diabetes from './components/ECNT/Diabetes';
import Hipertension from './components/ECNT/Hipertension';
import ERC from './components/ECNT/ERC';
import Cancer from './components/ECNT/Cancer';
import EA from './components/ECNT/EA';
import Cataratas from './components/ECNT/Cataratas';
import Osteoporosis from './components/ECNT/Osteoporosis';
import RegistroCSV from './components/Pages/RegristroCSV';
import Ejercicio from './components/Pages/Ejercicio';
import BienestarMental from './components/Pages/Bienestarmental';
import Farmacos from './components/Pages/Farmacos';
import RegistroAlimentos from './components/Pages/RegistroAlimentos';
import Comidas from './components/Pages/Comidas';
import Comidas2 from './components/Pages/Comidas2';
import Premium from './components/Pages/Premium';
import Informes from './components/Pages/Informes';
import Examenes from './components/Pages/Examenes';
import Imagen from './components/Pages/Imagen';
import Lab from './components/Pages/Lab';
import RNM from './components/Examenes/RNM';
import Radiografia from './components/Examenes/Radiografia';
import TC from './components/Examenes/TC';
import Ecografia from './components/Examenes/Ecografia';
import Electrocardiograma from './components/Examenes/EKG';
import Ecocardiograma from './components/Examenes/ECG';
import PerfilLipidico from './components/Examenes2/PerfilLipidico';
import Glicemia from './components/Examenes2/Glicemia';
import Hemograma from './components/Examenes2/Hemograma';
import Perfil from './components/PagesLateral/Perfil';
import Dislipidemia from './components/ECNT/Dislipidemia';
import Asma from './components/ECNT/Asma';
import ACV from './components/ECNT/ACV';
import EPOC from './components/ECNT/EPOC';
import Artrosis from './components/ECNT/Artrosis';
import Obesidad from './components/ECNT/Obesidad';
import IAM from './components/ECNT/IAM';
import Arritmias from './components/ECNT/Arritmias';
import InsuficienciaCardiaca from './components/ECNT/IC';
import Ateroesclerosis from './components/ECNT/Ateroesclerosis';
import Valvulopatias from './components/ECNT/Valvulopatias';
import EnfermedadDeParkinson from './components/ECNT/Parkinson';
import FibrosisPulmonar from './components/ECNT/FibrosisPulmonar';
import CardiovascularesECNT from './components/ECNT/CardioVascularesECNT';
import RespiECNT from './components/ECNT/RespiECNT';
import MetabolicasECNT from './components/ECNT/MetabolicasECNT';
import NeuroDegenerativasECNT from './components/ECNT/NeuroDegenerativasECNT';
import Alimentos from './components/Alimentos/Alimentos';
import Elongacion from './components/Ejercicio/Elongacion';
import Musculacion from './components/Ejercicio/Musculacion';
import CV from './components/Ejercicio/CV';
import Correr from './components/Ejercicio/CV/Correr';
import Trote from './components/Ejercicio/CV/Trote';
import Sprint from './components/Ejercicio/CV/Sprint';
import Bicicleta from './components/Ejercicio/CV/Bicicleta';
import Caminar from './components/Ejercicio/CV/Caminar';
import Nadar from './components/Ejercicio/CV/Nadar';
import BoxeoSaco from './components/Ejercicio/CV/BoxeoSaco';
import LesionesMusculares from './components/Ejercicio/LesionesMusculares';
import LesionesLigamentos from './components/Ejercicio/LesionesLigamentos';
import LesionesArticulares from './components/Ejercicio/LesionesArticulares';
import LesionesOseas from './components/Ejercicio/LesionesOseas';
import LesionesNervios from './components/Ejercicio/LesionesNervios';
import LesionesTendinosas from './components/Ejercicio/LesionesTendinosas';
import Desgarros from './components/Ejercicio/Lesiones/Desgarros';
import Contusion from './components/Ejercicio/Lesiones/Contusion';
import Contractura from './components/Ejercicio/Lesiones/Contractura';
import LesionLigTobillo from './components/Ejercicio/Lesiones/LesionLigTobillo';
import LPAA from './components/Ejercicio/Lesiones/LPAA';
import LigDeltoideo from './components/Ejercicio/Lesiones/LigDeltoideo';
import LPCyLPAP from './components/Ejercicio/Lesiones/LPCyLPAP';
import LesionLigRodilla from './components/Ejercicio/Lesiones/LesionLigRodilla';
import LCA from './components/Ejercicio/Lesiones/LCA';
import LCP from './components/Ejercicio/Lesiones/LCP';
import LCM from './components/Ejercicio/Lesiones/LCM';
import LCL from './components/Ejercicio/Lesiones/LCL';
import DPF from './components/Ejercicio/Lesiones/DPF';
import LesionLigHombro from './components/Ejercicio/Lesiones/LesionLigHombro';
import GH from './components/Ejercicio/Lesiones/GH';
import AC from './components/Ejercicio/Lesiones/AC';
import Bankart from './components/Ejercicio/Lesiones/Bankart';
import SLAP from './components/Ejercicio/Lesiones/SLAP';
import LesionLigCodo from './components/Ejercicio/Lesiones/LesionLigCodo';
import LCMCodo from './components/Ejercicio/Lesiones/LCMCodo';
import LCLCodo from './components/Ejercicio/Lesiones/LCLCodo';
import InestPLCodo from './components/Ejercicio/Lesiones/InestPLCodo';
import Luxacioncodo from './components/Ejercicio/Lesiones/Luxacioncodo';
import LesionLigMM from './components/Ejercicio/Lesiones/LesionLigMM';
import LesionLigEscafolunar from './components/Ejercicio/Lesiones/LesionLigEscafolunar';
import LesionFCT from './components/Ejercicio/Lesiones/LesionFCT';
import LesionStener from './components/Ejercicio/Lesiones/LesionStener';
import Luxaciondedos from './components/Ejercicio/Lesiones/Luxaciondedos';
import AR from './components/Ejercicio/Lesiones/AR';
import Gota from './components/Ejercicio/Lesiones/Gota';
import Luxaciones from './components/Ejercicio/Lesiones/Luxaciones';
import LuxacionMMDedos from './components/Ejercicio/Lesiones/LuxacionMMDedos';
import LuxacionHombro from './components/Ejercicio/Lesiones/LuxacionHombro';
import LuxacionCadera from './components/Ejercicio/Lesiones/LuxacionCadera';
import LuxacionRodilla from './components/Ejercicio/Lesiones/LuxacionRodilla';
import LuxacionTobPieDedos from './components/Ejercicio/Lesiones/LuxacionTobPieDedos';
import ArtrosisCuello from './components/Ejercicio/Lesiones/ArtrosisCuello';
import ArtrosisLumbar from './components/Ejercicio/Lesiones/ArtrosisLumbar';
import ArtrosisHombro from './components/Ejercicio/Lesiones/ArtrosisHombro';
import ArtrosisMuñMano from './components/Ejercicio/Lesiones/ArtrosisMuñMano';
import ArtrosisCadera from './components/Ejercicio/Lesiones/ArtrosisCadera';
import ArtrosisRodilla from './components/Ejercicio/Lesiones/ArtrosisRodilla';
import ArtrosisTobPie from './components/Ejercicio/Lesiones/ArtrosisTobPie';
import FxHombro from './components/Ejercicio/Lesiones/FxHombro';
import FxHumero from './components/Ejercicio/Lesiones/FxHumero';
import FxCodo from './components/Ejercicio/Lesiones/FxCodo';
import FxAntebrazo from './components/Ejercicio/Lesiones/FxAntebrazo';
import FxMMdedos from './components/Ejercicio/Lesiones/FxMMdedos';
import FxColumna from './components/Ejercicio/Lesiones/FxColumna';
import FxPelvis from './components/Ejercicio/Lesiones/FxPelvis';
import FxCadera from './components/Ejercicio/Lesiones/FxCadera';
import FxFemur from './components/Ejercicio/Lesiones/FxFemur';
import FxRodilla from './components/Ejercicio/Lesiones/FxRodilla';
import FxPierna from './components/Ejercicio/Lesiones/FxPierna';
import FxTobPieDedos from './components/Ejercicio/Lesiones/FxTobPieDedos';
import RadiculopatiaCervical from './components/Ejercicio/Lesiones/RadiculopatiaCervical';
import RadiculopatiaLumbar from './components/Ejercicio/Lesiones/RadiculopatiaLumbar';
import LesNervioRadial from './components/Ejercicio/Lesiones/LesNervioRadial';
import LesNervioMediano from './components/Ejercicio/Lesiones/LesNervioMediano';
import LesNervioUlnar from './components/Ejercicio/Lesiones/LesNervioUlnar';
import LesNervioCiatico from './components/Ejercicio/Lesiones/LesNervioCiatico';
import LesNervioPeroneo from './components/Ejercicio/Lesiones/LesNervioPeroneo';
import TendinopatiaCadera from './components/Ejercicio/Lesiones/TendinopatiaCadera';
import TendinopatiasRodilla from './components/Ejercicio/Lesiones/TendinopatiaRodilla';
import TendinopatiaTobPieDedos from './components/Ejercicio/Lesiones/TendinopatiaTobPieDedos';
import TendinopatiaHombro from './components/Ejercicio/Lesiones/TendinopatiaHombro';
import TendinopatiaCodo from './components/Ejercicio/Lesiones/TendinopatiaCodo';
import TendinopatiaMMDedos from './components/Ejercicio/Lesiones/TendinopatiaMMDedos';
import FarmacosCV from './components/Farmacos/FarmacosCV';
import FarmacosRespi from './components/Farmacos/FarmacosRespi';
import FarmacosDig from './components/Farmacos/FarmacosDig';
import FarmacosOST from './components/Farmacos/FarmacosOST';
import FarmacosNeuro from './components/Farmacos/FarmacosNeuro';
import Antihipertensivos from './components/Farmacos/Antihipertensivos';
import Antiarritmicos from './components/Farmacos/Antiarritmicos';
import AntiCoagulantes from './components/Farmacos/AntiCoagulantes';
import Antiagregantes from './components/Farmacos/Antiagregantes';
import Hipolipemiantes from './components/Farmacos/Hipolipemiantes';
import FarmacosIC from './components/Farmacos/FarmacosIC';
import IECAs from './components/Farmacos/IECAs';
import ARAII from './components/Farmacos/ARAII';
import Diureticos from './components/Farmacos/Diureticos';
import Betabloqueadores from './components/Farmacos/Betabloqueadores';
import BloqueadoresCanalesCa from './components/Farmacos/BloqueadoresCanalesCa';
import BloqueadoresCanalesNa from './components/Farmacos/BloqueadoresCanalesNa';
import BloqueadoresCanalesK from './components/Farmacos/BloqueadoresCanalesK';
import OtrosAntiarritmicos from './components/Farmacos/OtrosAntiarritmicos';
import AntagonistasVitaminaK from './components/Farmacos/AntagonistasVitK';
import Heparinas from './components/Farmacos/Heparinas';
import AnticoagulantesOrales from './components/Farmacos/AnticoagulantesOrales';
import InhibidoresCOX1 from './components/Farmacos/InhibidoresCOX1';
import InhibidoresP2Y12 from './components/Farmacos/InhibidoresP2Y12';
import InhibidoresGPIIbIIIa from './components/Farmacos/InhibidoresGPIIbIIIa';
import Estatinas from './components/Farmacos/Estatinas';
import Fibratos from './components/Farmacos/Fibratos';
import Ezetimiba from './components/Farmacos/Ezetemiba';
import Resinas from './components/Farmacos/Resinas';
import InhibidoresPCSK9 from './components/Farmacos/InhibidoresPCSK9';
import DiureticosAsa from './components/Farmacos/DiureticosAsa';
import AntagonistasMRA from './components/Farmacos/AntagonistasMRA';
import ARNI from './components/Farmacos/ARNI';
import Broncodilatadores from './components/Farmacos/Broncodilatadores';
import AntiinflamatoriosRespiratorios from './components/Farmacos/AntiinflamatoriosRespiratorio';
import Antihistaminicos from './components/Farmacos/Antihistaminicos';
import MucoliticosyExpectorantes from './components/Farmacos/MucoliticosyExpectorantes';
import AntibioticosRespiratorios from './components/Farmacos/AntibioticosRespiratorios';
import SABA from './components/Farmacos/SABA';
import LABA from './components/Farmacos/LABA';
import Anticolinergicos from './components/Farmacos/Anticolinergicos';
import Metilxantinas from './components/Farmacos/Metilxantinas';
import CorticoidesInhalados from './components/Farmacos/CorticoidesInhalados';
import CorticoidesSistemicos from './components/Farmacos/CorticoidesSistemicos';
import Antileucotrienos from './components/Farmacos/Antileucotrienos';
import AntihistaminicosH1PrimeraGen from './components/Farmacos/AntihistaminicosH1PrimeraGen';
import AntihistaminicosH1SegundaGen from './components/Farmacos/AntihistaminicosH1SegundaGen';
import AntihistaminicosH2 from './components/Farmacos/AntihistaminicosH2';
import Mucoliticos from './components/Farmacos/Mucoliticos';
import Expectorantes from './components/Farmacos/Expectorantes';
import PenicilInhibidorBeta from './components/Farmacos/PenicilInhibidorbeta';
import Macrolidos from './components/Farmacos/Macrolidos';
import Cefalosporinas from './components/Farmacos/Cefalosporinas';
import Fluoroquinolonas from './components/Farmacos/Fluoroquinolonas';
import Tetraciclinas from './components/Farmacos/Tetraciclinas';
import Antiacidos from './components/Farmacos/Antiacidos';
import ProtectoresGastricos from './components/Farmacos/ProtectoresGastricos';
import Procineticos from './components/Farmacos/Procineticos';
import Antiemeticos from './components/Farmacos/Antiemeticos';
import Laxantes from './components/Farmacos/Laxantes';
import Antidiarreicos from './components/Farmacos/Antidiarreicos';
import FarmacosHuesos from './components/Farmacos/FarmacosHuesos';
import FarmacosMusculos from './components/Farmacos/FarmacosMusculos';
import FarmacosTendonesLigamentos from './components/Farmacos/FarmacosTendonesLigamentos';
import FarmacosFascia from './components/Farmacos/FarmacosFascia';
import FarmacosNerviosColumna from './components/Farmacos/FarmacosNerviosColumna';
import Antiepilepticos from './components/Farmacos/Antiepilepticos';
import Antiparkinsonianos from './components/Farmacos/Antiparkinsonianos';
import EM from './components/Farmacos/EM';
import Migraña from './components/Farmacos/Migraña';
import DolorNeuropatico from './components/Farmacos/DolorNeuropatico';
import FarmacosNeuromusculares from './components/Farmacos/FarmacosNeuromusculares';
import Enalapril from './components/Farmacos/Farmacos2/Enalapril';
import Clorfenamina from './components/Farmacos/Farmacos2/Clorfenamina';
import Diazepam from './components/Farmacos/Farmacos2/Diazepam';
import Budesonida from './components/Farmacos/Farmacos2/Budesonida';
import Ibuprofeno from './components/Farmacos/Farmacos2/Ibuprofeno';
import Omeprazol from './components/Farmacos/Farmacos2/Omeprazol';
import Atorvastatina from './components/Farmacos/Farmacos2/Atorvastatina';
import Amoxicilina from './components/Farmacos/Farmacos2/Amoxicilina';
import Salbutamol from './components/Farmacos/Farmacos2/Salbutamol';
import Hidroclorotiazida from './components/Farmacos/Farmacos2/Hidroclorotiazida';
import Paracetamol from './components/Farmacos/Farmacos2/Paracetamol';
import Captopril from './components/Farmacos/Farmacos2/Captopril';
import RegistroFarmacosCalendario from './components/Farmacos/RegistroFarmacos/RegistroFarmacosCalendario';
import EnfMentalComun from './components/BienestarMental/EnfMentalComun';
import TrasEstAnimo from './components/BienestarMental/TrasEstAnimo';
import TrasPsicotico from './components/BienestarMental/TrasPsicotico';
import TrasAlimentario from './components/BienestarMental/TrasAlimentario';
import TrasNeurodesarrollo from './components/BienestarMental/TrasNeurodesarrollo';
import TrasOtrasCondiciones from './components/BienestarMental/TrasOtrasCondiciones';
import Yoga from './components/BienestarMental/Yoga';
import EjerciciosRelajacion from './components/BienestarMental/EjerciciosRelajacion';
import Depresion from './components/BienestarMental/EnfMentales/Depresion';
import TrasBipolar from './components/BienestarMental/EnfMentales/TrasBipolar';
import Distimia from './components/BienestarMental/EnfMentales/Distimia';
import TAG from './components/BienestarMental/EnfMentales/TAG';
import AtaquesPanico from './components/BienestarMental/EnfMentales/AtaquesPanico';
import Fobias from './components/BienestarMental/EnfMentales/Fobias';
import TOC from './components/BienestarMental/EnfMentales/TOC';
import TrasAnsiedad from './components/BienestarMental/TrasAnsiedad';
import Esquizo from './components/BienestarMental/EnfMentales/Esquizo';
import TrasDelirante from './components/BienestarMental/EnfMentales/TrasDelirante';
import AnorexiaNerviosa from './components/BienestarMental/EnfMentales/AnorexiaNerviosa';
import BulimiaNerviosa from './components/BienestarMental/EnfMentales/BulimiaNerviosa';
import TrasPorAtracón from './components/BienestarMental/EnfMentales/TrasAtracon';
import TEA from './components/BienestarMental/EnfMentales/TEA';
import TDAH from './components/BienestarMental/EnfMentales/TDAH';
import TEPT from './components/BienestarMental/EnfMentales/TEPT';
import TrasLimitePerso from './components/BienestarMental/EnfMentales/TrasLimitePerso';
import CalidadSueno from './components/Pages/CalidadSueno';
import Sueno from './components/Sueno/Sueno';
import HigieneSueno from './components/Sueno/HigieneSueno';
import Mindfulness from './components/BienestarMental/Mindfullness';
import SignosVitalesInforme from './components/Informes/SignosViatlesInforme';
import SuenoInforme from './components/Informes/SuenoInforme';
import HidratacionInforme from './components/Informes/HidratacionInforme';
import RegistroAlimentosInforme from './components/Informes/RegistroAlimentosInforme';
import EjercicioInforme from './components/Informes/EjercicioInforme';
import BienestarMentalInforme from './components/Informes/BienestarMentalInforme';
import ExamenesInforme from './components/Informes/ExamenesInforme';
import FarmacosInforme from './components/Informes/FarmacosInforme';
import RegistroSV from './components/Informes/RegistroSV';
import RegistroHidratacion from './components/Informes/RegistroHidratacion';
import RegistroMusculacion from './components/Informes/RegistroEjercicio/RegistroMusculacion';
import RegistroMusculacion2 from './components/Informes/RegistroEjercicio/RegistroMusculacion2';
import RegistroTrote from './components/Informes/RegistroEjercicio/RegistroTrote';
import RegistroTrote2 from './components/Informes/RegistroEjercicio/RegistroTrote2';
import RegistroCorrer from './components/Informes/RegistroEjercicio/RegistroCorrer';
import RegistroCorrer2 from './components/Informes/RegistroEjercicio/RegistroCorrer2';
import RegistroCaminar from './components/Informes/RegistroEjercicio/RegistroCaminar';
import RegistroCaminar2 from './components/Informes/RegistroEjercicio/RegistroCaminar2';
import RegistroSprint from './components/Informes/RegistroEjercicio/RegistroSprint';
import RegistroSprint2 from './components/Informes/RegistroEjercicio/RegistroSprint2';
import RegistroNadar from './components/Informes/RegistroEjercicio/RegistroNadar';
import RegistroNadar2 from './components/Informes/RegistroEjercicio/RegistroNadar2';
import RegistroBoxeodeSaco from './components/Informes/RegistroEjercicio/RegistroBoxeodeSaco';
import RegistroBoxeoSaco2 from './components/Informes/RegistroEjercicio/RegistroBoxeodeSaco2';
import RegistroBicicleta from './components/Informes/RegistroEjercicio/RegistroBicicleta';
import RegistroBicicleta2 from './components/Informes/RegistroEjercicio/RegistroBicicleta2';
import RegistroYoga from './components/Informes/RegistroMental/RegistroYoga';
import RegistroYoga2 from './components/Informes/RegistroMental/RegistroYoga2';




function MainRouter() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas que usan el layout con Navbar */}
        <Route element={<MainLayout/>}>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        
        
        {/* Rutas privadas que NO usa MainLayout, así no muestra el Navbar externo */}
        <Route element={< PrivateLayout />}   >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/hidratacion' element={<Hidratacion/>} />
          <Route path="/ecnt" element={<ECNT />} />
          <Route path="/ecnt/diabetes" element={<Diabetes />} />
          <Route path="/ecnt/hipertension" element={<Hipertension />} />
          <Route path="/ecnt/dislipidemia" element={< Dislipidemia  />}   />
          <Route path="/ecnt/asma"  element={< Asma />} />
          <Route path="/ecnt/acv" element={< ACV />} />
          <Route path="/ecnt/epoc" element={ < EPOC />}  />
          <Route path='/ecnt/artrosis' element={ < Artrosis /> } />
          <Route path='/ecnt/obesidad' element={ < Obesidad />} />
          <Route path='/ecnt/erc' element={ < ERC /> } />
          <Route path='/ecnt/cancer' element= {< Cancer /> } />
          <Route path='/ecnt/iam' element= { < IAM /> } />
          <Route path='/ecnt/arritmias'  element= {  <  Arritmias />}  />
          <Route path='/ecnt/insuficienciacardiaca' element={ < InsuficienciaCardiaca  /> } />
          <Route path='/ecnt/ateroesclerosis'  element={  < Ateroesclerosis />   }/>
          <Route path='/ecnt/valvulopatias' element={ <  Valvulopatias /> } />
          <Route path='/ecnt/enfermedaddeparkinson'  element={ <  EnfermedadDeParkinson /> }  />
          <Route path='/ecnt/fibrosispulmonar' element={ < FibrosisPulmonar />  } />
          <Route path='ecnt/osteoporosis'  element= { < Osteoporosis /> } />
          <Route path='ecnt/ea' element= { < EA />}  />
          <Route path='ecnt/cataratas' element= { < Cataratas /> } />
          <Route path='ecnt/cardiovascularesecnt' element={ < CardiovascularesECNT /> }  />
          <Route path='ecnt/respiecnt' element={ <  RespiECNT /> }  />
          <Route path='ecnt/metabolicasecnt'  element={ < MetabolicasECNT  /> } />
          <Route path='ecnt/neurodegenerativasecnt'  element={<  NeuroDegenerativasECNT  /> } />
          <Route path='alimentos/alimentos'  element={  <  Alimentos /> }  />
          <Route path='ejercicio/elongacion'  element={ < Elongacion  /> }  />
          <Route path='ejercicio/musculacion'  element= { < Musculacion  /> }   />
          <Route path='ejercicio/cv'   element={ < CV /> }   />
          <Route path='ejercicio/cv/correr'  element={  <  Correr  /> }  />
          <Route path='ejercicio/cv/trote'  element={ < Trote  />  }  />
          <Route path='ejercicio/cv/sprint'  element={ < Sprint /> }  />
          <Route path='ejercicio/cv/bicicleta'  element={ < Bicicleta  /> }  />
          <Route path='ejercicio/cv/caminar'  element={ <  Caminar /> } />
          <Route path='ejercicio/cv/nadar' element={< Nadar  />}   />
          <Route path='ejercicio/cv/boxeosaco'  element={<  BoxeoSaco />}  />
          <Route path='ejercicio/lesmusc' element={  < LesionesMusculares /> }  />
          <Route path='ejercicio/leslig'  element={ <  LesionesLigamentos /> }  />
          <Route path='ejercicio/lesart' element={  < LesionesArticulares />}  />
          <Route path='ejercicio/lesoseas' element={ < LesionesOseas /> }  />
          <Route path='ejercicio/lesnervios'  element={ < LesionesNervios  />  } />
          <Route path='ejercicio/lestendinosas'  element={ < LesionesTendinosas /> } />
          <Route path='ejercicio/lesiones/desgarros'  element={ < Desgarros  /> } />
          <Route path='ejercicio/lesiones/contusion' element={ < Contusion  /> }  />
          <Route path='ejercicio/lesiones/contractura'  element={ <  Contractura />  }  />
          <Route path='ejercicio/lesiones/lesionligtobillo' element={ <  LesionLigTobillo /> }  />
          <Route path='ejercicio/lesiones/lpaa'  element={ <  LPAA /> }  />
          <Route path='ejercicio/lesiones/ligdeltoideo'  element={ <LigDeltoideo/> }  />
          <Route path='ejercicio/lesiones/lpcylpap'  element={ < LPCyLPAP  />  } />
          <Route path='ejercicio/lesiones/lesionligrodilla'  element={ < LesionLigRodilla /> } />
          <Route path='ejercicio/lesiones/lca' element={ < LCA /> }   />
          <Route path='ejercicio/lesiones/lcp'  element={ < LCP  /> } />
          <Route path='ejercicio/lesiones/lcm'  element={ < LCM /> }  />
          <Route path='ejercicio/lesiones/lcl' element={ < LCL /> }  />
          <Route path='ejercicio/lesiones/dpf'  element={ < DPF /> } />
          <Route path='ejercicio/lesiones/lesionlighombro'  element={ < LesionLigHombro /> }  />
          <Route path='ejercicio/lesiones/gh'  element={ < GH /> } />
          <Route path='ejercicio/lesiones/ac' element={ < AC />} />
          <Route path='ejercicio/lesiones/bankart'  element={ < Bankart  /> } />
          <Route path='ejercicio/lesiones/slap'  element={<  SLAP /> } />
          <Route path='ejercicio/lesiones/lesionligcodo'  element={  <  LesionLigCodo />}  />
          <Route path='ejercicio/lesiones/lcmcodo'  element={ <  LCMCodo /> } />
          <Route path='ejercicio/lesiones/lclcodo'  element={ < LCLCodo />  }  />
          <Route path='ejercicio/lesiones/inestplcodo'  element={ < InestPLCodo /> } />
          <Route path='ejercicio/lesiones/luxacioncodo'  element={ < Luxacioncodo  /> } />
          <Route path='ejercicio/lesiones/lesionligmm'  element={ < LesionLigMM /> }  />
          <Route path='ejercicio/lesiones/lesionligescafolunar'  element={ <  LesionLigEscafolunar   /> }  />
          <Route path='ejercicio/lesiones/lesionfct'  element={ <  LesionFCT   /> }  />
          <Route path='ejercicio/lesiones/lesionstener' element={ <  LesionStener /> }   />
          <Route path='ejercicio/lesiones/luxaciondedos'  element={ < Luxaciondedos /> }  />
          <Route path='ejercicio/lesiones/ar' element={ < AR  /> }  />
          <Route path='ejercicio/lesiones/gota'  element={ <  Gota /> } />
          <Route path='ejercicio/lesiones/luxaciones'  element={ <  Luxaciones /> } />
          <Route path='ejercicio/lesiones/luxacionmmdedos'  element={ < LuxacionMMDedos  /> } />
          <Route path='ejercicio/lesiones/luxacionhombro'  element={ <  LuxacionHombro  /> } />
          <Route path='ejercicio/lesiones/luxacionrodilla'  element={ <  LuxacionRodilla  /> }  />
          <Route path='ejercicio/lesiones/luxacioncadera'  element={ <  LuxacionCadera  /> }   />
          <Route path='ejercicio/lesiones/luxaciontobpiededos'  element={ < LuxacionTobPieDedos  />  }  />
          <Route path='ejercicio/lesiones/artrosiscuello'  element={ <  ArtrosisCuello  /> }  />
          <Route path='ejercicio/lesiones/artrosislumbar'  element={  <  ArtrosisLumbar  /> }  />
          <Route path='ejercicio/lesiones/artrosishombro'  element={ < ArtrosisHombro  /> } />
          <Route path='ejercicio/lesiones/artrosismano'  element={ <   ArtrosisMuñMano  /> }  />
          <Route path='ejercicio/lesiones/artrosiscadera' element={ <  ArtrosisCadera />  }  />
          <Route path='ejercicio/lesiones/artrosisrodilla'  element={ < ArtrosisRodilla  /> } />
          <Route path='ejercicio/lesiones/artrosistobpie'  element={ < ArtrosisTobPie /> }  />
          <Route path='ejercicio/lesiones/fxhombro'  element={ < FxHombro /> } />
          <Route path='ejercicio/lesiones/fxhumero' element={  < FxHumero /> }  />
          <Route path='ejercicio/lesiones/fxcodo' element={ < FxCodo /> }  />
          <Route path='ejercicio/lesiones/fxantebrazo'  element={ < FxAntebrazo />  }    />
          <Route path='ejercicio/lesiones/fxmmdedos'  element={ <  FxMMdedos /> }  />
          <Route path='ejercicio/lesiones/fxcolumna' element={ <  FxColumna  /> }  />
          <Route path='ejercicio/lesiones/fxpelvis' element={ <  FxPelvis />  }   />
          <Route path='ejercicio/lesiones/fxcadera' element={ < FxCadera  /> }  />
          <Route path='ejercicio/lesiones/fxfemur' element={< FxFemur  />  }  />
          <Route path='ejercicio/lesiones/fxrodilla'  element={ <FxRodilla/> } />
          <Route path='ejercicio/lesiones/fxpierna'  element={ <  FxPierna  /> }  />
          <Route path='ejercicio/lesiones/fxtobpiededos'  element={ < FxTobPieDedos /> }  />
          <Route path='ejercicio/lesiones/radiculopatiacervical' element={ < RadiculopatiaCervical  /> }   />
          <Route path='ejercicio/lesiones/radiculopatialumbar'  element={ < RadiculopatiaLumbar  />  }   />
          <Route path='ejercicio/lesiones/lesnervioradial'  element={ <  LesNervioRadial /> } />
          <Route path='ejercicio/lesiones/lesnerviomediano'  element={ <  LesNervioMediano  /> }  />
          <Route path='ejercicio/lesiones/lesnervioulnar'  element={ < LesNervioUlnar /> }  />
          <Route path='ejercicio/lesiones/lesnerviociatico'  element={ < LesNervioCiatico /> } />
          <Route path='ejercicio/lesiones/lesnervioperoneo'  element={ < LesNervioPeroneo  /> } />
          <Route path='ejercicio/lesiones/tendinopatiacadera' element={ <  TendinopatiaCadera   /> }   />
          <Route path='ejercicio/lesiones/tendinopatiarodilla'  element={ < TendinopatiasRodilla  /> } />
          <Route path='ejercicio/lesiones/tendinopatiatobpiededos'  element={ < TendinopatiaTobPieDedos /> }  />
          <Route path='ejercicio/lesiones/tendinopatiahombro'  element={ <  TendinopatiaHombro /> }   />
          <Route path='ejercicio/lesiones/tendinopatiacodo'  element={ < TendinopatiaCodo /> } />
          <Route path='ejercicio/lesiones/tendinopatiammdedos'  element={ < TendinopatiaMMDedos /> }  />
          <Route path='examenes/rnm' element= {  < RNM   /> } />
          <Route path='examenes/radiografia'  element={   <  Radiografia  />}  />
          <Route path='examenes/tc' element={ < TC  />   }  />
          <Route path='examenes/ecografia'   element={ < Ecografia /> }  />
          <Route path='examenes/ekg'  element={ < Electrocardiograma />  } />
          <Route path='examenes/ecg' element={ < Ecocardiograma /> } />
          <Route path='examenes2/perfillipidico'  element={ < PerfilLipidico  />  } />
          <Route path='examenes2/glicemia' element={ <  Glicemia /> }  />
          <Route path='examenes2/hemograma' element={ < Hemograma /> }  />
          <Route path='farmacos/farmacoscv'  element={ < FarmacosCV />  }  />
          <Route path='farmacos/farmacosrespi'  element={  <  FarmacosRespi /> }  /> 
          <Route path='farmacos/farmacosdig' element={ <  FarmacosDig /> } /> 
          <Route path='farmacos/farmacosost' element={ <  FarmacosOST  /> }  />
          <Route path='farmacos/farmacosneuro' element={ < FarmacosNeuro /> } />
          <Route path='farmacos/antihipertensivos'  element={ <  Antihipertensivos  /> } />
          <Route path='farmacos/antiarritmicos'  element={  <  Antiarritmicos /> }  />
          <Route path='farmacos/anticoagulantes'  element={ < AntiCoagulantes  /> }  />
          <Route path='farmacos/antiagregantes' element={ < Antiagregantes  /> }  />
          <Route path='farmacos/hipolipemiantes'  element={ < Hipolipemiantes  /> } />
          <Route path='farmacos/iecas'  element={ < IECAs /> } />
          <Route path='farmacos/araii'  element={ < ARAII /> }  />
          <Route path='farmacos/diureticos'   element={  <  Diureticos />  }  />
          <Route path='farmacos/betabloqueadores'  element={ < Betabloqueadores  /> }  />
          <Route path='farmacos/bloqueadorescanalesca'  element={ < BloqueadoresCanalesCa  /> } />
          <Route path='farmacos/bloqueadorescanalesna'  element={ < BloqueadoresCanalesNa /> } />
          <Route path='farmacos/bloqueadorescanalesk' element={  < BloqueadoresCanalesK  /> }  />
          <Route path='farmacos/otrosantiarritmicos'  element={ < OtrosAntiarritmicos /> }  />
          <Route path='farmacos/farmacosic'  element={ <  FarmacosIC  /> } />
          <Route path='farmacos/antagonistasvitk' element={  <  AntagonistasVitaminaK  /> }  />
          <Route path='farmacos/heparinas' element={ <  Heparinas /> }  />
          <Route path='farmacos/anticoagulantesorales'  element={ < AnticoagulantesOrales  /> } />
          <Route path='farmacos/Inhibidoresp2y12'   element={ < InhibidoresP2Y12 /> } />
          <Route path='farmacos/inhibidorescox1' element={ <  InhibidoresCOX1 /> }  />
          <Route path='farmacos/inhibidoresgpiibiiia'  element={ <  InhibidoresGPIIbIIIa /> } />
          <Route path='farmacos/estatinas'  element={ < Estatinas /> } />
          <Route path='farmacos/fibratos'  element={ < Fibratos /> } />
          <Route path='farmacos/ezetemiba'  element={ < Ezetimiba  /> } />
          <Route path='farmacos/resinas'  element={ <  Resinas /> }  />
          <Route path='farmacos/inhibidorespcsk9'   element={  <  InhibidoresPCSK9 /> }  />
          <Route path='farmacos/diureticosasa'  element={ <  DiureticosAsa  /> } />
          <Route path='farmacos/antagonistasmra' element={ < AntagonistasMRA   /> }   />
          <Route path='farmacos/arni' element={ <  ARNI /> }   />
          <Route path='farmacos/broncodilatadores'  element={ < Broncodilatadores />  } />
          <Route path='farmacos/antihistaminicos'  element={ < Antihistaminicos /> } />
          <Route path='farmacos/antiinflamatoriosrespiratorio'  element={< AntiinflamatoriosRespiratorios />  }  />
          <Route path='farmacos/mucoliticosyexpectorantes' element={ < MucoliticosyExpectorantes  /> }    />
          <Route path='farmacos/antibioticosrespiratorios'  element={ < AntibioticosRespiratorios /> } />
          <Route path='farmacos/saba'  element={ <  SABA/> } />
          <Route path='farmacos/laba' element={ < LABA /> }  />
          <Route path='farmacos/anticolinergicos'  element={ < Anticolinergicos /> } />
          <Route path='farmacos/metilxantinas'  element={ <  Metilxantinas /> } />
          <Route path='farmacos/corticoidesinhalados'  element={ < CorticoidesInhalados  /> } />
          <Route path='farmacos/corticoidessistemicos'  element={ <  CorticoidesSistemicos  /> }  />
          <Route path='farmacos/antileucotrienos'  element={ < Antileucotrienos /> } />
          <Route path='farmacos/antihistaminicosh1primeragen'  element={ <  AntihistaminicosH1PrimeraGen /> } />
          <Route path='farmacos/antihistaminicosh1segundagen' element={ <  AntihistaminicosH1SegundaGen /> }  />
          <Route path='farmacos/antihistaminicosh2'  element={ <  AntihistaminicosH2 /> }  />
          <Route path='farmacos/mucoliticos'  element={ < Mucoliticos  /> } />
          <Route path='farmacos/expectorantes'  element={ < Expectorantes  /> } />
          <Route path='farmacos/penicilinhibidorbeta' element={ <  PenicilInhibidorBeta /> }  />
          <Route path='farmacos/macrolidos'  element={ <  Macrolidos />  } />
          <Route path='farmacos/cefalosporinas'  element={ < Cefalosporinas /> } />
          <Route path='farmacos/fluoroquinolonas'  element={ < Fluoroquinolonas /> } /> 
          <Route path='farmacos/tetraciclinas'  element={  <  Tetraciclinas />}  />
          <Route path='farmacos/antiacidos'  element={ < Antiacidos  /> } />  
          <Route path='farmacos/protectoresgastricos'  element={  <  ProtectoresGastricos   /> }    />
          <Route path='farmacos/procineticos'  element={ < Procineticos  /> }  />
          <Route path='farmacos/antiemeticos'  element={ < Antiemeticos  /> }  />
          <Route path='farmacos/laxantes'  element={ < Laxantes /> } />
          <Route path='farmacos/antidiarreicos'  element={ < Antidiarreicos /> } />
          <Route path='farmacos/farmacoshuesos' element={ < FarmacosHuesos  /> }   />
          <Route path='farmacos/farmacosmusculos'  element={ < FarmacosMusculos />  }  />
          <Route path='farmacos/farmacostendonesligamentos'  element={ <  FarmacosTendonesLigamentos /> } />
          <Route path='farmacos/farmacosfascia'  element={ < FarmacosFascia /> }  />
          <Route path='farmacos/farmacosnervioscolumna'  element={ < FarmacosNerviosColumna /> }  />
          <Route path='farmacos/antiepilepticos'  element={ <  Antiepilepticos /> }  />
          <Route path='farmacos/antiparkinsonianos'  element={ <  Antiparkinsonianos /> } />
          <Route path='farmacos/em'  element={ < EM /> } />
          <Route path='farmacos/migraña'  element={ < Migraña /> } />
          <Route path='farmacos/dolorneuropatico'  element={  <  DolorNeuropatico />  } />
          <Route path='farmacos/farmacosneuromusculares' element={ <   FarmacosNeuromusculares /> }  />
          <Route path='farmacos/farmacos2/enalapril'  element={ <  Enalapril /> } />
          <Route path='farmacos/farmacos2/clorfenamina'  element={ < Clorfenamina /> } />
          <Route path='farmacos/farmacos2/diazepam'  element={ <  Diazepam  /> } />
          <Route path='farmacos/farmacos2/budesonida'   element={ < Budesonida /> }  />
          <Route path='farmacos/farmacos2/ibuprofeno'  element={ < Ibuprofeno /> }   />
          <Route path='farmacos/farmacos2/omeprazol'  element={ < Omeprazol  /> }  />
          <Route path='farmacos/farmacos2/atorvastatina'  element={ <  Atorvastatina /> }  />
          <Route path='farmacos/farmacos2/amoxicilina'  element={ < Amoxicilina  /> }   />
          <Route path='farmacos/farmacos2/salbutamol' element={ < Salbutamol /> }  />
          <Route path='farmacos/farmacos2/hidroclorotiazida'  element={ <  Hidroclorotiazida /> } />
          <Route path='farmacos/farmacos2/paracetamol'  element={ < Paracetamol /> }  />
          <Route path='farmacos/farmacos2/captopril'   element={ < Captopril  />  } />
          <Route path='farmacos/registrofarmacos/registrofarmacoscalendario'  element={ <  RegistroFarmacosCalendario /> }   />
          <Route path='bienestarmental/enfmentalcomun' element={ < EnfMentalComun  /> }  />
          <Route path='bienestarmental/trasestanimo' element={ < TrasEstAnimo   />} />
          <Route path='bienestarmental/trasansiedad'  element={  <  TrasAnsiedad />}  />
          <Route path='bienestarmental/traspsicotico' element={ <  TrasPsicotico  />  }  />
          <Route path='bienestarmental/trasalimentario' element={ < TrasAlimentario /> }  />
          <Route path='bienestarmental/trasneurodesarrollo'  element={ <  TrasNeurodesarrollo />} />
          <Route path='bienestarmental/trasotrascondiciones' element={  <  TrasOtrasCondiciones  />}  />
          <Route path='bienestarmental/yoga'  element={ <  Yoga /> } />
          <Route path='bienestarmental/ejerciciosrelajacion'  element={ < EjerciciosRelajacion /> } />
          <Route path='bienestarmental/enfmentales/depresion' element={  < Depresion  /> }  />
          <Route path='bienestarmental/enfmentales/trasbipolar' element={  <  TrasBipolar />  }  /> 
          <Route path='bienestarmental/enfmentales/distimia'  element= {  <  Distimia   />  } />
          <Route path='bienestarmental/enfmentales/tag'  element={ <  TAG  /> }  /> 
          <Route path='bienestarmental/enfmentales/ataquespanico'  element={ < AtaquesPanico /> }   />
          <Route path='bienestarmental/enfmentales/fobias' element={  <  Fobias /> } />
          <Route path='bienestarmental/enfmentales/toc' element={  <  TOC /> } />
          <Route path='bienestarmental/enfmentales/esquizo' element={ < Esquizo  /> } />
          <Route path='bienestarmental/enfmentales/trasdelirante'  element={ <  TrasDelirante /> }  />
          <Route path='bienestarmental/enfmentales/anorexianerviosa'  element={  < AnorexiaNerviosa /> }  />
          <Route path='bienestarmental/enfmentales/bulimianerviosa' element={ < BulimiaNerviosa /> } />
          <Route path='bienestarmental/enfmentales/trasporatracon'  element={  <  TrasPorAtracón /> } />
          <Route path='bienestarmental/enfmentales/tea' element={  <  TEA   /> } />
          <Route path='bienestarmental/enfmentales/tdah' element={ < TDAH  /> }  />
          <Route path='bienestarmental/enfmentales/tept'  element={  < TEPT  /> }  />
          <Route path='bienestarmental/enfmentales/traslimiteperso'  element={ < TrasLimitePerso  /> } />
          <Route path="/signosvitales"  element={<RegistroCSV />} />
          <Route path="/ejercicio" element={< Ejercicio />} />  
          <Route path='/bienestarmental'  element={ <BienestarMental/> } />      
          <Route path='/farmacos' element={< Farmacos />}  />
          <Route path='/examenes' element={< Examenes />}  />
          <Route path='/registroalimentos' element={ < RegistroAlimentos />} />
          <Route path='/comidas'  element={ < Comidas /> } />
          <Route path='/comidas2' element={ < Comidas2  /> }  />
          <Route path='/premium' element={  < Premium />} />
          <Route path='/informes'  element= {<  Informes /> } />
          <Route path='/perfil' element={ < Perfil /> } />
          <Route path='/imagen' element={ <  Imagen   /> }  />
          <Route path='/lab' element={ <  Lab />  }   />
          <Route path='/calidadsueno'  element={ < CalidadSueno /> } />
          <Route path='/sueno'   element={ < Sueno /> } />
          <Route path='/higienesueno'  element={  <  HigieneSueno   /> } />
          <Route path='/bienestarmental/mindfullness' element={ <  Mindfulness /> }   />
          <Route path='/signosvitalesinforme' element={  < SignosVitalesInforme  />  }  />
          <Route path='/suenoinforme'  element={ < SuenoInforme  /> }   />
          <Route path='/hidratacioninforme'  element={ <  HidratacionInforme /> } />
          <Route path='/registroalimentosinforme'  element={ <  RegistroAlimentosInforme  /> }  />
          <Route path='/ejercicioinforme'  element={ <  EjercicioInforme /> }  />
          <Route path='/bienestarmentalinforme'  element={ <  BienestarMentalInforme  /> }  />
          <Route path='/examenesinforme'  element={ < ExamenesInforme /> } />
          <Route path='/farmacosinforme'  element={ <  FarmacosInforme  /> } />
          <Route path='/registrosv'  element= { <  RegistroSV  /> }  />
          <Route path='/registrohidratacion'  element={  <  RegistroHidratacion /> }  />
          <Route path='/registroejercicio/registromusculacion'  element= { <  RegistroMusculacion  /> } />
          <Route path='/registroejercicio/registromusculacion2' element= { <  RegistroMusculacion2 /> }  />
          <Route path='/registroejercicio/registrotrote' element={ <  RegistroTrote /> }  />
          <Route path='/registroejercicio/registrotrote2'  element={ <  RegistroTrote2 /> }  />
          <Route path='/registroejercicio/registrocorrer' element= {  < RegistroCorrer /> } />
          <Route path='/registroejercicio/registrocorrer2' element= { <  RegistroCorrer2 />  } />
          <Route path='/registroejercicio/registrocaminar'  element= {  <  RegistroCaminar   /> }  />
          <Route path='/registroejercicio/registrocaminar2' element= { <  RegistroCaminar2 />} />
          <Route path='/registroejercicio/registrosprint'  element= { < RegistroSprint />  } />
          <Route path='/registroejercicio/registrosprint2'  element={  < RegistroSprint2  /> }  />
          <Route path='/registroejercicio/registronadar'  element= {<  RegistroNadar /> }  />
          <Route path='/registroejercicio/registronadar2'  element= { <  RegistroNadar2 /> } />
          <Route path='/registroejercicio/registroboxeodesaco' element={ < RegistroBoxeodeSaco />  }  />
          <Route path='/registroejercicio/registroboxeodesaco2'  element= {  <  RegistroBoxeoSaco2 /> }  />
          <Route path='/registroejercicio/registrobicicleta'  element= { <  RegistroBicicleta   />  }  />
          <Route path='/registroejercicio/registrobicicleta2'  element= { <  RegistroBicicleta2 /> }  />
          <Route path='/registromental/registroyoga'  element={<  RegistroYoga />  } />
          <Route path='/registromental/registroyoga2'  element= {< RegistroYoga2  /> }  />
        </Route>  
      </Routes>
    </Router>
  );
}

export default MainRouter;


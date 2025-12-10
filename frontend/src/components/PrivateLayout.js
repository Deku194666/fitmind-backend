
// src/components/AppLayout.js
import React from 'react';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const PrivateLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh' }}  >
      <Topbar /> {/* Esta es tu barra interna */}
      <main style={{ flex: 1 }}  >  
        <Outlet /> {/* Aquí se renderizan las páginas internas como dashboard, hidratación, etc. */}   
      </main>
      <Footer/>
    </div>
    
    
  );
};

export default PrivateLayout;






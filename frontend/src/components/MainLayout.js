
import React from 'react';
import Navbar from './Navbar'; // Asegúrate de que la ruta sea correcta
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;



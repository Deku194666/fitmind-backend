

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="home-footer" sx={{ bgcolor: 'background.paper', py: 0.3, mt: 0.6 }}>
      <Typography variant='body2' color="#2980b9" align='center' className="copyright">
        {'Copyright © '}
        <Link color='#2980b9' href="/terminos" className="footer-link">
          FitMind App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant="body2" align="center" className="contact-info">
        Contacto: <Link href="mailto:info@fitmindapp.com" className="footer-link" color='#2980b9'>info@fitmindapp.com</Link>
      </Typography>
      <Typography variant="body2" color="#2980b9" align="center" marginBottom={'1rem'}>
        <Link href="/terminos" className="footer-link" color='#2980b9'>Términos de servicio</Link> | <Link href="/privacidad" className="footer-link" color='#2980b9' >Política de privacidad</Link>
      </Typography>
    </Box>
  );
};

export default Footer;



// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar"  >
      <List>
        <ListItem button className="sidebar-list-item" >
          <Link  className='sidebar-option' to="/perfil">Perfil</Link>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <span className='sidebar-option1'  >  Hábitos  </span>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <span className='sidebar-option2'  >  Comunidad  </span>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <span className='sidebar-option3'  >  Amigos  </span>
        </ListItem>
        <ListItem button className="sidebar-list-item">
          <span className='sidebar-option3'  >  Configuración  </span>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;




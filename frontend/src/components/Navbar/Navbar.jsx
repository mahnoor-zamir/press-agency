import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <img 
        src="../public/logos/logo_dark-3.png" 
        alt="Ascend Agency Logo" 
        className="logo" 
        style={{ width: '300px', height: 'auto' }} // Adjust the width here
      />
      <button className="logout-button" onClick={onLogout}>LOG OUT</button>
    </nav>
  );
}

export default Navbar;

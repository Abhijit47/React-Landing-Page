import React from 'react';
import './Navbar.css';
import LOGO from '../../assets/images/logo192.png';

const imgStyle = {
  "width": "2.2rem"
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light position-sticky top-0 z-1 shadow-sm">
      <div className="container">
        <img src={LOGO} alt="logo" style={imgStyle} />
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
        <a className="btn btn-primary" href="#signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`NavbarItems ${clicked ? 'active' : ''}`}>
      <h1 className='navbar-logo'>TRIPME</h1>

      <div className='menu-icons' onClick={handleClick}>
        {clicked ? <FaTimes /> : <FaBars />}
      </div>

      <main className={`nav-menu ${clicked ? 'active' : ''}`}>
        <a href="/"> <i className="fa-sharp fa-solid fa-house-user"></i> Home</a>
        <a href="/about"> <i className="fa-solid fa-circle-info"></i> About</a> 
        <a href="/services"> <i className="fa-solid fa-briefcase"></i> Services</a>
        <a href="/contact"> <i className="fa-solid fa-address-book"></i> Contact us</a>
        <a href='#'><i className="login-signup-button"></i>Sign up</a>
      </main>
    </nav>
  );
};

export default Navbar;

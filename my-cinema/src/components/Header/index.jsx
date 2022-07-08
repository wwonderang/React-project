import React from "react";
// import logo from './../img/logoHouse.jpg';
import logo from './../../img/cinema-icon.jpg';
import './../Header/header.scss'

const Header = () => {

  return (
    <div className="cinemaHeader">
      <img src={logo} alt="logo" />
      <button>Sign in</button>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Header;
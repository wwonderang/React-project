import React from "react";
// import logo from './../img/logoHouse.jpg';
import logo from './../../img/cinema-icon.jpg';
import './header.scss'

const Header = (props) => {

  const { openModal} = props;

  return (
    <div className="cinema-header">

      <img src={ logo } alt="logo" />

      <button onClick={openModal}>Sign in</button>

      <input type="text" placeholder="Search" />

    </div>
  );
};

export default Header;

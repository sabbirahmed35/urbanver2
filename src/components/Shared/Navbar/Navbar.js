import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../../assets/img/main-logo (1) copy.png'; 
import './Navbar.css';
 

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  

  window.addEventListener("scroll", changeColor);

  return (
    <>
    <div className={color ? "header header-bg" : "header"}>
        <div className="logo">
          <Link to="/">
          <img src= {logo} alt="" />
        </Link>  
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/"> Team </Link>
        </li>

        <li>
          <Link to="/">Offerings</Link>
        </li>

        <li>
          <Link to="/">User room</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#0a9259", cursor: "pointer"}} />
        ) : (
          <FaBars size={20} style={{ color: "#0a9259", cursor: "pointer"}} />
        )}
      </div>
      </div>
     
      </>
  );
};

export default Navbar;


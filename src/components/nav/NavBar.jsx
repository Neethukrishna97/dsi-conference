import React, { useState } from "react";
import "./NavBar.css";
import dsiLogo from "../../assets/dsi-logo-new.png";
import Logo from "../../assets/halmstad-university.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri'


const NavBar = ({ background }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 250 ? setShow(true) : setShow(false)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav style={{ background: `${show ? "rgb(24, 24, 66)" : background}` }}>
      <div className="nav-logos">
        <Link to="/">
          <img className="nav-logo" src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <img className="nav-dsi-logo" src={dsiLogo} alt="dsi-logo" />
        </Link>
      </div>
      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-items  ${isOpen ? "open" : ""}`}>
        <Link className="link-style" to="/"><li className="nav-item">HOME</li></Link>
        <Link className="link-style" to="/call-for-papers">
          <li className="nav-item nav-papers">
            CALL FOR PAPERS
            <RiArrowDropDownLine size={25} />
            <div className="nav-dropdown">
              <Link className="link-style" to='/proceedings'><span>proceedings</span></Link>
            </div>
          </li></Link>
        <Link className="link-style" to="/track info"><li className="nav-item">TRACK INFO</li></Link>
        <Link className="link-style" to="/speakers"><li className="nav-item">SPEAKERS</li></Link>
        <Link className="link-style" to="/schedule"><li className="nav-item">SCHEDULE</li></Link>
        <Link className="link-style" to="/evalution"><li className="nav-item">EVALUTION</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;

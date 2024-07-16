import React from "react";
import { NavLink, Link } from "react-router-dom";
import icon from "./Content/vm.jpeg";
import "./Navbar.css";


const Navbar = () => {
    const handleMenuClick = () => {
        document.getElementById('menu-toggle').checked = false;
    };
    return (
        <>

            <div className="navbar">
                <a href="https://vvm3.github.io/VVMPortfolio/"><img src={icon} alt="myIcon" className="iconimg" /></a>
                <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
                <label htmlFor="menu-toggle" className="menu-icon">☰</label>
                <div className="navmain">
                    <NavLink exact to="/home" onClick={handleMenuClick} activeClassName="active" className="navtext">Home</NavLink>
                    <NavLink exact to="/about" onClick={handleMenuClick} activeClassName="active" className="navtext">About</NavLink>
                    <NavLink exact to="/skills" onClick={handleMenuClick} activeClassName="active" className="navtext">Skills</NavLink>
                    <NavLink exact to="/work" onClick={handleMenuClick} activeClassName="active" className="navtext">Work</NavLink>
                    <Link exact to="/contact" onClick={handleMenuClick} ><button className="contactbtn">Contact Me</button></Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;
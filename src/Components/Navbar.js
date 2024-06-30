import React from "react";
import { NavLink, Link } from "react-router-dom";
import icon from "./Content/vm.jpeg";
import "./Navbar.css";


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <a href="/"><img src={icon} alt="myIcon" className="iconimg" /></a>
                <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
                <label htmlFor="menu-toggle" className="menu-icon">☰</label>
                <div className="navmain">
                    <NavLink exact to="/home" activeClassName="active" className="navtext">Home</NavLink>
                    <NavLink exact to="/about" activeClassName="active" className="navtext">About</NavLink>
                    <NavLink exact to="/work" activeClassName="active" className="navtext">Work</NavLink>
                    <NavLink exact to="/skills" activeClassName="active" className="navtext">Skills</NavLink>
                    <Link exact to="/contact"><button className="contactbtn">Contact Me</button></Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;
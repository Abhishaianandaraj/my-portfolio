import "./Navbarstyle.css";
import React , {useState} from 'react'
import { Link as Link1} from "react-router-dom";
import { Link as Link2} from "react-scroll";
import {FaBars , FaTimes} from "react-icons/fa";


const Navbar = () => {
    const [click,setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const [colour,setcolor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 1) {
            setcolor(true);
        }else{
            setcolor(false);
        }
    };
    window.addEventListener("scroll",changecolor);

  return (
    <div className={colour ?"header header-bg":"header"}>
        <Link1 style={{textDecoration:'none'}} to={"/"}>
            <h2>portfolio.</h2>
        </Link1>
        <ul className={click ? "nav-links active":"nav-links"}>
        <li>
            <Link1 style={{textDecoration:'none'}} to={"/"}>Home</Link1>
        </li>
        <li>
            <Link1 style={{textDecoration:'none'}} to={"/about"}>About</Link1>
        </li>
        <li>
            <Link1 style={{textDecoration:'none'}} to={"/contact"}>Contact</Link1>
        </li>
        <li>
            <Link1 style={{textDecoration:'none'}} to={"/project"}>Project</Link1>
        </li>
        <li><Link2 to="foot" smooth={true} duration={1000}>press me</Link2></li>
        </ul>
        <div className="hamburger" onClick={handleClick} >
            {click ?(<FaTimes size={20} style={{color:'white'}}/>):
            (<FaBars size={20} style={{color:'white'}}/>)}
        </div>
    </div>

  )
}

export default Navbar
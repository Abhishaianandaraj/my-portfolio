import "./Herostyles.css"
import React from 'react'
import Heroimg from ".//assets/dSC_3480.JPG"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="herointro">
        <div className="mask">
         <img className="introimg" src={Heroimg} alt="Heroimg"/>
        </div>
      <div className="content">
          <p>I'm a student pursuing B.E CSE..</p>
          <h1>React Developer.</h1>
          <div className="buttons">
          <Link to={"/project"} className="btn">Projects</Link>
          <Link to={"/contact"} className="btn btn-light">Contact</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
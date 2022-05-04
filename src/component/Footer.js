import "./footerstyle.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter,FaLinkedin} from "react-icons/fa"


 const footer = () => {
  return (
    <div id="foot" className="footer">
     <div className="footer-container">
         <div className="footer-left">
             <div className="location">
                 
                 <div>
                   <p className="loco"><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>K.G.F,Karnataka,Rocky bhai illam.</p>
                 </div>
                 
                 <div className="phone">
                   <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>143143143</h4>
                 </div>
                 
                 <div className="mail"><h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>007@gmail.com</h4></div>
             </div>
         </div>
         <div className="footer-right">
           <h4>About Me</h4>
           <p>I'm a student at RIT pursuing B.E CSE...I Aspire to be a full stack developer.
             soon will i be. 
           </p>
           <div className="socials">
           <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/>
           <FaTwitter size={30} style={{color:"white",marginRight:"1rem"}}/>
           <FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/>


           </div>
         </div> 
     </div>
    </div>
  )
}

export default footer
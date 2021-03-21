import React from "react";
import "./Footer.css";
import github from '../../assets/Icons/GitHub-Mark.png';
import linked from '../../assets/Icons/linkedInlogo.png';

function Footer() {
  return (
  <footer className="footermain">
      <p>
          <a href="https://github.com/wdavonta"><img src={github} className="logo" alt="Github"/></a>
      </p>
      <p>
          <a href="https://www.linkedin.com/in/da-vonta-williamson-43238652/"><img src={linked} className="logo2" alt="LinkedIn"/></a>
      </p>
      
  </footer>
        // <div className="row">
        //   <p className="col-sm">
        //     &copy;{new Date().getFullYear()} Da'Vonta Portfolio | All rights reserved |
        //     Terms Of Service | Privacy
        //   </p>
        // </div>
  )
}

export default Footer;
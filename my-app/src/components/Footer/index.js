import React from "react";
import "./Footer.css";

function Footer() {
  return (
  <footer>
      <p>
          <a href="https://github.com/wdavonta"><img src={require('../../assets/Icons/GitHub-Mark.png')} alt="GitHub"/></a>
      </p>
      <p>
          <a href="https://www.linkedin.com/in/da-vonta-williamson-43238652/"><img src={"../../assets/Icons/linkedInlogo"} className="logo" alt="LinkedIn"/></a>
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
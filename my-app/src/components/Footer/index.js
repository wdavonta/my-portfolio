import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1 className="list-unstyled">
              <li>LinkedIn</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>GitHub</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Da'Vonta Portfolio | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
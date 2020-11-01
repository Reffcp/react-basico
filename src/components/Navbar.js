import React from "react";

import './styles/Navbar.css'

class Navbar extends React.Component {
  render() {
    const logo ="https://firebasestorage.googleapis.com/v0/b/portafolio-personal-264fb.appspot.com/o/logos%2Flogo-cristian.png?alt=media&token=95a8dfc2-a219-466b-a037-4912a4387a32";
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo rebits" />
            <span className="font-weight-light">Rebits</span>
            <span className="font-weight-blod">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;

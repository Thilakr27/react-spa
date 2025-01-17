import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">React SPA</a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/">About</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;

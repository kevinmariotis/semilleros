import React from "react";
import Logo from "../dist/img/AdminLTELogo.png";

export const Navbar = () => {
  return (
    <div className="hold-transition layout-top-nav">
      <div className="wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a href="/perfil" className="navbar-brand">
              <img
                src={Logo}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8", width: "40px" }}
              />
              <span className="brand-text font-weight-light mx-2">
                Administrador
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="index3.html" className="nav-link">
                    Perfil
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/perfil" className="nav-link">
                    Ajustes de usuario
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark">
                    Cerrar sesion
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

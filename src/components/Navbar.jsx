import React from "react";
import Logo from "../dist/img/AdminLTELogo.png";

export const Navbar = () => {
  return (
    <div className="hold-transition layout-top-nav">
      <div className="wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a href="/perfil" class="navbar-brand">
              <img
                src={Logo}
                alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3"
                style={{ opacity: ".8", width: "40px" }}
              />
              <span class="brand-text font-weight-light mx-2">
                Administrador
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="index3.html" class="nav-link">
                    Perfil
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/perfil" class="nav-link">
                    Semilleros
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/perfil" class="nav-link">
                    Ajustes de usuario
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

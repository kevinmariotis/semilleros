import React from "react";
import Logo from '../dist/img/AdminLTELogo.png'

export const Navbar = () => {
  return (
    <div className="hold-transition layout-top-nav">
      <div className="wrapper">
        <nav class="bg-light navbar navbar-expand-md navbar-light navbar-white ">
            <div class="container">
                <a href="/perfil" class="navbar-brand">
                    <img
                    src={Logo}
                    alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3"
                    style={{ opacity: ".8", width: "40px"}}
                    />
                    <span class="brand-text font-weight-light mx-2">Administrador</span>
                </a>

                <button
                    class="navbar-toggler order-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse order-3 justify-content-end" id="navbarCollapse">
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

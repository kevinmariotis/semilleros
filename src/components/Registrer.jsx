import React from "react";
import { Link } from "react-router-dom";

export const Registrer = () => {
  

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1">
              <b>Registrarse</b>
            </a>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Nombre completo"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="correo"
                  className="form-control"
                  placeholder="Correo Electronico"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="contraseña"
                  className="form-control"
                  placeholder="Contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="conf_contraseña"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              {/* {mensaje && (
                <div
                  className="alert alert-danger bg-gradient mt-3 text-center"
                  role="alert"
                >
                  {mensaje}
                </div>
              )} */}
              <div className="row mt-3">
                <div className="col-8">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      value="agree"
                    />
                    <label htmlFor="agreeTerms">
                      Acepto los <a href="/">Terminos</a>
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Registrar
                  </button>
                </div>
              </div>
            </form>

            <Link to="/" className="text-center">
              Ya tengo una cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

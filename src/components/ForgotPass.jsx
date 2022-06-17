import React from 'react'
import { Link } from 'react-router-dom';

export const ForgotPass = () => {
  return (
    <div className="hold-transition login-page">
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-body">
                <p className="login-box-msg">¿Olvidaste tu contraseña? Aquí puede recuperar fácilmente una nueva contraseña.</p>
                <form>
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Correo Electronico"/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block">Nueva Contraseña</button>
                    </div>
                    </div>
                </form>
                <p className="mt-3 mb-1">
                    <Link to="/">Iniciar Sesion</Link>
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

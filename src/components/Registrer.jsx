import React from 'react'
import { Link } from 'react-router-dom';

export const Registrer = () => {
  return (
    <div className="hold-transition register-page">
        <div className="register-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <a href="../../index2.html" className="h1"><b>Registrarse</b></a>
                </div>
                <div className="card-body">

                <form action="../../index.html" method="post">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre completo"/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-user"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Correo Electronico"/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Contraseña"/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Confirmar contraseña"/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-8">
                        <div className="icheck-primary">
                        <input type="checkbox" id="agreeTerms" name="terms" value="agree"/>
                        <label for="agreeTerms">
                        Acepto los <a href="#">Terminos</a>
                        </label>
                        </div>
                    </div>
                    {/* <!-- /.col --> */}
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                    </div>
                    {/* <!-- /.col --> */}
                    </div>
                </form>

                <Link to="/" className="text-center">Ya tengo una cuenta</Link>
                </div>
                {/* <!-- /.form-box --> */}
            </div>
            {/* <!-- /.card --> */}
        </div>
    </div>
  )
}

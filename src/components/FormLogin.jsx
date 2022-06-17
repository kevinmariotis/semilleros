import { Link, useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate()
  return (
    <div className='hold-transition login-page'>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>Iniciar Sesion</b></a>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group mb-3">
                <input type="email" name="correo" className="form-control" placeholder="Correo Electronico"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" name="contraseña" className="form-control" placeholder="Contraseña"/>
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
              <div className="row">
                <div className="col-8">
                  <div className="form-check">
                    <input type="checkbox" id="remember" className='form-check-input'/>
                    <label htmlFor="remember" className='form-check-label'>
                      Recordar contraseña
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" onClick={()=>{navigate('/perfil')}}>Entrar</button>
                </div>
              </div>
            </form>
            <p className="mb-1">
              <Link to="/forgot-pass">Olvide mi contraseña</Link>
            </p>
            <p className="mb-0">
              <Link to="/registrer" className="text-center">Registrar un nuevo usuario</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { React, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const [pass, setPass] = useState('');
  const [a, setA] = useState(true);
  const navigate = useNavigate()
  console.log(pass);

  const iniciar = () => {
    if (pass == "123"){
      navigate('/perfil')
    }else{
      setA(false)
    }   
  }

  return (
    <div className='hold-transition login-page'>
      <div className="login-box">
        {/* <!-- /.login-logo --> */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>Iniciar Sesion</b></a>
          </div>
          <div className="card-body">
            {!a && <div className='alert alert-danger text-center'>Credenciales Erroneas</div>} 
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Correo Electronico"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" onChange={e => setPass(e.target.value)}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember"/>
                    <label for="remember">
                      Recordar contraseña
                    </label>
                  </div>
                </div>
                {/* <!-- /.col --> */}
                <div className="col-4">
                  <button type="button" className="btn btn-primary btn-block" onClick={iniciar}>Entrar</button>
                </div>
                {/* <!-- /.col --> */}
              </div>
            </form>
            <p className="mb-1">
              <Link to="/forgot-pass">Olvide mi contraseña</Link>
            </p>
            <p className="mb-0">
              <Link to="/registrer" className="text-center">Registrar un nuevo usuario</Link>
            </p>
          </div>
          {/* <!-- /.card-body --> */}
        </div>
        {/* <!-- /.card --> */}
      </div>
    </div>
  )
}

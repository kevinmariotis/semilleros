import React, { useState } from "react";

export const ModalCreateSemillero = () => {
  const [seleccion2, setSeleccion2] = useState('false');
  const [dataSemillero, setDataSemillero] = useState({});

  const handleChange = (e) => {
    setDataSemillero({ ...dataSemillero, [e.target.name]: e.target.value });
    console.log(dataSemillero);
  };
  const handleChangeSeleccion = (e) => {
    setSeleccion2(e.target.value);
    setDataSemillero({ ...dataSemillero, [e.target.name]: seleccion2 });
    if (e.target.value === "true") {
      window.location.href = "#desplegable";
    }
    console.log(dataSemillero);
  };

  return (
    <div
      className="modal fade"
      id="newSemillero"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Solicitud de creacion y/o formalizacion de semilleros de
              investigacion
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="container">
              <legend className="my-2">
                Informacion general del semillero
              </legend>

              <div className="row">
                <div className="col-sm-6 my-2">
                  <label htmlFor="nombre">
                    <b>Nombre del semillero</b>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="facultad">
                    <b>Facultad</b>
                  </label>
                  <input
                    type="text"
                    id="facultad"
                    name="facultad"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="programa">
                    <b>Programa academico</b>
                  </label>
                  <input
                    type="text"
                    id="programa"
                    name="programa"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="grupo">
                    <b>Grupo de investigacion</b>
                  </label>
                  <input
                    type="text"
                    id="grupo"
                    name="grupo"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="linea">
                    <b>Linea de investigacion</b>
                  </label>
                  <input
                    type="text"
                    id="linea"
                    name="linea"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="tematica">
                    <b>Tematica de estudio</b>
                  </label>
                  <input
                    type="text"
                    id="tematica"
                    name="tematica"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col my-2">
                  <label htmlFor="justificacion">
                    <b>Justificaion del semillero de investigacion</b>
                  </label>
                  <textarea
                    id="Justificacion"
                    name="justificacion"
                    className="form-control"
                    placeholder="Ingrese texto"
                    rows="6"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <legend className="my-2">
                  Identificaion del docente coordinador del semillero
                </legend>
                <div className="col-sm-6 my-2">
                  <label htmlFor="nombreCoordinador">
                    <b>Nombre completo</b>
                  </label>
                  <input
                    type="text"
                    id="nombreCoordinador"
                    name="nombreCoordinador"
                    className="form-control"
                    value={"Mario Casquilla"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="identificacionCoordinador">
                    <b>Numero de Telefono/celular</b>
                  </label>
                  <input
                    type="text"
                    id="identificacionCoordinador"
                    name="identificacionCoordinador"
                    className="form-control"
                    value={"1234567890"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="identificacionCoordinador">
                    <b>Numero de identificacion</b>
                  </label>
                  <input
                    type="text"
                    id="identificacionCoordinador"
                    name="identificacionCoordinador"
                    className="form-control"
                    value={"1234567890"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="lugarExpedicionCoordinador">
                    <b>Lugar de expedicion</b>
                  </label>
                  <input
                    type="text"
                    id="lugarExpedicionCoordinador"
                    name="lugarExpedicionCoordinador"
                    className="form-control"
                    value={"Barranquilla - Atlantico"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="fechaNacimientoCoordinador">
                    <b>Fecha de nacimiento</b>
                  </label>
                  <input
                    type="text"
                    id="fechaNacimientoCoordinador"
                    name="fechaNacimientoCoordinador"
                    className="form-control"
                    value={"10/5/1995"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="lugarNacimientoCoordinador">
                    <b>Lugar de nacimiento</b>
                  </label>
                  <input
                    type="text"
                    id="lugarNacimientoCoordinador"
                    name="lugarNacimientoCoordinador"
                    className="form-control"
                    value={"Barranquilla - Atlantico"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="direccionCoordinador">
                    <b>Direccion de residencia</b>
                  </label>
                  <input
                    type="text"
                    id="direccionCoordinador"
                    name="direccionCoordinador"
                    className="form-control"
                    value={"Calle 33b # 72-23"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="correoCoordinador">
                    <b>Correo electronico</b>
                  </label>
                  <input
                    type="text"
                    id="correoCoordinador"
                    name="correoCoordinador"
                    className="form-control"
                    value={"coordinador@email.com"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="nombreContacto">
                    <b>En caso de emergencia llamar a</b>
                  </label>
                  <input
                    type="text"
                    id="nombreContacto"
                    name="nombreContacto"
                    className="form-control"
                    value={"Camila Beltran"}
                    disabled
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="numeroContacto">
                    <b>Numero de contacto</b>
                  </label>
                  <input
                    type="text"
                    id="numeroContacto"
                    name="numeroContacto"
                    className="form-control"
                    value={"3216549870"}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <legend className="my-2">Idiomas</legend>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="w-50">Lengua</th>
                      <th>Nivel alcanzado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{"Ingles"}</td>
                      <td>{"Intermedio"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <legend className="my-2">Informacion academica</legend>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Pregrado</td>
                      <td>{"Ingeniero de sistemas"}</td>
                    </tr>
                    <tr>
                      <td>Posgrados</td>
                      <td>{"Especializacion javascript"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <legend className="my-2">
                  Cursos de formacion en investigacion
                </legend>
                <div className="col-sm-6 my-2">
                  <label htmlFor="tematicaCurso">
                    <b>Tematica del curso</b>
                  </label>
                  <input
                    type="text"
                    id="tematicaCurso"
                    name="tematicaCurso"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="institucion">
                    <b>Institucion</b>
                  </label>
                  <input
                    type="text"
                    id="institucion"
                    name="institucion"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="horasCurso">
                    <b>Horas</b>
                  </label>
                  <input
                    type="number"
                    id="horasCurso"
                    name="horasCurso"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="fechaCurso">
                    <b>Fecha</b>
                  </label>
                  <input
                    type="date"
                    id="fechaCurso"
                    name="fechaCurso"
                    className="form-control"
                    placeholder="Ingrese texto"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <legend className="my-2">Experiencia en investigacion</legend>
                <p>¿Tiene CvLAC registrado en Colciencias?</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="seleccion1"
                    id="trueSeleccion1"
                    value="true"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="trueSeleccion1">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="seleccion1"
                    id="falseSeleccion1"
                    value="false"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="falseSeleccion1">
                    No
                  </label>
                </div>
              </div>
              <div>
                <legend className="my-2">
                  Proyectos de investigacion donde ha participado
                </legend>
                <p>¿Ha participado en Proyectos de Investigación?</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="seleccion2"
                    id="trueSeleccion2"
                    value="true"
                    onChange={handleChangeSeleccion}
                  />
                  <label className="form-check-label" htmlFor="trueSeleccion2">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="seleccion2"
                    id="falseSeleccion2"
                    value="false"
                    onChange={handleChangeSeleccion}
                  />
                  <label className="form-check-label" htmlFor="falseSeleccion2">
                    No
                  </label>
                </div>
              </div>
              <div className="container my-3 transition" style={seleccion2 === 'true'? {display: 'block'} : {display: 'none'}} id="desplegable">
                  <p>Su respuesta es SI, diligencie lo siguiente</p>
                  <div className="row">
                    <div className="col-sm-6 my-2">
                      <label htmlFor="nombreProyecto">
                        <b>Nombre del Proyecto</b>
                      </label>
                      <input
                        type="text"
                        id="nombreProyecto"
                        name="nombreProyecto"
                        className="form-control"
                        placeholder="Ingrese texto"
                        rows="6"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-6 my-2">
                      <label htmlFor="institucionProyecto">
                        <b>Institucion</b>
                      </label>
                      <input
                        type="text"
                        id="institucionProyecto"
                        name="institucionProyecto"
                        className="form-control"
                        placeholder="Ingrese texto"
                        rows="6"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-6 my-2">
                      <label htmlFor="tipoVinculacion">
                        <b>Tipo de vinculacion (rol desempeñado)</b>
                      </label>
                      <input
                        type="text"
                        id="tipoVinculacion"
                        name="tipoVinculacion"
                        className="form-control"
                        placeholder="Ingrese texto"
                        rows="6"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-6 my-2">
                      <label htmlFor="año">
                        <b>Año</b>
                      </label>
                      <input
                        type="date"
                        id="año"
                        name="año"
                        className="form-control"
                        placeholder="Ingrese texto"
                        rows="6"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <legend className="my-2">
                    Resultados derivados de investigacion
                  </legend>
                </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" className="btn btn-primary">
              Enviar Solicitud
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";

export const ModalCreateSemillero = () => {
  const [dataSemillero, setDataSemillero] = useState({
    nombre: '',
    facultad: '',
    programa: '',
    grupo: '',
    linea: '',
    tematica: '',
    justificacion: '',
  });

  const handleChange = (e) => {
    setDataSemillero({...dataSemillero, [e.target.name]: e.target.value})
    console.log(dataSemillero);
  }

  return (
    <div
      class="modal fade"
      id="newSemillero"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form className="container">
              <div className="row">
                <div className="col-sm-6 my-2">
                  <label htmlFor="nombre"><b>Nombre del semillero</b></label>
                  <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Ingrese texto" onChange={handleChange}/>
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="facultad"><b>Facultad</b></label>
                  <input type="text" id="facultad" name="facultad" className="form-control" placeholder="Ingrese texto" onChange={handleChange} />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="programa"><b>Programa academico</b></label>
                  <input type="text" id="programa" name="programa" className="form-control" placeholder="Ingrese texto" onChange={handleChange}/>
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="grupo"><b>Grupo de investigacion</b></label>
                  <input type="text" id="grupo" name="grupo" className="form-control" placeholder="Ingrese texto" onChange={handleChange}/>
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="linea"><b>Linea de investigacion</b></label>
                  <input type="text" id="linea" name="linea" className="form-control" placeholder="Ingrese texto" onChange={handleChange}/>
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="tematica"><b>Tematica de estudio</b></label>
                  <input type="text" id="tematica" name="tematica" className="form-control" placeholder="Ingrese texto" onChange={handleChange}/>
                </div>
                <div className="col my-2">
                  <label htmlFor="justificacion"><b>Justificaion del semillero de investigacion</b></label>
                  <textarea id="Justificacion" name="justificacion" className="form-control" placeholder="Ingrese texto" rows="6" onChange={handleChange}></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="button" class="btn btn-primary">
              Enviar peticion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

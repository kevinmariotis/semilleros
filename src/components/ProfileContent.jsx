import React from "react";
import { useNavigate } from "react-router-dom";

export const ProfileContent = () => {
  const navigate = useNavigate()
  return (
    <div className="col-md-9">
      <div className="card">
        <div className="card-header p-2">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-semilleros" data-bs-toggle="pill" data-bs-target="#semilleros" type="button" role="tab" aria-controls="pills-semilleros" aria-selected="true">Semilleros</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-solicitudes-tab" data-bs-toggle="pill" data-bs-target="#solicitudes" type="button" role="tab" aria-controls="pills-solicitudes" aria-selected="false">Solicitudes</button>
            </li>
          </ul>
          <div className="tab-content container table-responsive" id="pills-tabContent">
            <div className="tab-pane fade show active" id="semilleros" role="tabpanel" aria-labelledby="pills-semilleros-tab">
              <table className="table">
                <thead>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Facultad</th>
                  <th>Programa</th>
                  <th>estado</th>
                  <th>Opciones</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Robotica</td>
                    <td>Ingeniera de sistemas</td>
                    <td>Pregrado</td>
                    <td>activo</td>
                    <td>
                      <button type="button" title="Ver informacion" className="btn btn-warning btn-sm m-1" onClick={() => {navigate('/detalles/2')}}><i className="fas fa-eye"></i> Vista</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tab-pane fade" id="solicitudes" role="tabpanel" aria-labelledby="pills-solicitudes-tab">
              <table className="table">
                <thead>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Facultad</th>
                  <th>Programa</th>
                  <th>Estado</th>
                  <th>opciones</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Robotica</td>
                    <td>Ingeniera de sistemas</td>
                    <td>Pregrado</td>
                    <td>Pendiente</td>
                    <td>
                      <button type="button" title="Ver informacion" className="btn btn-warning btn-sm m-1" onClick={() => {navigate('/detalles/1')}}><i className="fas fa-eye" ></i> Ver Solicitud</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

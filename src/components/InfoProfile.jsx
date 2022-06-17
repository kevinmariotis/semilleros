import React from "react";
import ImgPerfil from "../dist/img/user4-128x128.jpg";
import { CreateSemillero } from "./CreateSemillero";

export const InfoProfile = () => {
  return (
    <div className="col-md-3">
      <div className="card card-primary card-outline">
        <div className="card-body box-profile">
          <div className="text-center">
            <img
              className="profile-user-img img-fluid img-circle"
              src={ImgPerfil}
              alt="foto de perfil de usuario"
            />
          </div>

          <h3 className="profile-username text-center">Nina McIntire</h3>

          <p className="text-muted text-center">Administrador</p>

          <ul className="list-group list-group-unbordered mb-3">
            <li className="list-group-item">
              <b>Total Semilleros</b> <span  className="float-right">123</span>
            </li>
            <li className="list-group-item">
              <b>Semilleros Activos</b> <span className="float-right">120</span>
            </li>
            <li className="list-group-item">
              <b>Semilleros pendientes</b> <span className="float-right">3</span>
            </li>
          </ul>
          <CreateSemillero />
        </div>
      </div>
    </div>
  );
};

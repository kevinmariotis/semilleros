import React from "react";

export const ProfileContent = () => {

  return (
    <div class="col-md-8">
      <div class="card">
        <div class="card-header p-2">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#semilleros" data-toggle="tab">
                Semilleros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#solicitudes" data-toggle="tab">
                Solicitudes
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div className="active tab-pane" id="semilleros" >
                Semilleros
            </div>
            <div className="tab-pane" id="solicitudes" >
                Solicitudes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

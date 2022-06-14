import React from "react";
import ImgPerfil from "../dist/img/user4-128x128.jpg";

export const InfoProfile = () => {
  return (
      <div class="col-md-3">
        <div class="card card-primary card-outline">
          <div class="card-body box-profile">
            <div class="text-center">
              <img
                class="profile-user-img img-fluid img-circle"
                src={ImgPerfil}
                alt="foto de perfil de usuario"
              />
            </div>

            <h3 class="profile-username text-center">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Nina McIntire</font>
              </font>
            </h3>

            <p class="text-muted text-center">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Administrador
                </font>
              </font>
            </p>

            <ul class="list-group list-group-unbordered mb-3">
              <li class="list-group-item">
                <b>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Total Semilleros</font>
                  </font>
                </b>{" "}
                <a class="float-right">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>123</font>
                  </font>
                </a>
              </li>
              <li class="list-group-item">
                <b>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Semilleros Activos</font>
                  </font>
                </b>{" "}
                <a class="float-right">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>120</font>
                  </font>
                </a>
              </li>
              <li class="list-group-item">
                <b>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>Semilleros pendientes</font>
                  </font>
                </b>{" "}
                <a class="float-right">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>3</font>
                  </font>
                </a>
              </li>
            </ul>

            <a href="/perfil" class="btn btn-primary btn-block">
              <b>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Seguir</font>
                </font>
              </b>
            </a>
          </div>
        </div>

        <div class="card card-primary" />
        <div class="card-header">
          <h3 class="card-title">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Sobre mí</font>
            </font>
          </h3>
        </div>
        <div class="card-body">
          <strong>
            <i class="fas fa-book mr-1"></i>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Educación</font>
            </font>
          </strong>

          <p class="text-muted">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                BS en Ciencias de la Computación de la Universidad de Tennessee
                en Knoxville
              </font>
            </font>
          </p>

          <hr />

          <strong>
            <i class="fas fa-map-marker-alt mr-1"></i>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Ubicación</font>
            </font>
          </strong>

          <p class="text-muted">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Malibú, California
              </font>
            </font>
          </p>

          <hr />

          <strong>
            <i class="fas fa-pencil-alt mr-1"></i>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Habilidades</font>
            </font>
          </strong>

          <p class="text-muted">
            <span class="tag tag-danger">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Diseño de interfaz de usuario{" "}
                </font>
              </font>
            </span>
            <span class="tag tag-success">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Codificación </font>
              </font>
            </span>
            <span class="tag tag-info">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Javascript </font>
              </font>
            </span>
            <span class="tag tag-warning">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>PHP </font>
              </font>
            </span>
            <span class="tag tag-primary">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Node.js</font>
              </font>
            </span>
          </p>

          <hr />

          <strong>
            <i class="far fa-file-alt mr-1"></i>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>notas</font>
            </font>
          </strong>

          <p class="text-muted">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </font>
              <font style={{ verticalAlign: "inherit" }}>
                Etiam fermentum enim neque.
              </font>
            </font>
          </p>
        </div>
      </div>
  );
};

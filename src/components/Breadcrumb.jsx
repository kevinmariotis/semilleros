import React from "react";

export const Breadcrumb = (props) => {
  return (
    <p className="container my-4">
      <i className="fas fa-user"></i> Perfil de usuario <i className="fas fa-chevron-right"></i>
      <span className="text-muted"> {props.ruta}</span>
    </p>
  );
};

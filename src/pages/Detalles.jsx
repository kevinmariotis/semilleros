import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { DetailsContent } from "../components/DetailsContent";
import { Navbar } from "../components/Navbar";

export const Detalles = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb titulo="Detalles del semillero" icon="info"/>
      <div className="container my-4 mx-auto">
        <DetailsContent />
      </div>
    </>
  );
};

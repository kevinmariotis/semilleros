import React from "react";
import { ModalCreateSemillero } from "./ModalCreateSemillero";

export const CreateSemillero = () => {
  return (
    <>
      <button
        className="btn btn-primary btn-block"
        data-bs-toggle="modal"
        data-bs-target="#newSemillero"
      >
        <b>Crear un semillero</b>
      </button>
      <ModalCreateSemillero />
    </>
  );
};

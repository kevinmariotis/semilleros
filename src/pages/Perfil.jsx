import { React }from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { InfoProfile } from "../components/InfoProfile";
import { Navbar } from "../components/Navbar";
import { ProfileContent, getRuta } from "../components/ProfileContent";

export const Perfil = () => {

  return (
    <>
      <Navbar />
      <Breadcrumb ruta={'ruta'}/>
      <div className="row container my-4 mx-auto">
        <InfoProfile />
        <ProfileContent />
      </div>
    </>
  );
};

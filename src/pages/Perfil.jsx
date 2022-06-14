import { React }from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { InfoProfile } from "../components/InfoProfile";
import { Navbar } from "../components/Navbar";
import { ProfileContent } from "../components/ProfileContent";

export const Perfil = () => {

  return (
    <>
      <Navbar />
      <Breadcrumb titulo="Perfil de usuario" icon="user"/>
      <div className="row container my-4 mx-auto">
        <InfoProfile />
        <ProfileContent />
      </div>
    </>
  );
};

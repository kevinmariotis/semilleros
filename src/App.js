import { BrowserRouter, Routes, Route } from "react-router-dom";

import './plugins/fontawesome-free/css/all.min.css'
import './plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import './dist/css/adminlte.min.css'
import "./App.css";
import './plugins/bootstrap/js/bootstrap.bundle'

import { FormLogin } from "./components/FormLogin";
import { ForgotPass } from "./components/ForgotPass";
import { Registrer } from "./components/Registrer";
import { NotFound } from "./components/NotFound";
import { Perfil } from "./pages/Perfil";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/registrer" element={<Registrer />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

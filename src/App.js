import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./dist/css/adminlte.min.css";
import "./plugins/fontawesome-free/css/all.min.css";
import "./dist/css/master.css";

import { FormLogin } from "./components/FormLogin";
import { ForgotPass } from "./components/ForgotPass";
import { Registrer } from "./components/Registrer";
import { NotFound } from "./components/NotFound";
import { Perfil } from "./pages/Perfil";
import { Detalles } from "./pages/Detalles";
// import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/registrer" element={<Registrer />} />
        <Route
          path="/perfil"
          element={
            // <ProtectedRoute>
              <Perfil />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/detalles/:id"
          element={
            // <ProtectedRoute>
              <Detalles />
            // </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

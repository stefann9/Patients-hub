import { Routes, Route } from "react-router-dom";

import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

import { UserContextProvider } from "./core/context/user-context";
import Dashboard from "./pages/dashboard/Dashboard";
import SignUp from "./pages/authentication/sign-up/SignUp";
import Login from "./pages/authentication/login/Login";
import ForgotPassword from "./pages/authentication/forgot-password/ForgotPassword";
import PacientView from "./pages/pacientView/PacientView";
import ResetPassword from "./pages/authentication/reset-password/ResetPassword";

import AddPacient from "./pages/addPacient/AddPacient";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/"
);
function App() {
  return (
    <UserContextProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pacient/:id" element={<PacientView />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/add-pacient" element={<AddPacient />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

import { Registrar } from "./components/RegistrarContacto";
import { Lista } from "./components/ListaContacto";
import { useContext } from "react";

import "./App.css";
function App() {
  return (
    <>
      <Registrar />
      <Lista />
    </>
  );
}

export default App;

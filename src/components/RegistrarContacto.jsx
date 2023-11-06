import "../../public/style/registrar.css";
import { HiUser } from "react-icons/hi2";
import ContactosAPI from "../api/ContactosAPI.js";

export function Registrar() {
  let contacto = { nombre: "", apellido: "", telefono: "" };
  return (
    <div className="content">
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HiUser />
        <span>Registar Contacto</span>
      </h1>
      <form>
        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            id="nombre"
            onChange={function (e) {
              contacto.nombre = e.target.value;
            }}
          ></input>
        </div>
        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            id="apellido"
            onChange={function (e) {
              contacto.apellido = e.target.value;
            }}
          ></input>
        </div>
        <div className="campo">
          <label>Telefono:</label>
          <input
            type="text"
            id="telefono"
            onChange={function (e) {
              contacto.telefono = e.target.value;
            }}
          ></input>
        </div>
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            contacto.nombre && contacto.apellido && contacto.telefono
              ? await ContactosAPI.postContactos(contacto).then(() => {
                  document.getElementById("nombre").value = "";
                  document.getElementById("apellido").value = "";
                  document.getElementById("telefono").value = "";
                  alert("Datos registrados");
                })
              : alert("Debe llenar todos los campos");
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

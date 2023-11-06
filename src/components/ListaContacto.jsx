import "../../public/style/lista.css";
import ContactosAPI from "../api/ContactosAPI.js";

export function Lista() {
  async function getContacto() {
    await ContactosAPI.getContactos()
      .then((data) => {
        const tbody = document.getElementById("tbody");
        data.forEach((item) => {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${item.nombre}</td> <td>${item.apellido}</td> <td>${item.telefono}</td>`;
          tbody.appendChild(tr);
        });
      })
      .catch((error) => console.log(error));
  }

  getContacto();

  return (
    <div>
      <div>
        <h2 style={{ fontSize: "20px", textAlign: "center" }}>
          Lista de Contactos
        </h2>
      </div>
      <div className="content-list">
        <table>
          <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
          </thead>

          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  );
}

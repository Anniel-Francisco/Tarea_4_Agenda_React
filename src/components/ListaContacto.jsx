import "../../public/style/lista.css";

export function Lista() {
  let contact = false;
  async function getContactos() {
    fetch("http://www.raydelto.org/agenda.php")
      .then((response) => response.json())
      .then((data) => {
        const tbody = document.getElementById("tbody");
        data.forEach((item) => {
          let tr = document.createElement("tr");
          tr.innerHTML = `<td>${item.nombre}</td> <td>${item.apellido}</td> <td>${item.telefono}</td>`;
          tbody.appendChild(tr);
        });
      });
  }
  if (!contact) {
    getContactos();
    contact = true;
  }
  return (
    <div className="content-list">
      <table>
        <caption style={{ fontSize: "20px" }}>Lista de Contactos</caption>
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
        </thead>

        <tbody id="tbody"></tbody>
      </table>
    </div>
  );
}

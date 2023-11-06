import axios from "axios";

export default {
  async getContactos() {
    return axios
      .get("http://www.raydelto.org/agenda.php")
      .then(({ data }) => data);
  },

  async postContactos(body) {
    return axios
      .post("http://www.raydelto.org/agenda.php", JSON.stringify(body))
      .then(({ data }) => data);
  },
};

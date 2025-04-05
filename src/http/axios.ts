import axios from "axios";

const api = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos",
});

export { api };

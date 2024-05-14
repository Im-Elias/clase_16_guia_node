import axios from "axios";
import express from "express";
import fs from "fs";

const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.send("Welcome");
});

router.get("/random", async (req, res) => {
  const data = await axios.get("https://randomuser.me/api");
  const usuarioRandom = data.data.results[0];
  console.log(usuarioRandom);
  const usuario = {
    name: usuarioRandom.name.first,
    lastname: usuarioRandom.name.last,
    email: usuarioRandom.email,
  };
  const { users } = JSON.parse(
    fs.readFileSync("./assets/json/users.json", "utf8")
  );
  users.push(usuario);
  fs.writeFileSync("./assets/json/users.json", JSON.stringify({ users }));
  res.send("User added");
});

router.get("/nuevoJuego", (req, res) => {
  const { nombre, consola } = req.query;
  const juegoNuevo = {
    nombre,
    consola,
  };

  const { juegos } = JSON.parse(
    fs.readFileSync("./assets/json/nuevoJuego.json", "utf8")
  );
  juegos.push(juegoNuevo);

  fs.writeFileSync("./assets/json/nuevoJuego.json", JSON.stringify(juegos));
  res.send("Juego agregado");
});

router.get("/usuarios", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  fs.writeFileSync("./assets/json/usuarios.json", JSON.stringify(data));
  res.send();
});

export default router;

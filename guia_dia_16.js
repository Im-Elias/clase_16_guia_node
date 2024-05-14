import fs from "fs";

//1. Crear un archivo de texto con tu nombre
const nombre = {
  nombre: "Josué",
  apellido: "Gallardo",
};
fs.writeFileSync("./assets/json/mi_nombre.json", JSON.stringify(nombre));

//2 Imprimir el archivo creado
fs.readFile("./assets/json/mi_nombre.json", "utf8", (e, data) => {
  const yo = JSON.parse(data);
  console.log();
});

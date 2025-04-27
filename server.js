const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor
const fetchFilm = require("./utils/fetchfilm");

app.use(express.static("public"));

// Configuración de vistas PUG - Motor de plantillas
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

//GET http://localhost:3000/ --> Ruta /. La principal
app.get("/", (req, res) => {
  // req: request, res: response
  res.send("Hello World!. Welcome to PUG");
});

const filmWebRoutes = require("./routes/film.routes");

app.use("/films", filmWebRoutes);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

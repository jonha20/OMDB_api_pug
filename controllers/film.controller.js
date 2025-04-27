const fetchFilm = require("../utils/fetchfilm");

const getFilm = async (req, res) => {
  const title = req.query.title;
  try {
    const films = await fetchFilm.getFilm(title);
    if (!films || films[0].Response === "False") {
      return res.render("home", { error: "Película no encontrada" });
    } else {
      res.render("film", { films });
      // Enviar la respuesta como JSON
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res
      .status(500)
      .render("home", { error: "Error al obtener los datos de la película" });
  }
};

module.exports = {
  getFilm,
};
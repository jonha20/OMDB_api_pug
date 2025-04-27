const express = require("express");
const router = express.Router();
const filmWebController = require("../controllers/film.controller");

// Ruta para obtener una película por título
router.get("{/:title}", filmWebController.getFilm);

module.exports = router;
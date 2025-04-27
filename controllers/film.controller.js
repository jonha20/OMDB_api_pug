const fetchFilm = require('../utils/fetchfilm');

const getFilm = async (req, res) => {
    try {
        const title = req.params.title;
        let film = await fetchFilm.getFilm(title); //{}
        res.status(200).json(film); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}


module.exports = {
    getFilm
};
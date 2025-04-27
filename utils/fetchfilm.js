require('dotenv').config();
// KEY afbdc83e
const getFilm = async (title="") => {
    let response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.APIKEY}`); //{} o [{},{},{},{}]
    let film = await response.json(); //{} o [{},{},{},{}]
    
    if(Array.isArray(film)) 
        return film
    else 
        return [film] // Siempre sea un [{}]
};

module.exports = {
    getFilm
};
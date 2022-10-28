const { API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");

// Busco todos los generos de la api
const getGenres = async () => {
  const myUrl = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  // Los guardo en mi db solamente con el nombre
  const genresApi = await myUrl.data.results.map((g) => g.name);
  genresApi.forEach((g) => {
    Genre.findOrCreate({ where: { name: g } });
  });

  // Retorno todos los generos de mi db
  let genresDb = await Genre.findAll();
  return genresDb;
};

module.exports = getGenres;

const { API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");

// Busco todos los generos
const getGenres = async () => {
  const myUrl = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  const genresApi = await myUrl.data.results.map((g) => g.name);
  genresApi.forEach((g) => {
    Genre.findOrCreate({ where: { name: g } });
  });

  let genresDb = await Genre.findAll();
  return genresDb;
};

module.exports = getGenres;

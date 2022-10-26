const axios = require("axios");
const { API_KEY } = process.env;

// Me traigo el juego por el nombre en la api, desde query

const getByName = async (name) => {
  const myUrl = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`
  );
  const info = await myUrl.data.results.map((game) => {
    return {
      id: game.id,
      name: game.name,
      img: game.background_image,
      genres: game.genres.map((genre) => genre.name),
    };
  });
  return info;
};

module.exports = getByName;

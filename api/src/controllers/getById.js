const { API_KEY } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getById = async (id) => {
  if (id.length > 6) {
    // si es mayor es de la base de datos
    let game = await Videogame.findAll({
      where: { id: id },
      include: {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    game = game.map((e) => {
      return {
        ...e.dataValues,
        genres: e.genres.map((e) => e.name),
      };
    });
    return game;
  } else {
    const myUrl = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const dat = await myUrl.data;
    const infoUrl = {
      id: dat.id,
      name: dat.name,
      img: dat.background_image,
      genres: dat.genres.map((genre) => genre.name),
      description: dat.description,
      rating: dat.rating,
      released: dat.released,
      platforms: dat.platforms.map((pform) => pform.platform.name),
    };
    return infoUrl;
  }
};

module.exports = getById;

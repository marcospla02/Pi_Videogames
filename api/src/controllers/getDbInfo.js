const { Videogame, Genre } = require("../db");

// Me traigo los videojuegos de la base de datos con el atributo genero

const getDbInfo = async () => {
  let videogame = await Videogame.findAll({
    attributes: [
      "id",
      "name",
      "description",
      "rating",
      "released",
      "platforms",
      "createdInDb",
      "img",
    ],
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [], //es una comprobacion.
      },
    },
  });

  // Para que me traiga el nombre del genero, sino me traia un array con el objeto y la propiedad nombre--> con esta funcion me deja solamente el valu de name
  // por cada videogame creado de la base de datos vas a acceder al dataValues se ese juego y en genres me vas a guardar el nombre de cada genero
  videogame = videogame.map((vg) => {
    return {
      ...vg.dataValues, // me retorne por separado la dataValue de los juegos
      genres: vg.genres.map((gen) => {
        return gen.name;
      }),
    };
  });

  return videogame;
};

module.exports = getDbInfo;

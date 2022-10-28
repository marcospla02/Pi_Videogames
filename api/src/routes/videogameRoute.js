const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db");
const getAllVideogames = require("../controllers/getAllVideogames");
const getByName = require("../controllers/getByName");
const getDbInfo = require("../controllers/getDbInfo");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    const allGames = await getAllVideogames();
    if (!name) {
      return res.status(200).send(allGames);
    } else {
      const gByNameApi = await getByName(name); // busco los que estan en la api con ese nombre
      const vgDb = await getDbInfo(); // traigo los juegos de la bd
      const findByNameDb = await vgDb.filter(
        (game) => game.name.toLowerCase().includes(name.toLowerCase()) // filtro para qeu me traiga los juegos de la base de datos con ese nombre
      );
      const result = await gByNameApi.concat(findByNameDb); // para que me muestre todos los juegos
      if (result.length) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ msg: `No esta el juego: ${name}` });
      }
    }
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      name,
      description,
      released,
      rating,
      platforms,
      createInDb,
      img,
      genres,
    } = req.body;
    if (!name || !description || !platforms)
      return res
        .status(404)
        .send({ Error: "Faltan enviar datos obligatorios" });
    let newVideogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      img,
      createInDb,
    });

    let findGenre = await Genre.findAll({ where: { name: genres } });
    newVideogame.addGenre(findGenre);
    res.send({ msg: "Video Juego creado con exito" });
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
});

module.exports = router;

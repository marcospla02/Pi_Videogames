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
      const gByNameApi = await getByName(name);
      const findByNameDb = await getDbInfo();
      const vgDb = await findByNameDb.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );
      const result = await gByNameApi.concat(vgDb);
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

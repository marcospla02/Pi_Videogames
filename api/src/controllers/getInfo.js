const axios = require("axios");
const { API_KEY } = process.env;

//Me traigo los videojuegos de la api
// si en la url ponia 100 me traia 40 por eso hcie el map, para poder concatenar todos, se podia con un for y sin el size

const getInfo = async () => {
  const infoApi = [1, 2, 3, 4, 5].map(
    //hago un map con los numeros para que por cada numero se ponga en la page,porque la api tenia un next que te mandaba a otra pagina con otros juegos, es por eso qeu hago esto
    async (page) =>
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`
      )
  );
  const infoApiTotal = await Promise.all(infoApi);

  const apiUrl = infoApiTotal.reduce((prev, value) => {
    //el reduce recibe una callback con dos parametros, el valor anterior y el valor actual, entonces conateno el valor anterior con el valor actual. Es .data.results porque la api venia en un array llamado results, e inicializo en un array vacio, reduce me lo va guardando ahi
    return prev.concat(value.data.results);
  }, []);

  // const infoApi = [1, 2, 3, 4, 5].map((page) =>
  //   infoApi.then((page) =>
  //     axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`)
  //   )
  // );

  // Promise.all(infoApi).then((info) =>
  //   info.reduce((prev, current) => {
  //     return prev.concat(current.data.results);
  //   }, [])
  // );

  const info = await apiUrl.map((game) => {
    return {
      id: game.id,
      name: game.name,
      rating: game.rating,
      released: game.released,
      img: game.background_image,
      genres: game.genres.map((genre) => genre.name),
      platforms: game.platforms.map((pform) => pform.platform.name),
    };
  });
  return info;
};

module.exports = getInfo;

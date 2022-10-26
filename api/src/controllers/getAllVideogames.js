const getDbInfo = require("./getDbInfo");
const getInfo = require("./getInfo");

// concateno la llamada a la api y a al base de datos en una funcion

const getAllVideogames = async () => {
  const apiInfo = await getInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = getAllVideogames;

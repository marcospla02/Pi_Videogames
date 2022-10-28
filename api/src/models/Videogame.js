const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // recibe por parametro una instancia de sequelize
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID, //  sea unico
        defaultValue: DataTypes.UUIDV4, // hace valores con letras y numeros
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.DECIMAL,
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const Jogo = db.define("Jogo", {
  titulo: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  precoBase: {
    type: DataTypes.DOUBLE,
  },

  
});

module.exports = Jogo;

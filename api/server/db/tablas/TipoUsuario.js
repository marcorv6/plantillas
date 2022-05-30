const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');

class TipoUsuario extends Model {}
TipoUsuario.init(
  {
    idTipoUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    tipoUsuario: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'TipoUsuario',
    tableName: 'tipo_usuario',
    timestamps: false,
  }
);

module.exports = TipoUsuario;

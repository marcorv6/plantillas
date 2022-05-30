const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/sequelize.conf');
const TipoUsuario = require('./TipoUsuario');

class Usuario extends Model {}
Usuario.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
    },
    nombre: {
      type: DataTypes.STRING(70),
      allowNull: true,
      defaultValue: null,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario',
    timestamps: false,
  }
);

Usuario.belongsTo(TipoUsuario, {
  foreignKey: {
    name: 'idTipoUsuario',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Usuario;

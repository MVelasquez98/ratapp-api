const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asignacion = sequelize.define('Asignacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  territorioid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  responsableid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechadeasignacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fechadecomplecion: {
    type: DataTypes.DATE,
    allowNull: true
  },
  turno: {
    type: DataTypes.STRING(50),
    validate: {
      isIn: [['mañana', 'tarde', 'noche']]
    }
  },
  estado: {
    type: DataTypes.STRING(50),
    validate: {
      isIn: [['abierto', 'completado']]
    },
    defaultValue: 'abierto'
  }
}, {
  tableName: 'asignacion',
  timestamps: false
});

module.exports = Asignacion;
const Asignacion = require('../models/asignacion');

const getAsignaciones = async () => {
  return await Asignacion.findAll();
};

const createAsignacion = async (data) => {
  return await Asignacion.create(data);
};

const updateAsignacion = async (id, data) => {
  const asignacion = await Asignacion.findByPk(id);
  if (asignacion) {
    return await asignacion.update(data);
  }
  return null;
};

const deleteAsignacion = async (id) => {
  const deleted = await Asignacion.destroy({ where: { ID: id } });
  return deleted === 1;
};

module.exports = {
  getAsignaciones,
  createAsignacion,
  updateAsignacion,
  deleteAsignacion
};
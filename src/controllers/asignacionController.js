const asignacionService = require('../services/asignacionService');
const Manzana = require('../models/manzana');
const Asignacion = require('../models/asignacion');

exports.getAll = async (req, res) => {
  try {
    const asignaciones = await asignacionService.getAsignaciones();
    res.json(asignaciones);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const nuevaAsignacion = await asignacionService.createAsignacion(req.body);
    res.status(201).json(nuevaAsignacion);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await asignacionService.updateAsignacion(req.params.id, req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).send('Asignación no encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await asignacionService.deleteAsignacion(req.params.id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.status(404).send('Asignación no encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUltimaFechaCierre = async (req, res) => {
    const territorioId = req.params.id;
    try {
      // Buscamos la última asignación completada para el territorio
      const asignacion = await Asignacion.findOne({
        where: {
          TerritorioID: territorioId,
          Estado: 'completado'
        },
        order: [['FechaDeComplecion', 'DESC']],
        limit: 1
      });
  
      // Buscamos las manzanas que están pendientes en ese territorio
      const manzanasPendientes = await Manzana.findAll({
        where: {
          TerritorioID: territorioId,
          EstadoCompletado: false
        }
      });
  
      if (!asignacion) {
        // Si no hay asignación completada, el territorio está abierto
        res.json({
          message: 'Territorio aún abierto',
          FechaDeComplecion: null,
          manzanasPendientes: manzanasPendientes.map(manzana => manzana.Descripcion)
        });
      } else {
        // Si hay una asignación completada
        res.json({
          FechaDeComplecion: asignacion.FechaDeComplecion,
          manzanasPendientes: manzanasPendientes.map(manzana => manzana.Descripcion) // Lista de descripciones de manzanas pendientes
        });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
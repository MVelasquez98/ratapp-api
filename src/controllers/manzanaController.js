const Manzana = require("../models/manzana");

exports.getAllManzanas = async (req, res) => {
    try {
      const manzanas = await Manzana.findAll();
      res.json(manzanas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

exports.getManzanasPendientes = async (req, res) => {
    const territorioId = req.params.id;
    try {
      const manzanasPendientes = await Manzana.findAll({
        where: {
          TerritorioID: territorioId,
          EstadoCompletado: false
        }
      });
      res.json(manzanasPendientes);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  exports.getManzanasByTerritorio = async (req, res) => {
    const territorioId = req.params.id;
    try {
      const manzanas = await Manzana.findAll({ where: { TerritorioID: territorioId } });
      res.json(manzanas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
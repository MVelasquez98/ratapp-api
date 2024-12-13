const Responsable = require('../models/responsable');

exports.getAllResponsables = async (req, res) => {
  try {
    const responsables = await Responsable.findAll();
    res.json(responsables);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
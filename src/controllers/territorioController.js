const Territorio = require('../models/territorio');

exports.getAllTerritorios = async (req, res) => {
  try {
    const territorios = await Territorio.findAll();
    res.json(territorios);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
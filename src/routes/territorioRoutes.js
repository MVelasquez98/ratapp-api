const express = require('express');
const territorioController = require('../controllers/territorioController');
const manzanaController = require('../controllers/manzanaController');

const router = express.Router();

router.get('/', territorioController.getAllTerritorios);
router.get('/:id/manzanas', manzanaController.getManzanasByTerritorio);
router.get('/:id/manzanasPendientes', manzanaController.getManzanasPendientes);

module.exports = router;
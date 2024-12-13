const express = require('express');
const controller = require('../controllers/asignacionController');

const router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id/fechaCierre', controller.getUltimaFechaCierre);

module.exports = router;
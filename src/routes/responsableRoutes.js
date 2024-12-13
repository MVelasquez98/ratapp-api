const express = require('express');
const responsableController = require('../controllers/responsableController');

const router = express.Router();

router.get('/', responsableController.getAllResponsables);

module.exports = router;
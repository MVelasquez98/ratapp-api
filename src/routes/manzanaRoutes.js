const express = require('express');
const manzanaController = require('../controllers/manzanaController');

const router = express.Router();

router.get('/', manzanaController.getAllManzanas);

module.exports = router;
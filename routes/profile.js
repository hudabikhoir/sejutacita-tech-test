const express = require('express');
const router = express.Router();
const authController = require('../app/api/controllers/auth');

router.post('/', authController.me);

module.exports = router;
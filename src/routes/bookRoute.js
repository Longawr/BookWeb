const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/BookController');

router.get('/', cartController.index);



module.exports = router;
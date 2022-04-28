const express = require('express');
const router = express.Router();

router.use('/contact', require('./contact'));
router.use('/', require('./contact'));

module.exports = router;

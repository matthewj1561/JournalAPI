const express = require('express');
const router = express.Router();

const journalController = require('../controllers/journal');

router.get('/', journalController.getAll);

router.get('/:id', journalController.getSingle);

router.post('/add', journalController.createEntry);

router.put('/:id', journalController.modifyEntry);

router.delete('/:id', journalController.deleteEntry);

module.exports = router;

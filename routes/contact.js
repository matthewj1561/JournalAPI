const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/add', contactsController.createContact);

router.put('/:id', contactsController.modifyContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;

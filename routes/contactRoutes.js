const express = require('express');
const { getContacts, addContact, updateContact, deleteContact } = require('../controllers/contactController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getContacts); // GET /contacts
router.post('/', authMiddleware, addContact); // POST /contacts
router.put('/:id', authMiddleware, updateContact); // PUT /contacts/:id
router.delete('/:id', authMiddleware, deleteContact); // DELETE /contacts/:id

module.exports = router;

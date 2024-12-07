const express = require('express');
const { getLeads, addLead, updateLead, deleteLead, approveLead, rejectLead } = require('../controllers/leadController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getLeads); // GET /leads
router.post('/', authMiddleware, addLead); // POST /leads
router.put('/:id', authMiddleware, updateLead); // PUT /leads/:id
router.delete('/:id', authMiddleware, deleteLead); // DELETE /leads/:id
router.post('/:id/approve', authMiddleware, approveLead); // POST /leads/:id/approve
router.post('/:id/reject', authMiddleware, rejectLead); // POST /leads/:id/reject

module.exports = router;

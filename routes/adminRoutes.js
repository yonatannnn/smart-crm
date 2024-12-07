const express = require('express');
const { getApprovalQueue } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/approval-queue', authMiddleware, getApprovalQueue); // GET /admin/approval-queue

module.exports = router;

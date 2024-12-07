const Lead = require('../models/Lead');

exports.getApprovalQueue = async (req, res) => {
  try {
    const pendingLeads = await Lead.find({ status: 'Pending' });
    res.status(200).json(pendingLeads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

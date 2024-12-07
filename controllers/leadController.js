const Lead = require('../models/Lead');

exports.getLeads = async (req, res) => {
  try {
    const { status } = req.query;
    const query = { owner: req.user._id };
    if (status) query.status = status;
    const leads = await Lead.find(query);
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addLead = async (req, res) => {
  try {
    const { title } = req.body;
    const newLead = new Lead({ title, owner: req.user._id });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLead) return res.status(404).json({ error: 'Lead not found' });
    res.status(200).json(updatedLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) return res.status(404).json({ error: 'Lead not found' });
    res.status(200).json({ message: 'Lead deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.approveLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    lead.status = 'Approved';
    await lead.save();
    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rejectLead = async (req, res) => {
  try {
    const { rejectionNote } = req.body;
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    lead.status = 'Rejected';
    lead.rejectionNote = rejectionNote;
    await lead.save();
    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

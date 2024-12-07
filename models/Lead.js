const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rejectionNote: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);

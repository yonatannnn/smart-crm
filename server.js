const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

// Configure CORS to accept all requests
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/contacts', require('./routes/contactRoutes'));
app.use('/leads', require('./routes/leadRoutes'));
app.use('/admin', require('./routes/adminRoutes'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
  .catch(err => console.error(err));

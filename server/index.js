const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/interns', { useNewUrlParser: true, useUnifiedTopology: true });

const applicantSchema = new mongoose.Schema({
  name: String, email: String, phone: String,
  role: String, skills: String, reason: String
});
const Applicant = mongoose.model('Applicant', applicantSchema);

app.use(cors());
app.use(express.json());

app.post('/api/applicants', async (req, res) => {
  const newApplicant = new Applicant(req.body);
  await newApplicant.save();
  res.send({ message: 'Applicant added' });
});

app.get('/api/applicants', async (req, res) => {
  const applicants = await Applicant.find();
  res.json(applicants);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

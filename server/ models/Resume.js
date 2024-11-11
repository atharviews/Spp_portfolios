const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  aboutMe: String,
  education: [
    {
      degree: String,
      institution: String,
      duration: String,
    }
  ],
  experience: [
    {
      company: String,
      role: String,
      duration: String,
      description: String,
    }
  ],
  skills: [String],
  projects: [
    {
      title: String,
      technologies: [String],
      description: String,
    }
  ],
  positions: [String],
});

module.exports = mongoose.model('Resume', resumeSchema);

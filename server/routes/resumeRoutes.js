const express = require('express');
const Resume = require('../ models/Resume');
const router = express.Router();

// Get Resume Data
router.get('/resume', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Resume Data
router.post('/resume', async (req, res) => {
    // Log the incoming data for debugging
    console.log('Request body:', req.body);
  
    // Validate if required fields are present
    if (!req.body.name || !req.body.email || !req.body.phone) {
      return res.status(400).json({ message: 'Required fields missing: name, email, or phone' });
    }
  
    // Create a new resume document
    const resume = new Resume({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      linkedin: req.body.linkedin,
      aboutMe: req.body.aboutMe,
      education: req.body.education || [],
      experience: req.body.experience || [],
      skills: req.body.skills || [],
      projects: req.body.projects || [],
      positions: req.body.positions || []
    });
  
    try {
      // Save the data to the database
      const savedResume = await resume.save();
      res.status(201).json(savedResume);  // Respond with the saved data
    } catch (error) {
      console.error('Error saving resume:', error);
      res.status(500).json({ message: error.message });
    }
  });
  
  

module.exports = router;


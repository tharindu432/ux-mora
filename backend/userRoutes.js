const express = require('express');

const router = express.Router();
const { createUser, getAllUsers } = require('./userController');

// Create a new user
router.post('/users', async (req, res) => {
  try {
    const { teamname, email, password } = req.body;
    const userId = await createUser(teamname, email, password);
    res.status(201).json({ id: userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

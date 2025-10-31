const express = require('express');
const router = express.Router();

// A simple placeholder route to confirm the routes file is loading correctly
router.get('/health', (req, res) => {
    res.json({ message: 'Auth Routes are mounted and healthy.' });
});

module.exports = router;

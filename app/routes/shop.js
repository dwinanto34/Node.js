const path = require('path');
const express = require('express');

const router = express.Router();

// Handling routes using express
router.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;

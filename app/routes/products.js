const express = require('express');

const router = express.Router();

// Handling routes using express
router.get('/products', (req, res) => {
  res.send("<h1>Calling GET /products</h1>");
});

router.post('/products', (req, res) => {
  res.send("<h1>Calling POST /products</h1>");
});

module.exports = router;

const http = require('http');
const express = require('express');

const app = express();

// Middleware
// All requests coming to this server will pass through this middleware
app.use('/', (req, res, next) => {
  console.log("The middleware: Request intercepted");
  next(); // Pass control to the next middleware or route handler
});

// Route Handler
// This will handle requests to the root path
app.use('/', (req, res) => {
  res.send("<h1>Hello from Express</h1>"); // Send a response to the client
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

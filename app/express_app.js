const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const productRoutes = require('./routes/products');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
// to serve file statically
app.use(express.static(path.join(__dirname, '../', 'views')));

app.use(shopRoutes);
// PATH: /admin/products
app.use('/admin', productRoutes);

// Middleware
// All requests coming to this server will pass through this middleware
// app.use('/', (req, res, next) => {
//   console.log("The middleware: Request intercepted");
//   next(); // Pass control to the next middleware or route handler
// });

// Handling routes manually
app.get('/manual', (req, res) => {
  res.send("<h1>Handling routing manually</h1>");
});

// Route Handler
// This will handle requests to the root path
// app.use('/', (req, res) => {
//   res.send("<h1>Hello from Express</h1>"); // Send a response to the client
// });

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

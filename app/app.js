const http = require('http');

// custom files
const routes = require('./routes');

const server = http.createServer(routes.handler);
const someText = routes.someText

console.log(someText)

// backend runs on port 3000
server.listen(3000);

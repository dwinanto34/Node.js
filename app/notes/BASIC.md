
// Node.js operates on a single-threaded, event-driven architecture.
// It's not recommended to use synchronous (sync) operations, especially with large files.
// Synchronous operations block the event loop, preventing Node.js from handling other requests.
// Instead, use asynchronous (async) operations to avoid blocking the event loop.

// Example of a blocking, synchronous write operation:
fs.writeFileSync('message-sync.txt', 'This is new content');

// Recommended: use an asynchronous operation with a callback to handle errors.
// This allows Node.js to continue processing other requests without waiting.
fs.writeFile('message.txt', 'This is the content', (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  res.statusCode = 302;
  res.setHeader('Location', '/');
});


HOW TO RUN OUR CODE:
- node app.js
- node javascript/async.js


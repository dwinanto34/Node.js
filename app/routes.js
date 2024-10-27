
const requestHandler = (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>This is HTML Response</h1>');
    res.write('</html>');
    res.end();
  }
};

// multiple exports
module.exports = {
  handler: requestHandler,
  someText: "Some text here"
};

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>I am Nikhil Singh</h1>");
    res.end();
  } else if (req.url === "/source-code") {
    res.write("This is the source code page.");
    res.end();
  } else if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("This is the contact page.");
    res.end();
  }
});

//web server

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.setHeader("Content-type", "text/html;charset=utf8");

  res.end();
});

server.listen(3000);

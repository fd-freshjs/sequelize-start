require("dotenv").config();
const http = require('http');
const app = require("./app");

const httpServer = http.createServer(app);

const port = process.env.PORT || 5000;
httpServer.listen(port, () => {
  console.log('App is listening on port', port);
});
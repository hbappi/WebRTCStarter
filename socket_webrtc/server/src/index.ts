import express from "express";
import http from "http";
import { SocketConnection } from "./connection/socket/SocketConnection";
import { ExpressConnection } from "./connection/express/ExpressConnection";

const port = process.env.PORT || 8081;

const app = express();
const server = http.createServer(app);


console.log("started~!!!!!!");

SocketConnection.init(server);

ExpressConnection.init(app);

server.listen(port, () => {
  console.log(
    "server is listening on port: " +
      port +
      " . visit: http://localhost:" +
      port
  );
});

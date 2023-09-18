import http from "http";
import { Server } from "socket.io";
import { initClientEvents } from "./SocketClientEvents";
import { EventTypes } from "./EventTyps";

export const SocketConnection = {
  init(
    server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  ) {
    const io = new Server<
      EventTypes.ClientToServerEvents,
      EventTypes.ServerToClientEvents,
      EventTypes.InterServerEvents,
      EventTypes.SocketData
    >(server);

    io.on("ping", () => {
      console.log("ping to socket.io server from server. ");
    });
    io.serverSideEmit("ping");

    io.on("connect", (socket) => {
      console.log("socket connect: ", socket);

      initClientEvents(socket);
    });
    io.on("connection", (socket) => {
      console.log("socket connection initialized... socket is: ", socket);
    });

    io.listen(server);
  },
};

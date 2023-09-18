import { Socket } from "socket.io";
import { EventTypes } from "./EventTyps";

function initClientEvents(
  socket: Socket<
    EventTypes.ClientToServerEvents,
    EventTypes.ServerToClientEvents,
    EventTypes.InterServerEvents,
    EventTypes.SocketData
  >
) {}

export { initClientEvents };

import { Socket } from "socket.io";
import { EventTypes } from "./EventTyps";

function initClientEvents(
  socket: EventTypes.SocketType
) {

  socket.on('click', (something)=>{

    console.log("click event from client: ", something);

  })






}

export { initClientEvents };

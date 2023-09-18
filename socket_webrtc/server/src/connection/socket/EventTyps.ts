import { Socket } from "socket.io";

export namespace EventTypes {


export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  export interface ClientToServerEvents {
    click:(something:any)=>void;
  
  }
  
  export interface InterServerEvents {
    ping: () => void;
  }
  
  export interface SocketData {
    name: string;
    age: number;
  }

  export type SocketType = Socket<
  EventTypes.ClientToServerEvents,
  EventTypes.ServerToClientEvents,
  EventTypes.InterServerEvents,
  EventTypes.SocketData
>
  
}
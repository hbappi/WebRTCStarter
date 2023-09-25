import { Socket } from "socket.io-client";

export namespace HbType {
  export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }

  export interface ClientToServerEvents {
    click: (something: any) => void;
  }

  export interface InterServerEvents {
    ping: () => void;
  }

  export interface SocketData {
    name: string;
    age: number;
  }
  export type UiStateType = 'splash' | 'joining' | 'joined' | 'failed';

  export type SocketType =Socket<ServerToClientEvents, ClientToServerEvents>
}

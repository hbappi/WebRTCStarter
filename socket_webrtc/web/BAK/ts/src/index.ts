import { io, Socket } from "socket.io-client";

import { HbType } from "./types/types";
import UIManager from "./renderer/UImanager";

console.log("log from index.ts");

// init preloader - run before rendering
// (new Preloader()).init();

// init postloader - run after rendering
// (new Postloader()).init();


onPreLoad();
document.addEventListener("DOMContentLoaded", (event) => {
  onPostLoad();
});

function onPreLoad() {}
function onPostLoad() {
  UIManager.init("root");
  console.log("ui manager initialized");

  const uiMan = UIManager.get();
  console.log("ui manager: ", uiMan);

  setTimeout(() => {
    uiMan.setUiState("joining");
  }, 2000);




const socket: HbType.SocketType = io('http://localhost:8081');

socket.on('connect', ()=>{

  console.log("socket connect. emitting... ")

  socket.emit('click', "hi");
  

});


}

// init() {
//   document.addEventListener("DOMContentLoaded", (event) => {
//     this.onPostLoad();
//   });
// }

// private async onPostLoad() {
//   console.log("Site rendered. Initializing postloader");
// }

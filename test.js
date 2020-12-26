import { taebo } from "./mod.ts";
import { WebSocket, WebSocketServer } from "https://deno.land/x/websocket@v0.0.5/mod.ts";

const wss = new WebSocketServer(8080);

wss.on("connection", function (ws) {
  taebo(5, (data) => {
    ws.send(data);
  }); // "5" means seconds.
});
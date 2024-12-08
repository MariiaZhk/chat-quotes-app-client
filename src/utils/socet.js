import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export const sendMessage = (message) => {
  socket.emit("send_message", message);
};

socket.on("receive_message", (data) => {
  console.log("New message:", data);
});

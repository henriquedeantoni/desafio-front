import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001"; // URL do servidor Socket.IO

const socket = socketIOClient(ENDPOINT);

export default socket;

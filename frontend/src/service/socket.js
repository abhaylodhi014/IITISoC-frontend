import { io } from "socket.io-client";

const socket = io("https://iitisoc-backend.onrender.com"); // or your backend URL
export default socket;

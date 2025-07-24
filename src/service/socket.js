import { io } from "socket.io-client";

const socket = io("https://iitisoc-backend.onrender.com", {
  withCredentials: true,
  query: {
    userId: currentUserId,
  },
});
export default socket;

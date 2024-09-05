import { io } from 'socket.io-client';

const socketUrl = import.meta.env.VITE_SOCKET_URL;
console.log(socketUrl);
if (!socketUrl) throw new Error('Missing VITE_SOCKET_URL env.');
const socket = io(socketUrl, {
  autoConnect: false
});

export default socket;

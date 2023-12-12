import { io, Socket } from 'socket.io-client';

const socket: Socket = io('https://socket.gerroy.nl');

export default socket;
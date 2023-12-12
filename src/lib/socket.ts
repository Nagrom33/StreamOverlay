import { io, Socket } from 'socket.io-client';

const socket: Socket = io(process.env.NEXT_SOCKET_SERVER as string);

export default socket;
import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';
import { socketError } from 'middleware/error';

const onShowVotes = (io: socketio.Server, socket: socketio.Socket) => (roomId: string) => {
  try {
    const room = rooms.getRoom(roomId);
    const message = `Votes: ${JSON.stringify(room.getVotes())} in room ${room.id}`;

    io.to(roomId).emit('ROOM_VOTES', room.getVotes());
    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
    socket.on('ERROR', socketError(io, socket));
  }
};

export { onShowVotes };

import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';
import { socketError } from 'middleware/error';

const onSubmitEstimation = (io: socketio.Server, socket: socketio.Socket) => (roomId: string) => {
  try {
    const room = rooms.getRoom(roomId);

    room.archiveTask();
    room.clearVotes();

    const message: string = 'The task was saved in history';

    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
    socket.on('ERROR', socketError(io, socket));
  }
};
export { onSubmitEstimation };

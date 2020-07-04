import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

interface NewTask {
  task: string;
  roomId: number;
}

const onNewTask = (io: socketio.Server, socket: socketio.Socket) => ({ roomId, task }: NewTask) => {
  const test = parseInt(roomId, 10);
  const room = rooms.getRoom(test);

  if (typeof room === 'string') return console.error(room);
  room.task = task;

  room.clearVotes();

  const message = `New task: ${task} in the room: ${roomId}`;

  io.to(roomId.toString()).emit('FEED', message);
  io.to(roomId.toString()).emit('TASK_UPDATED', room.task);
};

export { onNewTask };

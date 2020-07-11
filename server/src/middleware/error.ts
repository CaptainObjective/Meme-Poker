import { Request, Response, NextFunction } from 'express';
import * as socketio from 'socket.io';
import * as fs from 'fs';

const events = [
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnect_attempt',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed',
  'ping',
  'pong',
];

const socketError = (io: socketio.Server, socket: socketio.Socket) => (events: string[]) => {
  events.map(event => {
    socket.on(event, error => {
      fs.writeFile('message.txt', event, (err: Error) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    });
  });
};

const restError = (module.exports = function (error: Error, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  fs.writeFile('message.txt', error.toString(), (err: Error) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.status(500).json({ error: 'Something went wrong' });
});

export { restError, socketError };

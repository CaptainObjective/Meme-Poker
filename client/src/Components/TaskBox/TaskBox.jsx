import React, { useState } from 'react';
import { useRoomContext } from 'Contexts/RoomContext';
import { useSocket } from 'socketio-hooks';
import InfoBox from 'Components/InfoBox';

const TaskBox = ({ className }) => {
  const { room } = useRoomContext();
  const [task, setTask] = useState(room.task.title);

  useSocket('TASK_UPDATED', ({ title }) => setTask(title));

  return <InfoBox title={task} align="left" className={className} />;
};

export default TaskBox;

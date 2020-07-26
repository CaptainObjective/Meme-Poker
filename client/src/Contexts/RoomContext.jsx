import React, { useState, useContext, createContext } from 'react';

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [room, setRoom] = useState(null);

  const updateRoomInfo = data => setRoom(data);

  return <RoomContext.Provider value={{ room, updateRoomInfo }}>{children}</RoomContext.Provider>;
};
const useRoomContext = () => {
  const roomContext = useContext(RoomContext);
  return roomContext;
};

export { useRoomContext, RoomContextProvider, RoomContext };

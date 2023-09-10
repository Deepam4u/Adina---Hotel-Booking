import React, { useEffect, useState , createContext} from 'react';

import {roomData} from '../data';

export const RoomContext = createContext();

const RoomProvider = ({children}) => {

  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal (Number (adults[0]) + Number (kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    // filter room based on no. of persons

    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson;
    });

    setTimeout(() => {
      setLoading(false);
      setRooms(newRooms);
    }, 3000);

  };
  console.log(rooms);

  return (
     <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick, loading}}>
    {children}
  </RoomContext.Provider>
  );
};

export default RoomProvider;

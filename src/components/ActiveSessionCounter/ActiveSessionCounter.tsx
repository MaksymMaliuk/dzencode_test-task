'use client'

import { useEffect, useState } from "react";
import io from "socket.io-client";

const ActiveSessionsCounter = () => {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const socket = io();
    socket.on("activeSessions", (count) => {
      setActiveSessions(count);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return <h1>Active Sessions: {activeSessions}</h1>;
};

export default ActiveSessionsCounter;
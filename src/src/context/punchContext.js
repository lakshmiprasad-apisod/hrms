import React, { useState, createContext } from "react";

const PunchingContext = createContext();

export const PunchingProvider = ({ children }) => {
  const [isPunched, setIsPunched] = useState(false);
  const [punchTime, setPunchTime] = useState(null);
  const [punchTimes, setPunchTimes] = useState([]);

  return (
    <PunchingContext.Provider
      value={{
        isPunched,
        setIsPunched,
        punchTime,
        setPunchTime,
        punchTimes,
        setPunchTimes,
      }}
    >
      {children}
    </PunchingContext.Provider>
  );
};

export default PunchingContext;

import React, { useState, useEffect, useContext } from "react";
import { Button } from "@mui/material";
import PunchingContext from "../../../../context/punchContext";

const PunchIn = ({ onPunch, punchedToday }) => {
  const { isPunched, setIsPunched, punchTime, setPunchTime } =
    useContext(PunchingContext);

  // useEffect(() => {
  //   const storedPunchTime = localStorage.getItem("punchTime");
  //   if (storedPunchTime) {
  //     setPunchTime(new Date(storedPunchTime)); // Set the punch time from localStorage
  //     setIsPunched(true);
  //   }
  // }, []);

  const handlePunch = () => {
    const currentTime = new Date();
    currentTime.setSeconds(0, 0); // Round the time to the nearest minute

    if (punchedToday) {
      alert("You have already punched in today!");
    } else {
      onPunch({
        title: `Punch In: ${currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`,
        start: currentTime,
        end: currentTime,
      });
      setIsPunched(true);
      setPunchTime(currentTime);

      // Store punch time in localStorage
      localStorage.setItem("punchTime", currentTime.toString());
    }
  };

  return (
    <Button
      variant="contained"
      fullWidth
      onClick={handlePunch}
      disabled={isPunched}
      style={{ backgroundColor: isPunched ? "grey" : "green", color: "white" }}
    >
      {isPunched ? "Punched In" : "Punch In"}
    </Button>
  );
};

export default PunchIn;

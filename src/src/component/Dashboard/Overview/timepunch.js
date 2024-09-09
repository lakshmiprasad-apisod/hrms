import React, { useState, useContext } from "react";
import { Typography, Button, Card, CardContent } from "@mui/material";
import { CheckBoxOutlined, Inventory2Outlined } from "@mui/icons-material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnnouncementIcon from "@mui/icons-material/Announcement";

import PunchIn from "../AttendanceAndLeaves/Attendance/punchIn";
import PunchingContext, {
  PunchingProvider,
} from "../../../context/punchContext";
const Timepunch = () => {
  const { punchTimes, setPunchTimes } = useContext(PunchingContext);
  console.log(punchTimes);
  // Function to check if a punch was already made today
  const hasPunchedToday = () => {
    const today = new Date();
    return punchTimes.some((punch) => {
      const punchDate = new Date(punch.start);
      return (
        punchDate.getDate() === today.getDate() &&
        punchDate.getMonth() === today.getMonth() &&
        punchDate.getFullYear() === today.getFullYear()
      );
    });
  };

  // Function to add a punch time
  const addPunchTime = (newPunchTime) => {
    setPunchTimes([...punchTimes, newPunchTime]);
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {punchTimes.length > 0 ? (
          <p>{punchTimes[punchTimes.length - 1].title}</p>
        ) : (
          <p>No punch yet.</p>
        )}
        <div style={{ width: "50%" }}>
          <PunchIn onPunch={addPunchTime} punchedToday={hasPunchedToday()} />
        </div>
      </Card>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "inherit",
          border: "none",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <Inventory2Outlined sx={{ fontSize: 40, color: "#B19CD9" }} />
          <div>
            <Typography variant="h6">Projects</Typography>
            <Typography variant="h5">1</Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: "flex" }}>
          <CheckBoxOutlined sx={{ fontSize: 40, color: "#B19CD9" }} />
          <div>
            <Typography variant="h6">Tasks</Typography>
            <Typography variant="h5">1</Typography>
          </div>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "inherit",
          border: "none",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <EmojiEventsIcon sx={{ fontSize: 40, color: "#B19CD9" }} />
          <div>
            <Typography variant="h6">Awards</Typography>
            <Typography variant="h5">0</Typography>
          </div>
        </CardContent>
        <CardContent sx={{ display: "flex" }}>
          <AnnouncementIcon sx={{ fontSize: 40, color: "#B19CD9" }} />
          <div>
            <Typography variant="h6">Announcements</Typography>
            <Typography variant="h5">0</Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

const TimePunchWithProvider = () => {
  return <Timepunch />;
};

export default TimePunchWithProvider;

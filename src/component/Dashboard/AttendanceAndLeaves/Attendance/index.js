import React, { useState, useContext } from "react";
import {
  Grid,
  Button,
  TextField,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { differenceInCalendarDays, isValid } from "date-fns";

import PunchIn from "./punchIn";
//import PunchContext from "../../../../context/punchContext";
import PunchingContext, {
  PunchingProvider,
} from "../../../../context/punchContext";
import MyCalendar from "./myCalendar";

const Attendance = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  // Calculate the number of days between 'from' and 'to' dates

  const from = new Date(fromDate);
  const to = new Date(toDate);
  const calculateDays = () => {
    if (from && to) {
      const days = differenceInCalendarDays(to, from) + 1;
      return days;
    }
    return 0;
  };

  const totalDays = calculateDays();

  const { punchTimes, setPunchTimes } = useContext(PunchingContext);
  const [open, setOpen] = useState(false);
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
  // Handlers for opening and closing modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const primaryColor = "#37517E";
  return (
    <>
      <div className="mainContent">
        <div style={{ padding: "20px" }}>
          <Box sx={{ padding: "20px" }}>
            <Grid container xs={12} md={12} spacing={2} marginBottom={2}>
              <Grid item xs={12} md={12}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Track Time
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                  onClick={handleClickOpen}
                >
                  Request Attendance
                </Button>
                {/* Modal Dialog */}
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Request Attendance</DialogTitle>
                  <div style={{display:"flex", justifyContent:"space-evenly"}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid item xs={6} md={3}>
                      <DatePicker
                        label="From"
                        value={fromDate}
                        onChange={(newValue) => setFromDate(newValue)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{
                              backgroundColor: primaryColor,
                              input: { color: "#fff" },
                            }}
                            InputLabelProps={{
                              style: { color: "#fff" },
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <DatePicker
                        label="To"
                        value={toDate}
                        onChange={(newValue) => setToDate(newValue)}
                        minDate={fromDate}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            sx={{
                              backgroundColor: primaryColor,
                              input: { color: "#fff" },
                            }}
                            InputLabelProps={{
                              style: { color: "#fff" }, // Label color to white
                            }}
                          />
                        )}
                      />
                    </Grid>
                    </LocalizationProvider>
                  </div>
                  <DialogContent>
                    <DialogContentText>
                      Please provide details for your attendance request.
                    </DialogContentText>
                    <TextField
                      placeholder="Write your reason here"
                      multiline
                      rows={4}
                      fullWidth
                      sx={{ backgroundColor: "white", color: "#ffffff" }}
                      InputProps={{
                        style: {
                          color: "black",
                        },
                      }}
                    />
                    {/* Add any form fields here for user input */}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} sx={{ color: "#37517E" }}>
                      Cancel
                    </Button>
                    <Button onClick={handleClose} sx={{ color: "#37517E" }}>
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={6} md={6}>
                <PunchIn
                  onPunch={addPunchTime}
                  punchedToday={hasPunchedToday()}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <MyCalendar punchTimes={punchTimes} />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Attendance;

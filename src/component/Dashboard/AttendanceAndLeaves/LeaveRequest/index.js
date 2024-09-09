import React, { useState, useRef } from "react";
import {
  Grid,
  Button,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { differenceInCalendarDays, isValid } from "date-fns";

const LeaveRequest = () => {
  const primaryColor = "#37517E";

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [leaveType, setLeaveType] = useState("full");

  // Refs to handle DatePicker
  const fromDatePickerRef = useRef(null);
  const toDatePickerRef = useRef(null);

  const checkingRef = fromDatePickerRef.current;
  console.log("checking ref", checkingRef);

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

  // Disable the "Leave Type" dropdown if "From" and "To" dates are not the same
  const isLeaveTypeDisabled =
    fromDate && toDate && differenceInCalendarDays(to, from) !== 0;

  return (
    <div className="mainContent">
      <div style={{ padding: "20px" }}>
        <Box sx={{ padding: "20px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={2}>
              {/* Date, From, To */}
              <Grid item xs={12} md={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Date
                </Button>
              </Grid>
              <Grid item xs={6} md={3}>
                <DatePicker
                  label="From"
                  value={fromDate}
                  onChange={(newValue) => setFromDate(newValue)}
                  ref={fromDatePickerRef}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <DatePicker
                  label="To"
                  value={toDate}
                  onChange={(newValue) => setToDate(newValue)}
                  minDate={fromDate}
                  ref={toDatePickerRef}
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
                      onClick={() =>
                        toDatePickerRef.current.querySelector("input").focus()
                      }
                    />
                  )}
                />
              </Grid>

              {/* Leave Type Selection (Full Day / Half Day) */}
              <Grid item xs={6} md={1.5}>
                <FormControl>
                  {/* <InputLabel id="leave-type-label" sx={{ color: "#fff" }}>
                    Leave Type
                  </InputLabel> */}
                  <Select
                    labelId="leave-type-label"
                    id="leave-type"
                    value={leaveType}
                    label="Leave Type"
                    onChange={(e) => setLeaveType(e.target.value)}
                    sx={{ backgroundColor: primaryColor, color: "#fff" }}
                    disabled={isLeaveTypeDisabled}
                  >
                    <MenuItem value="full">Full Day</MenuItem>
                    <MenuItem value="half">Half Day</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Display Total Days */}

              <Grid item xs={6} md={1.5}>
                <TextField
                  value={
                    totalDays > 0
                      ? `${totalDays} ${
                          isLeaveTypeDisabled
                            ? "Days"
                            : leaveType === "half"
                            ? "Half Day"
                            : "Day"
                        }`
                      : "0 Days"
                  }
                  InputProps={{
                    readOnly: true,
                    style: { color: "#fff" },
                  }}
                  sx={{ backgroundColor: primaryColor }}
                />
              </Grid>

              {/* Reason (Button) */}
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Reason
                </Button>
              </Grid>

              {/* Reason (Textarea) */}
              <Grid item xs={12} md={8}>
                <TextField
                  placeholder="Write your reason here"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ backgroundColor: primaryColor, color: "#ffffff" }}
                  InputProps={{
                    style: {
                      color: "white",
                    },
                  }}
                />
              </Grid>

              {/* Relevant Documents, Upload */}
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Relevant Documents
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Upload
                </Button>
              </Grid>

              {/* Submit, Cancel */}
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: primaryColor }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Box>
      </div>
    </div>
  );
};

export default LeaveRequest;

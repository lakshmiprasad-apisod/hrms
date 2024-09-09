import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";

import Timepunch from "./timepunch";
import TimePunchWithProvider from "./timepunch";
import LeaveChart from "./leaveChart";
import CompanyAnnouncement from "./companyAnnouncement";
import LatestTask from "./latestTask";

const Overview = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="mainContent">
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Card with Time and Punch Button */}
          <Grid item xs={12} md={6}>
            <TimePunchWithProvider />
          </Grid>

          {/* Leave Taken vs Remaining Pie Chart */}
          <Grid item xs={12} md={6}>
            <LeaveChart />
          </Grid>

          {/* Latest Company Announcements */}
          <Grid item xs={12} md={6}>
            <CompanyAnnouncement />
          </Grid>

          {/* Latest Tasks */}
          <Grid item xs={12} md={6}>
            <LatestTask />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Overview;

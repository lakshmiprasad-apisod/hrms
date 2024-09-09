import React from "react";
import {
    Paper,
    Typography,
  } from "@mui/material";

const LatestTask = () => {
  return (
    <>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Latest tasks
        </Typography>
        <table width="100%" style={{ textAlign: "left" }}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Project</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "orange" }}>add images</td>
              <td>Design of a Portfolio Management Office</td>
              <td>
                <span style={{ color: "blue" }}>In progress</span>
              </td>
              <td>0%</td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </>
  );
};

export default LatestTask;

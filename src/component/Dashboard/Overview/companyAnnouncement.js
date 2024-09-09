import React from 'react'
import {
    Grid,
    Paper,
    Typography,
  } from "@mui/material";

const CompanyAnnouncement = () => {
  return (
    <>
    <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Company Announcements
              </Typography>
              <table width="100%" style={{ textAlign: "left" }}>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: "blue" }}>Design of a Portfolio</td>
                    <td>Sabrina Harlow</td>
                    <td>
                      <span style={{ color: "orange" }}>Not started</span>
                    </td>
                    <td>0%</td>
                  </tr>
                </tbody>
              </table>
            </Paper></>
  )
}

export default CompanyAnnouncement
import React from "react";
import { Outlet } from "react-router-dom";

import DashboardNavbar from "./Dashboard-navbar";
import DashboardHeader from "./Dashboard-header";
import { Box } from "@mui/material";

const drawerWidth = 240;

const dashboardLayout = ({ handleDrawerToggle, open }) => {
  return (
    <div className="layout-wrapper">
      <div className="layout-container">
        <DashboardHeader toggleDrawer={handleDrawerToggle} />
        <DashboardNavbar open={open} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin 0.3s ease",
            marginLeft: open ? `${drawerWidth}px` : "0px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </div>
  );
};

export default dashboardLayout;

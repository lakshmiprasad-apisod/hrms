import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PeopleIcon from "@mui/icons-material/People";

const drawerWidth = 240;

const DashboardNavbar = ({ open }) => {
  const [openPartner, setOpenPartner] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const location = useLocation();

  const handlePartnerClick = () => {
    setOpenPartner(!openPartner);
  };

  const handleUserClick = () => {
    setOpenUser(!openUser);
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "64px",
        },
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          sx={{
            backgroundColor: isActive("/dashboard") ? "#5588C5" : "transparent",
            color: isActive("/dashboard") ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <DashboardIcon
              sx={{ color: isActive("/dashboard") ? "#fff" : "#000" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{ color: isActive("/dashboard") ? "#fff" : "#000" }}
          />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/dashboard/empandperdetails"
          sx={{
            backgroundColor: isActive("/dashboard/empandperdetails")
              ? "#5588C5"
              : "transparent",
            color: isActive("/dashboard/empandperdetails") ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <BusinessIcon
              sx={{
                color: isActive("/dashboard/empandperdetails")
                  ? "#fff"
                  : "#000",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Personal & Empolyement"
            sx={{
              color: isActive("/dashboard/empandperdetails") ? "#fff" : "#000",
            }}
          />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/dashboard/documentstorage"
          sx={{
            backgroundColor: isActive("/dashboard/documentstorage")
              ? "#5588C5"
              : "transparent",
            color: isActive("/dashboard/documentstorage") ? "#fff" : "#000",
          }}
        >
          <ListItemIcon>
            <PersonIcon
              sx={{
                color: isActive("/dashboard/documentstorage") ? "#fff" : "#000",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Document Storage"
            sx={{
              color: isActive("/dashboard/documentstorage") ? "#fff" : "#000",
            }}
          />
        </ListItem>

        <ListItem button onClick={handlePartnerClick}>
          <ListItemIcon>
            <SupervisorAccountIcon sx={{ color: "#000" }} />
          </ListItemIcon>
          <ListItemText primary="Attendances and Leaves" />
          {openPartner ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPartner} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{
                pl: 4,
                backgroundColor: isActive(
                  "/dashboard/attendanceandleaves/attendance"
                )
                  ? "#5588C5"
                  : "transparent",
              }}
              component={Link}
              to="/dashboard/attendanceandleaves/attendance"
            >
              <ListItemText
                primary="Attendance"
                sx={{
                  color: isActive("/dashboard/attendanceandleaves/attendance")
                    ? "#fff"
                    : "#000",
                }}
              />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                backgroundColor: isActive(
                  "/dashboard/attendanceandleaves/leaverequest"
                )
                  ? "#5588C5"
                  : "transparent",
              }}
              component={Link}
              to="/dashboard/attendanceandleaves/leaverequest"
            >
              <ListItemText
                primary="Leave Request"
                sx={{
                  color: isActive("/dashboard/attendanceandleaves/leaverequest")
                    ? "#fff"
                    : "#000",
                }}
              />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                backgroundColor: isActive(
                  "/dashboard/attendanceandleaves/holidaycalendar"
                )
                  ? "#5588C5"
                  : "transparent",
              }}
              component={Link}
              to="/dashboard/attendanceandleaves/holidaycalendar"
            >
              <ListItemText
                primary="Holiday Calendar"
                sx={{
                  color: isActive(
                    "/dashboard/attendanceandleaves/holidaycalendar"
                  )
                    ? "#fff"
                    : "#000",
                }}
              />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={handleUserClick}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: "#000" }} />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
          {openUser ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUser} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{
                pl: 4,
                backgroundColor: isActive("/dashboard/analytics/survey&polls")
                  ? "#5588C5"
                  : "transparent",
              }}
              component={Link}
              to="/dashboard/analytics/survey&polls"
            >
              <ListItemText
                primary="Survey & Polls"
                sx={{
                  color: isActive("/dashboard/analytics/survey&polls")
                    ? "#fff"
                    : "#000",
                }}
              />
            </ListItem>
            <ListItem
              button
              sx={{
                pl: 4,
                backgroundColor: isActive("/dashboard/analytics/metrics")
                  ? "#5588C5"
                  : "transparent",
              }}
              component={Link}
              to="/dashboard/analytics/metrics"
            >
              <ListItemText
                primary="Metrics"
                sx={{
                  color: isActive("/dashboard/analytics/metrics")
                    ? "#fff"
                    : "#000",
                }}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default DashboardNavbar;

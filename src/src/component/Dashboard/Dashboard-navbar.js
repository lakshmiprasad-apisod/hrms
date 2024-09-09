import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const handlePartnerClick = () => {
    setOpenPartner(!openPartner);
  };

  const handleUserClick = () => {
    setOpenUser(!openUser);
  };
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
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#000" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard/empandperdetails">
          <ListItemIcon>
            <BusinessIcon sx={{ color: "#000" }} />
          </ListItemIcon>
          <ListItemText primary="Personal & Empolyement" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard/documentstorage">
          <ListItemIcon>
            <PersonIcon sx={{ color: "#000" }} />
          </ListItemIcon>
          <ListItemText primary="Document Storage" />
        </ListItem>

        <ListItem button onClick={handlePartnerClick} >
          <ListItemIcon>
            <SupervisorAccountIcon sx={{ color: "#000" }} />
          </ListItemIcon>
          <ListItemText primary="Attendances and Leaves" />
          {openPartner ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPartner} timeout="auto" unmountOnExit>
          <List component="div"  disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/attendanceandleaves/attendance">
              <ListItemText primary="Attendance" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/attendanceandleaves/leaverequest">
              <ListItemText primary="Leave Request" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/attendanceandleaves/holidaycalendar">
              <ListItemText primary="Holiday Calendar" />
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
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/analytics/survey&polls">
              <ListItemText primary="Survey & Polls" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/dashboard/analytics/metrics">
              <ListItemText primary="Metrics" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default DashboardNavbar;

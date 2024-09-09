import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/style.css";

import Login from "./component/login";
import Register from "./component/register";
import DashboardLayout from "./component/Dashboard/dashboardLayout";

import Overview from "./component/Dashboard/Overview/overview";
import EmpAndPerDetails from "./component/Dashboard/EmployementAndPersonalDetails/index";
import DocumentStorage from "./component/Dashboard/DocumentStorage/documentStorage";

import AttendanceAndLeaves from "./component/Dashboard/AttendanceAndLeaves";
import Attendance from "./component/Dashboard/AttendanceAndLeaves/Attendance/index";
import LeaveRequest from "./component/Dashboard/AttendanceAndLeaves/LeaveRequest/index";
import HolidayCalendar from "./component/Dashboard/AttendanceAndLeaves/HolidayCalendar/index";

import Analytics from "./component/Dashboard/Analytics/analytics";
import SurveyPolls from "./component/Dashboard/Analytics/SurveyPolls/index";
import Metrics from "./component/Dashboard/Analytics/Metrics/index";
import { PunchingProvider } from "./context/punchContext";
function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact={true} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <DashboardLayout
              open={open}
              handleDrawerToggle={handleDrawerToggle}
            />
          }
        >
          <Route index element={<Overview />} />
          <Route path="empandperdetails" element={<EmpAndPerDetails />} />
          <Route path="documentstorage" element={<DocumentStorage />} />
          <Route path="attendanceandleaves" element={<AttendanceAndLeaves />}>
            <Route path="attendance" element={<Attendance />} />
            <Route path="leaverequest" element={<LeaveRequest />} />
            <Route path="holidaycalendar" element={<HolidayCalendar />} />
          </Route>

          {/* Nested routes for Analytics */}
          <Route path="analytics" element={<Analytics />}>
            <Route path="survey&polls" element={<SurveyPolls />} />
            <Route path="metrics" element={<Metrics />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

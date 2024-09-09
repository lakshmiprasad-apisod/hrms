import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ punchTimes }) => {
  return (
    <Calendar
      localizer={localizer}
      events={punchTimes}
      startAccessor="start"
      endAccessor="end"
      defaultView="month"
      views={["month", "week", "day", "agenda"]}
      firstda
      formats={{
        dayFormat: (date, culture, localizer) =>
          localizer.format(date, culture,"D"),
      }}
      culture="en-GB"
      style={{ height: 500 }}
    />
  );
};

export default MyCalendar;

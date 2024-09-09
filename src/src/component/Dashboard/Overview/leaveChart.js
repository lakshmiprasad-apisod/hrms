import React from "react";
import { Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";

// Sample data for the pie chart
const data = [
    { name: "Taken", value: 1, color: "#6a1b9a" },
    { name: "Remaining", value: 3, color: "#e0e0e0" },
  ];

const LeaveChart = () => {
  return (
    <>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">Leave taken vs remaining</Typography>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </Paper>
    </>
  );
};

export default LeaveChart;

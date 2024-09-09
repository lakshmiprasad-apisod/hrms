import React from "react";
import { Outlet } from "react-router-dom";

const analytics = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default analytics;

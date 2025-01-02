import React from "react";
import withAuth from "./withAuth";

const Dashboard = () => {
  return <h1>Welcome to the Dashboard</h1>;
};

export default withAuth(Dashboard);

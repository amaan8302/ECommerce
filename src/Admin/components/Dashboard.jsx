import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
// import ProductsTable from "./ProductsTable";
import ProductsTableView from "../View/ProductTableView";

const Dashboard = () => {
  return (
    <div className="p-5">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductsTableView />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

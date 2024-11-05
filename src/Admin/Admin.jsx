import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./components/Dashboard";

import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrderTable from "./components/OrderTable";
import CustomerTable from "./components/CustomerTable";
import Account from "./components/Account";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon />,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: <CategoryOutlinedIcon />,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: <PersonIcon />,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: <ShoppingBagIcon />,
  },
  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <AddIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        height: "100%",
        // marginLeft: px",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Box sx={{ mt: "auto" }}> */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* </Box> */}
    </Box>
  );

  return (
    <Box sx={{ display: isLargeScreen ? "flex" : "block" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          height: "100vh",
          width: 180,
          // border: "1px solid orange",
        }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ width: "70%" }}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product/create" element={<CreateProductForm />}></Route>
          <Route path="/products" element={<ProductsTable />}></Route>
          <Route path="/orders" element={<OrderTable />}></Route>
          <Route path="/customers" element={<CustomerTable />}></Route>
          {/* <Route path="/account" element={<Account />}></Route> */}
        </Routes>
      </Box>
    </Box>
  );
};

export default Admin;

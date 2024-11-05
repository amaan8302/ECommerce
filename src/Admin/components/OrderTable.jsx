import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../State/store";
import { getOrders } from "../../State/Admin/Order/Action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProduct, findProducts } from "../../State/Product/Action";
// import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarGroup, Button, Card, CardHeader } from "@mui/material";
const OrderTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  console.log("Admin orders yaha pe show ho rahe he :- ", adminOrder);
  return (
    <div className="p-5">
      <Card className="mt-2" sx={{ width: "87vw" }}>
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Title
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Category
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Quantity
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <AvatarGroup>
                      {item.orderItem.map((orderItem) => (
                        <Avatar
                          src={orderItem.product.imageUrl}
                          sx={{
                            width: 43,
                            height: 43,
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        ></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">{item.category.name}</TableCell>
                  <TableCell align="center">{item.discountedPrice}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      // onClick={() => handleProductDelete(item.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTable;

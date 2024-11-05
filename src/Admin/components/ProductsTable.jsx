import React, { useEffect } from "react";
// import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, CardHeader } from "@mui/material";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  console.log("Products --> ", products);
  const handleProductDelete = (productId) => dispatch(deleteProduct(productId));
  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 15,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);
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
              {products.products.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Avatar
                      src={item.imageUrl}
                      sx={{
                        width: 43,
                        height: 43,
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    ></Avatar>
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">{item.category.name}</TableCell>
                  <TableCell align="center">{item.discountedPrice}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleProductDelete(item.id)}
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

export default ProductsTable;

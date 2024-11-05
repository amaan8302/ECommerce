import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImage = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImage = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});
const Achievement = () => {
  return (
    <Card
      className=""
      sx={{ position: "relative", bgcolor: "#242B2E", color: "white" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          Shop with us...
        </Typography>
        <Typography variant="body2">Congratulations🎉!!</Typography>
        <Typography variant="h5" sx={{ my: 3.1 }}>
          {" "}
          420.8k{" "}
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImage src=""></TriangleImage>
        <TrophyImage src="https://imgs.search.brave.com/cQDR2EVhGf5eFgJx24h0oYlLVbc1N0KhH3lPc-037W0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg0LzY3LzAy/LzM2MF9GXzI4NDY3/MDI4Nl9WQjRFRW5T/MDFzYnFsdWVpRmth/OUJPM1M1YkVGaG54/Mi5qcGc" />
      </CardContent>
    </Card>
  );
};

export default Achievement;

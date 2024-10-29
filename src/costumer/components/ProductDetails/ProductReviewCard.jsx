import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Amaan</p>
              <p className="opacity-70">17th September 2024</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>
            This is a dummy review from the costumer, the review will look like
            this.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;

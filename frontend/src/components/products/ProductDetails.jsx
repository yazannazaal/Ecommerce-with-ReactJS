import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useGetProductByNameQuery } from "../../RTK/productStore/product";
export default function ProductDetails({ productId }) {
  // using the product id to get it's details
  const productCategoryMen = `products?populate=*&filters[id][$eq]=${productId}`;
  const { data, error, isLoading } =
    useGetProductByNameQuery(productCategoryMen);
  if (data) {
    let product = data.data[0].attributes;

    return (
      <Stack alignItems="center" flexDirection={{ xs: "column", sm: "row" }}>
        <Box>
          <img
            src={`http://localhost:1337${product.productImage.data[0].attributes.url} `}
            alt="#"
          />
        </Box>
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h2"
            sx={{ color: "#2B3445", fontSize: "25px", fontWeight: 700, pb: 2 }}
          >
            {product.productTitle}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgb(174, 180, 190)",
            }}
          >
            CATEGORY: {product.productCategory} fashion
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "30px",
              fontWeight: 700,
              color: "rgb(210, 63, 87)",
              pt: 1,
            }}
          >
            ${product.productPrice}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 400, py: 2 }}>
            {product.productDesc}
          </Typography>
          <Rating
            size="medium"
            name="read-only"
            value={product.productRating}
            precision={0.5}
            readOnly
          />
          <br></br>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(210, 63, 87)",
              fontWeight: 600,
              textAlign: "center",
              mt: 2,
              padding: 2,
              height: "45px",
              "&:hover": {
                backgroundColor: "rgb(210, 68, 99)",
              },
            }}
          >
            add to cart
          </Button>
        </Box>
      </Stack>
    );
  }
}

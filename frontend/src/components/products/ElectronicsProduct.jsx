import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Container, IconButton, Rating, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

// item for the grid
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));
// end style item

export default function ElectronicsProduct() {
  const [electroncisProducts, setElectronicsProducts] = useState();
  async function getElectronicsProducts() {
    try {
      const { data } = await axios.get(
        "http://localhost:1337/api/products?populate=*&filters[subCategory][$eq]=electroncis"
      );
      setElectronicsProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getElectronicsProducts();
  }, []);

  if (electroncisProducts) {
    return (
      <Container sx={{ mt: 2 }}>
        {/* typography */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <Typography variant="h5">Explore Electroncis Items</Typography>
            <Typography variant="body1" fontWeight={300}>
              Enjoy Up to 80% discounts
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{
                fontSize: "15px",
                color: "#D23F57",
                "&:hover": { background: "none" },
              }}
            >
              <Typography sx={{ mr: 0.4 }}>See More</Typography>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
        {/* typography */}

        {/* electronics items */}
        <Grid container spacing={2}>
          {electroncisProducts.map((item) => {
            return (
              <Grid key={item.id} xs={6} md={3} sx={{ cursor: "pointer" }}>
                <Item>
                  <Card
                    sx={{
                      minWidth: 200,
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 250 }}
                      image={`http://localhost:1337${item.attributes.productImage.data[0].attributes.url} `}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          color: "2B3445",
                          fontSize: "20px",
                          fontWeight: 400,
                        }}
                        variant="h5"
                        component="div"
                      >
                        {item.attributes.productTitle}
                      </Typography>

                      <Rating
                        size="medium"
                        name="read-only"
                        value={item.attributes.productRating}
                        precision={0.5}
                        readOnly
                      />
                      <Typography
                        sx={{ fontSize: "16px", color: "#D23F57" }}
                        variant="subtitle1"
                        component="p"
                      >
                        ${item.attributes.productPrice}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

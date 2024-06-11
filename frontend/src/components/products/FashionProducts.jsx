import {
  Box,
  Container,
  IconButton,
  Modal,
  Rating,
  Stack,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import "./productsStyle.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../RTK/productStore/product";
import Progress from "../progressIcon/Progress";
// style for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "500px",
  minHeight: { xs: "500px", sm: "350px" },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function FashionProducts() {
  // calling addToCrt function from the cartStore

  // declere variables for the categories of the products buttons
  const productViewAll = "products?populate=*";
  const productCategoryMen =
    "products?populate=*&filters[subCategory][$eq]=menFashion";
  const productCategoryWomen =
    "products?populate=*&filters[subCategory][$eq]=womenFashion";
  const productBestSeller = "products?populate=*&filters[bestSeller][$eq]=true";

  const [productByCategory, setProductByCategory] = useState(productViewAll);

  // use state to handle the products buttons actions
  const [alignment, setAlignment] = useState(productViewAll);

  const handleAlignment = (event, value) => {
    setAlignment(value);
    setProductByCategory(value);
  };
  // end

  // for the modal
  const [open, setOpen] = React.useState(false);
  const [productId, setProductId] = useState(null);
  const handleOpen = (pID) => {
    setProductId(pID);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // get products from the backend
  const { data, error, isLoading } =
    useGetProductByNameQuery(productByCategory);
  if (isLoading) {
    <Progress />;
  } else if (data) {
    let arrayOfProducts = data.data;

    return (
      <Container sx={{ mt: 10, mb: 10 }}>
        {/* products buttons */}
        <Stack
          flexWrap="wrap"
          gap={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">Deals Of The Day</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                backgroundColor: "initial",
                color: "#e94560",
                border: "1px solid rgba(233,69,96,0.5) !important",
              },
            }}
          >
            <ToggleButton sx={{ mr: 2 }} className="btn" value={productViewAll}>
              View All
            </ToggleButton>

            <ToggleButton
              sx={{ mx: 2 }}
              className="btn"
              value={productBestSeller}
            >
              Best Seller
            </ToggleButton>

            <ToggleButton
              sx={{ mx: 2 }}
              className="btn"
              value={productCategoryWomen}
            >
              Women's Fashion
            </ToggleButton>

            <ToggleButton className="btn" value={productCategoryMen}>
              Men's Fashion
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        {/* // end of products buttons */}

        {/* cards of products */}
        <Swiper
          slidesPerView={4}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {arrayOfProducts.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Card
                  sx={{
                    minWidth: 230,
                    position: "relative",
                    transition: "border-color 0.3s",
                    border: "1px solid transparent",
                    "&:hover": {
                      borderColor: "#1F2937",
                      "& .visibility-icon-container": {
                        visibility: "visible",
                      },
                    },
                    "&:hover .MuiCardMedia-root": {
                      transform: "scale(1.1)",
                      transition: "0.35s",
                      rotate: "1deg",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 250 }}
                    image={`http://localhost:1337${product.attributes.productImage.data[0].attributes.url} `}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        color: "2B3445",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                      variant="h6"
                      component="div"
                    >
                      {product.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      ${product.attributes.productPrice}
                    </Typography>
                    <Rating
                      size="small"
                      name="read-only"
                      value={product.attributes.productRating}
                      precision={0.5}
                      readOnly
                    />
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        width: "100%",
                        border: "1px solid #1F2937 ",
                        color: "#1F2937",
                        "&:hover": {
                          backgroundColor: "#1F2937",
                          color: "white",
                        },
                      }}
                      size="large"
                    >
                      add to cart
                    </Button>
                    <IconButton
                      onClick={() => {
                        return handleOpen(product.id);
                      }}
                      className="visibility-icon-container"
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 3,
                        visibility: "hidden",
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* detailes modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ProductDetails productId={productId} />
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 3,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Modal>
        {/* // details modal */}
      </Container>
    );
  }
}

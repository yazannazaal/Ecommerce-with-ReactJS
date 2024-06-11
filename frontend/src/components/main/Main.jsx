import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import main1 from "../../images/main 3.jpg";
import main2 from "../../images/main 2.jpg";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "@mui/material/Button";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider3 from "../../images/slider 6.jpg";
import slider4 from "../../images/slider 4.jpg";
import IconsMain from "./IconsMain";
import ImagesBar from "./ImagesBar";
import ScrollingText from "./ScrollingText";
export default function Main() {
  const sliderItems = [
    { text: "men", src: slider4, sale: "25%" },
    { text: "women", src: slider3, sale: "40%" },
  ];
  const theme = useTheme();
  return (
    <Box>
      {/* top bart of the main */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {/* left side of the main  */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.src} alt="#" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 4,
                    },
                  }}
                >
                  <Typography
                    sx={{ textTransform: "uppercase", color: "#1F2937" }}
                    variant="h4"
                  >
                    Lifestyle collection
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      color: "#1F2937",
                      fontWeight: "700",
                    }}
                    variant="h1"
                  >
                    {item.text}
                  </Typography>
                  <Stack direction="row" sx={{ justifyContent: "center" }}>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        mr: 0.5,
                        color: "#1F2937",
                        fontWeight: "600",
                      }}
                      variant="h4"
                    >
                      sale up to
                    </Typography>
                    <Typography
                      sx={{ textTransform: "uppercase", color: "#D23F57" }}
                      variant="h4"
                    >
                      {item.sale} off
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ textTransform: "capitalize", color: "#1F2937" }}
                    variant="p"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      display: "block",
                      mt: 2,
                      ml: 4,
                      backgroundColor: "#1F2937",
                      fontWeight: "500",
                      color: "white",
                      textTransform: "capitalize",
                      "&:hover": { backgroundColor: "#455a64" },
                    }}
                    variant="contained"
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* // end of the left side of the main // */}

        {/* right side of the main */}
        <Box
          sx={{
            minWidth: "25.5%",
            mr: "40px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src={main2} alt="#" />
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: 10,
                transform: "translateY(-80%)",
              }}
            >
              <Typography
                sx={{
                  fontSize: " 13px",
                  fontWeight: 400,
                  letterSpacing: "1.2px",
                  color: "#2B3445",
                }}
              >
                Fresh Season Fits
              </Typography>
              <Typography
                sx={{
                  fontSize: " 20px",
                  fonTweight: 600,
                  lineHight: 1.2,
                  color: "#2B3445",
                  textTransform: "uppercase",
                }}
                variant="h4"
              >
                Shop styles hotter
                <br />
                than the weather !
              </Typography>
              <Link
                sx={{
                  mt: 1,
                  textDecoration: "none",
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                component="button"
                variant="body2"
              >
                Shop Now <ArrowForwardOutlinedIcon />
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative", mt: 1 }}>
            <img width={"100%"} src={main1} alt="#" />
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: 10,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                sx={{
                  fontSize: " 14px",
                  fontWeight: 400,
                  letterSpacing: "1.2px",
                  color: "#2B3445",
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                sx={{
                  fontSize: " 20px",
                  fonTweight: 600,
                  lineHight: 1.2,
                  color: "#2B3445",
                  textTransform: "uppercase",
                }}
                variant="h4"
              >
                DESKTOPS &
                <br />
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  mt: 1,
                  textDecoration: "none",
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                component="button"
                variant="body2"
              >
                Shop Now <ArrowForwardOutlinedIcon />
              </Link>
            </Box>
          </Box>
        </Box>
        {/* // end of the right side of the main // */}
      </Box>

      {/* // end of top part of the main */}

      {/* icons bar  */}
      <IconsMain />
      {/* // end of icons bar // */}

      {/* images bar */}
      <ImagesBar />
      {/* // end of images bar // */}

      <ScrollingText />
    </Box>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Box, Card } from '@mui/material';
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";

// Importar estilos de Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppGallery = ({ images }) => {
  // Configuraciones para el carrusel
  const settings = {
    dots: true, // Muestra los puntos de navegación bajo el carrusel
    infinite: true, // Hace que el carrusel sea infinito
    speed: 500, // Velocidad de la transición entre imágenes
    slidesToShow: 4, // Cantidad de imágenes a mostrar en el carrusel
    slidesToScroll: 1, // Cuántas imágenes se desplazan en un scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <MKBox component="section" py={2}>
      <Grid
        container
        item
        xs={12}
        lg={6}
        justifyContent="center"
        sx={{ mx: "auto", textAlign: "center" }}
      >
      <MKTypography variant="h2" color="info" textGradient mb={12} sx={{ textAlign: 'center' }}>
          Descubre nuestra Aplicación
      </MKTypography>
      </Grid>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ px: 8 }}>
            <Card>
              <img
                src={image.url}
                alt={image.alt}
                style={{ width: '100%', height: 'auto',  borderRadius: '15px'}}
              />
            </Card>
          </Box>
        ))}
      </Slider>
    </MKBox>
  );
};

AppGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
};

export default AppGallery;

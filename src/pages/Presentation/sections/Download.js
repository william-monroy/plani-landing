/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              ¿Te gustaría probar esta aplicación?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Porque si es así, puedes hacerlo GRATIS. Pulsa en el botón y descárgala
              ya en la tienda de aplicaciónes que prefieras. Disponible para
              todas las plataformas. Regístrate y empieza hacer planes.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Descargar ahora
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Disponible en
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Apple Store - Disponible para IPhone">
                  <MKBox
                    component="a"
                    href="#"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://i.pinimg.com/736x/02/b5/1d/02b51dc1b1a6daaabc891ae2da4afcd1.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Play Store - Disponible para Android">
                  <MKBox
                    component="a"
                    href="#"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://static.vecteezy.com/system/resources/previews/022/484/501/original/google-play-store-icon-logo-symbol-free-png.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;

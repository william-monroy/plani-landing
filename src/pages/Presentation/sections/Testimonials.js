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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Plani tiene ya más de</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            503,121 usuarios registrados
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Personas de cualquier parte del mundo, cultura, edad, género... todos tienen algo en común,
            quieren vivir nuevas experiencias.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Juan Pérez"
              date="1 day ago"
              review="Me la descargué porque no tenía con quién ir a un festival y me encantó. Con la aplicación conocí a más gente en la misma situación y fuimos todos juntos. Increíble experiencia, la recomiendo 100%. Ahora la usan todos mis amigos"
              rating={4.5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Sofía Ramírez"
              date="1 week ago"
              review="La mejor aplicación que he probado. Me mudé hace 3 meses a una ciudad nueva y no conocía a nadie, desesperada encontre está aplicación y ha sido mi mejor decisión!!! Me ha ayudado a conocer gente nueva y a hacer planes que nunca me hubiera atrevido a hacer. La recomiendo a todo el mundo."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Carlos López"
              date="3 weeks ago"
              review="Esta bien, la idea me gusta. Pero no me gusta que me dejen plantado. Me ha pasado 2 veces ya. Pero bueno, seguiré probando a ver si mejora. La recomiendo pero con precaución."
              rating={3.5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;

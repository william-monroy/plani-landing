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


// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
import bgImage from "assets/images/about_us_2.jfif";

function Information() {
  return (
    <MKBox component="section" py={12} >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5} >
                  <DefaultInfoCard
                    icon="public"
                    title="Muy Unidos"
                    description="Nos apoyamos mutuamente unos a otros sin importar las circustancias"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="calendar_today"
                    title="Día a día"
                    description="Todos las semanas hacemos una reunion para ver como mejorar la aplicación y que va a hacer cada uno "
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Aplicación de codigo abierto"
                    description="Todas nuestras aplicaciónes son de codigo abierto, para ayudar a la comunidad"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Escuchamos sugerencias"
                    description="Intentamos escuchar los consejos de la comunidad para mejorar la aplicación"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image = {bgImage}
              title= "Entérate de por qué Plani es la mejor aplicación del mercado."
              description=" Los que se prueban nuestra aplicación, dejan de buscar y echan raíces con nosotros"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Descubre más",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

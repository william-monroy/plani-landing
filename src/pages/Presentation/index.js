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

import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKSocialButton from "../../components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import DefaultFooter from "../../examples/Footers/DefaultFooter";
// import FilledInfoCard from "../../examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "../../pages/Presentation/sections/Counters";
import Information from "../../pages/Presentation/sections/Information";
import Testimonials from "../../pages/Presentation/sections/Testimonials";
import Download from "../../pages/Presentation/sections/Download";

// Presentation page components

// Routes
import routes from "../../routes";
import footerRoutes from "../../footer.routes";

// Images
import bgImage from "assets/images/plan.jpg";
import check from "assets/images/cheque.png";
import cross from "assets/images/cerrar.png";


function Presentation() {
  function createData(
    name: string,
    plani: boolean,
    meetup: boolean,
    geokeda: boolean,
    looplan: boolean,
  ) {
    return { name, plani, meetup, geokeda, looplan };
  }

  const rows = [
    createData('Temática de planes ilimitada', true, true, false, true),
    createData('Muestra planes según tus intereses', true, false, false, true),
    createData('Valoración de los usuarios', true, false, false, false),
    createData('Valoración de los planes', true, false, false, false),
    createData('Planes privados para tus amigos', true, false, false, false),
    createData('Chats con otros usuarios', true, false, false, true),
    createData('Multiplataforma', true, true, false, false),
    createData('Sin gastos integrados', true, false, true, false),
  ];

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "Descargar Plani",
          label: "Descárgala gratis",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          opacity: 0.75,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="black"
              mt={-6}
              mb={1}
              textAlign="center"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Bienvenidx a Plani{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              style={{ fontWeight: 'bold' }}
            >
              ¿Estás listo para que te dejen plantado?🌱
            </MKTypography>
            <MKTypography
              variant="body1"
              color="black"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              style={{ marginTop: 30, fontSize: 15, fontWeight: 'bold' }}
            >
              Haz planes con tus amigos, conoce gente nueva, haz algo diferente🫂 Únete a Plani, harás esto y mucho más😎 Pero sobre todo... Que no te dejen plantado!🌳
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Divider sx={{ my: 6 }} />
        <Container>
          {/* tabla comparativa */}
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            marginBottom={4}
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography variant="h2">¿Por qué somos mejores?</MKTypography>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ display: "table-header-group" }}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Plani</TableCell>
                  <TableCell>MeetUp</TableCell>
                  <TableCell>Geokeda</TableCell>
                  <TableCell>LOOPLAN</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.plani ? <img src={check} alt="check" style={{ width: "30px", height: "30x" }}/> : <img src={cross} alt="cross" style={{ width: "25px", height: "25x" }}/>}</TableCell>
                    <TableCell>{row.meetup ? <img src={check} alt="check" style={{ width: "30px", height: "30x" }}/> : <img src={cross} alt="cross" style={{ width: "25px", height: "25x" }}/>}</TableCell>
                    <TableCell>{row.geokeda ? <img src={check} alt="check" style={{ width: "30px", height: "30x" }}/> : <img src={cross} alt="cross" style={{ width: "25px", height: "25x" }}/>}</TableCell>
                    <TableCell>{row.looplan ? <img src={check} alt="check" style={{ width: "30px", height: "30x" }}/> : <img src={cross} alt="cross" style={{ width: "25px", height: "25x" }}/>}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        <Divider sx={{ my: 6 }} />
        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container> */}
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Gracias por tu apoyo!🧡
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Estamos creando la mejor aplicación para ti
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Conoce%20Plani%2C%20una%20aplicaci%C3%B3n%20para%20hacer%20planes%20distintos%20y%20conocer%20gente!%F0%9F%AB%82%20Hecha%20por%20%40plani%20%23redsocial%20%23amigos%20%23planes%20junto%20con%20la%20URL%20https%3A%2F%2Fplani-app.vercel.app%2F"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://plani-app.vercel.app/"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://plani-app.vercel.app/"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;

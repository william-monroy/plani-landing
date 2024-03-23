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

// ESTA ES LA SECCIÓN DE DEBAJO CON LA TARJETA QUE SE MUEVE

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

import imagen from "./icon_amistad.png";
import imagenHobby from "./hobby-icon.png";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    ¿No tienes con
                    <br />
                    quien hacer planes?
                  </>
                }
                description="¡Descargate Plani y empieza a hacer amigos!"
              />
              <RotatingCardBack
                image={bgBack}
                title="Empieza a conocer gente"
                description="Podrás conectar con muchas personas nuevas afines a ti y con las que hacer planes que nunca habias imaginado"
                action={{
                  type: "internal",
                  route: "https://play.google.com/store/games?hl=es_419&gl=US",
                  label: "¡Descarga nuestra App!",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={imagen} alt="icon" style={{ width: "50px", height: "40x" }} />}
                  title="Planta nuevas amistades"
                  description="Unete a planes🔎 y descubre nuevas personas cerca de ti📌 con tus mismos gustos💯."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="./"
                  title="¡Que no te dejen plantado!"
                  description="La seguridad🔐 es lo mas importante, por eso tú puedes elegir quién puede unirse🫂 y a quién dejas plantado🪴"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={imagenHobby} alt="icon" style={{ width: "50px", height: "40x" }} />}
                  title="Descubre nuevas aficiones"
                  description="Únete a actividades que proponen otros usuarios🧍‍♀️ para descubrir nuevas aficiones😁 ¡Conocete y disfruta!"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="¡Sal a la calle!"
                  description="Te animamos a que realices actividades al aire libre🍃 y contribuyas al medioambiente♻️ ¡Ayuda a nuestro planeta!🌏"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

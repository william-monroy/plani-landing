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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/Avatar_Andrea.jfif";
import team2 from "assets/images/Avatar_William.jpg";
import team3 from "assets/images/Avatar_Nico.jfif";
import team4 from "assets/images/Avatar_Dennis.jfif";
import team5 from "assets/images/Avatar_Asier.jfif";
import team6 from "assets/images/Avatar_Fermin.jfif";


function Team() {
  return (
    <MKBox 
      sx={{  background: 'linear-gradient(150deg, orange, yellow)' }}
      component="section"
      variant="gradient"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container >
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              El equipo directivo
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              No hay nada que no podamos cultivar juntos.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Andrea Morala Martinez"
                position={{ color: "info", label: "Scrum master" }}
                description="Exigente y Responsable. Dirige al equipo con rama de hierro y ningún problema balancea su tronco."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="William Frank Monroy Mamani"
                position={{ color: "info", label: "Arquitecto de Software" }}
                description="Se encarga de actualizar el proyecto con la última tecnología y seguridad. Se planta en contra de cualquier bicho."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Nicolas Arbunies Apesteguia"
                position={{ color: "info", label: "Equipo de desarrollo" }}
                description="Más duro que un roble. Centrado y motivado, aunque de vez en cuando se toma un descanso para hacer la fotosintesis."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Dennis Ayala Lauroba"
                position={{ color: "info", label: "Equipo de desarrollo" }}
                description="Podría decirse que es el segundo Scrum Master de nuestro pequeño jardín. Su codigo crece más rapido que cualquier enredadera"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5}
                name="Asier de la Nava Ortego"
                position={{ color: "info", label: "Equipo de desarrollo" }}
                description="Su algoritmo siempre está en verde. ¡Siempre en busca de una raíz de la solución!"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team6}
                name="Fermín Zubiri Remírez"
                position={{ color: "info", label: "Equipo de desarrollo" }}
                description="Enraizado con el equipo hasta que caiga la ultima hoja"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;

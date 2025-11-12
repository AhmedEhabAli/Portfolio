// Framer Motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { zoomIn } from "../animations/variants";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { useTheme } from "@emotion/react";

// Images
import project1 from "../assets/portfolio1.png";
import project2 from "../assets/portfolio2.png";
import project3 from "../assets/portfolio3.png";
import project4 from "../assets/portfolio4.png";
import project5 from "../assets/portfolio5.png";
import project6 from "../assets/portfolio6.png";
import project7 from "../assets/portfolio7.png";
import project8 from "../assets/portfolio8.png";

export default function Project() {
  const listProject = [
    {
      text: "e-commerce",
      brief: `Developed a bilingual (Arabic/English) e-commerce website using
react with dark/light modes, customizable themes, cart, and wish list features`,
      img: project1,
      urlGit: "https://github.com/AhmedEhabAli/e-commerce-react",
      urlDemo: "https://ahmedehabali.github.io/e-commerce-react/",
      techs: ["React", "CSS", "MUI", "i18n", "Swiper"],
    },
    {
      text: "todo-list",
      brief: `The React Todo List is a simple app to add, edit, and delete tasks for easy daily task management`,
      img: project2,
      urlGit: "https://github.com/AhmedEhabAli/react-todo-list",
      urlDemo: "https://ahmedehabali.github.io/react-todo-list/",
      techs: ["React", "MUI"],
    },
    {
      text: "weather-app",
      brief: `The React Weather App is a simple, responsive app that shows real-time weather info for any city using the OpenWeather API`,
      img: project3,
      urlGit: "https://github.com/AhmedEhabAli/react-weather-app",
      urlDemo: "https://ahmedehabali.github.io/react-weather-app/",
      techs: ["React", "MUI", "i18n"],
    },
    {
      text: "Manufactive",
      brief: `Manufactive is a clean, professional landing page for a consulting firm that helps SMEs improve efficiency and management through strategic services`,
      img: project4,
      urlGit: "https://github.com/AhmedEhabAli/Manufactive",
      urlDemo: "https://ahmedehabali.github.io/Manufactive/",
      techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      text: "Mealify",
      brief: `Mealify is a simple, modern restaurant landing page showcasing chefs, dishes, and contact info with a clean, responsive design`,
      img: project6,
      urlGit: "https://github.com/AhmedEhabAli/Mealify",
      urlDemo: "https://ahmedehabali.github.io/Mealify/",
      techs: ["HTML", "CSS", "JavaScript"],
    },
    {
      text: "veterinary-clinic",
      brief: `Website with e-commerce and booking for pet healthcare
services`,
      img: project5,
      urlGit: "https://github.com/AhmedEhabAli/Veterinary-clinic",
      urlDemo: "https://ahmedehabali.github.io/Veterinary-clinic/",
      techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      text: "Wisdom Pet Medicine",
      brief: `Wisdom Pet Medicine offers compassionate, personalized care using traditional and alternative treatments to keep pets healthy`,
      img: project7,
      urlGit: "https://github.com/AhmedEhabAli/siteTwo",
      urlDemo: "https://ahmedehabali.github.io/siteTwo/",
      techs: ["HTML", "CSS", "Bootstrap"],
    },
    {
      text: "Anime Website",
      brief: `Anime Website is a sleek, user-friendly platform for anime fans to browse series, watch trailers, and stay updated on their favorite shows.`,
      img: project8,
      urlGit: "https://github.com/AhmedEhabAli/Anime",
      urlDemo: "https://ahmedehabali.github.io/Anime/",
      techs: ["HTML", "CSS", "Bootstrap"],
    },
  ];

  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box
      id="project"
      ref={ref}
      sx={{
        background: theme.palette.background.default,
        py: 5,
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={zoomIn.transition}
          variants={zoomIn}
        >
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight={700}
            mb={5}
            sx={{ fontSize: { xs: "32px", md: "45px" } }}
          >
            Latest{" "}
            <Box component="span" color={theme.palette.icon.main}>
              Project
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {listProject.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 100%",
                  "@media(min-width:900px)": {
                    flex: "1 1 calc(33.33% - 16px)",
                  },
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: 3,
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover .overlay": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.text}
                  sx={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    px: 2,
                    transition: "0.4s ease",
                    opacity: 0,
                    transform: "translateY(100%)",
                    zIndex: 2,
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.text}
                  </Typography>
                  <Typography variant="body2" mb={2}>
                    {item.brief}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    justifyContent="center"
                  >
                    {item.techs.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{ color: "#fff", background: "#7f5af0" }}
                      />
                    ))}
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={2}
                    mt={2}
                    sx={{
                      position: "absolute",
                      left: 10,
                      bottom: 5,
                      fontSize: "14px",
                    }}
                  >
                    <a
                      href={item.urlDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-project"
                    >
                      Live Demo
                    </a>
                    <a
                      href={item.urlGit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-project"
                    >
                      GitHub
                    </a>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

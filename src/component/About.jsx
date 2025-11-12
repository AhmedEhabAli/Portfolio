// Framer Motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInRight } from "../animations/variants";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

// IMG
import AboutImage from "../assets/about.png";

export default function About() {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{ background: theme.palette.background.sectionB, py: 5 }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={fadeInRight.transition}
          variants={fadeInRight}
        >
          <Box
            sx={{ px: 1 }}
            display="flex"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            gap={4}
          >
            <Box
              flex={1}
              sx={{
                filter: "drop-shadow(0 0 20px #7f5af0 )",
              }}
            >
              <img src={AboutImage} alt="About" />
            </Box>
            <Box flex={1}>
              <Typography
                variant="h2"
                sx={{ fontSize: "45px", fontWeight: 700 }}
              >
                About{" "}
                <Box component="span" sx={{ color: theme.palette.icon.main }}>
                  Me
                </Box>
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "26px", fontWeight: 700 }}
              >
                Frontend Developer
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  py: 2,
                  lineHeight: 1.7,
                  color: theme.palette.text.secondary,
                }}
              >
                A motivated and detail-oriented Information Systems graduate
                with hands-on experience in web and software development.
                Proficient in HTML, CSS, SASS, Bootstrap, C#, ASP.NET, and SQL,
                with a strong foundation in front-end and back-end development.
                Successfully developed several projects. Eager to apply
                technical skills, learn new technologies, and contribute to
                innovative projects in a dynamic and growth-oriented
                environment.
              </Typography>
              <Button
                sx={{
                  padding: " 10px 30px",
                  border: `1px solid #7f5af0`,
                  background: theme.palette.icon.main,
                  boxShadow: "0px 0px 20px #7f5af0",
                  transition: "all 0.5s ease-in-out",
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
                variant="contained"
              >
                Read More
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

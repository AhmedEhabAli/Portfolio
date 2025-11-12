// Framer Motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "../animations/variants";

// MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextType from "../TextType";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";

// ICON
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OutgoingMailIcon from "@mui/icons-material/OutgoingMail";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// IMG
import HomeImage from "../assets/Home.png";

export default function Home() {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const socialMedia = [
    {
      icon: <FacebookOutlinedIcon fontSize="medium" />,
      url: "https://www.facebook.com/anawad.cool.585?locale=ar_AR",
      hoverColor: "#2150b6ff",
    },
    {
      icon: <WhatsAppIcon fontSize="medium" />,
      url: "tel:01551407297",
      hoverColor: "#25D366",
    },
    {
      icon: <OutgoingMailIcon fontSize="medium" />,
      url: "https://mail.google.com/mail/?view=cm&to=ahmedehab2010510@gmail.com",
      hoverColor: "#D44638",
    },
    {
      icon: <GitHubIcon fontSize="medium" />,
      url: "https://github.com/AhmedEhabAli",
      hoverColor: "#ffffffff",
    },
    {
      icon: <LinkedInIcon fontSize="medium" />,
      url: "https://www.linkedin.com/in/ahmed-ehab-263901342/",
      hoverColor: "#0A66C2",
    },
  ];

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        background: theme.palette.background.sectionA,
      }}
    >
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Stack>
          <motion.div
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition={fadeInUp.transition}
            variants={fadeInUp}
          >
            <Box
              sx={{ px: 1 }}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="space-between"
              gap={5}
            >
              <Box flex={1}>
                <Typography
                  sx={{ fontSize: "32px", marginBottom: "20px" }}
                  variant="h3"
                >
                  Hello It's Me
                </Typography>
                <Typography
                  sx={{ fontSize: { md: "56px", xs: "32px" } }}
                  variant="h1"
                >
                  Ahmed Ehab
                </Typography>
                <Typography
                  sx={{ fontSize: { md: "32px", xs: "20px" } }}
                  variant="h3"
                >
                  And I'm a
                  <TextType
                    text={[" Frontend Developer", " Web Developer"]}
                    textColors={["#7f5af0"]}
                    typingSpeed={75}
                    deletingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </Typography>
                <Typography
                  variant="body1"
                  mt={2}
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.7,
                  }}
                >
                  Frontend developer with a passion for clean design, responsive
                  layouts, and great user experiences. Skilled in HTML, CSS,
                  JavaScript, and ASP.NET.
                </Typography>

                <Box mt={2}>
                  {socialMedia.map(({ icon, url, hoverColor }) => (
                    <IconButton
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.icon.main,
                        border: "1px solid #7f5af0",
                        transition: "all 0.5s",
                        mr: 1.5,
                        "&:hover": {
                          color: hoverColor,
                          boxShadow: `0 0 10px #7f5af0`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {icon}
                    </IconButton>
                  ))}
                </Box>

                <Stack direction="row" spacing={2} mt={3}>
                  <Button
                    href="/AhmedEhabCV.pdf"
                    download
                    sx={{
                      background: theme.palette.icon.main,
                      boxShadow: "0px 0px 20px #7f5af0",
                      border: `1px solid #7f5af0`,
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    variant="contained"
                    endIcon={<DownloadIcon />}
                  >
                    Download CV
                  </Button>
                  <Button
                    href="/AhmedEhabCV.pdf"
                    sx={{
                      border: `1px solid #7f5af0`,
                      color: theme.palette.text.primary,
                      boxShadow: "0px 0px 20px #7f5af0",
                      transition: "all 0.5s ease-in-out",
                      "&:hover": {
                        background: theme.palette.icon.main,
                        color: "#fff",
                        boxShadow: "none",
                      },
                    }}
                    variant="outlined"
                    endIcon={<VisibilityOutlinedIcon />}
                  >
                    View CV
                  </Button>
                </Stack>
              </Box>

              <Box
                flex={1}
                textAlign="center"
                sx={{
                  filter: "drop-shadow(0 0 20px #7f5af0 )",
                }}
              >
                <img src={HomeImage} alt="Home" />
              </Box>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}

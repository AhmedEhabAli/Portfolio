// React
import { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "../animations/variants";

// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";

//React Icons
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { CgNpm } from "react-icons/cg";
import { SiDotnet } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { TbCube } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";

// Logo Loop
import LogoLoop from "../animations/LogoLoop";

export default function Skills() {
  const theme = useTheme();
  const [alignment, setAlignment] = useState("All");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const techLogos = [
    // ======= Frontend =======
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiReact />, title: "React" },
    { node: <SiRedux />, title: "Redux" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiSass />, title: "SASS" },
    { node: <SiTailwindcss />, title: "Tailwind" },
    { node: <SiMui />, title: "MUI" },

    // ======= Backend =======
    { node: <TbBrandCSharp />, title: "C#" },
    { node: <SiDotnet />, title: "ASP.Net" },
    { node: <FaDatabase />, title: "SQL" },
    { node: <SiDotnet />, title: "MVC" },

    // ======= Concepts =======
    { node: <TbCube />, title: "OOP" },
    { node: <SiSolidity />, title: "SOLID Principles" },

    // ======= Tools =======
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <CgNpm />, title: "NPM" },
    { node: <SiAxios />, title: "Axios" },

    // ======= Design Tools =======
    { node: <SiAdobexd />, title: "Adobe XD" },
    { node: <SiFigma />, title: "Figma" },
    { node: <SiAdobephotoshop />, title: "Photoshop" },
  ];

  const skills = [
    // ======= Frontend =======
    {
      name: "HTML5",
      category: "frontend",
      icon: <SiHtml5 />,
      color: "#e34f26",
    },
    { name: "CSS3", category: "frontend", icon: <SiCss3 />, color: "#1572B6" },
    {
      name: "JavaScript",
      category: "frontend",
      icon: <SiJavascript />,
      color: "#f7df1e",
    },
    {
      name: "React",
      category: "frontend",
      icon: <SiReact />,
      color: "#61dafb",
    },
    {
      name: "Redux",
      category: "frontend",
      icon: <SiRedux />,
      color: "#764abc",
    },
    {
      name: "Bootstrap",
      category: "frontend",
      icon: <SiBootstrap />,
      color: "#7952b3",
    },
    { name: "SASS", category: "frontend", icon: <SiSass />, color: "#cd6799" },
    {
      name: "Tailwind",
      category: "frontend",
      icon: <SiTailwindcss />,
      color: "#38bdf8",
    },
    { name: "MUI", category: "frontend", icon: <SiMui />, color: "#007fff" },

    // ======= Backend =======
    {
      name: "C#",
      category: "backend",
      icon: <TbBrandCSharp />,
      color: "#671ddf",
    },
    {
      name: "ASP.Net",
      category: "backend",
      icon: <SiDotnet />,
      color: "#512bd4",
    },
    { name: "MVC", category: "backend", icon: <SiDotnet />, color: "#512bd4" },
    {
      name: "SQL",
      category: "backend",
      icon: <FaDatabase />,
      color: "#005f8bff",
    },

    // ======= Concepts =======
    { name: "OOP", category: "concept", icon: <TbCube />, color: "#3417daff" },
    {
      name: "SOLID Principles",
      category: "concept",
      icon: <SiSolidity />,
      color: "#696969ff",
    },

    // ======= Tools =======
    { name: "Git", category: "others", icon: <SiGit />, color: "#f1502f" },
    {
      name: "GitHub",
      category: "others",
      icon: <SiGithub />,
      color: "#181717",
    },
    { name: "NPM", category: "others", icon: <CgNpm />, color: "#cb3837" },
    { name: "Axios", category: "others", icon: <SiAxios />, color: "#671ddf" },

    // ======= Design Tools =======
    {
      name: "Adobe XD",
      category: "design",
      icon: <SiAdobexd />,
      color: "#7a005eff",
    },
    { name: "Figma", category: "design", icon: <SiFigma />, color: "#f24e1e" },
    {
      name: "Photoshop",
      category: "design",
      icon: <SiAdobephotoshop />,
      color: "#004a80ff",
    },
  ];

  const filteredSkills =
    alignment === "All"
      ? skills
      : skills.filter((skill) => skill.category === alignment.toLowerCase());

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{ background: theme.palette.background.sectionB, py: 5 }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={fadeInUp.transition}
          variants={fadeInUp}
        >
          <Stack textAlign="center">
            <Typography variant="h2" sx={{ fontSize: "45px", fontWeight: 700 }}>
              My{" "}
              <Box component="span" sx={{ color: theme.palette.icon.main }}>
                Skills
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                py: 2,
                color: theme.palette.text.secondary,
              }}
            >
              My technical and professional experience
            </Typography>

            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{
                justifyContent: { md: "flex-start", xs: "center" },
                flexWrap: "wrap",
                gap: 1,
                mt: 2,
                "& .MuiToggleButton-sizeMedium": {
                  fontSize: {
                    xs: "13px !important",
                    lg: "18px !important",
                  },
                },
                "& .My-btn": {
                  width: {
                    md: "auto",
                    xs: "calc(33.33% - 10px)",
                  },
                },
              }}
            >
              <ToggleButton
                className="My-btn"
                value="All"
                sx={{ color: theme.palette.text.primary }}
              >
                all
              </ToggleButton>
              <ToggleButton
                className="My-btn"
                value="frontend"
                sx={{ color: theme.palette.text.primary }}
              >
                frontEnd
              </ToggleButton>
              <ToggleButton
                className="My-btn"
                value="backend"
                sx={{ color: theme.palette.text.primary }}
              >
                backEnd
              </ToggleButton>
              <ToggleButton
                className="My-btn"
                value="concept"
                sx={{ color: theme.palette.text.primary }}
              >
                Concepts
              </ToggleButton>
              <ToggleButton
                className="My-btn"
                value="others"
                sx={{ color: theme.palette.text.primary }}
              >
                tools
              </ToggleButton>
              <ToggleButton
                className="My-btn"
                value="design"
                sx={{ color: theme.palette.text.primary }}
              >
                Design Tools
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={3}
            mt={6}
            mb={15}
          >
            {filteredSkills.map((skill, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 1.3,
                  px: 3,
                  py: 2,
                  width: { md: 200, xs: "100%" },
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(127, 90, 240, 0.2)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "30px",
                    mr: 1.5,
                    display: "flex",
                    alignItems: "center",
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                  {skill.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Box
            sx={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
              alignItems: "flex-end",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={25}
              pauseOnHover
              scaleOnHover
              ariaLabel="Technology partners"
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

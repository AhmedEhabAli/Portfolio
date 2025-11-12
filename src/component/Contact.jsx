// Framer Motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInRight } from "../animations/variants";

// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

// Icon
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        background: theme.palette.background.sectionB,
        py: 25,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={fadeInRight.transition}
          variants={fadeInRight}
        >
          <Stack textAlign="center" mb={4}>
            <Typography variant="h2" sx={{ fontSize: "45px", fontWeight: 700 }}>
              Contact{" "}
              <Box component="span" sx={{ color: theme.palette.icon.main }}>
                Me
              </Box>
            </Typography>
          </Stack>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
              }}
            >
              <TextField
                className="focused"
                label="Your Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                className="focused"
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
              }}
            >
              <TextField
                className="focused"
                label="Mobile Number"
                type="tel"
                variant="outlined"
                fullWidth
              />
              <TextField
                className="focused"
                label="Email Subject"
                variant="outlined"
                fullWidth
              />
            </Box>

            <TextField
              className="focused"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                textTransform: "capitalize",
                gap: 1,
                background: theme.palette.icon.main,
                width: "fit-content",
                mx: "auto",
                boxShadow: "0px 0px 20px #7f5af0",
                transition: "all 0.4s ease",
                "&:hover": {
                  background: "#5d44aaff",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

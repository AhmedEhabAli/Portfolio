import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "@mui/material/Typography";
import { cardFromLeft, cardFromRight } from "../animations/variants";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

import Design from "../assets/Web Design.jpg";
import Developing from "../assets/Web Developing.jpg";
const cards = [
  {
    id: 1,
    title: "Web Design Diploma",
    issuer: "Coursera",
    year: "2022",
    side: "left",
    image: Design,
  },
  {
    id: 2,
    title: "Web Developing Diploma",
    issuer: "Coursera",
    year: "2023",
    side: "right",
    image: Developing,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et delectus fugiat soluta illo error! Qui.",
    issuer: "Coursera",
    year: "2023",
    side: "left",
    image: "/images/certificate1.png",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et delectus fugiat soluta illo error! Qui.",
    issuer: "Coursera",
    year: "2023",
    side: "right",
    image: "/images/certificate1.png",
  },
];

export default function Certificates() {
  const theme = useTheme();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: 5 }}>
      <Box
        id="certificates"
        sx={{
          position: "relative",
          background: theme.palette.background.sectionA,
          padding: "100px 20px",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "100px",
            bottom: 0,
            left: { md: "50%", xs: "37px" },
            width: "4px",
            backgroundColor: "#ddd",
            transform: { xs: "none", md: "translateX(-50%)" },
            zIndex: 1,
          }}
        />

        <Typography
          variant="h4"
          component="h2"
          sx={{
            position: "absolute",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Certificates
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {cards.map((card) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.3,
            });

            const variant = card.side === "left" ? cardFromLeft : cardFromRight;

            return (
              <Box
                key={card.id}
                sx={{
                  display: "flex",
                  justifyContent:
                    card.side === "left" ? "flex-start" : "flex-end",
                  position: "relative",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: theme.palette.icon.main,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "4px solid #f5f5f5",
                    fontWeight: "bold",
                    zIndex: 2,
                    flexShrink: 0,
                    cursor: "default",
                    order: { xs: 0, md: card.side === "left" ? 2 : 0 },
                  }}
                >
                  {card.id}
                </Box>

                <motion.div
                  ref={ref}
                  variants={variant}
                  initial="initial"
                  animate={inView ? "animate" : "initial"}
                  style={{
                    width: isMobile ? "calc(100% - 60px)" : "calc(50% - 40px)",
                    alignSelf: card.side === "left" ? "flex-start" : "flex-end",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      background: "#fff",
                      padding: "24px",
                      borderRadius: "12px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      border: "1px solid #e0e0e0",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setSelectedCardId(
                        selectedCardId === card.id ? null : card.id
                      )
                    }
                  >
                    <Typography variant="h6" component="h3">
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {card.issuer} - {card.year}
                    </Typography>
                    {selectedCardId === card.id && (
                      <Box sx={{ mt: 2 }}>
                        <img
                          src={card.image}
                          alt={`Certificate ${card.id}`}
                          style={{
                            height: "500px",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </motion.div>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

// MUI
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@emotion/react";

// Icon
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const theme = useTheme();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { md: 30, xs: 5 },
          right: { md: 30, xs: 5 },
          background: theme.palette.icon.main,
          transition: "all 0.4s ease",
          "&:hover": {
            background: "#5d44aaff",
          },
        }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

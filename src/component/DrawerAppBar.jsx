// Framer Motion
import { motion } from "framer-motion";
import { fadeInLeft } from "../animations/variants";

// React
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// MUI
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Certificates",
  "Skills",
  "Project",
  "Contact",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    setActiveItem("home");
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "#242629", minHeight: "100vh" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component="span"
          sx={{ color: theme.palette.icon.main, fontSize: "30px" }}
        >
          Port
        </Box>{" "}
        folio
      </Typography>
      <Divider sx={{ background: "#5c5c5cff" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active-link"
              onClick={() => setMobileOpen(false)}
              onSetActive={(id) => setActiveItem(id)}
              style={{
                width: "100%",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItemButton
                className={`drawer-item ${
                  activeItem === item.toLowerCase() ? "active-link" : ""
                }`}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: theme.palette.background.sectionA,
        }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          transition={fadeInLeft.transition}
          variants={fadeInLeft}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontWeight: "bold",
              }}
            >
              <Box
                component="span"
                sx={{ color: theme.palette.icon.main, fontSize: "30px" }}
              >
                Port
              </Box>{" "}
              folio
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  activeClass="active-link"
                  onSetActive={(id) => setActiveItem(id)}
                >
                  <Button
                    className={`nav-item ${
                      activeItem === item.toLowerCase() ? "active-link" : ""
                    }`}
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </motion.div>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

import { useState } from "react";
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

//icons
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-scroll";
//i18n
import { useTranslation } from "react-i18next";

const Navbar = ({ mode, setMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lng, setLng] = useState("zh");

  //mode change
  const handleClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    setLng(lng === "zh" ? "en" : "zh");
    i18n.changeLanguage(lng);
  };

  const drawerWidth = 240;
  const navItems = [
    { link: "home", title: t("home") },
    { link: "about", title: t("about") },
    { link: "projects", title: t("projects") },
    { link: "contact", title: t("contact") },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ZOE WANG
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            to={item.link}
            spy={true}
            smooth={true}
            //offset={-50}
            duration={500}
          >
            <ListItem key={item.link} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={handleDrawerToggle}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    variant: "button",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="default" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                //offset={-50}
                duration={500}
              >
                <Button
                  key={item.link}
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton sx={{ ml: 1 }} color="inherit">
            <TranslateIcon onClick={changeLanguage} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
};

export default Navbar;
